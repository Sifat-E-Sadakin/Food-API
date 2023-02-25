console.log('connected');



fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then( res => res.json())
.then (foods => sm(foods.meals));

let sm = foods => {

    

    let s = document.getElementById('sec');
    s.innerHTML=``;
    for (const meal of foods) {
        console.log(meal);
        let div = document.createElement('div');
        div.innerHTML=`
                        <a href="#">
                        <img class="rounded-t-lg" src="${meal.strMealThumb}" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                        <h5 class="mb-2 h5 text-2xl font-bold tracking-tight text-gray-900 ">${meal.strMeal}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        
                    </div>
                </div>
        `;
        
        s.appendChild(div);
    }
}



function search(){
    let inp = document.getElementById('input');
    console.log(inp.value);
    searchFood(inp.value);
}
function searchFood(fName){
    console.log(fName);
     let url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${fName}`;
     console.log(url);
     fetch(url)
    .then( res => res.json())
    .then (foods => sm(foods.meals));


}