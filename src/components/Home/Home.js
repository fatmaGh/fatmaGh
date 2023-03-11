import React, { useEffect } from 'react'
import site1 from '../../images/site1.png'
import '../../App.css'
import Contact from './Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
import dev1 from '../../images/pc.png'
import dev2 from '../../images/tablette.png'
import dev3 from '../../images/mobile.png'
import { useHistory } from 'react-router-dom'
import Presentation from '../Presentation/Presentation'
const Home = () => {    
    const history = useHistory();    
    const handleClick = () => {
        history.push("/portfolio");
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])   
    return (
        <div className='container'>
            <Presentation/>
            <section className='box'>               
                <img style={{position:'relative', top:'30px', left:'90px'}} data-aos='fade-left' src={dev1} alt="" />
                <img style={{position:'relative', top:'80px', left:'-530px'}} data-aos='fade-up' src={dev2} alt="" />
                <img style={{position:'relative', top:'100px', left:'-70px'}} data-aos='fade-right' src={dev3} alt="" />
                <div data-aos='fade-right'>
                    <h1 className='title-box'>
                        Fully responsive, custom designed websites
                    </h1>
                    {/* <button  onClick={handleClick} className="button button-box" role="button" >View Portfolio <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path  fill="#3d5a80" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></button> */}
                </div>
            </section>
            <div className='contact-section'>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF5151" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <div className='curved'>
                    <Contact/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF5151" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <div>
                <h1 className='section-title' data-aos='flip-left' >
                    My recent Work
                </h1>
                <div className='work'>
                    <div className='item'>
                        <div className='site1' ><img data-aos='fade-left' src={site1}/></div>
                        <div className='itemHovered' data-aos='fade-right' >
                            <h1 className='title-item item1'>Website Design & Development</h1>
                             <h1 className='title-item item2'>Tch-industries</h1>
                                <button className="button VS-button" role="button">
                                    <a className='web-links' href='https://www.tch-industries.com/' target='_blank'>
                                        View Website 
                                    </a>
                                    <svg style={{marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                        <path  fill="#FF5151" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                                    </svg>
                                </button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        
        </div>
    )
}

export default Home