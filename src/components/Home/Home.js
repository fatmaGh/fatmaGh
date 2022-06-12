import React, { useEffect } from 'react'
import styled from 'styled-components'
import site1 from '../images/site1.png'
import site2 from '../images/site2.jpg'
import site3 from '../images/site3.jpg'
import '../../App.css'
import Contact from './Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
import dev1 from '../images/pc.png'
import dev2 from '../images/tablette.png'
import dev3 from '../images/mobile.png'
import { useHistory } from "react-router-dom"
import Presentation from '../Presentation/Presentation'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-family: 'Arima Madurai', cursive;
    width: 80%;
    line-height: 1.6em;
    font-weight: 500;
    font-size: 1.5em;
    color: #FF5151;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 0 auto 1.5% auto;
`;  

const Box = styled.section`
    height: 500px;
    width: 80%;
    background-color: #f2f2f2;
    border-radius: 5px;
    margin: 1% auto;
`;

const Curved = styled.div`
    height: 180px;
    width: 100%;
    background-color: #FF5151;
`;

const Work = styled.div`
    /* height: 600px; */
    padding-bottom: 2%;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    
`;

const Img = styled.img`
    border-radius: 10px;
`;



const Home = () => {
    
    const history = useHistory();
    
    const handleClick = () => {
        history.push("/portfolio");
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])   

    return (
        <Container>
            <Presentation/>
            <Box>               
                <img style={{position:'relative', top:'30px', left:'90px'}} data-aos='fade-left' src={dev1} alt="" />
                <img style={{position:'relative', top:'80px', left:'-530px'}} data-aos='fade-up' src={dev2} alt="" />
                <img style={{position:'relative', top:'100px', left:'-70px'}} data-aos='fade-right' src={dev3} alt="" />
                <Title data-aos='fade-left' style={{color:'#3d5a80', position:'absolute', height:'300px', width:'300px', top:'350px', right:'170px', fontSize:'2em', textTransform:'capitalize', letterSpacing:'0'}}>
                    Fully responsive, custom designed websites
                </Title>
                <button onClick={handleClick} className="button" role="button" style={{top:'190px', left:'88px', zIndex:'1', padding:'calc(.875rem - 1px) calc(1.5rem - 1px)', color:'#3d5a80'}}>View Portfolio <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path  fill="#3d5a80" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></button>
            </Box>
                <div style={{margin:'1% 0 0 0'}}>
                    <svg style={{marginTop:'-150px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF5151" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <Curved>
                        <Contact/>
                    </Curved>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF5151" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>
            <div>
                <Title data-aos='flip-left' style={{ color:'#3d5a80', margin:'-2% 0 3% 10%', textAlign:'center', fontSize:'2.2em', textTransform:'uppercase', letterSpacing:'1px', fontWeight:'700'}}>
                    My recent Work
                </Title>
                <Work>
                    <div className='item'>
                        <Img data-aos='fade-left' src={site1}/>
                        <div className='itemHovered' style={{top:'1398px',left: '133px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'20%'}}>Cherry Soda Events</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'40px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website 
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                     <div className='item'>
                        <Img data-aos='fade-up' src={site2}/>
                        <div className='itemHovered' style={{top:'1398px',left: '500px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'20%'}}>LUNA & ZAAR</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'40px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website 
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <Img data-aos='fade-left' src={site3}/>
                        <div className='itemHovered' style={{top:'1398px',left: '866px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'22%'}}>Portuguese Language School</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'15px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website 
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* <div className='item'>
                        <Img data-aos='fade-left' src={site4}/>
                        <div className='itemHovered' style={{top: '1705px', left:'133px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'20%'}}>Start Mesh</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'40px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website 
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <Img data-aos='fade-up' src={site5}/>
                        <div className='itemHovered' style={{top: '1705px', left:'500px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'20%'}}>Spencer Panels</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'40px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='item'>
                        <Img data-aos='fade-right' src={site6}/>
                        <div className='itemHovered' style={{top: '1705px', left:'866px'}}>
                            <Title style={{color:'white', fontSize:'1.2em', paddingLeft:'20%'}}>Global Partnerships</Title>
                            <Title style={{color:'white', fontSize:'0.8em', marginLeft:'40px'}}>Website Design & Development</Title>
                            <button className="button" role="button" style={{top:'40px', left:'170px', zIndex:'1', height:'40px', width:'150px', fontSize:'1em'}}>
                                View Website 
                                <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                </svg>
                            </button>
                        </div>
                    </div> */}
                </Work>
            </div>
        
        </Container>
    )
}

export default Home

