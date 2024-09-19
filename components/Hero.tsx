import React from 'react';
import styles from '@components/Hero.module.scss'
import { Title , subTitle, H1 , H3} from '@system/typography'
import TextSwapper from '@system/animations/TextSwapper'

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps): JSX.Element {
    return (
            <div className={`${styles.content} ${className}`}>
                <div className={styles.Title}>Create a Podcast From</div>
                <div className={styles.tagLine}>
                    <span className={styles.yourText}>Your</span>
                    <div className={styles.swapperContainer}>
                        <TextSwapper text={['News Letters', 'Lecture Notes', 'Blog Posts', 'Research Papers']} />
                    </div>
                </div>
            </div>

    );
}