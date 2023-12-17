import React from 'react'
import styles from './styles.module.scss'

export default function page() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Contato</h1>
        <form className={styles.form}>
          <div className={styles.formInput}>
            <label>Nome Completo:</label>
            <input className={styles.input} type='text'/>
          </div>
          <div className={styles.formInput}>
            <label>Email:</label>
            <input className={styles.input} type='email'/>
          </div>
          <div className={styles.formInput}>
            <label>Mensagem:</label>
            <textarea className={styles.inputTextArea}/>
          </div>
        </form>
      </section>
    </main>
  )
}
