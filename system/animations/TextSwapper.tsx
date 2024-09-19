import styles from '@system/animations/TextSwapper.module.scss'
import { useState, useEffect } from 'react'

type AnimationType = 'slideUp'
type AnimationStyle = { animation: string; animationFillMode: string };

type TextSwapperProps = {
    style?: React.CSSProperties
    text: string[]
    interval?: number
    animationType?: AnimationType
    //CSS properties need to be a string
    animationDuration?: string
 
}

const buildAnimationStyle = (animationType: AnimationType, animationDuration: string) => {
    return {
        animation: `${animationType} ${animationDuration} linear infinite`,
        animationFillMode: 'forwards'
    }
}

export default function TextSwapper({style, text, interval=2400, animationType='slideUp', animationDuration='2.4s'}: TextSwapperProps) {
    const defaultStyle: AnimationStyle = buildAnimationStyle(animationType, animationDuration)

    const [currString, setCurrString] = useState(text[0])
    const [animationStyle, setAnimationStyle] = useState(defaultStyle);

    useEffect(() => {
        const timer = setInterval(() => {
            const currIndex: number = text.indexOf(currString);
            const nextIndex: number = currIndex < text.length - 1 ? currIndex + 1 : 0;
            setCurrString(text[nextIndex])
        }, interval)
        return () => {
            setAnimationStyle({} as AnimationStyle); // Reset animation
            clearInterval(timer);
            setAnimationStyle(defaultStyle); // Re-apply animation
        }
    }, [currString, text, interval]); // Remove defaultStyle from dependencies

    return (
        <span className={styles.root} style={style}>
            <span className={styles.animation} key={currString} style={animationStyle}>{currString}</span>
        </span>
    )
    
}
