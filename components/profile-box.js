import React from 'react'
import cn from 'classnames'
import Photo from '../components/photo'
import Button from '../components/button'
import styles from './profile-box.module.css'
import { ArrowBottom } from './icons'
import TextBody from '../components/text-body'

function ProfileBox({ name = 'Murat Denizli', slug = 'muratdenizli29' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold={true}>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon} />
    </Button>
  )
}

export default ProfileBox
