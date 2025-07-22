import React from 'react'
import styles from './footer.module.css';
import logo from './imgs/logo_profatto_BCO_SEM_FUNDO 1.png';
import face from './imgs/gg_facebook.png';
import insta from './imgs/mdi_instagram.png';
import linkedin from './imgs/linkedin.png';
import youtube from './imgs/youtube.png'



export default function Footer() {
  return (
    <footer className={styles.rodape}>
        
        <div className={styles.container_logo}>
        
          <img src={logo} className={styles.logo} alt="" />
        
          <ul className={styles.lista_rede}>
            <li className={styles.rede_item}><img className={styles.rede} src={face} alt="" /></li>
            <li className={styles.rede_item}><img className={styles.rede} src={insta} alt="" /></li>
            <li className={styles.rede_item}><img className={styles.rede} src={linkedin} alt="" /></li>
            <li className={styles.rede_item}><img className={styles.rede} src={youtube} alt="" /></li>
          </ul>
        
          <span className={styles.copy}>Copyright 2025 © Profatto</span>
        
        </div>

      <div className={styles.rodape_nav}>


      <div className={styles.container_mapa}>
        <h5 className={styles.mapa_titulo}>MAPA DO SITE</h5>
        <a className={styles.mapa_item} href="">HOME</a>
        <a className={styles.mapa_item} href="">SOBRE NÓS</a>
        <a className={styles.mapa_item} href="">Tendências</a>
        <a className={styles.mapa_item} href="">Projetos que inspiram</a>
        <a className={styles.mapa_item} href="">EsperienzaFatto</a>
        <a className={styles.mapa_item} href="">Marcas e Produtos</a>
        <a className={styles.mapa_item} href="">Contato</a>
      </div>

      <div className={styles.container_loja}>
        <h5 className={styles.loja_titulo}>LOJA 01</h5>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>ProFatto Florianópolis - SC</h6>
          <p className={styles.item_texto}>R. Antônio Carlos Ferreira, 219 – Agronômica Florianópolis/SC – 88025-211</p>
        </div>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>Horário de atendimento:</h6>
          <p className={styles.item_texto}>Seg a Sex 09h às 18h | Sábado 09h às 13h</p>
        </div>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>Telefone:</h6>
          <p className={styles.item_texto}>(48) 3113-2600</p>
        </div>
      </div>

 <div className={styles.container_loja}>
        <h5 className={styles.loja_titulo}>LOJA 02</h5>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>ProFatto São José - SC</h6>
          <p className={styles.item_texto}>R. Koesa, 247 - Kobrasol, São José/SC, 88102-310</p>
        </div>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>Horário de atendimento:</h6>
          <p className={styles.item_texto}>Seg a Sex 09h às 18h | Sábado 09h às 13h</p>
        </div>
        <div className={styles.loja_item}>
          <h6 className={styles.item_titulo}>Telefone:</h6>
          <p className={styles.item_texto}>(48) 3113-2600</p>
        </div>
      </div>

      </div>
    </footer>
  )
}
