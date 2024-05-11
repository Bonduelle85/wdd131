
let temp = 4;
let wind = 20;

const calculateWindChill = (temp, wind) =>
  13.12 +
  0.6215 * temp -
  11.37 * Math.pow(wind, 0.16) +
  0.3965 * temp * Math.pow(wind, 0.16);

document.querySelector("#wind-chill").textContent =
  temp <= 10 && wind >= 4.8
    ? `${calculateWindChill(temp, wind).toFixed(2)} °C`
    : "N/A";
