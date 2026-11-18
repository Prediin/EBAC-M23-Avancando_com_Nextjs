import { Suspense } from "react";
import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTopMovies } from "@/lib/api/tmdb";

async function TopFilmesLista() {
    const filmes = await getTopMovies();
    return <Grid filmes={filmes} />;
}

const TopFilmes = () => {
    return (
        <>
            <Title title="Top Filmes" />
            <Suspense fallback={<p>Carregando filmes...</p>}>
                <TopFilmesLista />
            </Suspense>
        </>
    );
};

export default TopFilmes;