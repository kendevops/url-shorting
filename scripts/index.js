//navigation

function toggle() {
    var navbar = document.getElementById("navMobile");
    if (navbar.style.display === "flex") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  }



// testApi()
  // .then(data => console.log(data),{ METHOd  :  "POST"}); 


  // get and store the url entered by user

  //validate  url

  const linkFunction = ()=> {
    let url = document.getElementById("urlInput").value;

   //let isValid = validUrl(url);
    
   finalURL = validUrl(url);

   //console.log(finalURL);

   if(finalURL != ""){

    const userAction = async () => {
      const response = await fetch('https://api.shrtco.de/v2/shorten?url='.concat(finalURL));

      const myJson = await response.json(); //extract JSON from the http response
      
      const outputOne = document.getElementById("outputOne");
      const oldUrlOne = document.getElementById("oldUrl");
      const shortLinkOne = document.getElementById("shortLink");

      const outputTwo = document.getElementById("outputTwo");
      const oldUrlTwo = document.getElementById("oldUrlTwo");
      const shortLinkTwo = document.getElementById("shortLinkTwo");
      
      const outputThree = document.getElementById("outputThree");
      const oldUrlThree = document.getElementById("oldUrlThree");
      const shortLinkThree = document.getElementById("shortLinkThree");

     

      const originalLink  = myJson.result.original_link;
      const shortLink =  myJson.result.short_link3;

      
      if(oldUrlOne.innerHTML === ""){
        outputOne.style.display = "flex";
        
        oldUrlOne.innerHTML= originalLink;
        shortLinkOne.value = shortLink;
    
        sessionStorage.setItem('shortLinkOne', shortLinkOne.value);
        let storedValue= sessionStorage.getItem('shortLinkOne');
        console.log(storedValue);
        
      } else if(oldUrlTwo.innerHTML  ===  "" && oldUrlOne.innerHTML !== ""  ){
        outputTwo.style.display = "flex";
        oldUrlTwo.innerHTML= originalLink;
        shortLinkTwo.value = shortLink;
        //sessionStorage.setItem('shortLinkTwo', shortLinkTwo.value);
        
      } else {
        outputThree.style.display = "flex";
        oldUrlThree.innerHTML= originalLink;
        shortLinkThree.value = shortLink;
        //sessionStorage.setItem('shortLinkThree', short_link3.value);
        
      }
      
      
      
      
      //console.log(myJson);
      

    }

    userAction();

   }
    
    }
    let validUrl = (url)=> {
        let check = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!check.test(url)){
            document.getElementById("errMsg").innerHTML = "Please add a link";
            document.getElementById("urlInput").value = "";
            url = "";

        }else{
            document.getElementById("errMsg").innerHTML = ""
        }

        return url;
        }
    

  
  

  // send the url as a post request to the api
  // get the shortened url from the api
  // render the link in an a tag
  // store the link in local storage
  // copy the link onclick
  const  copyLink = ()=> {
    
    let copyItem = document.getElementsByClassName("link");
    let alertBox = document.getElementById("alertBox");
    copyItem[0].select();
    copyItem[0].setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alertBox.style.display="block";
    let closeBtn = document.getElementsByClassName("closebtn");
      closeBtn[0].onclick = function(){
        let alertBox = document.getElementById("alertBox");
        alertBox.style.opacity ="0";
        setTimeout(function(){ alertBox.style.display = "none"; }, 600);
      };
  }
  
  
  