import React from 'react'

import styles from './style.module.css'
import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../button/icon'
import { Close } from '../icons'
import Stack from '../stack'

function TweetModal({ onModalClose = () => {}, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')
  const onSubmit = () => {
    alert(tweet)
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="Ne düşünüyorsun"
              value={tweet}
              onChange={(e) => tweetSet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
