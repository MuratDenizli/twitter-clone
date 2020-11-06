import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
