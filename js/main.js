
async function GetJSON(url) {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error('Error al obtener el JSON:', error);
	}
}

async function main(){
	data = await GetJSON("/data/log.json");
	const carTemplate = document.getElementById("daily-card");
	const mainCards = document.getElementsByTagName('main');

	data.forEach(car => {
		const instance = carTemplate.content.cloneNode(true);
		instance.querySelector(".model").textContent = car.modelo;
		instance.querySelector(".chapa").textContent = car.chapa;
		instance.querySelector(".ref").textContent = car.ref;
		instance.querySelector(".bat").textContent = car.bateria;
		instance.querySelector(".status").textContent = car.estado;
		instance.querySelector(".tank").textContent = car.combustible;
		instance.querySelector(".details").textContent = car.detalles;
		mainCards.appendChild(instance);
	});
}

window.addEventListener('DOMContentLoaded', main);