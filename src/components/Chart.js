import { Line, Pie } from 'react-chartjs-2'

const Chart = ({ line, lineData, pieData }) => {
  const lineChart = !lineData ? (
    ''
  ) : (
    <Line
      data={{
        labels: lineData.map(({ Date }) => Date.substring(0, 10)),
        datasets: [
          {
            data: lineData.map(({ Confirmed }) => Confirmed),
            label: 'Infected',
            borderColor: '#6200ee',
            fill: true,
          },
          {
            data: lineData.map(({ Deaths }) => Deaths),
            label: 'Deaths',
            borderColor: '#cf6679',
            backgroundColor: 'rgba(128,0,0,0.5)',
            fill: true,
          },
          {
            data: lineData.map(({ Recovered }) => Recovered),
            label: 'Recovered',
            borderColor: '#018786',
            backgroundColor: 'rgba(50,205,50,0.7)',
            fill: true,
          },
        ],
      }}
    />
  )

  const pieChart = !pieData ? (
    ''
  ) : (
    <Pie
      data={{
        labels: ['Infected', 'Recovered', 'Deaths', 'Active'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(48,25,52,1)',
              'rgba(50,205,50,0.7)',
              'rgba(128,0,0,0.5)',
              'rgba(70,130,255,0.7)',
            ],
            borderColor: ['#6200ee', '#018786', '#cf6679', '#3700b3'],
            borderWidth: 0,
            data: [
              pieData.TotalConfirmed,
              pieData.TotalRecovered,
              pieData.TotalDeaths,
              pieData.TotalConfirmed -
                (pieData.TotalRecovered + pieData.TotalDeaths),
            ],
          },
        ],
      }}
    />
  )

  return <div>{line ? lineChart : pieChart}</div>
}

export default Chart
