'use client'


import { Inter } from 'next/font/google';
import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })

 
// pass state variable and the method to update state variable
export default function CollectCredential({showCredentialDialog}) {

 // const handleClick = async (event, skip) => {
    const handleClick = async () => {
        // store email into local storage
        localStorage.setItem('helpmecode_useremail', document.getElementById('useremail').value);
        document.getElementById('useremail').value = ''

        showCredentialDialog(false)
      }
  
  return (
    
    <div className={styles.emailDialog} >
        {(localStorage.getItem('helpmecode_useremail')) ?
            <div>
              <h5 className={`${inter.className} ${styles.text1}`}>Email address</h5>
              <p className={`${inter.className} ${styles.text2}`}>{localStorage.getItem('helpmecode_useremail')}</p>
            </div>
             : 
            <div>
              <h5 className={`${inter.className} ${styles.text1}`}>Your email address</h5>
              <p className={`${inter.className} ${styles.text2}`}>Where you want us to reach out?</p>
              <br/>
              <div className={styles.horizontalsection}>
                <input className={`${inter.className} ${styles.smallbtn}`} type='text' id='useremail'/>
                <button  className={`${inter.className} ${styles.submitbtn}`} style={{width:'fit-content'}} type="button" onClick={handleClick}>Submit</button>
              </div>
            </div> 
          }
    </div>
    
  );
}