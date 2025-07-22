import React from 'react'
import imagem from './fundo.png'
import styles from './banner.module.css'
import Navbar from '../navbar'


export default function Banner() {
  return (
    <section className={styles.banner}>

      <div className={styles.back}>

          <Navbar />
        
        <h2 className={styles.nome}>Revestimentos e Louças de Alto Padrão</h2>

        <ul className={styles.lista}>
          <li className={`${styles.dot} ${styles.select}`}>
            <div></div>
          </li>
          <li className={styles.dot}>
            <div></div>
          </li>
          <li className={styles.dot}>
            <div></div>
          </li>
        </ul>

      </div>
    </section>
  )
}
