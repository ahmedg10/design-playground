import styles from '@system/Tag.module.scss';

export default function Tag(props: any) {
  return <span className={styles.root}>{props.children}</span>;
}
