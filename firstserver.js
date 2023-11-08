cse_data = [
    {
    name: "Arul Pragasam",
    year: "3",
    year_of_joining: "2021",
    year_of_passing: "2025",
    cgpa: "9.5",
}
]

const express = require('express')
const app = express()
app.use(express.json());
app.get('/getdatabyname', (req,res) =>{
    let name = req.query.name
    cse_data.forEach((element) =>{
        if(element.name == name){
            res.send(element)
        }
    res.send('cse_data')
})
res.send(`${name} not found`)
})
app.post('/adddata', (req,res) =>{
    cse_data.push(req.body)
    res.send('added successfully')
})

app.put('/update', (req,res) =>{
    let name = req.query.name
    cse_data.forEach((element) =>{
        if(element.name == name){
            element.year = req.body.year
            element.year_of_joining = req.body.year_of_joining
            element.year_of_passing = req.body.year_of_passing
            element.cgpa = req.body.cgpa
            res.send('updated successfully')
        }
    })
    res.send(`${name} not found`)
}

app.listen(5000, () => {
    console.log('Server listening on 5000');
})


