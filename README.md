# 🌦️ Weather Dashboard

A modern, responsive, and dynamic weather application that provides real-time weather information based on a user-selected location or the user's current location.

Built using HTML, CSS, JavaScript, Geolocation API, and Visual Crossing Weather API.

---

## 📸 Features

### Core Features

- Search weather by city or location
- Automatic weather detection using the browser's Geolocation API
- Display current temperature
- Display weather conditions (Sunny, Cloudy, Rainy, etc.)
- Display wind speed
- Display probability of precipitation (chance of rain)
- Refresh weather data instantly
- Responsive design for desktop, tablet, and mobile devices
- Loading animation while fetching weather data

### Forecast Features

- Hourly weather forecast
- Future 24-hour weather outlook
- Dynamic weather updates using API data

### UI Features

- Modern Glassmorphism design
- Mobile-first responsive layout
- Clean and user-friendly interface
- Fast and lightweight application

---

## 🚀 Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### APIs

- Visual Crossing Weather API
- Browser Geolocation API

### Development Tools

- Visual Studio Code
- Live Server

---

## 📂 Project Structure

```text
weather-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
```

### 2. Open Project

```bash
cd weather-dashboard
```

### 3. Open with Live Server

If using VS Code:

- Install the Live Server extension
- Right-click `index.html`
- Select **Open with Live Server**

---

## 🔑 API Setup

This project uses the Visual Crossing Weather API.

### Create API Key

1. Visit:

https://www.visualcrossing.com/weather-api

2. Create a free account

3. Generate an API key

4. Open:

```javascript
js/app.js
```

Replace:

```javascript
const API_KEY = "YOUR_VISUAL_CROSSING_API_KEY";
```

With:

```javascript
const API_KEY = "YOUR_API_KEY";
```

---

## 🌍 Usage

### Search for a Location

Enter a city name in the search field:

```text
Jakarta
London
Tokyo
New York
```

Click:

```text
Search
```

to retrieve the latest weather data.

---

### Refresh Weather

Click the **Refresh** button to update the current weather information.

---

### Automatic Location Detection

When the application loads, it requests permission to access your location.

If permission is granted:

- Your current location weather is displayed automatically.

If permission is denied:

- A default location can be loaded.

---

## 📊 Weather Information Displayed

- Location Name
- Current Temperature
- Weather Condition
- Wind Speed
- Chance of Rain
- Hourly Forecast
- Future Weather Outlook

---

## 📱 Responsive Design

The application is optimized for:

- Mobile Phones
- Tablets
- Laptops
- Desktop Screens

---

## 🔮 Future Improvements

- 7-Day Forecast
- Weather Icons
- Dark/Light Mode
- Temperature Unit Toggle (°C / °F)
- Weather Charts using Chart.js
- Framer Motion Animations
- Progressive Web App (PWA)
- Offline Support
- Multi-Language Support

---

## 🛠️ Error Handling

The application includes handling for:

- Invalid locations
- API errors
- Network failures
- Geolocation permission denial

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push to branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed as a modern weather dashboard project using JavaScript and Weather APIs to demonstrate frontend development, API integration, responsive design, and dynamic user experiences.
