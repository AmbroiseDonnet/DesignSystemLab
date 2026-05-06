import React from 'react';
import styles from './GridElement.module.scss';

export type GridElementProps = {
    colSpan?: number;
    rowSpan?: number;
    children?: React.ReactNode;
}

export default function GridElement({ colSpan = 1, rowSpan = 1, children }: GridElementProps) {
    return (
        <div
            className={styles.gridElement}
            style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
            }}
        >
            {children}
        </div>
    );
}
