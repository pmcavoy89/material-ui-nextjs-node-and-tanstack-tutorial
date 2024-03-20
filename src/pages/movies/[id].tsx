import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function Page() {
  const { query } = useRouter();
  const { data, error, isError, isFetching, isPending } = useQuery({
    queryKey: ["movies", query.id],
    queryFn: async ({ queryKey }) => {
      const [_, id] = queryKey;
      const { data } = await axios.get(`/api/movies/${id}`);

      return data;
    },
    enabled: !!query.id,
  });

  if (isFetching || isPending) return <>Is loading</>;
  if (isError) return <>Error</>;
  return (
    <>
      <Typography variant="h2" gutterBottom textAlign="center">
        {data?.title}
      </Typography>
      <Typography variant="h6" textAlign="center">
        Director: {data?.director}
      </Typography>
    </>
  );
}
