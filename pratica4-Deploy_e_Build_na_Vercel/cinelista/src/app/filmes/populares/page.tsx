import { Suspense } from "react";
import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies } from "@/lib/api/tmdb";

async function FilmesPopularesLista() {
    const filmes = await getPopularMovies();
    return <Grid filmes={filmes} />;
}

const FilmesPopulares = () => {
    return (
        <>
            <Title title="Filmes Populares" />
            <Suspense fallback={<p>Carregando filmes...</p>}>
                <FilmesPopularesLista />
            </Suspense>
        </>
    );
};

export default FilmesPopulares;
