import React from 'react'
import styles from './sobrenos.module.css'
import foto from './foto.png'


export default function Sobrenos() {
  return (
    <section className={styles.container}>
        <div className={styles.info}>
            <img className={styles.foto} src={foto} alt="Foto da faixada profatto" />
            
            <div className={styles.container_texto}>
                
                <h3 className={styles.titulo}>Sobre <b> Nós</b></h3>

                <p  className={styles.texto}>Lorem ipsum dolor sit amet consectetur. Massa vitae in sed pharetra. Id sit purus urna sed facilisis cursus fringilla. Dignissim elit diam purus tellus tristique nec senectus turpis tellus. Risus nam amet risus vitae tristique vestibulum gravida luctus vulputate. Lorem nunc etiam hendrerit diam pulvinar eu. Placerat sed nunc vel eget curabitur.</p>
                <p  className={styles.texto}>Risus nam amet risus vitae tristique vestibulum gravida luctus vulputate. Lorem nunc etiam hendrerit diam pulvinar eu. Placerat sed nunc.</p>
                
                <ul  className={styles.lista}>
                    <li  className={styles.item}>
                        <span  className={styles.item_numero}>+ 250</span>
                        <h4 className={styles.item_texto}>Fornecedores</h4>
                    </li>
                    <li  className={styles.item}>
                        <span  className={styles.item_numero}>+ 1.000</span>
                        <h4 className={styles.item_texto}>clientes</h4>
                    </li>
                    <li  className={styles.item}>
                        <span  className={styles.item_numero}>+ 2.000</span>
                        <h4 className={styles.item_texto}>REVESTIMENTOS</h4>
                    </li>
                    <li  className={styles.item}>
                        <span  className={styles.item_numero}>+ 1.000</span>
                        <h4 className={styles.item_texto}>clientes</h4>
                    </li>
                </ul>
                <button  className={styles.botao}>SAIBA MAIS</button>
            </div>
        </div>

        <div className={styles.explica}>
            <h2 className={styles.explica_titulo}>Como a <b>ProFatto</b> pode te ajudar</h2>

            <ul className={styles.explica_lista}>

            <li className={styles.explica_item}>
                <span className={styles.explica_numero}>1</span>
                <div className={styles.explica_containter_texto}>
                <h5 className={styles.explica_nome}>lorem ipsum</h5>
                <p className={styles.explica_texto}>Lorem ipsum dolor sit amet consectetur. Massa vitae in sed pharetra. Id sit purus urna sed facilisis cursus fringilla.</p>
                </div>
            </li>
            
            <li className={styles.explica_item}>
                <span className={styles.explica_numero}>2</span>
                <div className={styles.explica_containter_texto}>
                <h5 className={styles.explica_nome}>lorem ipsum</h5>
                <p className={styles.explica_texto}>Lorem ipsum dolor sit amet consectetur. Massa vitae in sed pharetra. Id sit purus urna sed facilisis cursus fringilla.</p>
                </div>
            </li>
            
            <li className={styles.explica_item}>
                <span className={styles.explica_numero}>3</span>
                <div className={styles.explica_containter_texto}>
                    <h5 className={styles.explica_nome}>lorem ipsum</h5>
                    <p className={styles.explica_texto}>Lorem ipsum dolor sit amet consectetur. Massa vitae in sed pharetra. Id sit purus urna sed facilisis cursus fringilla.</p>
                </div>
            </li>
            
            </ul>

        </div>

    </section>
  )
}
