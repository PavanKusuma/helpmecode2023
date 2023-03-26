import {MongoClient} from 'mongodb'

// const URI = process.env.NEXT_PUBLIC_MONGODB_URI
// const URI = "mongodb+srv://pavan:pavan@insightcluster.nvnuloy.mongodb.net/?retryWrites=true&w=majority"
const URI = process.env.NEXT_PUBLIC_MONGODB_URI
const options = {}

if(!URI) throw new Error('Please add your Mongo DB URI to env.local')

let client = new MongoClient(URI, options)
let clientPromise

if(process.env.NODE_ENV !== 'production'){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
}
else {
    clientPromise = client.connect()
}

export default clientPromise