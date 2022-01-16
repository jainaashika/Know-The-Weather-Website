window.addEventListener("load", () => {
    //here we r calling api by coordinates
    //check if we are provided with location of user
    let location = document.getElementById("location");
    let icon = document.getElementById("icon");
    let tempvalue = document.getElementById("tempvalue");
    let climate = document.getElementById("climate");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            //let long,lat;
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9f9867acdd3f0d765ff0f4b7549e02ef`;
            fetch(base).then(response => response.json())
                .then(data => {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];
                    //assigning
                    location.textContent = name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273);
                    if (id < 250) {
                        icon.src = "storm.png";
                        document.getElementById("container").style.backgroundColor = "#444941";
                    }
                    else if (id < 350) {
                        icon.src = "rainy-day.png";
                        document.getElementById("container").style.backgroundColor = "#5584AC";
                    }
                    else if (id < 550) {
                        icon.src = "rainy-day (1).png";
                        document.getElementById("container").style.backgroundColor = "#292C6D";
                    } else if (id < 650) {
                        icon.src = "snow.png";
                        document.getElementById("container").style.backgroundColor = "#71DFE7";
                    } else if (id < 800) {
                        icon.src = "cold.png";
                        document.getElementById("container").style.backgroundColor = "#5584AC";
                    } else if (id == 800) {
                        icon.src = "sunny.png";
                    }
                    else {
                        icon.src = "clouds.png"
                        document.getElementById("container").style.backgroundColor = "#71DFE7";
                    }
                });
        });
    }

})
