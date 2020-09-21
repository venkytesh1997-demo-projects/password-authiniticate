const express = require("express");
const app= express();
const bcrypt= require("bcrypt")
const users=[]
app.use(express.json())

app.get("/user",(req,res)=>{
    res.json(users);
});

// app.post("/users",async(req,res)=>{
//     try{
//         const salt=await bcrypt.genSalt(10)
//         const hashpassword=await bcrypt.hash(req.body.password,salt)
//         console.log(salt)
//         console.log(hashpassword)
//         const user={name:req.body.name,password:hashpassword}
//         users.push(user);
//         res.status(200).send();
//   }catch {
//     req.status(500).send();
//   } 
// });


app.post('/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { name: req.body.name, password: hashedPassword }
      users.push(user)
      res.status(201).send()
    } catch (e){
      res.status(500).send(e)
    }
  })
  
   
app.listen(3000,()=>console.log("this server is running on the port 3000"));