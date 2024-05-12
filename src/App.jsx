import React, { useEffect, useState } from 'react';
import "../src/index.css"
import MiApi from './componentes/MiApi';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  const [search, setSearch] = useState("");

  const personajes = [
    {
        name: "Ippo Makunouchi",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOiZH0sLaXyuwNxpZCUSwrxaq7O_ZAfQ5bQ-r_Tf4OA&s",
        weightClass: "Featherweight",
        winsByKO: 23,
        losses: 3,
        
    },
    {
        name: "Mamoru Takamura",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSq14RCXJ5uUHrbwBI1sobV7qlLBUkNWCOlqW_fJcSpw&s",
        weightClass: "Supper middleweight",
        winsByKO: 27,
        losses: 0,
        
    },
    {
      name: "Ichirō Miyata",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoGcNE2pZhaZDkZZ9fhAnjJRN-4jgF4MDpe67X-q0bQ&s",
      weightClass: "Featherweight",
      winsByKO: 22,
      losses: 1,
      
  },
  {
    name: "Alexander Volg Zangief",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcdAANtaLAaxaiNSgurPcGUwys-JKX4H2A3DqLlF-Xw&s",
    weightClass: "Super featherweight",
    winsByKO: 6,
    losses: 2,
    
},
{
  name: "Takeshi Sendō",
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Tno5G9uSTZR64vYX1d0zIlSs9_Ht6tQit-PW_C4EWw&s",
  weightClass: "Featherweight",
  winsByKO: 21,
  losses: 2,
  
},
{
  name: "Ricardo Martinez",
  imageUrl:"https://i.pinimg.com/474x/8e/4c/4c/8e4c4c13c8237bad7352819bf20f4c88.jpg",
  weightClass: "Featherweight",
  winsByKO: 66,
  losses: 0,
  
},

  
];

  return (
    <>
      <Navbar />
      <h1 style={{textAlign:'center'}}><strong>Bienvenido a la Web de Hajime no Ippo</strong></h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar personaje"
        style={{ width: '500px' }}
      />

      <MiApi personajes={personajes} search={search} />        
      <Footer/>
    </>
  )
}

export default App;

