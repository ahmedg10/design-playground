import { motion } from 'framer-motion'
import styles from '@components/ListAnimation/ListAnimation.module.scss'
import FeatureTitle from '@components/ListAnimation/FeatureText/FeatureTitle'
import { DocumentCard, ChatCard, PersonalityCard, ToneCard, PeopleCard} from '@components/ListAnimation/CardTemplate'
import React from 'react'
const features = [
    {
        title: 'Use Almost Any Document to Create a Podcast',
        id: 'feature-1',
        card: DocumentCard
    },
    {
        title: 'Chat with the podcast',
        id: 'feature-2',
        card: ChatCard
    },
    {
        title: 'Adjust the tone of your podcaster',
        id: 'feature-3',
        card: ToneCard
    },
    {
        title: 'Adjust amount of people talking',
        id: 'feature-4',
        card: PeopleCard  
    },
    {
        title: 'Change the personality of your podcaster',
        id: 'feature-5',
        card: PersonalityCard
    },
]

export default function ListAnimation(): JSX.Element {
    return (
        <div className={styles.root}>
            <div className={styles.listWrapper}>
                <ul>
                    {features.map((feature) => (
                        <li key={feature.id}>
                            <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.parentCardWrapper}>
            <div className={styles.cardWrapper}>
                    {features.map((feature, index) => (
                    <feature.card id={feature.id} />

                    ))}
                </div>
                </div>

            </div> 
    )

}
