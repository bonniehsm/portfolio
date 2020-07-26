import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class MyPage extends React.Component {
    render(){
        return(
            <div>My Page</div>
        );
    }
}

ReactDOM.render(
    <MyPage/>,
    document.getElementById('root')
);