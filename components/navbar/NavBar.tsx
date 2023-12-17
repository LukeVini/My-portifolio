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
        <ul className={styles.ul}>
          <Link className={styles.link} href={'/contato'}>Contato</Link>
          <Link className={styles.link} href={'/sobremim'}>Sobre Mim</Link>
          <Link className={styles.link} href={'/projetos'}>Projetos</Link>
          <Link className={styles.link} href={'/'}>Página Principal</Link>
        </ul>
      </nav>
  )
}
