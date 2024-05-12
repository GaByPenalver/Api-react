import { useEffect,useState } from 'react';
import './App.css'
import MiApi from './componentes/MiApi';

function App() {
  const [search, setSearch] = useState("");

  return (
    
    <>
        <h1>Bienvenido a la Web de Ippo Makunouchi</h1>
        <input type="text" value={search} onChange={(e)=>{
        setSearch(e.target.value)}}/>  
        {/* CAPTURANDO LO QUE EL USUARIO ESCRIBE  */}

<MiApi search={search}/>
        
      </>
  )
}

export default App





import { useEffect,useState } from 'react';


const MiApi = ({search}) => {
    const [personajeApi, setPersonajeApi] = useState([]);
    const url = "https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers";
    
    const traerPersonajes = async() =>{
try {
    const data = await fetch(url);
    const result = await data.json();
    const personajes = result.results;
    setPersonajeApi(personajes);

} catch (error) {
    console.log("No trae los datos")
}
}

useEffect(() => {
    traerPersonajes()
    }, [])
    let personajesAmostrar=[];
if(search === ""){
personajesAmostrar = personajeApi
}else{
personajesAmostrar = personajeApi.filter((elemento)=>
elemento.name.toLowerCase().includes(search.toLowerCase())
)
/*PARA QUE TOME MAYUSCULAS Y MINUSCULAS  */
}

return (
    
<div>
        {personajesAmostrar.map((personaje, id) => (
        <p key={id}>{`${personaje.id} - ${personaje.name} `} </p>
        ))}

{personajesAmostrar.length==0?<p>No se encontraron resultados</p>: " "}

    </div>
    

)
}

export default MiApi