import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import jsonData from '../../db.json';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }
  state={
    groupData: []
  }
  componentDidMount() {
    var gData = jsonData.AvgData;
    this.setState({ groupData : gData });
  }
  
  render() {
    console.log(this.state.groupData);
    var biPolarBarChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [10, 10, 10, 0, 5]
      ]
    };
    var biPolarBarChartOptions = {
      high: 10,
      low: 0,
    }
    return (
      <div>
        <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
      </div>
    );
  }  
}
export default LineChart;

