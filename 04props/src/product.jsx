import Prise from "./prise";
import "./product .css"
export default function Product({title,ind}){
    let ind1 = ["8,000 DPI", "intuitive surface", "designed for iPad Pro", "wireless"];
    let old = ["12,504" ,"11,560", "1590", "560"];
    let newp =["10456","8697","978","234"];
    // if(newp[ind]>=5000){
    //     return(
    //     <div className="product">
    //         <h2>{title}</h2>
    //         <p>{ind1[ind]} </p>
    //         <Prise Prise={old[ind]} Prise1={newp[ind]}/>
    //         <br/>
    //         <br/>
    //         &nbsp;
    //         <span><a href="/">Get discount</a></span>
    //     </div>
    // )
    // }else{
    //     return(
    //     <div className="product">
    //         <h2>{title}</h2>
    //         <p>{ind1[ind]} </p>
    //         <Prise Prise={old[ind]} Prise1={newp[ind]}/>
    //         <p>Get Discount 5%</p>
    //     </div>
    // )
    // }
let sty={backgroundColor:newp[ind]<5000?"rgb(73, 155, 236)":""};
return(
    
        <div className="product" >
            <h2 >{title}</h2>
            <p>{ind1[ind]} </p>
            <Prise Prise={old[ind]} Prise1={newp[ind]}/>
            {newp[ind]>5000 ? <p>Discount of 5%</p>:<a href="/" style={sty}>Get Discount</a>}
            </div>
            )
} 
