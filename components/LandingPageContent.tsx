import React from 'react'
import styles from '@components/LandingPageContent.module.scss'
import Hero from '@components/Hero'
import { H1 } from '@system/typography'
import BlobCursor from '@system/animations/BlobCursor'
export default function LandingPageContent(): JSX.Element {
    return (
        <div className={styles.root}>
            <BlobCursor/>
            <div className={styles.row}>
                <div className={styles.contentCentered}>
                    <Hero className="hero-element" />
                </div>
            </div>
        </div> 
    )
}