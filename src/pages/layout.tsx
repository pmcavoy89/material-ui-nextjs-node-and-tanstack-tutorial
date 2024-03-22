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
        <Box padding={4}>
          <Paper variant="outlined">{children}</Paper>
        </Box>
      </main>
    </>
  );
}
