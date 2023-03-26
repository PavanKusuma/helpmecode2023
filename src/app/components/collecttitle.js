'use client'


import { Inter } from 'next/font/google';
import { useState } from 'react';
import { CheckCircle, X } from 'react-feather';
import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })

export const createProject = async (title, description) => 
    fetch("/api/createproject/"+title+"/"+description, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
  

// collect the title from user
export default function CollectTitle({showTitleDialog}) {

  // create variable for showing success
  const [submitted, setSubmitted] = useState(false);
  const [errormsg, setErrorMsg] = useState(false);
  const [errmsg, setErrMsg] = useState('Please try again later');

    // handle submit click event
    const handleClick = async () => {
      
      if(document.getElementById('title').value.length > 0 && document.getElementById('description').value.length > 0){
        
        // hide error msg
        setErrorMsg(false)

        // store the new title to db
        const result = await createProject(document.getElementById('title').value, encodeURIComponent(document.getElementById('description').value))
        
        // check if the title is submitted to close the window
        if(result.status == 200){
          // empty the text field
          document.getElementById('title').value = ''

          // show submit success
          setSubmitted(true)

          setTimeout(function() {
            
            // show submit success
            setSubmitted(false)

            // close the dialog
            showTitleDialog(false)

          }, 3000);
        }
        // show error message incase error is returned from API
        else {
          setErrorMsg(false)
          setErrMsg('Please try again later')
        }
        
      }
      else {
        // show error message
        setErrorMsg(true)
        setErrMsg('Enter data in all fields')
      }
    }
    // handle close click
    const closeWindow = async () => {
        
        // close the dialog
        showTitleDialog(false)

    }
  
  return (
    
    <div className={`${styles.titleDialog}`} >
        {submitted ? 
          <div className={`${styles.horizontalsection}`} style={{alignItems:'flex-start' }}>
            <CheckCircle className={styles.icon} color='#3769f7'/>
            <br />
            <h5 className={`${inter.className} ${styles.text1}`}>Submitted</h5>
            <br/>
          </div>
          :
          <div>
            <div className={`${styles.horizontalsection}`} style={{alignItems:'flex-start' }}>
              <div>
                <h4 className={`${inter.className} ${styles.text1}`}>Suggest a title</h4>
                <p className={`${inter.className} ${styles.text3}`}>Ensure that your project title involves use of tech</p>
              </div>
              <div className={`${styles.likediv} ${styles.smallbtn}`} onClick={() => closeWindow()} >
                <X className={styles.icon}  onClick={closeWindow} />
              </div>
            </div>
            <br/>
            <div className={styles.verticalsection}>
              <input className={`${inter.className} ${styles.smallbtn}`} style={{width:'-webkit-fill-available'}} type='text' id='title' placeholder='Your title here..'/>
              <textarea className={`${inter.className} ${styles.smallbtn}`} style={{width:'-webkit-fill-available'}} id='description' placeholder='Description here..' rows={6}/>
              <button  className={`${inter.className} ${styles.submitbtn}`} style={{width:'fit-content'}} type="button" onClick={handleClick}>Submit</button>
              {errormsg ? <p className={`${inter.className} ${styles.text3}`}>{errmsg}</p> : null}
            </div>
          </div>
        }
    </div>
    
  );
}