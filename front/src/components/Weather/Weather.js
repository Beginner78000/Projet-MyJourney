import { useEffect, useState } from "react";
import "./weather.scss";
import axios from "axios";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

export const Weather = ({ lat, lon }) => {
  const labels = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  const [maxTempData, setMaxTempData] = useState([]);
  const [rainData, setRainData] = useState([]);
  const [minTempData, setMinTempsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=dd49935b61e2462ea35114649221104&q=${lat},${lon}&fx=no&cc=yes&mca=yes&format=json&showlocaltime=yes`
        );

        const resAPI = res.data.data.ClimateAverages[0].month;
        console.log(resAPI);

        const maxTempArray = [];
        const minTempArray = [];
        const rainArray = [];
        resAPI.forEach((e) => {
          const maxTemperature = Math.round(e.absMaxTemp);
          const minTemperature = Math.round(e.avgMinTemp);
          const rain = Math.round(e.avgDailyRainfall);

          maxTempArray.push(maxTemperature);
          minTempArray.push(minTemperature);
          rainArray.push(rain);
        });
        setMaxTempData(maxTempArray);
        setMinTempsData(minTempArray);
        setRainData(rainArray);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lat, lon]);

  const data = {
    datasetIdKey: "id",
    labels: labels,
    datasets: [
      {
        id: 1,
        type: "line",
        label: "Pluviometrie en millimètres",
        data: rainData,
        backgroundColor: "#939292",
        borderColor: "#939292",
      },
      {
        id: 2,
        label: "Moyenne température maximale",
        data: maxTempData,
        type: "bar",
        borderColor: "#ffb600",
        backgroundColor: "#ffb600",
      },

      {
        id: 3,
        label: "Moyenne température minimale",
        data: minTempData,
        type: "bar",
        borderColor: "blue",
        backgroundColor: "#006eff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRation: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: "A quelle météo s'attendre ?",
        font: { size: 20 },
      },
    },
  };

  const style = {
    height: "50vh",
    width: "100%",
  };

  return (
    <div className="weather">
      <div className="weather-chart">
        <Bar style={style} className="chart" options={options} data={data} />
      </div>
    </div>
  );
};

export default Weather;
