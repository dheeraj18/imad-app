var button = document.getElementById('counter');

button.onclick=function (){
    
    var request =new XLMHttpRequest();
   
    request.onreadystatechange = function(){
        if(request.readystate === XLMHttpRequest.DONE)
        {
             if(requesy.status===200)
             {
               var counter= request.responsetext;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
             }
        }
        
    };
    
request.open('GET','http://dheerajkakumani.imad.hasura-app.io/counter',true);
request.send(null);
};

