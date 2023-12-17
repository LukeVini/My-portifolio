import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main className={styles.main}>
      <h1>Sobre mim</h1>
      <section className={styles.imageContainer}>
        <Image className={styles.imageContainer} src={'/images/eu.jpg'} alt='eu' fill style={{objectFit: "cover", borderRadius: "12px"}} />
      </section>
      <section className={styles.textContainer}>
        <p>Meu nome é <b>Lucas Vinicius</b>, tenho 18 anos, nasci em Contagem, MG. Torço pro Atlético MIneiro, e minha Stack favorita é NextJs, React e Sass.</p>
        <p>Atualmente, estou terminando o ensino médio, e pretendo fazer faculdade de Arquitetura, porém no meu tempo livre, gosto de programar e ajudar na produção de vídeos para o Youtube</p>
        <p>Minha Experiência:</p>
        <ul className={styles.ulContainer}>
          <li>Expeditor de Documentos - <Link className={styles.link} href='https://alinhartransportes.com.br/'>Alinhar Transportes</Link></li>
          <li>Recepcionista - <Link className={styles.link} href='https://www.instagram.com/fisiconfisio/'>Fisicon Fisioterapia</Link></li>
          <li>Desenvolvedor Web - <Link className={styles.link} href='https://www.instagram.com/senaictti/'>Senai Centro</Link></li>
          <li>Auxiliar na produção de vídeos - <Link className={styles.link} href='https://www.youtube.com/@Vittozao'>Vitto</Link></li>
        </ul>
      </section>
      
    </main>
  )
}
