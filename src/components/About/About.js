import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './About.css'
import Presentation from '../Presentation/Presentation';

const Content = styled.div`
    width: 100%;
    margin: 2% auto;
`;

const Skills = styled.div`
    width: 80%;
    margin: 2% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;



const About = () => {

    const [count, setCount] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    // useEffect(() => {        
    //     if(count != 80){
    //         const id = setInterval(() => setCount(count => count+1),30)
    //         setIntervalId(id)
    //     }
    //     else if(count == 80){
    //         clearInterval(intervalId)
    //     }
    // }, [])

    return (
        <Content>
            <Presentation/>
            <Skills>
                <h2>Skills...</h2>
                <div className='skills'>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    {count} %
                                </div>
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#3d5a80" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>html</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    75%
                                </div>
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>css</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    45%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>scss</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    65%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>react js</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    50%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>redux</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    90%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>bootstrap</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    30%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>mongodb</h3>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    50%
                                </div>                            
                            </div>
                        </div>
                        <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#FF5151" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className='bootstrap' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <h3>node js</h3>
                    </div>
                </div>
            </Skills>

        </Content>
    )
}

export default About
