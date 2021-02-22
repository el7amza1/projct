

    const sections = document.querySelectorAll('section');
    


    const newUl = document.getElementById("navbar__list");

    sections.forEach( element => {
      const newLi = document.createElement('li');
      const newA = document.createElement('a');
      newA.style.padding = "4px 6px 4px 6px";
      newA.style.margin = "2px 3px 2px 3px";
      
      newA.textContent = element.getAttribute('data-nav');
      newLi.appendChild(newA);
      newUl.appendChild(newLi);  
     } );   

    

     const secs = document.getElementsByTagName('section') // Get All Sections
     const lis = document.getElementsByTagName('a')
     var body =document.body; //Get Body Element
     //alert (page.scrollTop)
     // Start Function To Get Scroll Position
     body.onscroll = function(){ 
      //  console.log(window.scrollY);
      
      // Loop All Sections
      for(i = 0 ; i < secs.length;i++){
       

        // low el section mabyeen el -50 to 200 haynafze el class 
        // getBoundingClientRect().top btgeeb el postion bet3 el element
        if(secs[i].getBoundingClientRect().top > -50 && secs[i].getBoundingClientRect().top < 200){
          
          console.log(secs[i].getAttribute('id'))
          
          // console.log(secs[i].getBoundingClientRect().top)
          
          document.getElementById(secs[i].getAttribute('id')).classList.add('your-active-class');
          lis[i].classList.add('activeLink')
        }
        else
        {
          document.getElementById(secs[i].getAttribute('id')).classList.remove('your-active-class');
          lis[i].classList.remove('activeLink')
        }

        
      }
     
     }
     
   // End Function To Get Scroll Position

/*

    function SectionView(){
    var sec = document.getElementsById ('section1');
    
    var rect = sections.getBoundingClienRect();
        x = rect.left;
        y = rect.top;
        w = rect.width;
        h = rect.height;
        alert ("Left" +x+ ", Top" +y+ ", Width" +w+ ", Height" +h) ;
    if (rect.top > 0 && rect.top <= 200) {
          //remove 
     document.querySelector('section').classList.remove('your-active-class');
    
          // add
      sections.classList.add('your-active-class');
        x = classList.left;
        y = classList.top;
        w = classList.width;
        h = classList.height;
        alert ("Left" +x+ ", Top" +y+ ", Width" +w+ ", Height" +h) ;
        }                    
      }
    
      */
      
      
      
      


  

   
