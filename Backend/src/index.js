import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'



dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("Error Before Listeing", error);

        })


        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is listening on ${process.env.PORT}`);

        })
    })
    .catch(err => {
        console.log("Mongodb connection error", err);

    })