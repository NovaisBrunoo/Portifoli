import './style.css'
import wave from '../../assets/wave(7).svg'
import perfil from '../../assets/profile-pic (4).png'
import logopostgre from '../../assets/logos/postgresql.svg'
import logogit from '../../assets/logos/iconmonstr-github-1.svg'
import logogiticon from '../../assets/logos/logos_git-icon.svg'
import logocss from '../../assets/logos/vscode-icons_file-type-css.svg'
import logohtml from '../../assets/logos/vscode-icons_file-type-html.svg'
import logojs from '../../assets/logos/vscode-icons_file-type-js-official.svg'
import logovscode from '../../assets/logos/vscode-icons_file-type-vscode.svg'
import logoreact from '../../assets/logos/logos_react.svg'

import { Fade } from 'react-reveal';
function Homepage2() {
    return (
        <div className='Homepage2'>
            <img className='Logo' src={wave} alt='' />
            <div className='containerLeft'>
                <Fade left delay={1000}>

                    <div className='Tech'>
                        <img src={logocss} alt='' />
                        <img src={logogit} alt='' />
                        <img src={logogiticon} alt='' />
                        <img src={logohtml} alt='' />
                        <img src={logojs} alt='' />
                        <img src={logovscode} alt='' />
                        <img src={logoreact} alt='' />
                        <img src={logopostgre} alt='' />

                    </div>
                </Fade>

            </div>
            <div className='containerRight'>
                <Fade right delay={1500}>  <img className='perfilRight' src={perfil} alt='' />
                    <h1>Minha Stacks e Tech</h1>


                </Fade>
            </div>
        </div>
    )
}

export default Homepage2