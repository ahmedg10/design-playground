import React from 'react'
import styles from '@system/buttons/ActionButton.module.scss'

interface ActionButtonProps {
    children: React.ReactNode
    isHoverable?: boolean
    href?: string
    styles?: React.CSSProperties
    onClick?: () => void

}

export default function ActionButton({ children, ...props }: ActionButtonProps): JSX.Element {
    
    if(props.href) {
        return (
            <a className={styles.root} {...props}>
                {children}
            </a>
        )
    }
    
    return (
        <button className={styles.root} {...props}>
            {children}
        </button>
    )
}
