import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    datasets: [{
        data: [10, 20, 30]
    }],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
};

const options = {
    cutout: 48,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
  };


  const plugins = [
    {
      id: 'text',
      beforeDraw: function (chart, a, b) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
  
        ctx.restore();
        ctx.font = '600 20px OpenSans';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#2b67b3';
  
        var text = '25% Transactions',
          textX = Math.round((width - ctx.measureText(text).width) / 1.98),
          textY = height / 2;
  
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];


function  DoughnutChart(){
    return(
        <>
        <Doughnut
            options={options}
            data={data}
            plugins={plugins}
        />
        </>
    )
}

export default DoughnutChart;

