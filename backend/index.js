const express = require("express")
const router = express()
const port = 3001;
var mysql = require('mysql');
const bodyparser = require("body-parser")
const cors = require("cors")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(cors())


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});
connection.connect(function (err) {
    console.log("my sql connected");
});


// const query = `
// CREATE TABLE customers
//  (id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255), 
//     email VARCHAR(255),
//     password VARCHAR(255),
//     token VARCHAR(255))`


//     connection.query(query, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//       });


router.post("/signup",async(req,res)=>{
    const data = req.body;
    const query = "INSERT INTO customers(username,email,password,token) VALUES (?,?,?,?);"
    const password = req.body.password;
    const hashpassword = await bcrypt.hash(password,10)
    connection.query(query,[data.username,data.email,hashpassword,data.token],(err,result)=>{
        if (err) {
            res.json({status:400,message:"user not create"})
        } else {
            res.json({status:200,message:"user created successfully",result})
        }
    })
})

router.post("/login",async(req,res)=>{
    const data = req.body
    const query = "SELECT * FROM customers WHERE email = ?"
    connection.query (query,[data.email],async(err,result)=>{
        if (err) {
            res.json({status:400,message:"user not create"})
        } else {
            const password = req.body.password
            const compare = await bcrypt.compare(password,result[0].password)
            console.log(compare,"compaerjndkjwe");
            if (compare) {
                const token = jwt.sign(result[0].email,"hemanshi")
                console.log(token,"token");
                const tokenqueery = "UPDATE customers SET token = ?"
                connection.query(tokenqueery,[token],(err,result)=>{
                    if (err) {
                        res.json({status:400,message:"token"})
                    } else {
                        res.json({status:200,message:"login successfull",token})
                    }
                }) 
            }
        }
    })
})

router.listen(port, () => {
    console.log(`application run aat ${port}`);
})