export default function Section ({children, title, ...props}){    /* ... called REst property ,groups all remaining object property into new object */
    return(
     <section {...props}>   {/* spred some data or other element */}
      <h2>{title}</h2>
      {children}
     </section>
    )
}