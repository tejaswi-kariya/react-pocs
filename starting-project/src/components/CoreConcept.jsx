

export default  function CoreConcept({image, title, description}) {
  return (
   <li>
    <img src={image}></img>
    <h3>Title: {title}</h3>
    <p>Description : {description}</p>
   </li>
  )
}