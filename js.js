var data = 
[
	// {title : "Ф.И.О.", text : "Рябинин Артем Денисович"},
	{title : "Возраст", text : "18 лет (12 запасных)"},
	{title : "Комплектация", text : "«комфорт во всём»"},
	{title : "Проходимость", text : "подтверждена полевыми испытаниями"},
	{title : "Тип двигателя", text : "жаворонок"},
	{title : "Максимальная скорость", text : "быстрее, чем лифт"},
	{title : "Вид топлива", text : "сгущенка"},
	{title : "Расход топлива (на работе/дома)", text : "200 мл какао на 1 км/∞"},
	{title : "Место работы", text : 'АО «НИИМЭ» <img class="logoJob" src="img/logo.svg" alt="">, амбассадор г. Химки'},
	{
		title : "Хобби", 
		list : [
			"Ремонтировать квартиры", 
			"Блоггинг", 
			"Велопрогулки по пересеченной местности. Сильно пересеченной.", 
			"Изучение новинок мира каршеринга",
			"Создание личных кабинетов"
			]
	},
	{
		title : "Любит", 
		list : [
			"Кушать", 
			"Жену", 
			"WEB-программирование", 
			"Ходить пешком по лестнице"
			]
	},
	{
		title : "Не любит", 
		list : [
			"Дистанционную работу", 
			"Жаркое лето", 
			"Новогодние украшения в ноябре"
			]
	},
	{
		title : "Особые навыки", 
		list : [
			"Стоять в абхазском наряде", 
			"Моментально уничтожать вафли «Коровка»"
			]
	},
]

var table = document.querySelector("table.about-one");
var tbody = table.querySelector("tbody");
tbody.innerHTML = "";

for (var i = 0; i < data.length; i++) {
	var item = data[i];

	if (item.text) {
		tbody.innerHTML +=
		`
		<tr>
			<td class="pr-5"><h6 class="text-secondary">${item.title}:</h6></td>
			<td><h6>${item.text}</h6></td>
		</tr>
		`;
	}
}

var table = document.querySelector("table.about-two");
var tbody = table.querySelector("tbody");

for (var i = 0; i < data.length; i++) {
	var item = data[i];

	if (item.list) {
		tbody.innerHTML +=
		`
		<tr>
			<td class="pr-5" style="vertical-align: baseline;"><h6 class="text-secondary">${item.title}:</h6></td>
			<td>${createUL(item.list)}</td>
		</tr>
		`;
	}	
}

function createUL(arr){
	var str = "<ul>";
	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
		str += `<li><h6>${item}</h6></li>` 
	}
	str += "</ul>";
	return str;
}



var buttonGift = document.querySelector(".button-gift");
buttonGift.onclick = function(e){
	this.clicked ? this.clicked = false : this.clicked = true;

	var aside = document.querySelector(".aside");
	var main = document.querySelector(".main");
	var gifts = document.querySelector(".gifts");
	var mainContainer = document.querySelector(".main-container");
	var congratulation = document.querySelector(".congratulation");

	if(this.clicked){
		if(window.innerWidth < 850){
			gifts.classList.add("d-block");
			window.scroll(0,document.body.offsetHeight - gifts.offsetHeight)
			return;
		}

		aside.classList.add("w-0");
		main.classList.add("w-100");
		main.classList.add("d-flex");
		gifts.classList.add("d-block");
		gifts.classList.add("show");
		mainContainer.classList.add("small");
		document.body.classList.add("p-relative");
		congratulation.classList.add("d-none");
	}else{
		aside.classList.remove("w-0");
		main.classList.remove("w-100");
		main.classList.remove("d-flex");
		gifts.classList.remove("d-block");
		gifts.classList.remove("show");
		mainContainer.classList.remove("small");
		document.body.classList.remove("p-relative");
		congratulation.classList.remove("d-none");
	}
};

window.onresize = function( event ) {
	var innerWidth = event.target.innerWidth;

	if (innerWidth < 850) {
		var aside = document.querySelector(".aside");
		var main = document.querySelector(".main");
		var gifts = document.querySelector(".gifts");
		var mainContainer = document.querySelector(".main-container");
		var congratulation = document.querySelector(".congratulation");

		aside.classList.remove("w-0");
		main.classList.remove("w-100");
		main.classList.remove("d-flex");
		if(!buttonGift.clicked){
			gifts.classList.remove("d-block");
		}
		gifts.classList.remove("show");		
		mainContainer.classList.remove("small");
		document.body.classList.remove("p-relative");
		congratulation.classList.remove("d-none");
	}else{
		if(buttonGift.clicked){
			var aside = document.querySelector(".aside");
			var main = document.querySelector(".main");
			var gifts = document.querySelector(".gifts");
			var mainContainer = document.querySelector(".main-container");
			var congratulation = document.querySelector(".congratulation");

			aside.classList.add("w-0");
			main.classList.add("w-100");
			main.classList.add("d-flex");
			gifts.classList.add("d-block");
			gifts.classList.add("show");
			mainContainer.classList.add("small");
			document.body.classList.add("p-relative");
			congratulation.classList.add("d-none");
		}
	}
};
var happyStr = "С Днем Рождения старичок!!! \nС Юбилеем!!! \n🎁 🎉 💰 🎁 🎉 💰"

console.info  (happyStr);
console.warn  (happyStr);
console.error (happyStr);