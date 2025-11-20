import Cum from "./com.jsx"
function App1(){
    let myarry=["hi-tech" ,"durable" ,"fast"]
    return(
    <>
    <Cum product="laptop" prise="233674" feature={myarry} />
    <Cum product="phone" prise="2333"/>
    <Cum product="pen" prise="230" />
    </>
    )
}
export default App1