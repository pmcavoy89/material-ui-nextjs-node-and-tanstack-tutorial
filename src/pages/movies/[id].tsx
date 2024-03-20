import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

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
      <p>Selected Movie: {data?.title}</p>
      <p>{data?.director}</p>
    </>
  );
}
