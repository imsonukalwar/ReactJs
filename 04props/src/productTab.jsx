
import Product from "./product"
import Prise from "./prise"
export default function Producttab(){
    return(
        <div className="t">
    <Product title="Logitech MX Player" ind={0} />
    <Product title="Apple Pencile (Gen 2)" ind={1} />
    <Product title="Zebronics ZEB Transformer"ind={2}/>
    <Product title="Protonics tab pro 3" ind={3} />

        </div>
    )
}
