import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})
// const app = Express();
connectDB()


// ;( async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("ERRR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,() =>{
//             console.log(`app listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error('Error' ,error);
//         throw error
//     }
// } )()