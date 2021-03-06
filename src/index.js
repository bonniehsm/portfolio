import React from 'react';
import ReactDOM from 'react-dom';
import StyleButton from './presentational/StyleButton';
import './index.css';
/*import Cloudy from './assets/Cloudy_1080p.mp4';*/
import GithubIcon from './assets/github-50.png';
import LinkedInIcon from './assets/linkedin-50.png';
import Profile from './assets/Profile.JPG';
import PageStyles from './PageStyles';
import ImageButton from './common/ImageButton';

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
            <div id={this.state.style + "-background"} className="background">     
                { 
                    /*
                    this.state.style == PageStyles.CLOUDY 
                        ? 
                        <video id="video-cloudy" autoPlay muted loop>
                            <source src={Cloudy} type="video/mp4"></source>
                        </video>
                        : 
                        null
                    */
                }       
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
                    <main id="main-content">
                        <div id="my-profile">
                            <div id="my-profile-box">
                                <img src={Profile} alt="Profile Image" className="my-profile-img"/>
                            </div>
                        </div>
                        <div id="content-details">
                            <div id="blurb">
                                <p id="my-message">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Maecenas vitae libero a mi sodales fringilla. 
                                    Curabitur quis egestas lacus, nec venenatis ligula. 
                                    Mauris bibendum fringilla neque in aliquet. 
                                    Vestibulum eget massa egestas, volutpat nibh eu, vehicula nibh. 
                                    Nam elementum in leo at vulputate. 
                                    Pellentesque sagittis aliquet molestie.                                
                                </p>
                            </div>
                            <div id="more-info">
                                <ImageButton 
                                    link="https://github.com/bonniehsm"
                                    image={GithubIcon}
                                    alt="Github Icon"
                                />
                                <ImageButton
                                    link="https://www.linkedin.com/in/bonnie-hung/"
                                    image={LinkedInIcon}
                                    alt="LinkedIn Icon"
                                />
                            </div>
                        </div>
                    </main>
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
                    <footer>
                        <p id="credits">Free B-Roll by <a target="_blank" href="http://www.videezy.com">Videezy.com</a></p>
                        <p><a target="_blank" href="https://icons8.com/icons/set/github">GitHub</a>, <a target="_blank" href="https://icons8.com/icons/set/linkedin">LinkedIn</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                    </footer>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <MyPage/>,
    document.getElementById('root')
);