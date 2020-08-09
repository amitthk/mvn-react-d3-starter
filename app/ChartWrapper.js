import React from 'react';
import D3Chart from './D3Chart';


export default class ChartWrapper extends React.Component {

    componentDidMount(){
        new D3Chart(this.refs.chart);
    }

    render(){
        return (<>
        <div ref='chart'></div>
        </>);
    }
}
