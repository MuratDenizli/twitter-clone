import React from 'react'
import cn from 'classnames'
import Photo from '../components/photo'
import styles from './profile-box.module.css'

function ProfileBox({ name = 'Murat Denizli', slug = 'muratdenizli29' }) {
  return (
    <div className={cn([styles.box])}>
      <Photo />
      <div>
        <p>{name}</p>
        <p>@{slug}</p>
      </div>
    </div>
  )
}

export default ProfileBox
