import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import useMovies from "@/hooks/useMovies";
import MoviesPage from ".";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

jest.mock("../../hooks/useMovies");

describe("Movies Page Spec", () => {
  it("handles the error", () => {
    // Arrange
    (useMovies as jest.Mock).mockReturnValue({
      error: {
        response: {
          status: 404,
          data: "an error",
        },
      },
      isError: true,
    });

    // Act
    // TODO: Get testing-library render going
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MoviesPage />
      </QueryClientProvider>
    );

    // Assert
    expect(getByTestId("movie-page-error")).toHaveTextContent(
      "Status Code: 404 occurred with the following message;an error"
    );
  });
});
