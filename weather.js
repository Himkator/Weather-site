document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  let input = document.querySelector('input');
  var city = input.value.trim();
  getData(city);
});

async function getData(city) {
  var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61d230437d8e76b6ce1a5cd232005c47`);
  var data = await res.json();
  if (res.status !== 200) {
    alert(data.message);
  } else {
    createWeather(data);
  }
}

getData('Taldykorgan');
function createWeather(data) {
  document.querySelector('.weather').innerHTML = `
  <div>  
  <p class="city">${data.name}</p>   
    <div class="q">
        <span class="black">Wind: <b>${Math.round(data.wind.speed)} m/s</b></span><br>
        <div id="wet" >Humidity:<b>${data.main.humidity}%</b></div>
    </div> 
    </div>
    <div class="day">
        <p class="today">Today</p>
        <img class="img" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <span class="C">${(Math.round(data.main.temp - 273))}°C</span>
    </div>`;
}
  function my_function() {
    var data = new Date();
    document.querySelector('.hours').innerHTML = data.getHours();
    document.querySelector('#day b').innerHTML = data.getDate();
    document.querySelector('.minute').innerHTML = data.getMinutes();
    document.querySelector('.second').innerHTML = data.getSeconds();
}

document.addEventListener('DOMContentLoaded', () => {
    my_function();
    setInterval(my_function, 1000);
}); 
// function new_func() {
//   setTimeout(function() {
//     alert("day is good");
//   }, 10000);
// }
// new_func(); 
let city = ["Almaty", "Astana", "London","Aktobe","Aktau", "Atyrau","Ankara", "Algiers", "Athens"];

let sortedCity = city.sort();

let input = document.getElementsByClassName(".input");

input.addEventListener("keyup", (e) => {
    removeEvents();
    let inputValue = e.target.value.toLowerCase();
    for (let i of sortedCity) {
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && inputValue !== "") {
            let listItems = document.createElement("li");
            listItems.classList.add("list-items");
            listItems.style.cursor = "pointer";
            listItems.textContent = i;
            document.getElementById('cities').appendChild(listItems);
            let word = "<b>" + i.substr(0, input.value.length)+"</b>"; 
            word += i.substr(input.value.length);
            listItems.innerHTML = word;
        }
    }
});

function displayNames(value) {
    input.value = value;
};  

function removeEvents() {
    let items = document.querySelectorAll(".list-items");
    items.forEach(item => {
        item.remove();
    });
}



// Переменные city и sortedCity:

// city: Это массив строк, содержащий названия городов.
// sortedCity: Это отсортированный массив city. Массив sort вызывается чтобы сортиравать.
// Переменная inputs:

// inputs: Это коллекция всех элементов с классом input на странице. Метод document.querySelectorAll('.input') используется для поиска всех таких элементов.
// Обработчик события keyup:

// input.addEventListener("keyup", (event) => {...}): Это обработчик события, который реагирует на событие keyup (когда пользователь отпускает клавишу) на элементе input.
// (event) => {...}: Это функция обратного вызова, которая выполняется при срабатывании события keyup. Параметр event содержит информацию о событии, в том числе о нажатой клавише и целевом элементе.
// Получение введенного значения:

// let inputValue = event.target.value.toLowerCase();: Эта строка получает введенное значение из элемента input, на котором произошло событие keyup, и преобразует его в нижний регистр. Полученное значение сохраняется в переменной inputValue.
// Цикл для фильтрации и отображения городов:

// for (let i of sortedCity) {...}: Это цикл for...of, который перебирает каждый элемент массива sortedCity, содержащий отсортированные города.
// if (i.toLowerCase().startsWith(inputValue) && inputValue !== "") {...}: Это условие проверяет, начинается ли текущий город с введенного значения (в нижнем регистре), и является ли введенное значение непустой строкой.
// Создание элементов списка для отображения совпадающих городов:

// let listItems = document.createElement("li");: Создает новый элемент списка.
// listItems.textContent = i;: Устанавливает текст элемента списка равным текущему городу i.
// listItems.setAttribute("onclick", displayNames('${i}'));: Добавляет атрибут onclick элементу списка, чтобы при клике на него вызывалась функция displayNames() с аргументом i.
// document.querySelector('.list').appendChild(listItems);: Добавляет созданный элемент списка в элемент с классом list, который предполагается, что это <ul> (список) в вашем HTML-коде.
// Функция displayNames() и removeEvents():

// displayNames(value) {...}: Эта функция устанавливает значение всех элементов с классом input равным переданному значению value.
// removeEvents() {...}: Эта функция удаляет все элементы списка, чтобы предотвратить их дублирование при повторном вводе.
// Таким образом, весь этот код обрабатывает ввод пользователя в поле поиска, фильтрует города по введенному значению и отображает соответствующие города в виде списка под полем поиска.




// var url = 'http://api.geonames.org/searchJSON?q=&country=RU&maxRows=1000&username=demo';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Проверка наличия свойства 'geonames' в объекте 'data'
//     var allCities = data.geonames ? data.geonames.map(city => city.name) : [];
//     // Вызов функции для отображения списка городов
//     renderList(allCities);
//   })
//   .catch(error => console.error('Ошибка при загрузке данных:', error));

// // Функция для отображения списка городов
// function renderList(cities) {
//   var citiesList = document.querySelector('#cities');
//   citiesList.innerHTML = '';
//   cities.forEach(function(city) {
//     var li = document.createElement('li');
//     li.textContent = city;
//     citiesList.appendChild(li);
//   });
// }

