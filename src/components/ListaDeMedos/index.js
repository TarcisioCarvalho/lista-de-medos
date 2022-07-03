import { useState } from 'react';

import CampoDeTexto from '../CampoDeTexto';
import './ListaDeMedos.css'

const ListaDeMedos = ({titulo}) =>{

   const [medo,setMedo] = useState('');
   const [medos,setMedos] = useState([]);

   const adicionaMedo = () =>{
    setMedos([...medos,medo]);
    setMedo('');
   }

  

    return (
        <div className='lista-de-medos'>
            <h3>{titulo}</h3>
        <CampoDeTexto
            medo = {medo}
            digitaMedo = {setMedo}
        />
        <button onClick={adicionaMedo} >+</button>
        <section >
            <ul>
                {medos.map(medo => <li key={medo}>{medo}</li>)}
            </ul>
        </section>
        </div>
    )
}

export default ListaDeMedos;