
//const heading = React.createElement("h1",{id : "heading",abc : "xyz"},"Hello React JS !!");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//To create div inside another div
/*
e.g <div id="parent"> 
        <div id="child">
        </div>
    </div>
*/

//const parent = React.createElement("div",{id : "parent"},React.createElement("h1",{},"Hello from child"));
//To use 2 children under child div use array 
/*const parent  = React.createElement("div","id : parent",React.createElement("div",{id : "child"},
[React.createElement("h1",{},"Hello from h1",React.createElement("h2",{},"Hello from h3"]);*/

//To create div under div with another 2 children
const parent  = React.createElement("div",{id : "parent"},[
React.createElement("div",{id : "child"},[
React.createElement("h1",{},"Hello from h1"),
React.createElement("h2",{},"Hello from h2"),
]),
React.createElement("div",{id : "child1"},
[React.createElement("h3",{},"Hello from h3"),React.createElement("h4",{},"Hello from h4"),]),]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);