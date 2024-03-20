import NavBar from "@/components/NavBar";
import { Box, Paper } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>
        <Box paddingLeft={4} paddingRight={4}>
          <Paper variant="outlined">{children}</Paper>
        </Box>
      </main>
    </>
  );
}
