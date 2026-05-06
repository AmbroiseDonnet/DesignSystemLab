import styles from './Badge.module.scss';

type BadgeProps = {
    badgeType?: 'accent' | 'success' | 'danger' | 'warning' | 'neutral';
    children?: React.ReactNode;
}

export default function Badge(props: BadgeProps) {
    const badgeClass = props.badgeType ? `badge-${props.badgeType}` : 'badge-info';

    return (
        <div className={`${styles.badge} ${styles[badgeClass]}`}>
            {props.children || "Badge"}
        </div>
    )
}
