var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article 1 | Dheeraj',
        date:'AUG 16 2017',
        heading:'Article one',
        content: ` 
            <p>
              This is my article one content.Nothing more to say right now.Go back to home.If possible check article 2 and 3.
            </p> `},
    'article-two':{
        title:'Article 2 | Dheeraj',
        date:'AUG 17 2017',
        heading:'Article two',
        content: ` 
            <p>
              This is my article two content.Nothing more to say right now.Go back to home.If possible check article 3.
            </p> `},
    'article-three':{
        title:'Article 3 | Dheeraj',
        date:'AUG 18 2017',
        heading:'Article three',
        content: ` 
            <p>
              This is my article three content.Nothing more to say right now.Now just shut the f**k up and go to home.
            </p> `}
};

function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate=`
    <html>
    <head>
         
        <title>${title} </title>
         <link href="/ui/style.css" rel="stylesheet" /> 
          <link href="https://cdn.dribbble.com/users/5443/screenshots/3116730/dk-logo_1x.png" rel="shortcut icon"/>
    </head>
    
    <body>
     <div class="container">
      <div>
        <a href="/">HOME</a>
      </div>
       <hr>
       
      <h2>${heading}</h2>
      
      <div>
        ${date} 
      </div>
      
      <div>
         ${content}
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
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter + 1;
    res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));  
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var names[];
app.get('/submit.name', function (req, res) {
  var name;
  names.push(name);
  res.send(names);
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
