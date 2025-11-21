import './App.css'
import Send from './sendMassage'
import Product from './product'

function App() {
  let ind = ["8,000 DPI", "intuitive surface", "designed for iPad Pro", "wireless"];
  let old = ["12,504" ,"11,560", "1590", 560];
  let newp =["10,456","8697","978","234"];

  return (
    <>
      {/* <Send input="SONU" col="pink"/> */}

      <Product product="Logitech MX Player" ind={ind[0]} old={old[0]} newp={newp[0]}/>
      <Product product="Apple Pencile (Gen 2)" ind={ind[1]} old={old[1]} newp={newp[1]}/>
      <Product product="Zebronics ZEB Transformer" ind={ind[2]} old={old[2]} newp={newp[2]}/>
      <Product product="Protonics tab pro 3" ind={ind[3]} old={old[3]} newp={newp[3]}/>
    </>
  )
}

export default App
