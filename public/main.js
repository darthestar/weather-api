
const createNode = (element) => {

    return document.createElement(element);//create the type of element you pass in the parameters

}

const append = (parent, el) => {

    return parent.appendChild(el);//append the second param (element) to the first one
}




const ul = document.querySelector("#weather-request");

// "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={3955220dac69ac6687ddbb6cea4a7f62}/"

const go = () => {
    let finalUrl = "";
    let api;
    let input = document.querySelector("#searchBox").value;
    console.log("input", input)
    console.log(input == NaN)

    if (isNaN(input)) {

        api = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial`
    }
    else {
        api = `http://api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial`
    }

    const key = "&appid=3955220dac69ac6687ddbb6cea4a7f62";
    finalUrl = `${api}${key}`
    console.log(finalUrl)

    fetch(finalUrl)
        .then((resp) => {
            return resp.json()//transform the data into json
        })
        .then(function (data) {
            console.log(data);
            //code for handling the data from API
            //create and append the li's to the ul
            let weather = data; //get the results

            let li = createNode('li')
            console.log(li)
            //parameters either zipcode or city id?
            //weather.description, main temp (convert to farenheit?), rain?
            li.textContent = `${weather.name}'s weather forecast is ${weather.weather[0].description} and a temperature of ${weather.main.temp}`;
            append(ul, li);

        })
}








