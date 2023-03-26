import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '../../../app/page.module.css'
import Link from 'next/link'
import SendMail from '@/app/components/sendmailbtn'
import ShareWidget from '@/app/components/sharewidget'
import ProfileBtn from '@/app/components/profilebtn'

// import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Detailss({searchParams}) {
  
    console.log(searchParams.title)
   
    
    return (
      <main className={styles.main}>
        <div className={inter.className}>
        <div className={styles.topbar}>
          <div className={styles.horizontalsection}>
            <Image src="/logo.png" alt="HelpMeCode" width={40} height={40} priority />
            <h3>HelpMeCode</h3>
          </div>
          <div>
            <ProfileBtn show={false} />
          </div>
        </div>
        {/* <div style={{display: 'flex',flexDirection: 'row',alignItems: 'flex-start',padding: '0px',gap: '0px',marginLeft:'20px',marginBottom:'10px'}}>
          <div className={styles.card_selected}>Projects</div>
          <div className={styles.card}>Workshops</div>
          <div className={styles.card}>Products</div>
          <div className={styles.card}>Contact</div>
        </div>
       */}
        <div style={{border: '0.5px solid #E5E7EB', width:'100vw'}}></div>
        
        
      </div>
        {/* <div className={inter.className}>
          <div className={styles.horizontalsection}>
            <Image src="/logo.png" alt="HelpMeCode" width={40} height={40} priority />
            &nbsp;&nbsp;
            <h3>HelpMeCode</h3>
          </div> */}
          
          {/* <div style={{display: 'flex',flexDirection: 'row',alignItems: 'flex-start',padding: '0px',gap: '0px',marginLeft:'20px',marginBottom:'10px'}}>
            <div className={styles.card_selected}>Projects</div>
            <div className={styles.card}>Workshops</div>
            <div className={styles.card}>Products</div>
            <div className={styles.card}>Contact</div>
          </div>
         */}
          {/* <div style={{border: '0.5px solid #E5E7EB', width:'100vw'}}></div>
          
          
        </div> */}
        <div className={styles.maindivcenter}>
          <h1 className={inter.className}>{searchParams.title}</h1><br/>
            <br/>
            <ShareWidget project={searchParams} />
            <br/>
            <p className={`${inter.className} ${styles.headingtext2}`}  style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{searchParams.description}</p>
            <br/>
            <Link className={`${inter.className} ${styles.smallbtn}`} style={{width:'fit-content'}} href="/" replace>Go back</Link>
            <br/>
            <br/>
         </div>
  
      </main>
    ) 
  }
  