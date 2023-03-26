import clientPromise from '.'

let client
let db
let projects

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db('Insight')
        projects = await db.collection('Projects')
        
        // console.log(projects)
    } catch (error) {
        
        // throw new Error('Failed to establish connection to database')
        // return { error: 'Failed to establish connection!'}
    }
}
;(async () => {
    await init()
})()

////////// Projects
export async function createProject(title, description) {

    try {
        if(!projects) await init()
        console.log(decodeURIComponent(description))
        const result = await projects.insertOne({title: title, description: decodeURIComponent(description), likes: 0})
        
        return {projects: result}
    } catch (error) {
        return { error: 'Failed to fetch projects!'}
    }
}