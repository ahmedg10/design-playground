import styles from '@system/Table.module.scss'
import * as Utilities from '@common/utilities'
import * as React from 'react'

/**
 * Generates a CSS grid template string for auto sizing columns
 *
 * @param column_count - the number of columns that will be added to a grid 
 * @returns A string representing the grid-template-columns: auto auto auto
 */
function generateAutoGridSizing(column_count: number): string {
    if (column_count <= 0) {
        return '';
    }

    const create_array = new Array(column_count).fill('auto');
    return create_array.join(' ')
}

/**
 * Generate a table component. 
 * 
 * @param props - The properties for the Table component
 * @param props.isInteractive - Indicates if the table is interactive
 * @param props.headings - An array of headings for the table
 * @param props.customWidth
 */
export default function Table(props: any) {
    let gridColumnTemplate = props.isInteractive ? `40px ${generateAutoGridSizing(props.headings.length - 1)} repeat(1, 1fr)` : `${generateAutoGridSizing(props.headings.length - 1)} repeat(1,1fr)`

    if (!Utilities.isEmpty(props.customWidths)) {
        gridColumnTemplate = props.customWidth
    }

    const headings = props.headings && props.headings.length ? props.headings : ['Empty']

    return (
        // Main Table element with a grid template column
        <div className={styles.tableContainer}>
            <div className={styles.table} style={{ gridColumnTemplate, ...props.style }}>
                {/* Table Header */}
                <div className={styles.header}>
                    {props.isInteractive ? <div className={styles.cell} role="columnheader"></div> : null}
                    {headings.map((each: string | number, index: number) => (
                        <div className={styles.cell} role="columnheader" key={index}>
                            {each}
                        </div>
                    ))}
                </div>

                <div className={styles.body}>
                    {props.data && props.data.length ? (
                        props.data.map((each: any, index: number) => {
                            const value = props.value && props.value.includes(`${each.id}`);
                            const backgroundColor = value ? `var(--theme-foreground)` : undefined;

                            return (
                                <div className={styles.row} key={`index-${each.id ? each.id : index}`} style={{ backgroundColor, gridTemplateColumns: gridColumnTemplate }}>
                                    {props.isInteractive ? <div className={styles.cell}></div> : null}
                                    {each.data.map((col: any, index: number) => (
                                        <div className={styles.cell} key={index}>{col}</div>
                                    ))}
                                </div>
                            );
                        })
                    ) : (
                        <div className={styles.row} style={{ gridTemplateColumns: gridColumnTemplate }}>
                            {props.isInteractive ? <div className={styles.empty}></div> : null}
                            <div className={styles.empty}>
                                This Table is Empty.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}