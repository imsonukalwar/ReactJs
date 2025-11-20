
function Cum({product,prise,feature}){
    console.log({feature});

    let style={bacgroundColor:prise>20000?"pink":""}
    return (
        <div className="product" >
        <h2>product Name: {product},</h2>
        <h4>prise:{prise} </h4>
        {prise>=20000 ? <p>Get 5% discount</p>:<a href="/">get a discount</a>}
        </div>
    )
}
export default Cum;