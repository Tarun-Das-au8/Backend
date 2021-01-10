const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/student")
const port = process.env.PORT || 8800;

app.use(express.json());

//health check
app.get('/',(req,res)=>{
  res.status(200).send('Program is running successfully');
})

//creating students data using promises
// app.post('/students',(req,res)=>{
//   console.log(req.body)
//   const user = new Student(req.body);

//   user.save().then(()=>{
//     res.status(201).send(user);
//   }).catch((err)=>{
//     res.status(400).send(err);
//   })
// })

//creating students data using async await
app.post('/students',async(req,res)=>{
  try{
    console.log(req.body)
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  }catch(err){
    res.status(400).send(err);
  }
})

//get all students data
app.get('/students',async(req,res)=>{
  try{
    const studentsData = await Student.find();
    res.send(studentsData);
  }catch(err){
    console.log(err);
  }
})

//get individual student data
app.get('/students/:id',async(req,res)=>{
  try{
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);
    if(!studentData){
      return res.status(404).send('Data not found');
    }else{
      res.send(studentData);
    }
  }catch(err){
    console.log(err);
  }
})

//update the students by id
app.patch('/students/:id',async(req,res)=>{
  try{
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{new:true});
    res.send(updateStudents);
  }catch(err){
    res.status(400).send(err);
  }
})

//delete the student by id
app.delete('/students/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(id);
    if(!id){
      return res.status(400).send('Invalid input');
    }
    res.send(deleteStudent);
  }catch(err){
    res.status(400).send(err);
  }
})

app.listen(port,(err)=>{
  if(err) throw err;
  console.log(`Server running on port ${port}`);
})