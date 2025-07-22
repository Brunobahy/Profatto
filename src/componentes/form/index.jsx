import React, { useState } from 'react'
import styles from './form.module.css'


export default function Form() {

    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    
    function alteraCampo(valor,estado){
        estado(valor)
    }

    return (
    <form action="" className={styles.form}>
        
        <div className={styles.box_textos}>
            <h3 className={styles.titulo}>NEWSLETTER</h3>
            <p className={styles.texto}>Cadastre-se e saiba em primeira mão as nossas principais novidades.</p>
        </div>
        
        <input type="text" value={nome} placeholder='Cadastre seu nome' onChange={(e) =>alteraCampo(e.target.value,setNome)} className={styles.campo} />
        <input type="email" value={email} onChange={(e) =>alteraCampo(e.target.value,setEmail)} placeholder='Cadastre seu email' className={styles.campo} />
        <input type="button" value="ENVIAR" className={styles.botao}/>
    </form>
  )
}
