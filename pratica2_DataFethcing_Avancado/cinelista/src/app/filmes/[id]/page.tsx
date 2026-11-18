import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";
import { getMoviesDetails } from "@/lib/api/tmdb";

type Props = {
    params: Promise<{ id: string }>;
};

async function DetalheFilmeContent({ params }: Props) {
    const { id } = await params;
    const movieId = Number(id);

    if (!Number.isInteger(movieId) || movieId <= 0) {
        notFound();
    }

    const details = await getMoviesDetails(movieId);

    if (!details) {
        notFound();
    }

    const { title, poster_path, overview } = details;

    return (
        <div className={styles.detalhes}>
            <Link href="/" className={styles.detalhes_voltar}>Voltar</Link>
            <div className={styles.detalhes_container}>
                <figure>
                    <Image
                        className={styles.detalhes__image}
                        src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                        alt={`Pôster do filme: ${title}`}
                        width={300}
                        height={400}
                        unoptimized
                    />
                </figure>
                <article className={styles.detalhes_info}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </article>
            </div>
        </div>
    );
}

export default function DetalheFilme({ params }: Props) {
    return (
        <Suspense fallback={<p>Carregando detalhes do filme...</p>}>
            <DetalheFilmeContent params={params} />
        </Suspense>
    );
}
