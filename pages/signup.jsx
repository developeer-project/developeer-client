import React from 'react'
import RegisterButton from '../components/RegisterButton'
import styles from '../styles/signup.module.scss'
const signup = () => {
  return (

      <div className={styles.pageBody}>
            <div className={styles.emptyDiv}>
                  <img src="https://cdn.discordapp.com/attachments/706405123437494274/943480393259180122/unknown.png" alt="logo" />
            </div>
            <div className={styles.buttonWrap}>
                  <p className={styles.text}> Create your account </p>
                  <RegisterButton className = {styles.signupButton} text={"Signup Using Google"}/>
                  <RegisterButton className = {styles.signupButton}  text={"Signup Using Github"}/>
                  <RegisterButton className = {styles.signupButton} text={"Signup Using Twitter"}/>
            </div>
      </div>

  )
}

export default signup