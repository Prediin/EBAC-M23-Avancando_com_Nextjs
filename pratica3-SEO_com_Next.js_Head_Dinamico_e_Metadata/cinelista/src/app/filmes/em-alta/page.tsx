import { Suspense } from "react";
import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTrendingMovies } from "@/lib/api/tmdb";

async function FilmesEmAltaLista() {
    const filmes = await getTrendingMovies();
    return <Grid filmes={filmes} />;
}

const FilmesEmAlta = () => {
    return (
        <>
            <Title title="Filmes em Alta" />
            <Suspense fallback={<p>Carregando filmes...</p>}>
                <FilmesEmAltaLista />
            </Suspense>
        </>
    );
};

export default FilmesEmAlta;