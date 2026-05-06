import styles from './Button.module.scss';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Button({ variant, size, isDisabled, onClick, children }: ButtonProps) {

    const variantClass = variant ? `btn${variant.charAt(0).toUpperCase() + variant.slice(1)}` : 'btn-primary';
    const sizeClass = size ? `btn${size.charAt(0).toUpperCase() + size.slice(1)}` : 'btn-md';

    return (
        <button className={`${styles.btn} ${styles[variantClass]} ${styles[sizeClass]}`} disabled={isDisabled} onClick={onClick}>
            {children || "Button"}
        </button>
    )
}
