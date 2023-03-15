const APILINK ='https://api.themoviedb.org/3/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';


const IMG_PATH ='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI ='https://api.themoviedb.org/3/movie/550?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=';

// 985a02e15c6b6643fdf86170aa7b46fc


const main = document.getElementById('section');
const form = document.getElementById('form')
const search = document.getElementById('query');

returnMovies(APILINK)
function returnMovies(url){
    fetch(url)
    .then(res=>res.json)
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element=>{
            const div_card = document.createElement('div')
            div_card.setAttribute('class','card')

            const div_row = document.createElement('div')
            div_card.setAttribute('class','row')

            const div_column = document.createElement('div')
            div_card.setAttribute('class','column')

            const image = document.createElement('div')
            div_card.setAttribute('class','thumbnail')
            div_card.setAttribute('id','image')

            const title = document.createElement('div')
            div_card.setAttribute('id','title')
            const center = document.createElement('div')

            title.innerHTML = `${element.title}`
            image.src = IMG_PATH + element.poster_path ;

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)

            main.appendChild(div_row)
         
        });
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML=''

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem)
        search.value = '';
    }

})
