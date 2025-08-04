
import componentsImg from './assets/Components.png'
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Example from './components/Examples.jsx';
import Examples from './components/Examples.jsx';




// component for core concepts 0f react

/* function CoreConcept({image, title, description}) {
  return (
   <li>
    <img src={image}></img>
    <h3>Title: {title}</h3>
    <p>Description : {description}</p>
   </li>
  )
} */

// create component , always starts with capital latter
/* function Header() {

  const description = reactDescription[getRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
} */


function App() {

  
  return (
    <>                 {/* use of fragment */}
      <Header />     {/* calling Header component here */}
      <main>
         <CoreConcepts />

         <Examples />
          
      </main>
    </>
  );
}

export default App;