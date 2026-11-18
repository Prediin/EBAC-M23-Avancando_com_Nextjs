import { filmes } from "@/lib/filmes";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";

type Props = {
    params: Promise<{ id: string }>;
};

// Os filmes cadastrados já são conhecidos: gerar essas rotas evita
// o acesso a parâmetros desconhecidos durante o pré-render do Next.js.
export function generateStaticParams() {
    return filmes.map((filme) => ({ id: String(filme.id) }));
}

const DetalheFilme = async ({ params }: Props) => {
    const { id } = await params;
    const details = filmes.find((filme) => String(filme.id) === id);

    if (!details) {
        notFound();
    }

    const { title, imagem, description } = details;

    return (
        <div className={styles.detalhes}>
            <Link href="/" className={styles.detalhes_voltar}>Voltar</Link>
            <div className={styles.detalhes_container}>
                <figure>
                    <Image
                        className={styles.detalhes__image}
                        src={imagem}
                        alt={`Pôster do filme: ${title}`}
                        width={300}
                        height={400}
                        unoptimized
                    />
                </figure>
                <article className={styles.detalhes_info}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
            </div>
        </div>
    );
};

export default DetalheFilme;
