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

     

      const originalLink  = myJson.result.original_link;
      const shortLink =  myJson.result.short_link3;

      

      outputOne.style.display = "flex";
      oldUrlOne.innerHTML= originalLink;
      shortLinkOne.innerHTML = shortLink;

      url = " ";

      
      
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
  