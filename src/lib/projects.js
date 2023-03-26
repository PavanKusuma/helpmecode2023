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
export async function getProjects(s) {

    try {
        if(!projects) await init()
        
        const result = await projects
            .find({})
            .skip(s)
            .limit(5)
            .map(user => ({...user, _id: user._id.toString() }))
            .toArray()
            
        return {projects: result}
    } catch (error) {
        return { error: 'Failed to fetch projects!'+error.message}
    }
}