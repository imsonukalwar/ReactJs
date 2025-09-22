// const header1=document.createElement('h1');
// header1.innerText="hello sonu";
// header1.style.backgroundColor='blue';
// header1.style.color='white';
// header1.style.fontSize="25px"

// const { createElement } = require("react");

// const header2=document.createElement('h1');
// header2.innerText="hello sonu";
// header2.style.backgroundColor='pink';
// header2.style.color='white';
// header2.style.fontSize="30px"

// const sol1=function sol(tag,style,name) {
//     const element=document.createElement(tag);
//     element.innerText=name;
//     for (let key in style) {
//         element.style[key] = style[key];
//     }
//     return element;
// }

// const header1 = sol1("h1", {backgroundColor: "blue", color: "white", fontSize: "25px"}, "hello sonu");
// document.body.appendChild(header1);

// const header2 = sol1("h1", {backgroundColor: "pink", color: "white", fontSize: "30px"}, "hello sonu");
// document.body.appendChild(header2);



const react={
    createElement:function(tag,style,name){
        const element =document.createElement(tag);
        element.innerText=name;
        for (let key in style) {
        element.style[key] = style[key];
    }
        return element;
    }
}
const header1 =react.createElement('h1', {backgroundColor: "blue", color: "white", fontSize: "25px"}, "hello sonu");

// const d=document.getElementById('root');
// d.append(header1);
// d.append(header2);