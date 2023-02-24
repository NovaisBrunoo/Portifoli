import './style.css';
import { Fade } from 'react-reveal';


import Homepage from '../../components/Homepage';
import Homepage2 from '../../components/Homepage2';


function Main() {

  return (
    <div className='container'>
      <Fade bottom duration={2000}>
        <div>
          <Fade bottom delay={500}>
            <Homepage />
          </Fade>
        </div>

        <div>
          <Fade bottom delay={500}>
            <Homepage2 />
          </Fade>
        </div>

      </Fade>
    </div>
  );
}

export default Main;
