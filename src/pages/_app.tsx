import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { theme } from "@/utils";
import RootLayout from "./layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState(true);
  const componentLayout = Component.layout ?? ((page: any) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme(theme({ isDarkMode }))}>
        <RootLayout handleDarkMode={setDarkMode} isDarkMode={isDarkMode}>
          {componentLayout(<Component {...pageProps} />)}
        </RootLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
