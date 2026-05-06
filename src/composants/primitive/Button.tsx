import styles from './Button.module.scss';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Button(props: ButtonProps) {

    const variantClass = props.variant ? `btn-${props.variant}` : 'btn-primary';
    const sizeClass = props.size ? `btn-${props.size}` : 'btn-md';

    return (
        <button className={`${styles.btn} ${styles[variantClass]} ${styles[sizeClass]}`} disabled={props.isDisabled} onClick={props.onClick}>
            {props.children || "Button"}
        </button>
    )
}
