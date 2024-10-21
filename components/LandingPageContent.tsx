import React from 'react'
import styles from '@components/LandingPageContent.module.scss'
import Hero from '@components/Hero'
import { H1 } from '@system/typography'
import BlobCursor from '@system/animations/BlobCursor'
import ActionButton from '@system/buttons/ActionButton'
import GravityCursor from '@system/animations/GravityCursor'
import Image from 'next/image'
import { motion } from 'framer-motion'
import EmailInput from '@components/EmailBox'
import NavLandingPage from '@components/NavLandingPage'
import ListAnimation from '@components/ListAnimation/ListAnimation'


export default function LandingPageContent(): JSX.Element {
    return (
        <main>
        <NavLandingPage />
        <div className={styles.root}>
           <GravityCursor/>
           <div className={styles.logo}>
             {/* ... existing logo SVG ... */}
           </div>
           <div className={styles.row}>
                <div className={styles.contentCentered}>
                    <Hero className="hero-element" />
                </div>
            </div>
            <EmailInput />
            <ListAnimation />
        </div> 
        </main>
    )
}
