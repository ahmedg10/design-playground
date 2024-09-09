import styles from '@system/layouts/GridLayout.module.scss';

import * as React from 'react';

export default function GridLayout(props : any ) {
  return (
    <div className={styles.root} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
}