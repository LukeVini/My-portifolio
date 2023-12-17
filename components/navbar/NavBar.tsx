'use client'

import React, { useEffect } from 'react'
import styles from './navBar.module.scss'
import Link from 'next/link';

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      // Perform actions on scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
        <ul>
          <Link href={'/projects'}>Projetos</Link>
        </ul>
      </nav>
  )
}
