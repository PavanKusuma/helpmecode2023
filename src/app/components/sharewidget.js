'use client'


import { Inter } from 'next/font/google';
import { Link, Mail } from 'react-feather';
import styles from '../page.module.css'
import LikeBtn from './likebtn';
import SendMail from './sendmailbtn';
const inter = Inter({ subsets: ['latin'] })
const turl = require('turl')

 
// pass state variable and the method to update state variable
export default function ShareWidget({project}) {
  
 // const handleClick = async (event, skip) => {
    const handleClick = async () => {
        // store email into local storage
        localStorage.setItem('helpmecode_useremail', document.getElementById('useremail').value);
        document.getElementById('useremail').value = ''

        // showCredentialDialog(false)
      }


    // copy current url and covert to tiny url and copy to clipboard
    const copyURL = async () => {
        // get the current url
        const url = window.location.origin + window.location.pathname + window.location.search
    
        turl.shorten(url).then(async (res) => {
            // console.log(res);
            await navigator.clipboard.writeText(res)
        })
      }
  
  
  return (
    
    <div className={`${styles.shareDialog} ${styles.horizontalsection}`} >

        <div className={`${styles.likediv} ${styles.smallbtn}`} style={{width:'fit-content'}} onClick={copyURL}>
            <Link className={styles.icon} />
            <p className={`${inter.className} ${styles.text3}`}>Copy link</p>
        </div>
        
        <SendMail project={project} />
        <LikeBtn project={project} />
    </div>
  );
}