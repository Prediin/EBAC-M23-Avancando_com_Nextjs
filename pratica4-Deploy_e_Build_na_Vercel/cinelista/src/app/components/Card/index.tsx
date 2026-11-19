import type { Filme } from "@/types/types"
import styles from "./Card.module.css"
import Link from "next/link"
import Image from "next/image"

type Props = {
    filme : Filme
}

const Card = ({filme} : Props) => {
    const {id, title, poster_path, overview, vote_arrange} = filme;
    const resume = overview?.length >= 256 ? `${overview?.substring(0,253)}...` : overview;

    return (
        <div className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <Image className={styles.card__poster}
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                alt={`Pôster do filme ${title}`} width={300} height={300} unoptimized />
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__description}>{resume}</p>
                    <p className={styles.card__description}>Nota: {vote_arrange}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
