import styles from '@components/ListAnimation/FeatureText/FeatureTitle.module.scss'
import { useRef, useEffect } from 'react'
import { useInView, motion } from 'framer-motion'
import { useFeatureStore } from '@common/state'

type Props = {
    children: React.ReactNode;
    id: string;
}

export default function FeatureTitle({children, id } : Props): JSX.Element {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})
    const inViewFeature = useFeatureStore(state => state.inViewFeature)
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
    useEffect(() => {
        if(isInView){
            setInViewFeature(id)
        }
        if(!isInView && inViewFeature === id){
            setInViewFeature(null)
        }
    }, [isInView, id, setInViewFeature, inViewFeature])

    return (
        <div
            ref={ref}
            className={`${styles.listItem} ${styles.transitionColors} ${isInView ? styles.highlight : ""}`}
        >
            {children}
        </div>
    )
}
