import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";



export default function Examples (){
  
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
      /*   <section id="examples">
           <h2>Examples</h2> */
           <Section title="Example" id="examples" >
           <Tabs buttons= {
            <>
            <TabButton onClick={() => handleSelect("components")}  isSelected={selectedTopic === 'components'}>
              Components</TabButton>                    {/* Using children */}
            <TabButton onClick={() => handleSelect("jsx")}  isSelected={selectedTopic === 'jsx'}>
              JSX</TabButton>
            <TabButton onClick={() => handleSelect("state")} isSelected={selectedTopic === 'state'}>
              State</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
              Props
            </TabButton>
            </>
           }>
            {tabContent}
           </Tabs>

          
          {/* <TabButton label="Components"></TabButton> */}    {/* Using label  Attribute */}
          {/* <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> */}
         
          </Section>
       // </section> 
    )
}