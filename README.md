🌍 WorldLens — Country Intelligence

WorldLens is an interactive web application that allows users to explore, analyze, and compare information about countries around the world using real-time data from the REST Countries API.

The application is designed to provide a simple and visual way to analyze demographic and geographic data, allowing users to discover differences between countries through comparisons and rankings based on different indicators.

🚀 Features
🌎 Global Exploration

Explore basic information about countries around the world, including:

name
flag
population
area
region and subregion
capital
languages
Gini index
⚖️ Country Comparison

Select multiple countries and compare them directly to analyze differences in:

population
territorial size
socioeconomic indicators

This helps users quickly understand how countries rank relative to each other.

🏆 Rankings

The application allows users to view rankings based on different indicators such as:

most populated countries
countries with the largest area
comparisons between regions
Gini index
population density
languages
🌐 Real-Time Data

All data is fetched directly from the REST Countries API, ensuring updated information for each country.

🛠️ Technologies Used
React
JavaScript (ES6+)
Fetch API
HTML5
CSS3

API used:

REST Countries API
📊 Data Retrieved from the API

The application uses the following API fields:

name
flags
population
area
region
subregion
capital
languages
cca3
gini

These fields enable comparative analysis between countries.

⚙️ Installation

Clone the repository:

git clone https://github.com/your-username/worldlens.git

Go into the project directory:

cd worldlens

Install dependencies:

npm install
▶️ Run the Application

Start the development server:

npm run dev

or

npm start

Then open in your browser:

http://localhost:3000
📡 API Consumption

The application fetches data using the endpoint:

https://restcountries.com/v3.1/all

and filters only the necessary fields to improve performance.

Example service used:

const BASE = 'https://restcountries.com/v3.1';
const FIELDS = 'name,flags,population,area,region,subregion,capital,languages,cca3,gini';
🎯 Project Purpose

This project was developed as part of a portfolio to demonstrate skills in:

consuming external APIs
state management in React
building interactive user interfaces
data visualization and comparison
🤝 Contributions

Contributions are welcome.

You can:

fork the repository
create a new branch
submit a pull request
