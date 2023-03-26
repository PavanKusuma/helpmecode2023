'use client'

import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ThumbsUp } from 'react-feather';
import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })



export const updateLikes = async (id) => 
    fetch("/api/projectslike/"+id, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
  

export default function LikeBtn({project}) {
    // declare the state variable
    const [likes, setCount] = useState(project.likes);
    
  
    const handleClick = async (project) => {
    
        // increment the likes
        project.likes = ++project.likes;
        // set the state variable
        setCount(project.likes)

        // update the count to DB
        await updateLikes(project._id)
        
      }

  return (
   
    <div className={`${styles.likediv} ${styles.smallbtn}`} onClick={() => handleClick(project)}>
        {/* <ThumbsUp className={styles.icon} /> */}
        👍
        <p className={`${inter.className} ${styles.text3}`}>{likes}</p>
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
