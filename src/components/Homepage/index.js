import './style.css'
import wave from '../../assets/wave(6).svg'

import Card from '../Card';
import { Fade } from 'react-reveal';



function Homepage() {
    return (
        <div className='homepage'>
            <img src={wave} alt="" />
            <Fade left delay={1500}>
                <div className='logo'>
                    <img
                        src='https://blush.design/api/download?shareUri=ggNmr8A6Bn_1Leu0&c=Hair_0%7E3164cf-0.2%7E00a378_Rainbow_0%7Effa648-0.2%7E7ffc51_Skin_0%7Ed46b55-0.2%7E5e0606&w=800&h=800&fm=png'
                        alt=''
                    />
                </div>
            </Fade>
            <Fade right delay={1500}>
                <div className='hero'>

                    <Card />
                </div>
            </Fade>
        </div>
    );
}

export default Homepage