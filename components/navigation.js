import React from 'react'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

const MENU = [{ key: 'home', icon: <Home />, title: 'Home' }]

import styles from './navigation.module.css'

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      {MENU.map((menu) => (
        <NavigationButton selected={selectedKey === 'home'}>
          {menu.icon}
          <TextTitle>{menu.title}</TextTitle>
        </NavigationButton>
      ))}

      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavigationButton>

      <NavigationButton notify={12} selected={selectedKey === 'nofication'}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
