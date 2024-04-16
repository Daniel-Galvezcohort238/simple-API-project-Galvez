require('dotenv').config();
console.log(process.env)

class PracticeAPIProject {
    constructor() {
        
        this.form = document.querySelector('form');
        this.input = document.querySelector('input');

        this.loadEventListeners()
    }

    loadEventListeners(e) {
        this.form.addEventListener('submit', this._fetchGeocode.bind(e));
    }  

    updateWeatherList(place, weather) {
        const list = document.querySelector('ol');
        const listItem = document.createElement('li');
        const itemText = document.createTextNode(`${place}: ${weather}`);

        listItem.appendChild(itemText);
        list.appendChild(listItem);
    }

    _fetchGeocode(e) {
        e.preventDefault();
        
        const place = practiceAPIProject.input.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${config.API_Key}`)
            .then(response => response.json())
            .then(data => {
                if(data.hasOwnProperty('rain')) {
                    practiceAPIProject.updateWeatherList(place, `${data.weather[0].description}, ${data.rain}mm`);

                } else {
                    practiceAPIProject.updateWeatherList(place, `${data.weather[0].description}`);

                }

                console.log(data);
            })
    }

}

const practiceAPIProject = new PracticeAPIProject()

