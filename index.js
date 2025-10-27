import express from 'express'
import mongoose from 'mongoose'

const app  = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('Сервер работает')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()

console.log("Hello world");
console.log(`Current version node.js ${process.version}`);