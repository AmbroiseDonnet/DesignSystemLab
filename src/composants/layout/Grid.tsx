import React from 'react';
import styles from './Grid.module.scss';
import GridElement from './GridElement';
import type { GridElementProps } from './GridElement';

type GridProps = {
    cols?: number;
    rows?: number;
    children?: React.ReactNode;
    gap? : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
}

export default function Grid({ cols = 12, rows = 4, children, gap = 'lg' }: GridProps) {
    const validatedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child) || child.type !== GridElement) {
            return child;
        }

        const priority = index + 1;
        const typedChild = child as React.ReactElement<GridElementProps>;
        const props = typedChild.props;
        let colSpan = props.colSpan ?? 1;
        let rowSpan = props.rowSpan ?? 1;
        let corrected = false;

        if (colSpan > cols) {
            colSpan = cols;
            corrected = true;
        }
        if (rowSpan > rows) {
            rowSpan = rows;
            corrected = true;
        }

        if (corrected) {
            console.error(
                `L'elementGrid ${priority} a sa taille de corrigé mais cela ne pourrait pas convenir à la volonté de base. Veuillez vérifié les tailles des composents de la grille`
            );
        }
        return React.cloneElement(typedChild, { colSpan, rowSpan });
    });

    return (
        <div
            className={`${styles.grid} ${styles[`space-${gap}`]}`}
            style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, auto)`,
            }}
        >
            {validatedChildren}
        </div>
    );
}
