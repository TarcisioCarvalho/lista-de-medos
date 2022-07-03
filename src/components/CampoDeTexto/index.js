import './CampoDeTexto.css'

const CampoDeTexto = ({medo,digitaMedo}) =>{
   
    return(
        <>
        <label>Medos </label>
        <input onChange={e => digitaMedo(e.target.value)} value={medo}  placeholder='Digite seu medo' />
        </>
    )
}

export default CampoDeTexto;