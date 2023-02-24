import './style.css'
import perfil from '../../assets/profile-pic (4).png'


function Card() {
    return (
        <div className="card" >
            <img src={perfil} alt='' />
            <p>Tenho como objetivo coloca o meu conhecimento adquirido atravez do curso da Cubos Academy em pratica
                nas áres de Frontend e na área de Back end.</p>

        </div >
    )
}

export default Card