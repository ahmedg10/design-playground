'use client'

import styles from '@system/Navigation.module.scss'
import * as Utilities from '@common/utilities'

import * as React from 'react'

export default function Navigation() {
    return (
        <nav className={styles.root}>
            <section className={styles.left}>
                <a href="/" className={styles.item}>
                Pods
                </a>
            </section>
            <section className={styles.stretch}>
                <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
                    Theme
                </span>
                <span className={styles.item}>
                    About Us
                </span>
            </section>
            <section className={styles.right}>
                <span className={styles.item}>Random Button</span>
            </section>
        </nav>    
        
    )
}