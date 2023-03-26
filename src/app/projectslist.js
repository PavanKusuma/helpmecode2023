'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Loader, ThumbsUp } from 'react-feather';
import MoreBtn from './components/more';
import SendMail from './components/sendmailbtn';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import LikeBtn from './components/likebtn';
// import { themeContext } from './components/profilebtn';

const inter = Inter({ subsets: ['latin'] })


export const getProject = async (data) => 
fetch("/api/projects/"+data, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// export const ProsContext = createContext(null)

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function ProjectsList() {


// const t = useContext(themeContext)
//     console.log(t)

    
    // state variable for projects
    const [projects, setProjects] = useState()

    // fetch new list
    // useEffect(()=> {

    //     console.log('projects')
    //     console.log(projects)

    //     async function getData(){
    //         const result  = await getProject(0)
    //         const newProjects = await result.json()
    //         console.log(newProjects.projects)

    //         console.log(projects)
    //         // update the projects state variable
    //         setProjects(newProjects.projects)

            
    //     }
    //     getData();
        
    // },[])
    
    const [likes, setCount] = useState(0);
    
  return (

    <div>
        {(!projects) ? 
            <div className={styles.horizontalsection}>
                <Loader className={`${styles.icon} ${styles.load}`} />
                <p className={`${inter.className} ${styles.text3}`}>Loading...</p> 
            </div>
            : 
            <div className={styles.titlecard}>
                {projects.map(project => (

                    <div className={styles.carddatasection} key={project._id}>
                        <div className={styles.projectsection}>
                            <Link href={{
                                pathname: '/details/project',
                                query: project
                                }}>
                                <div className={styles.verticalsection}>
                                    <h5 className={`${inter.className} ${styles.text1}`}>{project.title}</h5>
                                    {/* <p className={`${inter.className} ${styles.text2}`} dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br>') }}></p> */}
                                    {/* <p className={`${inter.className} ${styles.text2}`}>{project.description.replace(/\n/g, '\n')}</p> */}
                                    <p className={`${inter.className} ${styles.text2} ${styles.ellipsistext}`} style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{project.description}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.horizontalsection}>
                        
                            <Link href={{
                                pathname: '/details/project',
                                query: project
                            }}>
                            <p className={`${inter.className} ${styles.smallbtn}`}>Details</p>
                            </Link>
                            <SendMail project={project} />
                            <LikeBtn project={project} />
                            {/* <div className={`${styles.likediv} ${styles.smallbtn}`} onClick={() => handleClick(project)}>
                                <ThumbsUp className={styles.icon} />
                                <p className={`${inter.className} ${styles.text3}`}>{likes}</p>
                            </div> */}
                        
                        </div>
                    </div>
                ))}
            </div>
        }
        <br/>
        <MoreBtn projects={projects} setProjects={setProjects}/>
    </div>
   
  );
}
