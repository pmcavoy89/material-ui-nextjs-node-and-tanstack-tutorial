import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";
import axios, { AxiosError, AxiosHeaders } from "axios";
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
        statusText: "Some Text",
        data: "Not Found",
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
    await waitFor(() => {
      expect(getByTestId("movie-page-error")).toHaveTextContent(
        "Status Code: 404 occurred with the following message;Not Found"
      );
    });
  });
});
