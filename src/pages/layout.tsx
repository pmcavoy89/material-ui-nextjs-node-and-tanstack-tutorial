import NavBar from "@/components/NavBar";
import { Box, Paper } from "@mui/material";

export default function RootLayout({
  children,
  handleDarkMode,
  isDarkMode,
}: {
  children: React.ReactNode;
  handleDarkMode: any;
  isDarkMode: boolean;
}) {
  return (
    <>
      <NavBar handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Box
          px={{ xs: 2, sm: 5, md: 10, lg: 10 }}
          paddingTop={10}
          paddingBottom={5}
        >
          <Paper variant="outlined">{children}</Paper>
        </Box>
      </main>
    </>
  );
}
