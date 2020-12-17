const express = require("express");
const app = express();
const port = process.env.PORT || 9900;

var menu = [
  {link:'/',name:'Home'},
  {link:'/hotel',name:'Hotels'},
  {link:'/location',name:'City'}
]

const hotelRouter = require('./src/routes/HotelRouter')(menu);
const locationRouter = require('./src/routes/LocationRouter')(menu);

//Static File Path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

//default route
app.get('/',(req,res)=>{
    //res.status(200).send("My Home Route")
    res.render('index',{title:'Home Page',menuitem:menu})
});

app.use('/location',locationRouter);
app.use('/hotel',hotelRouter);


app.listen(port,(err) => {
  if(err) throw err;
  console.log(`Server is running on port ${port}`);
});