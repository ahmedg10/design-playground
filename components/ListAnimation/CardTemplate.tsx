import styles from "@components/ListAnimation/CardTemplate.module.scss"
import BookImage from "../../public/ascii-book.png"
import ToneImage from "../../public/ear.webp"
import Image from "next/image"
import { motion } from "framer-motion"
import ChatImage from "../../public/chat.png"
import PeopleImage from "../../public/people.png"
import PersonalityImage from "../../public/personality.png"
import { useFeatureStore } from "@common/state"
import React, { useState } from 'react'

type featureCardProps = {
    color: string,
    featureNumber: number,
    title: string,
    imageSrc: any,
    descriptionTitle: string,
    descriptionText: string
} & CardProps

type CardProps = {
    id: string
}

const CardTemplate = function CardTemplate({
    id,
    color,
    featureNumber,
    title,
    imageSrc,
    descriptionTitle,
    descriptionText
}: featureCardProps) {

    const inViewFeature = useFeatureStore(state => state.inViewFeature)
    const [isHovered, setIsHovered] = useState(false)

    return (
    <div className={styles.cardContainer}>
        <div 
            className={`${styles.card} ${styles[color]} ${inViewFeature === id ? styles.highlight : styles.transparent}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`${styles.cardTitle} ${styles.noscale}`}>
                <div className={`${styles.feature} ${styles.noscale}`}>
                    {featureNumber}
                </div>
                <div className={`${styles.featureName} ${styles.noscale}`}>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className={styles.asciiImage}>
                <Image src={imageSrc} alt={title} width={200} height={200} />
            </div>
            <motion.div 
                className={`${styles.cardDescriptionButton} ${styles.noscale}`}
                initial={{ height: "10%" }}
                animate={{ height: isHovered ? "40%" : "10%" }}
                transition={{duration: 0.2 }}
            >
                <div className={styles.description}>
                    <div className={styles.descriptionTitle}>
                        {descriptionTitle}
                    </div>
                    <div className={styles.descriptionText}>
                        {descriptionText}
                    </div>                
                </div>
            </motion.div>
        </div>
    </div>
    );
}

export const DocumentCard = ({id, color="blue"}: CardProps & {color?: string}) => {
    return (
        <CardTemplate 
            id={id}
            color={color}
            featureNumber={1}
            title="Use Any Document"
            imageSrc={BookImage}
            descriptionTitle="Learn More About This Feature"
            descriptionText="Our platform now supports PDFs, text, and markdown files, making document uploads simple. PowerPoint support is coming soon, expanding your options even further."
        />
    );
}

export const ChatCard = React.memo(({id, color="green"}: CardProps & {color?: string}) => {
    return (
        <CardTemplate 
            id={id}
            color={color}
            featureNumber={2} 
            title="Chat With Your Podcast" 
            imageSrc={ChatImage} 
            descriptionTitle="Learn More About This Feature"
        descriptionText="We are building both a chat interface, and live response podcast update features, allowing you to chat with your podcast in real time. As you listen, you can ask questions." />
    );
})

export const ToneCard = React.memo(({id, color="pink"}: CardProps & {color?: string}) => {
    return (
        <CardTemplate 
            id={id}
            color={color}  
            featureNumber={3} 
            title="Adjust The Tone" 
            imageSrc={ToneImage} 
            descriptionTitle="Learn More About This Feature"
        descriptionText=", you can easily adjust the tone of your content to match your needs. Whether you want a formal, casual, humorous, or authoritative voice. You can tailor your messages to different audiences and contexts, ensuring your content always fits the situation." />
    );
})


export const PeopleCard = React.memo(({id, color="purple"}: CardProps & {color?: string}) => {
    return (
        <CardTemplate 
            id={id}
            color={color}
            featureNumber={4} 
            title="People" 
            imageSrc={PeopleImage} 
            descriptionTitle="Learn More About This Feature"
        descriptionText="You can decide amount of people in your podcast, and the AI will adjust to the number of people speaking." />
    );
})

export const PersonalityCard = React.memo(({id, color="yellow"}: CardProps & {color?: string}) => {
    return (
        <CardTemplate 
            id="feature-5"
            color={color}
            featureNumber={5} 
            title="Personality" 
            imageSrc={PersonalityImage} 
            descriptionTitle="Learn More About This Feature"
        descriptionText="You can choose the personality of the AI, and it will adjust its responses to match the personality you choose." />
    );
})

export { CardTemplate }
