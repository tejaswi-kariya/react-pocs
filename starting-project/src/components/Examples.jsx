import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";



export default function Example (){
  
    const [selectedTopic , setSelectedTopic ] = useState()
    
      function handleSelect(selectedButton){
       setSelectedTopic(selectedButton)
      }
    
      let tabContent = <p>Please select a topic.</p>;
    
       if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );
      }
    

    return (
        <section id="examples">
           <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}  isSelected={selectedTopic === 'components'}>
              Components</TabButton>                    {/* Using children */}
            <TabButton onSelect={() => handleSelect("jsx")}  isSelected={selectedTopic === 'jsx'}>
              JSX</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === 'state'}>
              State</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
          </menu>
          {/* <TabButton label="Components"></TabButton> */}    {/* Using label  Attribute */}
          {/* <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> */}
          {tabContent}
        </section> 
    )
}