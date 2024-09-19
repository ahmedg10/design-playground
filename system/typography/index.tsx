import styles from '@system/typography/Typography.module.scss'

export function H1(props: any) {
    return (
        <h1 className={styles.h1}>
            {props.children}
        </h1>
    )
}

export function H2(props: any) {
    return (
        <h2 className={styles.h2}>
            {props.children}
        </h2>
    )
}

export function H3(props: any) {
    return (
        <h3 className={styles.h3}>
            {props.children}
        </h3>
        )
}

export function H4(props: any) {
    return (
        <h4 className={styles.h4}>
            {props.children}
        </h4>
    )
}

export function H5(props: any) {
    return (
        <h5 className={styles.h5}>
            {props.children}
        </h5>
    )
}

export function Lead(props: any) {
    return (
        <p className={styles.lead}>
            {props.children}
        </p>
    )
}

export function SubLead(props: any) {
    return (
        <p className={styles.subLead}>
            {props.children}
        </p>
    )
}  

export function Title(props: any) {
    return (
        <p className={styles.title}>
            {props.children}
        </p>
    )
}

export function P(props: any) {
    return (
        <p className={styles.p}>
            {props.children}
        </p>
    )
}   

export function Text(props: any) {
    return (
        <p className={styles.text}>
            {props.children}
        </p>
    )
}

export function subTitle(props:any){
    return(
        <p className={styles.subTitle}>
            {props.children}
        </p>
    )
}

export function subText(props:any){
    return(
        <p className={styles.subText}>
            {props.children}
        </p>
    )
}

export function UnitLabel(props:any){
    return(
        <p className={styles.unitLabel}>
            {props.children}
        </p>
    )
}   