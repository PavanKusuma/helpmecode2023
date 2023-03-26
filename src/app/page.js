
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getProjects } from '@/lib/projects'
import ProjectsList from './projectslist'
import MoreBtn from './components/more'
import ProfileBtn, { themeContext } from './components/profilebtn'
import CollectCredential from './components/collectcredential'
import TitleBtn from './components/collecttitlebtn'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


// var skip = 0
// var allProjects
const credentialDialog = false

// async function fetchProjects(skip) {
//   const { projects } = await getProjects(skip)
//   if(!projects) {
//     // throw new Error('Failed to fetch projects, try again!')
//   }
  
//   return projects


// }


export default function Home() {

  // fetch the projects data
  // allProjects = await fetchProjects(skip)


  // const {projects}  = await getProjects(0)
  

  return (
    
    <div className={styles.main}>
      
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

        <div className={styles.maindivcenter}>
          <h1 className={inter.className}>Exciting Project Ideas for Your Final Year</h1><br/>
            <p className={`${inter.className} ${styles.headingtext2}`}>
            Choose the best project that fits your needs and rest is assured. Get the abstract of the project for free and reach out to us if interested.
            </p>
            <br/>
            <br/>
            <TitleBtn titleDialog={false} />
            <br />
          {/* <ProjectsList /> */}
          <ProjectsList />
          {/* <ProjectsList allProjects={allProjects}/> */}
          <br />
          {/* <MoreBtn projects={projects}/> */}
          {/* <MoreBtn skip={skip} projects={projects}/> */}
        </div>

    


        <div className={`${styles.bottombar} ${inter.className} ${styles.text3}`} style={{display: 'flex', flexDirection:'column'}}> 
        Made with 💙 to support students
        <br/>
          <div>
          Follow on&nbsp;
            <Link href={{pathname: 'https://twitter.com/pavankusuma_',}}>Twitter</Link>, &nbsp;
            <Link href={{pathname: 'https://www.instagram.com/helpmecode/',}}>Instagram</Link>
          </div>
        </div>
    </div>
  )
}
