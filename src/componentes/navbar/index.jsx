import React from 'react'
import styles from './navbar.module.css';
import logo from './imgs/logo_profatto_BCO_SEM_FUNDO 1.png';
import whats from './imgs/whats.png';
import face from './imgs/gg_facebook.png';
import insta from './imgs/mdi_instagram.png';
import linkedin from './imgs/linkedin.png';
import youtube from './imgs/youtube.png'


export default function Navbar() {
  return (
    <div className={styles.container}>
        
        <div className={styles.container_cima}>
            
            <img className={styles.logo} src={logo} alt="Logo da empresa" />
            
            <div className={styles.contatos}>
                
                <div className={styles.whats}>
                    <img className={styles.whats_logo} src={whats} alt="logo whatsapp" />
                    <p className={styles.whats_numero}>(48) 3207-2222</p>
                </div>

                <div className={styles.redes}>
                    
                    <a className={styles.rede_logo} href=""><img src={face} alt="" /></a>
                    <a className={styles.rede_logo} href=""><img src={insta} alt="" /></a>
                    <a className={styles.rede_logo} href=""><img src={linkedin} alt="" /></a>
                    <a className={styles.rede_logo} href=""><img src={youtube} alt="" /></a>
                
                </div>
                <button className={styles.botao}>contato</button>
            </div>
        </div>
    <nav className={styles.container_lista}>
        <ul className={styles.lista}>

            <li className={`${styles.item} ${styles.select}`}><a href="http://">home</a></li>
            <li className={styles.item}><a href="http://">Sobre Nós</a></li>
            <li className={styles.item}><a href="http://">Conteúdos</a></li>
            <li className={styles.item}><a href="http://">Projetos ProFatto</a></li>
            <li className={styles.item}><a href="http://">vídeos</a></li>
            <li className={styles.item}><a href="http://">EsperienzaFatto</a></li>
            <li className={styles.item}><a href="http://">Imersão Jacuzzi</a></li>
        </ul>
    </nav>

    </div>
  )
}
