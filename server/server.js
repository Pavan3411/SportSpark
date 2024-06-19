var mysql = require("mysql");
var express = require("express");
var app = express();
var cors = require("cors");
const nodemailer = require("nodemailer");
var jwt= require("jsonwebtoken")
const Jwtkey = 'sportify';

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));


const path = require("path");

const multer = require('multer');
const { request } = require("http");
const { start } = require("repl");
const { error } = require("console");
const storage=multer.diskStorage({
    destination:path.join(__dirname,'./public'),
    filename: function(req,file,callback){
        callback(null,Date.now()+'_'+ path.extname(file.originalname))
    }

})
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "pavan_suthar"
    }
);

app.listen(7654);  // node port number
con.connect(
    function (err) {
        if(err) throw err;
        console.log("connected with db");
    }
)

app.post("/api/adminlogin",(req,resp)=> {
    var email = req.body.email;
    
    var password = req.body.password;

    console.log(email);
    console.log(password);
    const ins5 = "select * from admin where a_email=? and a_password=?";
    con.query(ins5,[email,password],(err,result)=> {
        console.log(result.length);
        if(result.length > 0){

            resp.send(result);
        }
        else{

            resp.send({ message: "Wrong email or password entered"});
        }
    })
});

function verifytoken(req, res, next){
    let token = req.headers['authorization'];
    console.log(token);
    if(token){
        // token = token.split(' ')[1]; // 1 is key
        console.warn("middleware called", token);
        jwt.verify(token, Jwtkey, (err, valid) => {
            if(err){
                //if token is wrong
                console.log(" token is wrong ");
                res.status(401).send({result: " please provide valid token "});
                // this code send status to 401
            }
            else{
                console.log("next");
                next();
            }
        });
       
    }
    else{
        console.log( " token" );
        res.status(403).send({result: "please add token with header"});
    }
}


app.post("/api/userreg",(req,resp)=> {
    var fn = req.body.fn;
    var ln = req.body.ln;
    var email = req.body.email;
    var password = req.body.password;
    var mobile_no = req.body.mobile_no;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var country = req.body.country;
    var cn = req.body.cn;
    console.log(fn);
    console.log(ln);
    console.log(email);
    console.log(password);
    console.log(mobile_no);
    console.log(gender);
    console.log(dob);
    console.log(country);
    console.log(cn);
    
    const ins = "insert into user(user_fname, user_lname, email_id ,password,phone_no,gender,dob,location,city ) Values (?,?,?,?,?,?,?,?,?)";
    con.query(ins,[fn,ln,email,password,mobile_no,gender,dob,country,cn]);
    resp.send({
        message:"Registered Succesfully"
    }); 

    
});
// app.listen(9900);  // node port number
// con.connect(
//     function (err) {
//         if(err) throw err;
//         console.log("connected with db");
//     }
// )

app.post("/api/userlogin",(req,resp)=> {
    var email = req.body.email;
    var password = req.body.password;

   console.log(email);
    console.log(password);
    
    const ins1 = "select * from  user where email_id=? and password=?";
    con.query(ins1,[email,password],(err,result)=>{
//console.log(result.length);
if(result.length > 0){
    jwt.sign({ result }, Jwtkey, { expiresIn: '2h' }, (err, token) => {
  console.log("calls")
        if(err) {
            resp.send({result : "something went wrong please try again"})
        }
        resp.send({result,auth:token})

})}

  


else {

    resp.send({ message:"Wrong Email or Password entered"});

}

    }
    
    
    )
    
    
});

app.post("/api/addevent",(req,resp)=> { 
    
    console.log("1")
    let upload = multer({storage:storage}).single('image');
    console.log("img")
    upload(req,resp,function(err){
        if(!req.file){
            console.log("file not found")
            resp.send({msg:"image not found"})
        }
        else {
            console.log("2")
            var categoryevent = req.body.categoryevent;
    var sportsevent = req.body.sportsevent;
    var eventname = req.body.eventname;
    var eventlocation = req.body.eventlocation;
    var startdate = req.body.startdate;
    var enddate = req.body.enddate;
    var description = req.body.description;
    var valtype = req.body.valtype;
    var amount = req.body.amount;
    var image = req.file.filename;
    console.log("3")
    const ins2 = "insert into schedule(categoryevent,sportsevent,event_name,location,event_startdate,event_enddate,description,type,amount,image1) Values(?,?,?,?,?,?,?,?,?,?)";
    con.query(ins2,[categoryevent,sportsevent,eventname,eventlocation,startdate,enddate,description,valtype,amount,image]);
    console.log("3")

    resp.json();
        }
    })

    
});
app.post("/api/admincategory",(req,resp)=> {
    var categorytype = req.body.categorytype;
    console.log(categorytype);
    

    const ins3 = "insert into category(category_name) Values (?)";
    con.query(ins3,[categorytype]);
    resp.send({
        message:"Added Succesfully"
    })

})
app.get("/api/getcategory",(req,resp)=> {
    const sel = "select * from category";
    con.query(sel,(err,result) => {
        resp.send(result);
    }
    );
});
app.get("/api/getcategoryname",(req,resp)=> {
    const sel = "select * from category";
    con.query(sel,(err,result) => {
        resp.send(result);
    }
    );
});
app.get("/api/getsportsname",(req,resp)=> {
    const sel = "SELECT * FROM sports_category";
    con.query(sel,(err,result) => {
        resp.send(result);
    }
    );
});

// app.get("/api/viewcatsports",(req,resp)=> {
//     const sel = "select * from sports_category";
//     con.query(sel,(err,result) => {
//         resp.send(result);
//     }
//     );
// });

