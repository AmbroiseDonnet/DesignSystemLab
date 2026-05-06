import styles from './Card.module.scss';


type CardProps = {
    title?: string;
    accent?: boolean;
    children?: React.ReactNode;
}

export default function Card({ title, accent, children }: CardProps) {

    const accentClass = accent ? styles['cardAccent'] : '';

        return (
            <div className={`${styles.card} ${accentClass}`}>
                {title && <h3 className={styles['cardTitle']}>{title}</h3>}
                <div className={styles['cardBody']}>{children}</div>
            </div>
        )
}
