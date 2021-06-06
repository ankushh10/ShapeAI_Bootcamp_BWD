import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App(){
    return(
        <div>
            <h1><Header /></h1>
            <h1><Footer /></h1>
            <h1><Note /></h1>
            <h1><Note /></h1>
            <h1><Note /></h1>
        </div>
    );
}
export default App;