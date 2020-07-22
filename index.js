const mongoose = require('mongoose');
const Dishes = require('./models/dishModel');
mongoose.connect("mongodb://localhost:27017/conFusion", { useNewUrlParser: true, useUnifiedTopology: true})
.then((db)=>{
    console.log('db is connected successfully')
    
    const newDish = new Dishes({
        name: 'SChezwan rice',
        desc: 'made ny Noodle Kitchen'
        })
    const newDish2 = new Dishes({
        name: 'IU',
        desc: "Dream queen"
    })   
    newDish.save()
    newDish2.save()
    .then((dish) => {
        console.log('dishes created');
        return Dishes.find({})
    })
    .then((dishes)=>{
        console.log('Found Dishes:\n',dishes)
        return Dishes.deleteOne({
            name: 'SChezwan rice',
            desc: 'made ny Noodle Kitchen'
        })
    })
    .then(()=>{
        console.log('deleted dish successsfully')
        return Dishes.deleteMany();
    })
    .then(()=>{
        console.log('dishes are removed');
        return mongoose.connection.close();
    })
    .catch((err) => console.log(err))
    })
.catch((err)=>console.log(err))