import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import { Home } from '../components/icons'
import TextTtle from '../components/text-title'
import Navigation from '../components/navigation'
import ThemeButton from '../components/theme-button'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <div>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Full
    </ThemeButton>
  </div>
)

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTtle>Home</TextTtle>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
