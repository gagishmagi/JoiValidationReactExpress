import { Line } from 'react-chartjs-2'
import React from 'react'

export default function Graph() {

const oldData = [25, 6, 4, 5, 2, 3];
const newData = []


for(let i = 0; i <= 30 ; i++){
    let random = Math.ceil(Math.random() * 100)
    newData.push(random);
}


const data = {
    labels: newData,
    datasets: [
      {
        label: 'Number of Votes',
        data: newData,
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}
