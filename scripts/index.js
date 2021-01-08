//navigation

function toggle() {
    var navbar = document.getElementById("navMobile");
    if (navbar.style.display === "flex") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  }

  const  testApi = async ()=> {
    try{
  let response = await fetch("https://api.shrtco.de/v2/" );
  console.log(response)
  let data = await response.json()
  return data;
   }catch (error){
        console.log(error)
    }
  
}

testApi()
  .then(data => console.log(data),{ METHOd  :  "POST"}); 


  // get and store the url entered by user

  //validate  url

  const linkFunction = ()=> {
    let url = document.getElementById("urlInput").value;

   //let isValid = validUrl(url);
    
   console.log(validUrl(url));
    
    }
    let validUrl = (url)=> {
        let check = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!check.test(url)){
            document.getElementById("errMsg").innerHTML = "Please add a link"
        }else{
            document.getElementById("errMsg").innerHTML = ""
        }
        
        return console.log(url);
        }
    

  
  

  // send the url as a post request to the api
  // get the shortened url from the api
  // render the link in an a tag
  // store the link in local storage
  // copy the link onclick
  