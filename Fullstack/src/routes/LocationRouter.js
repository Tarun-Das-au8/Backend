const express = require('express');
const locationRouter = express.Router();

let location=[
    {
      "_id": 1,
      "city_name": "Delhi",
      "city": 1,
      "country_name": "India"
    },
    {
      "_id": 3,
      "city_name": "Pune",
      "city": 3,
      "country_name": "India"
    },
    {
      "_id": 2,
      "city_name": "Mumbai",
      "city": 2,
      "country_name": "India"
    },
    {
      "_id": 4,
      "city_name": "Chandigarh",
      "city": 4,
      "country_name": "India"
    },
    {
      "_id": 5,
      "city_name": "Goa",
      "city": 5,
      "country_name": "India"
    },
    {
      "_id": 6,
      "city_name": "Manali",
      "city": 6,
      "country_name": "India"
    }
  ]


function router(menu){
  //location route
  locationRouter.route('/')
    .get((req,res)=>{
      //res.status(200).send(location)
      res.render('location',{title:'Locations List',menuitem:menu})
    })

  locationRouter.route('/details')
    .get((req,res)=>{
      res.status(200).send('location details')
    });

    return locationRouter
}

module.exports = router;