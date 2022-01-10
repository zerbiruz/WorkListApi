const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")


const PORT = process.env.PORT || 8000

let projects = require("./works_list.json")
const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server listen at http://localhost:${PORT}`)
    console.log("Projects: ", projects)
})

app.get("/projects_api", (req, res) => {
    // return res.status(200).json({
        // code: 1,
        // message: "OK",
        // data: projects
    // })
    
    return res.json(projects)
})