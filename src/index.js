import React from 'react';
import ReactDOM from 'react-dom';
import PageStyles from './PageStyles';
import './index.css';


class MyPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //default page style is SIMPLE
            style: PageStyles.SIMPLE,
        }
    }
    render(){
        return(
            <div id={this.state.style + "-background"}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line className="v-line" x1="50px" x2="50px" y1="0" y2="800px"/>
                </svg>
            </div>
        );
    }
}

ReactDOM.render(
    <MyPage/>,
    document.getElementById('root')
);