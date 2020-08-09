import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChartWrapper from './ChartWrapper';

class App extends React.Component{
    render(){
        return(<>
            <div>Hello D3</div>
            <ChartWrapper />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
