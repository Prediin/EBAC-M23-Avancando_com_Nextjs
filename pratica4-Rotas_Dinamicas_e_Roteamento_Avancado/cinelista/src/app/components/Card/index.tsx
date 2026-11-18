import type { Filme } from "@/types/types"
import styles from "./Card.module.css"
import Link from "next/link"
import Image from "next/image"

type Props = {
    filme : Filme
}

const Card = ({filme} : Props) => {
    const {id, title, imagem, description} = filme;

    return (
        <div className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <Image className={styles.card__poster} src={imagem} alt={`Pôster do filme ${title}`} width={300} height={400} unoptimized />
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__description}>{description}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
