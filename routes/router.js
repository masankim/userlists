const router = require('express').Router()
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'1234',
    database:'o2'
})

