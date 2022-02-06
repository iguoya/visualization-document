# Chartjs

## 柱状图

```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "Salary",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true
        }
      }
    }
  }
}
```

## 线形图

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "January", "February", "March", "April", "May", "June"
    ],
    "datasets": [
      {
        "label": "Salary",
        "data": [0, 10, 5, 2, 20, 30, 45],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },

  "options": {
  }
}

```

## 气泡图

```chart
{
  "type": "bubble",
  "data": {
    "labels": [
      "China",
      "Amercian",
      "Russia",
      "EU"
    ],
    "datasets": [{
    "label": "各大经济体面积，人口，GDP对比",
    "data": [{
      "x": 141,
      "y": 17.70,
      "r": 96.0
    },{
      "x": 33.1,
      "y": 22.99,
      "r": 94.3
    },{
      "x": 14.6,
      "y": 1.70,
      "r": 17.12
    },{
      "x": 44.7,
      "y": 17.07,
      "r": 42.3
    }
    ],
    "backgroundColor": "rgb(255, 99, 132)"
  }]
  },
  "options": {
    
  }
}
```


## 饼图

```chart
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
```

## 雷达图

```chart
{
  "type": "radar",
  "data": {
    "labels": [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running"
    ],
    "datasets": [{
      "label": "My First Dataset",
      "data": [65, 59, 90, 81, 56, 55, 40],
      "fill": true,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgb(255, 99, 132)",
      "pointBackgroundColor": "rgb(255, 99, 132)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(255, 99, 132)"
    }, {
      "label": "My Second Dataset",
      "data": [28, 48, 40, 19, 96, 27, 100],
      "fill": true,
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "rgb(54, 162, 235)",
      "pointBackgroundColor": "rgb(54, 162, 235)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(54, 162, 235)"
    }]
  },
  "options": {
  }
} 
```
