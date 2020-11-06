import React from 'react'
import styles from './title-bold.module.css'

function TitleBold({ children }) {
  return <h2 className={styles.TitleBold}>{children}</h2>
}

export default TitleBold
