const API_KEY = "DV8P29VXX86TXS6GCLKC3CM4P";

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const rain = document.getElementById("rain");

const searchBtn = document.getElementById("searchBtn");
const refreshBtn = document.getElementById("refreshBtn");
const input = document.getElementById("locationInput");

const loader = document.getElementById("loader");

let currentLocation = "";

async function getWeather(location) {
    showLoader();

    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=hours,current&key=${API_KEY}&contentType=json`;

        const response = await fetch(url);

        const data = await response.json();

        renderWeather(data);
    } catch (error) {
        alert("Unable to fetch weather");

        console.error(error);
    }

    hideLoader();
}

function renderWeather(data) {
    currentLocation = data.resolvedAddress;

    cityName.textContent = data.resolvedAddress;

    temperature.textContent = `${data.currentConditions.temp}°C`;

    condition.textContent = data.currentConditions.conditions;

    wind.textContent = `${data.currentConditions.windspeed} km/h`;

    rain.textContent = `${data.currentConditions.precipprob}% Rain`;

    renderHours(data.days[0].hours);
}

function renderHours(hours) {
    const pastContainer = document.getElementById("pastHours");

    const futureContainer = document.getElementById("futureHours");

    pastContainer.innerHTML = "";
    futureContainer.innerHTML = "";

    const currentHour = new Date().getHours();

    const previous24 = hours.slice(Math.max(0, currentHour - 24), currentHour);

    const next24 = hours.slice(currentHour, currentHour + 24);

    previous24.forEach((hour) => {
        pastContainer.innerHTML += `
<div class="hour-card">
<h4>${hour.datetime}</h4>
<p>${hour.temp}°C</p>
<p>${hour.conditions}</p>
</div>
`;
    });

    next24.forEach((hour) => {
        futureContainer.innerHTML += `
<div class="hour-card">
<h4>${hour.datetime}</h4>
<p>${hour.temp}°C</p>
<p>${hour.conditions}</p>
</div>
`;
    });
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

searchBtn.addEventListener("click", () => {
    const location = input.value.trim();

    if (location) {
        getWeather(location);
    }
});

refreshBtn.addEventListener("click", () => {
    if (currentLocation) {
        getWeather(currentLocation);
    }
});

async function loadCurrentLocation() {
    if (!navigator.geolocation) {
        getWeather("Jakarta");

        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            getWeather(`${lat},${lon}`);
        },

        () => {
            getWeather("Jakarta");
        },
    );
}

loadCurrentLocation();
