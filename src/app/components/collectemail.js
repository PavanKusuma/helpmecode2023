'use client'


import { Inter } from 'next/font/google'
import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })

async function handleClick(){
  console.log("Sending email...")
  const result  = await sendEmailNow('newtonpavan33@gmail.com')
  const data = await result.json()
  
  console.log(data.msg)

  

}

export const sendEmailNow = async (data) => 
    fetch("/api/mail/"+data, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
  

export default function CollectEmail() {

  return (
   <div className={styles.emailDialog}>
    <p className={`${inter.className} ${styles.text2}`}>Your email address</p> 
    <p className={`${inter.className} ${styles.text2}`}>Where would you like us to send this project details?</p> 
    <input type='text'/>
    <button  className={`${inter.className} ${styles.smallbtn}`} style={{width:'fit-content'}} type="button" onClick={handleClick}>Email me</button>
   </div>
    
      
  );
}
