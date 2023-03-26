// export default function products(req, res) {
//     const { method } = req;
//     console.log("method: " , method)

import { NextResponse } from "next/server";


//     // return new Response('Hello, Next.js!')
//     res.status(200).json({ message: 'Hello from Next.js!' })
// }

export async function GET(request, {params}) {
    
    const qps = params.id;
    const skip1 = qps[0];

    // const { params1 } = request.nextUrl
    // const skip = params1.get("skip")
    
    return Response.json({message:'Hello1, Next.js!'+qps}, {status: 200})
    // return NextResponse.json({message:'Hello1, Next.js!'+skip, qps, skip1})
  }
  
