import { ObjectId } from 'mongodb'
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
export async function updateLikes(s) {

    try {
        if(!projects) await init()
        
        await projects.updateOne(
            {_id: new ObjectId(s)},
            {$inc: {likes: 1}}
        )
            
        return {status: 'updated'}
    } catch (error) {
        return { error: 'Failed to update!'}
    }
}