app.post("/api/adminsports",(req,resp)=> {
    var sportscategory = req.body.sportscategory;
    console.log(sportscategory);
    var sportsname = req.body.sportsname;
    console.log(sportsname);

    const ins4 = "insert into sports_category(category_id,sports_name) Values(?,?)";
    con.query(ins4,[sportscategory,sportsname]);
    resp.send({
        message:"Sports Add Successfully"
    })
})

app.get("/api/getsports",(req,resp)=> {
    const sel = "select a.category_name ,b.* from category as a,sports_category as b where a.category_id=b.category_id";
    con.query(sel,(err,result) => {
        resp.send(result);
    }
    );
});

app.get("/api/getcategoryevent",(req,resp)=> {
    const sel2 = "select a.category_name ,b.sports_name ,c.* from category as a,sports_category as b, schedule as c where a.category_id=c.categoryevent and b.sc_id=c.sportsevent;";
    con.query(sel2,(err,result) => {
        resp.send(result);
    }
    );
});

app.get("/api/getevent",(req,resp)=> {
    //const sel4= "select a.category_name ,b.* from category as a, sports_category as b where a.category_id=b.category_id";
    const sel4 ="select * from category";
    con.query(sel4,(err,result) => {
        resp.send(result);
    });
});


app.post("/api/getsportsnamebycat",(req,resp)=> {
    var sportscategory = req.body.catid;
    const sel = "SELECT * FROM sports_category where category_id=?";
    con.query(sel,[sportscategory],(err,result) => {
        resp.send(result);
    }
    );
});

app.get("/api/sports",(req,resp)=>{
const id = req.query.id
const sel7 = "select a.category_name ,b.sports_name ,c.* from category as a,sports_category as b, schedule as c where a.category_id=c.categoryevent and b.sc_id=c.sportsevent and c.categoryevent=?";
con.query(sel7,[id],(err,result) => {
    resp.send(result);
});

})
app.post("/api/addmatch",(req,resp) => {
    console.log("1")
    let upload1 = multer({storage:storage}).single('image');
    console.log("img")
    upload1(req,resp,function(err){
        if(!req.file){
            console.log("file not found")
            resp.send({msg:"image not found"})
        }
        else {
            console.log("2")

    var categoryevent = req.body.categoryevent;
    console.log(categoryevent);
    var sportsevent = req.body.sportsevent;
    console.log(sportsevent);
    var eventname = req.body.eventname;
    console.log(eventname);
    var eventlocation = req.body.eventlocation;
    console.log(eventlocation);
    var city = req.body.city;
    console.log(city);
    var description = req.body.description;
    console.log(description);
    var startdate = req.body.startdate;
    console.log(startdate);
    var enddate = req.body.enddate;
    console.log(enddate);
    var matchtype = req.body.matchtype;
    console.log(matchtype);
    var image = req.file.filename;
    var user_id = req.body.user_id

    const ins10 = "insert into schedule(categoryevent,sportsevent,event_name,location,city,description,event_startdate,event_enddate,matchtype,user_id,image1) Values(?,?,?,?,?,?,?,?,?,?,?)";
    con.query(ins10,[categoryevent
        ,sportsevent,eventname,eventlocation,city,description,startdate,enddate,matchtype,user_id,image]);
        resp.json();
    }
})


});

app.get("/api/fetchmatch",(req,resp)=> {
    //const sel4= "select a.category_name ,b.* from category as a, sports_category as b where a.category_id=b.category_id";
    const sel4 ="select * from localmatch";
    con.query(sel4,(err,result) => {
        resp.send(result);
    });
});

app.get("/api/getlocalinfo",verifytoken, (req, resp) => {
    const cn = req.query.city;
    const sel = `SELECT a.category_name, b.sports_name, c.*
      FROM schedule AS c
      JOIN category AS a ON a.category_id = c.categoryevent
      JOIN sports_category AS b ON b.sc_id = c.sportsevent
      WHERE c.city = ?;
    `;
    
    con.query(sel, [cn], (err, result) => {
      if (err) {
        console.error(err);
        resp.status(500).send("Internal Server Error");
      } else {
        resp.send(result);
      }
    });
  });
  
  app.post("/api/orderinsert", (req, res) => {
    const user_id = req.body.user_id;
    const amount = req.body.amount;
  
    console.log("Received user_id:", user_id);
    console.log("Received amount:", amount);
  
    const ins11 = "INSERT INTO payment (user_id, amount) VALUES (?, ?)";
    con.query(ins11, [user_id, amount], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data' });
        return;
      }
      console.log('Data inserted successfully!');
      res.json({ message: 'Data inserted successfully' });
    });
  });

  app.post('/api/forgot',(req,resp)=> {
    var email = req.body.email;
    console.log(email);

    const sel11 = "Select * from user where email_id=?";
    con.query(sel11,[email],(err,result)=> {
        console.log(result);
        if (result.length > 0) {
            console.log(result);

            var pass = result[0].password;
            resp.send(result);
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "sutharpavan9153@gmail.com",
                    pass: "tzisncvpctrtjpwr"
                },
            });

            const message = {
                from: "sutharpavan9153@gmail.com",
                to: email,

                subject: "SportSpark",
                text: "Hello ! " + "\n" + " Your Password is ---->>" + pass + "<<----.", 
            };

            transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log(error);
                }
                else {
                    resp.send(result);
                    console.log("Email sent:", info.response);
                }
            }); 
        }
        else {
            resp.send ({message: "Please enter correct email id "});
        }
    })
});

