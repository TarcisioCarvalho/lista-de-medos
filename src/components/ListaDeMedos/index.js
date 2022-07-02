import CampoDeTexto from '../CampoDeTexto';
import './ListaDeMedos.css'

const ListaDeMedos = () =>{
    return (
        <div className='lista-de-medos'>
        <CampoDeTexto/>
        <section >
            <ul>
                <li>Medo xyz</li>
                <li>Medo xyz</li>
                <li>Medo xyz</li>
                <li>Medo xyz</li>
            </ul>
        </section>
        </div>
    )
}

export default ListaDeMedos;