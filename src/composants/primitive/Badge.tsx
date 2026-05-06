import styles from './Badge.module.scss';

type BadgeProps = {
    badgeType?: 'accent' | 'success' | 'danger' | 'warning' | 'neutral';
    children?: React.ReactNode;
}

export default function Badge({ badgeType, children }: BadgeProps) {
    const badgeClass = badgeType ? `badge${badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}` : 'badgeAccent';

    return (
        <div className={`${styles.badge} ${styles[badgeClass]}`}>
            {children || "Badge"}
        </div>
    )
}
