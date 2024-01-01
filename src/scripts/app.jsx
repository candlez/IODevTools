import LogList from "./LogList.jsx";

const socket = io.connect(window.location.hostname);

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer); // fix
root.render(
    <LogList 
        socket={socket}
    />
);