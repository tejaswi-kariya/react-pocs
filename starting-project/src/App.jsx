import reactImg from './assets/react1.png';
import componentsImg from './assets/Components.png'


const reactDescription = ["Fundamental", "Core", "Crucial"]

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}

// component for core concepts pf react

function CoreConcept(props) {
  return (
   <li>
    <img src={props.image}></img>
    <h3>Title: {props.title}</h3>
    <p>Description : {props.description}</p>
   </li>
  )
}

// create component , always starts with capital latter
function Header() {

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
}


function App() {
  return (
    <div>
      <Header />     {/* calling Header component here */}
      <main>
         <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;