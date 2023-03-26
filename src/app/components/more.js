'use client'

import { Inter } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'
import { Check, Loader } from 'react-feather'
import styles from '../page.module.css'
// import { ProsContext } from '../projectslist'
const inter = Inter({ subsets: ['latin'] })

  export const getProject = async (data) => 
    fetch("/api/projects/"+data, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    
    

// pass state variable and the method to update state variable
export default function MoreBtn({ projects, setProjects }) {

  useEffect(()=> {

    console.log('projects')
    console.log(projects)

    async function getData(){
        const result  = await getProject(0)
        const newProjects = await result.json()
        console.log(newProjects.projects)

        console.log(projects)
        // update the projects state variable
        setProjects(newProjects.projects)

        
    }
    getData();
    
},[])

  // var p = useContext(ProsContext)

  const [skip, setCount] = useState(5);
  const [dataLoading, setDataLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  // const handleClick = async (event, skip) => {
  const handleClick = async () => {
    
    // increment the state variable
    setCount(skip+5)
    // change the button text to show loading
    setDataLoading(true)
  
    // fetch new list
    const result  = await getProject(skip)
    const newProjects = await result.json()
    
    // prepare new projects list
    let updatedProjects = []
    
    // check if new list is available
    if(newProjects.projects.length != 0){
      
      // add new list to the previous one and assign to latest list
      updatedProjects = projects.concat(newProjects.projects)

      // update the state with latest list
      setProjects(updatedProjects)
      setDataLoading(false)
    }
    else {
      // block the load more scenario
      setDataLoading(false)
      setButtonDisabled(true)
    }
    
  }

  
  return (
    // based on the available list, show the Load more CTA 
    (buttonDisabled) ? 
      <div className={styles.horizontalsection}>
        <Check className={styles.icon} />
        <p className={`${inter.className} ${styles.text3}`}>You have reached the end!</p> 
      </div>
    : ((dataLoading) ? 
    <div className={styles.horizontalsection}>
        <Loader className={`${styles.icon} ${styles.load}`} />
        <p className={`${inter.className} ${styles.text3}`}>Loading...</p> 
      </div>
      
      : <button  className={`${inter.className} ${styles.smallbtn}`} style={{width:'fit-content'}} type="button" onClick={handleClick}>More</button>)
    
    
  );
}