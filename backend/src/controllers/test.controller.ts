import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../utils/db.config";



const test = asyncHandler(async(req , res) => {

    const { userId } = req.body

    console.log(" body :" , userId)

    const user = await prisma.user.findUnique({
        where : {
            id : Number(userId)
        },
        include : {
            sentRequests : true
        }
    })

    // const friendRequest = await prisma.friendRequest.findMany({
    //     where : {
    //         owner : Number(userId)
    //     },
    //     include : {
    //         sender : true,
    //         receiver : true
    //     }
    // })



    res.status(200).json(new ApiResponse(200 , {user } ,  "welcome"))
})


  

export  {test}