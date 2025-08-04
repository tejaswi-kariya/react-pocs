/* export default function TabButton (props){
retutn (
<button>{props.children}</button>
)
} */

    /* export default function TabButton ({label}){
    return (<button>{label}</button>)
} */

    export default function TabButton ({children, onSelect, isSelected}){
      
        /* function handleClick (){
            console.log("Hello")
        } */

     return (
      <li>
      <button onClick={onSelect} className={isSelected ? 'active' : undefined}>{children}</button>
      </li> 
     /* <button onClick={handleClick}>{children}</button>  */  /*  calling function as value  when click on button*/
    )
        
}