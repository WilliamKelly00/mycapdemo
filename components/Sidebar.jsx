import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import React from 'react'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#242424'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#242424',
      padding: '2em 1.5em 0',
      fontSize: '2.25em'
    },
    bmMorphShape: {
      fill: '#242424'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export default function Sidebar() {
    return (
        <Menu styles={styles}>
        <Link href="/profile">
            <a className="menu-item" href="/profile">Profile</a>
        </Link>
        <br></br>
        <Link href="/topics">
            <a className="menu-item" href="/topics">Topics</a>
        </Link>
        <br></br>
        <Link href="/signin">
            <a className="menu-item" href="/signin">Sign In</a>
        </Link>
        <br></br>
        <Link href="/signup">
            <a className="menu-item" href="/signup">Sign Up</a>
        </Link>
        </Menu>
      );
}
