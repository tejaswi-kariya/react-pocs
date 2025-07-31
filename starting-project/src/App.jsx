
import componentsImg from './assets/Components.png'
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';




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
    <div>
      <Header />     {/* calling Header component here */}
      <main>
         <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            /> */}
            <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />    {/* spread operator */}
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;