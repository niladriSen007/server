import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import {Configuration,OpenAIApi} from "openai"

const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json())



const configuration = new Configuration({
    organization:"org-T8W5GncipjC9iztjUs2ojX6o",
    apiKey:process.env.API_KEY,
})
const openai = new OpenAIApi(configuration)



app.get("/",(req,res)=>res.send("Hello Niladri"))

app.post("/",async(req,res)=>{
    const {message} = req.body;
    try
    {   
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`${message}`,
            max_tokens:1000,
            temperature:0.5,
        })
        res.json({message:response.data.choices[0].text})
    }
    catch(e)
    {
        res.status(400).send(e)
        console.log(e);
    }
})

app.listen(5000,()=>console.log(`Server is running at 5000`))