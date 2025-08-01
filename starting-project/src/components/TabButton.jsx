/* export default function TabButton (props){
retutn (
<button>{props.children}</button>
)
} */

    /* export default function TabButton ({label}){
    return (<button>{label}</button>)
} */

    export default function TabButton ({children}){
      
        function handleClick (){
            console.log("Hello")
        }

     return (
     <button onClick={handleClick}>{children}</button>    /*  calling function as value  when click on button*/
     )
        
}