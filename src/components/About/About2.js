import React from 'react'
import styled from 'styled-components'
import ProgressBar from 'react-animated-progress-bar';
import Presentation from '../Presentation/Presentation'


const Skills = styled.div`
    
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ; 
    grid-gap: 5em;  
    margin: 2% auto;
`;

const Title = styled.h6`    
    font-family: 'Arima Madurai', cursive;
    font-size: 1.4vw;
    color: #FF5151;
    text-transform:uppercase;    
    font-weight: 700;  
    letter-spacing: 0; 
    padding-left : 20px;
`;

const About2 = () => {
    return (
        <div >
        <Presentation/>
        <Skills>
            <div>
                <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="gray" defColor={{ good: 'yellow' }} />
                <Title>HTML</Title>
            </div>

            <div>
                <ProgressBar width="230" trackWidth="13" percentage="80" fontColor="gray" defColor={{ excellent: 'yellow' }}  />
                <Title>CSS</Title>
            </div>

            <div>
                <ProgressBar width="230" trackWidth="13" percentage="50" fontColor="gray" defColor={{ good: 'yellow' }}  />
                <Title>SCSS</Title>
            </div>
            
            <div>
                <ProgressBar width="230" trackWidth="13" percentage="70" fontColor="gray" defColor={{ excellent: 'yellow' }}  />
                <Title>ReactJs</Title>
            </div>

            <div>
                <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="gray" defColor={{ good: 'yellow' }} />
                <Title>Redux</Title>
            </div>

            <div>
                <ProgressBar width="230" trackWidth="13" percentage="90" fontColor="gray" defColor={{ excellent: 'yellow' }} />
                <Title>Bootstrap</Title>
            </div>
            
            <div>
                <ProgressBar width="230" trackWidth="13" percentage="40" fontColor="gray" defColor={{ fair: 'yellow' }} />
                <Title>mongodb</Title>
            </div>

            <div>
                <ProgressBar width="230" trackWidth="13" percentage="40" fontColor="gray"  defColor={{ fair: 'yellow' }} />
                <Title>NodeJs</Title>
            </div>

        </Skills>
        </div>
    )
}

export default About2
