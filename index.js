const express = require('express');
const app = express();

app.set("view engine","ejs"); 
app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/error',(req,res,next)=>{
    // res.send("this is an error page")
    throw  Error("Something Went Wrong");
});
app.use(function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500)
    res.render('error',{error:err})
  

})

// app.use((req,res,next)=>{
// console.log(req);
// console.log("if you want to run something before routing then we use midelware next function is compelsory for route")
// next();
// });
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
// app.get('/',(req,res)=>{
//     res.render('index',{name:'Ihtasham'})
// })
// app.get('/profile',function(req,res){
//     res.send("this is a profile");
// });
// app.get('/profile/:username',(req,res)=>{
//     res.send(`this is second profile name is ${req.params.username}`);
// });

app.listen(3000);