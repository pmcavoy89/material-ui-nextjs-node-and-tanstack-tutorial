import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";
import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import MoviesPage from ".";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock("axios");

// TODO: Clean up code
describe("Movies Page Spec", () => {
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
        <MoviesPage />
      </QueryClientProvider>
    );

    // Assert
    expect(getByTestId("loading-movies")).toBeInTheDocument();

    await waitFor(() => {
      expect(getByTestId("movies-page-error")).toHaveTextContent(
        "Error Status Code: 404 Error Message: Not Found"
      );
    });
  });

  it("handles the fetching the movies", async () => {
    // Arrange
    const config = {
      headers: new AxiosHeaders(),
    };
    const axiosResponseMock: AxiosResponse = {
      data: {
        movies: [
          {
            title: "The Shawshank Redemption",
            year: 1994,
            runningTime: "2h 22m",
            rating: "R",
            id: 1,
          },
        ],
        page: 1,
      }, // Simulated response data
      status: 200, // Simulated status code
      statusText: "OK", // Simulated status text
      headers: { "Content-Type": "application/json" }, // Simulated response headers
      config,
      request: {}, // Simulated request object
    };

    (axios.get as jest.Mock).mockResolvedValue(axiosResponseMock);

    // Act
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MoviesPage />
      </QueryClientProvider>
    );

    // Assert
    expect(getByTestId("loading-movies")).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText("The Shawshank Redemption")).toBeInTheDocument();
    });
  });
});
