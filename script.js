document.getElementById("errorPage").style.display ="none"


// FETCHING API
const searchbar = document.getElementById('searchbar');

function delayfunc() {
async function  callApi(searchterm="Spider") {
    let convertData
  try{
let apiData = await fetch(`https://www.omdbapi.com/?apikey=7dc7f767&s=${searchterm}`)
 convertData = await apiData.json()
// console.log(convertData) 

localStorage.setItem("Movies", JSON.stringify(convertData))
if (convertData.Response === "False") {
    document.getElementById("pageHeader").style.display="none"
    document.getElementById("Result").style.display="block"
    document.getElementById("loader").style.display="none"
    document.getElementById("errorPage").style.display = "none"
}else{
    document.getElementById("pageHeader").style.display="block"
    document.getElementById("Result").style.display="none"
    document.getElementById("loader").style.display="none" 
    document.getElementById("errorPage").style.display = "none" 
}
   } 
   catch(err){
        document.getElementById("errorPage").style.display = "grid";
         document.getElementById("loader").style.display="none"

}




// Hanldebar accessing Statement
 
let rawTemplate = document.getElementById("pageContainer").innerHTML
let compileTemplate = Handlebars.compile(rawTemplate)
let generateTemplate = compileTemplate(convertData)
let conatiner = document.getElementById("Container")
conatiner.innerHTML=generateTemplate 



const handlebarContent = document.querySelectorAll(".handlebarContent")

handlebarContent.forEach((movie,index) => {
    movie.addEventListener("click",()=> {
        const movieId = index;
        location.href = `./modal.html?q=${movieId}`
    }) 
});
}
callApi() 



// GETTING VAALUES ON SEARCHBAR
searchbar.addEventListener('input', function(element) {
    console.log(element.target.value)
    let searchTerm = element.target.value;
    let searchPage = document.getElementById("pageHeader")


    if  (searchTerm.length > 2) {
// RENDERING SEARCH RESULT PAGE
searchPage.innerHTML = "Your Search Results ...." 

        callApi(searchTerm)
    }
    else {
// RENDERING DEAFULT HOME PAGE
         searchPage.innerHTML = "You Might Like ...."

    callApi("Spider")
    }
})
}

setTimeout(delayfunc,800) 
    

