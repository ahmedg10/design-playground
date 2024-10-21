import { motion } from 'framer-motion'
import styles from '@components/ListAnimation/ListAnimation.module.scss'
import FeatureTitle from '@components/ListAnimation/FeatureText/FeatureTitle'
import { DocumentCard, ChatCard, PersonalityCard, ToneCard, PeopleCard} from '@components/ListAnimation/CardTemplate'
import React from 'react'
const features = [
    {
        title: 'Use Almost Any Document to Create a Podcast',
        id: 'feature-1',
        card: <DocumentCard id="feature-1" />
    },
    {
        title: 'Chat with the podcast',
        id: 'feature-2',
        card: <ChatCard id="feature-2" />
    },
    {
        title: 'Adjust the tone of your podcaster',
        id: 'feature-3',
        card: <ToneCard id="feature-3" />
    },
    {
        title: 'Adjust amount of people talking',
        id: 'feature-4',
        card: <PeopleCard id="feature-4" />    
    },
    {
        title: 'Change the personality of your podcaster',
        id: 'feature-5',
        card: <PersonalityCard id="feature-5" />
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
                <DocumentCard id="feature-1" />
                <ChatCard id="feature-2" />
                <ToneCard id="feature-3" />
                <PeopleCard id="feature-4" />
                <PersonalityCard id="feature-5" />
            </div>

            </div>
    )

}