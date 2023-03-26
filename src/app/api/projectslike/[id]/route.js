import { getProjects } from "@/lib/projects"
import { updateLikes } from "@/lib/updatelikes";

// export async function GET(request) {
//     // return new Response('Hello, Projects !')
//     return new Response({name: 'Hello, Projects !'})
//   }  

//   export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  
export async function GET(request, {params}) {

    const id = params.id;
    
        try {
            const { projects, error } = await updateLikes(id)
            if(error) throw new Error(error)

            // return res.status(200).json({ projects, msg: 'Connected' })
            return Response.json({message:'Updated'}, {status: 200})
        } catch (error) {
            // return res.status(500).json({ error: error.message })
            return Response.json({message:error.message}, {status: 500})
        }
    // }

    // res.setHeader('Allow', ['GET'])
    // res.status(425).end(`Method ${req.method} is not allowed.`)
}

// export default handler