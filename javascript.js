 function clock() {
                    
     var date = new Date();
     var y = new Date().getFullYear();
     var k = new Date().getMonth()+1;
     var d = new Date().getDay();
     var h = new Date().getHours();
     var m = new Date().getMinutes();
     var s = new Date().getSeconds();
     var t = new Date().getDate();
     var getday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     
     var years = document.getElementById('years');
     var days = document.getElementById('weekday');
     var hours = document.getElementById('hours');
     var months = document.getElementById('months');
     var today = document.getElementById('today');
     var minutes = document.getElementById('minutes');
     var seconds = document.getElementById('seconds');

        
         // innerHTML codes
   
     
        days.innerHTML = getday[d] ;
        years.innerHTML = y;
        months.innerHTML= k + '/' + t ;
        hours.innerHTML = h + ':' + m +':' + s;
        minutes.innerHTML = m +':' + s;
        today.innerHTML = d;
        
                
                
}
            
            
var interval = setInterval(clock, 1000);
            
           
        // Dark-mode code

        function avondKlok() {
                
            var date = new Date();
            var h = date.getHours();
            var d = document.getElementById('theme');

            if (h > 18 || h < 7 )   {
               
                d.classList.add('darkMode');
             }

            else    {
                
                d.classlist.remove('darkMode');



             } 
                
                
                
            
            }
            setInterval (avondKlok,1000)
            
            avondKlok();
