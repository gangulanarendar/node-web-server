var express= require('express');
var hbs= require('hbs');
var fs=require('fs');
var app=express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  var now=new Date().toString();
  fs.appendFileSync('server.log',`Accessed ${now} , ${req.path} \n`,(err)=>{
    console.log('some went wrong');
  });
  next();
});

app.use((req,res,next)=>{
res.render('maintenance.hbs');


});

app.get('/',(request,response)=>{

  // console.log('request '+request);

   response.render('home.hbs',{
       homeHeader : 'The Home Page',
       fullYear1 : new Date().getFullYear()

   });
});


app.listen(3000);
