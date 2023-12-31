const Movies = localStorage.getItem("Movies");

function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })
    return params;
}

const movieId = getQueryParams(window.location.href)


const MovieData = JSON.parse(Movies);

const getSelectedMovie = MovieData.Search.find((movie, index,)=>{
     return movieId.q == index
})

console.log(getSelectedMovie)

async function handlebarMoviedata() {
let rawTemplate = document.getElementById("modalContainer").innerHTML
let compileTemplate = Handlebars.compile(rawTemplate)
let generateTemplate = compileTemplate(getSelectedMovie)
let movieContainer = document.getElementById("movieContainer")
movieContainer.innerHTML=generateTemplate 
}
handlebarMoviedata ()