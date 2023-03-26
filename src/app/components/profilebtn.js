'use client'

import { Inter } from 'next/font/google';
import { createContext, useEffect, useState } from 'react';
import { Moon, Sun, User } from 'react-feather';
import styles from '../page.module.css'
import CollectCredential from './collectcredential';
const inter = Inter({ subsets: ['latin'] })

// create react context for storing theme
export const themeContext = createContext('light')

// pass state variable and the method to update state variable
export default function ProfileBtn({credentialDialog}) {

  // to show the email address
  const [show, showCredentialDialog] = useState(credentialDialog)

  // to show the theme
  const [theme, setTheme] = useState('light')

  // const handleClick = async (event, skip) => {
  const handleClick = async () => {
    
    // increment the state variable
    // console.log(localStorage.getItem('helpmecode_useremail'))
    // // change the button text to show loading
    // setDataLoading(true)
    showCredentialDialog(!show)
  }

  // change the theme using context
  const changeMyTheme = async () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const [email, setEmail] = useState(null);
  useEffect(() => {
    const storedEmail = localStorage.getItem('helpmecode_useremail');
    setEmail(storedEmail);
  }, []);
  
  return (
        
        <div className={styles.horizontalsection}>
          <div id='profilecta'  className={`${styles.smallbtn}`} style={{ borderRadius: '24px', padding: '8px'}} onClick={changeMyTheme}>
            {(theme === 'light') ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
          </div>
          
            {/* {email ?
            <p className={`${inter.className} ${styles.text3}`}>{localStorage.getItem('helpmecode_useremail')}</p> : null} */}
            <div id='profilecta' className={`${styles.smallbtn}`} style={{ borderRadius: '24px', padding: '8px'}} onClick={handleClick}><User className={styles.icon} /></div>
        {(show) ? <CollectCredential showCredentialDialog = {showCredentialDialog}/> : null}
        </div>

        
    
  );
}