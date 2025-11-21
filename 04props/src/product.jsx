export default function Product({product,ind,old,newp}){
    return(
        <div className="product">
            <h2 style={{color:"red"}}>{product}</h2>
            <h4>{ind}</h4>
            <h3>{old} {newp}</h3>
        </div>
    )
}