let div=document.createElement("div")
div.setAttribute("class","container")
document.body.append(div);

let row=document.createElement("div");
row.setAttribute("class","row text-center");
div.append(row);

let cargarjuegos=async()=>{
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '185b7c86fbmsh0850a5d742c3536p1269f0jsn69a2b1efa97b',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result)
    result.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('col-lg-4');
        newDiv.innerHTML = `
          <div class="card" style="width: 18rem">
            <h2 class="card-header">${element.title}</h2>
            <img src="${element.thumbnail}" class="card-img-top" alt="image" />
          </div>
        `;
        row.appendChild(newDiv);
    });
} catch (error) {
	console.error(error);
}

}
cargarjuegos();