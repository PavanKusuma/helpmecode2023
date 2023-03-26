'use client'

import { Inter } from 'next/font/google'
import { Mail } from 'react-feather';
import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })



export const sendEmailNow = async (data, data1, data2) => 
    fetch("/api/mail/"+data+"/"+data1+"/"+data2, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
  

export default function SendMail({project}) {
  
  async function handleClick(){
  
    // check if email is stored
    if(localStorage.getItem('helpmecode_useremail')){
      const result  = await sendEmailNow(localStorage.getItem('helpmecode_useremail'), project.title, project.description)
      // const data = await result.json()
      
    }
    else {
      console.log('no');
      document.getElementById('profilecta').click()
    }
  
    
  
  }


  return (
   
    <div className={`${styles.likediv} ${styles.smallbtn}`} style={{width:'fit-content'}} onClick={handleClick}>
      <Mail className={styles.icon} />
      <p className={`${inter.className} ${styles.text3}`}>Email me</p>
    </div>
      
  );
}

// 'use client'

// async function execute(data) {
//   console.log("Brooooo")
  
// }



// export default function SendMail() {

//   return (
//       <button onClick={execute('newtonpavan33@gmail.com')}>Hello</button> 
//   )
// }
