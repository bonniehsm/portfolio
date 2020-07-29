import React from 'react';
import ReactDOM from 'react-dom';
import StyleButton from './presentational/StyleButton';
import './index.css';
import PageStyles from './PageStyles';


class MyPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //default page style is SIMPLE
            style: PageStyles.SIMPLE,
        }
        this.handleStyleButtonClick = this.handleStyleButtonClick.bind(this);
    }

    handleStyleButtonClick(style){
        console.log(`handleStyleButtonClick: ${style} passed`)
        this.setState({
            style: style
        });
    }

    render(){
        console.log(`State: style: ${this.state.style}`);
        return(
            <div id={this.state.style + "-background"}>            
                <div className="page-container">
                    <div className="page-options-buttons" id="options-top">
                        <StyleButton 
                            text="KEEP IT SIMPLE" 
                            pageStyle={PageStyles.SIMPLE}
                            click={this.handleStyleButtonClick}
                        />
                        <StyleButton 
                            text="CLOUDY DAYS" 
                            pageStyle={PageStyles.CLOUDY}
                            click={this.handleStyleButtonClick}
                        />
                    </div>
                    <div className="page-options-buttons" id="options-bottom">
                        <StyleButton 
                            text="ANIMATED" 
                            pageStyle={PageStyles.ANIMATED}
                            click={this.handleStyleButtonClick}
                        />
                        <StyleButton 
                            text="UNDECIDED" 
                            pageStyle={PageStyles.UNDECIDED}
                            click={this.handleStyleButtonClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <MyPage/>,
    document.getElementById('root')
);