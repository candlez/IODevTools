import LogList from "./LogList.js";

try {
    var socket = io.connect(/*window.location.hostname*/);
} catch (err) {
    console.log(err);
}


var domContainer = document.getElementById("root");
var root = ReactDOM.createRoot(domContainer); // fix
root.render(React.createElement(LogList, {
    socket: socket
}));