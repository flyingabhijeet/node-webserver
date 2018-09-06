const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('currentYear',()=>{
    return new Date().getFullYear();
});
var app = express();

app.use((request,response,next)=>{
    console.log(request.url);
    console.log(request.method);
    next();
})
// app.use((request,response,next)=>{
//     response.render('maintain.hbs');
//     //maintainence page 
// })
app.use(express.static(__dirname+'/playground'));

app.set('view engine','hbs');

app.get('/',(request,response)=>{
    // response.send({
    //     Name:'Andew',
    //     Age : 12
    // });
    response.render('home.hbs',{
        // currentTime: new Date(),
        greeting : 'Welcome'
    });
});

app.get('/about',(request,response)=>{
    response.render('about.hbs',{
        // currentTime: new Date(),
        greeting : 'Serving the best '
    })
});

app.get('/bad',(request,response)=>{
    response.send({ErrorMessage:'Page Not Found!!'})
});

app.listen(3000,()=>{
    console.log('Server Up')
}); //portNumber