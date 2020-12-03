var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

const router = require('express').Router()
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'1234',
    database:'o2'
})



app.set('views', path.resolve(__dirname +'/views'))
app.set('view engine' , 'ejs')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// console.log(path.resolve(__dirname +'/views'))

app.post("/topic/add" , function(req, res){
    var sql = "INSERT INTO topic (title, description, author) VALUES (?,?,?)"
    var title = req.body.title
    var description = req.body.description
    var author =req.body.author
    db.query(sql , [title, description,author],function(err , results) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(results)
            res.send("Success")
        }
    })
    
})
app.get("/data", function(req , res){
    
    var sql = 'SELECT * FROM topic'
    db.query(sql , function(err , results) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(results)
        }
    })
    res.render("test", {data:"KIM"})
})

// app.get("/insert" , function(req, res){
//     var sql = "INSERT INTO `o2`.`topic` (`title`, `description`, `author`) VALUES ('python', 'Interpreter Language of best popular at korea', 'James');"
//     db.query(sql , function(err , results) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log(results)
//             res.send("Success")
//         }
//     })
// })

// app.get("/data/name" , function(req, res){
//     res.sendFile("C:/apps/userlists/test_1.html")
// })

var port =8080
app.listen(port, function(){
    console.log(`Server is running at http://localhost:${port}`)
})
