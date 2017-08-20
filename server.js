var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'Article 1 | Dheeraj',
    date:'AUG 16 2017',
    heading:'Article one',
    content: ` 
        <p>
          This is my article one content.Nothing more to say right now.Go back to home.If possible check article 2 and 3.
        </p> `
};
function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate=`
    <html>
    <head>
         
        <title>Article 1 | Dheeraj </title>
         <link href="/ui/style.css" rel="stylesheet" /> 
          <link href="https://cdn.dribbble.com/users/5443/screenshots/3116730/dk-logo_1x.png" rel="shortcut icon"/>
    </head>
    
    <body>
     <div class="container">
      <div>
        <a href="/">HOME</a>
      </div>
       <hr>
       
      <h2>ARTCILE ONE</h2>
      
      <div>
        AUG 16 
      </div>
      
      <div>
         <p>
            This is my article one content.Nothing more to say right now.Go back to home.If possible check article 2 and 3.
         </p>
      </div>
     </div> 
      
      
    </body>
    </html>
    `;
       return htmltemplate;
}   

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));  
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));    
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
