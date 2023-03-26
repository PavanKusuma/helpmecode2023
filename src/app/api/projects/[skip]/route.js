import { getProjects } from "@/lib/projects"

// export async function GET(request) {
//     // return new Response('Hello, Projects !')
//     return new Response({name: 'Hello, Projects !'})
//   }  

//   export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  
export async function GET(request, {params}) {

    const skip = params.skip;
    
// const handler = async (req, res) => {
    // const query = req.query
    // const { skip } = query

    
    // if(req.method === 'GET'){
        try {
            const { projects, error } = await getProjects(parseInt(skip))
            if(error) throw new Error(error)

            // return res.status(200).json({ projects, msg: 'Connected' })
            return Response.json({message:'Connected',projects}, {status: 200})
        } catch (error) {
            // return res.status(500).json({ error: error.message })
            return Response.json({message:error.message}, {status: 500})
        }
    // }

    // res.setHeader('Allow', ['GET'])
    // res.status(425).end(`Method ${req.method} is not allowed.`)
}

// export default handler