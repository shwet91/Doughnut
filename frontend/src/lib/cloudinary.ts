import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


 const UploadImage = async(file: File , folder:string) => {

try {
    
        const buffer = await file.arrayBuffer();
        const bytes = Buffer.from(buffer)
    
       return new Promise(async (resolve , reject)=> {
        await cloudinary.uploader.upload_stream({
            resource_type: "auto",
            folder: folder,
        }, async(err , result) => {
            if(err){
                reject(err.message)
            }
            resolve(result)
        }).end(bytes)
       })
} catch (error) {
    const e = error as Error; // Type assertion
    throw new Error(e.message);
}
}

export default UploadImage