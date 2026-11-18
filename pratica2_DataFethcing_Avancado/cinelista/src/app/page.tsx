import { Suspense } from "react";
import Title from "./components/Title";
import Grid from "./components/Grid";
import { getMoviesDetails, getTrendingMovies } from "@/lib/api/tmdb";

async function TrendingMovies() {
  const filmes = await getTrendingMovies();

  return <Grid filmes={filmes} />;
}

export default function Home() {
  return (
    <>
      <Title title="Filmes em destaque" />
      <Suspense fallback={<p>Carregando filmes...</p>}>
        <TrendingMovies />
      </Suspense>
    </>
  );
}
