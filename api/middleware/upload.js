import multer from 'multer'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary.js'

const storage= new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'resumes',
        resource_type:'raw', //non image files
        allowed_formats:['pdf','doc','docx']

    }
})

const upload = multer({storage})


export default upload