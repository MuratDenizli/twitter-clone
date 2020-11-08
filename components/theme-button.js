import React from 'react'
import cn from 'classnames'
import Button from './button'
import styles from './theme-button.module.css'

function ThemeButton({ className, children, ...props }) {
  return (
    <Button className={cn(styles.button, className)} {...props}>
      {children}
    </Button>
  )
}

export default ThemeButton
