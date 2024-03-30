import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";
import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import MovieDetailsPage from "./[id]";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const randomId = Math.random();

jest.mock("axios");
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: {
        id: randomId,
      },
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

// TODO: Clean up code
describe("Movie Details Page Spec", () => {
  it("handles the error", async () => {
    // Arrange
    const config = {
      headers: new AxiosHeaders(),
    };
    const axiosErrorMock: AxiosError = {
      name: "AxiosError",
      message: "Simulated error message",
      isAxiosError: true,
      config,
      code: "ERR_CODE",
      toJSON: () => ({}),
      response: {
        status: 404,
        statusText: "Not Found",
        data: undefined,
        headers: {},
        config,
      },
    };
    (axios.get as jest.Mock).mockRejectedValue(axiosErrorMock);

    // Act
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MovieDetailsPage />
      </QueryClientProvider>
    );
    // Assert
    expect(getByTestId("loading-movie-details")).toBeInTheDocument();

    await waitFor(() => {
      expect(getByTestId("movie-details-page-error")).toHaveTextContent(
        "Error Status Code: 404 Error Message: Not Found"
      );
    });
  });

  it("handles the fetching the movie's details", async () => {
    // Arrange
    const config = {
      headers: new AxiosHeaders(),
    };
    const axiosResponseMock: AxiosResponse = {
      data: {
        runningTime: 118,
        year: "2023-04-13",
        title: "Some Movie",
        writers: ["Some Writer"],
        director: ["Some Director"],
        actors: ["Some Actors"],
        posterPath: "/some-poster-path.jpg",
      }, // Simulated response data
      status: 200, // Simulated status code
      statusText: "OK", // Simulated status text
      headers: { "Content-Type": "application/json" }, // Simulated response headers
      config,
      request: {}, // Simulated request object
    };
    (axios.get as jest.Mock).mockResolvedValue(axiosResponseMock);

    // Act
    const { getByTestId, getAllByText } = render(
      <QueryClientProvider client={queryClient}>
        <MovieDetailsPage />
      </QueryClientProvider>
    );

    // Assert
    expect(getByTestId("loading-movie-details")).toBeInTheDocument();

    await waitFor(() => {
      expect(getAllByText("Some Movie")[0]).toBeInTheDocument();
      expect(getAllByText("Some Movie")[1]).toBeInTheDocument();
      // Assert for the other parts of the response to show up
    });
  });
});
