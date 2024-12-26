import "./App.css";
import SVGLogoElement from "./SVGLogoElement.js";

function App() {
    return (
        <main className=".App">
            <div className=".AppDiv" style={{
                background-color: #92112608,
                
                }}>
                <nav className=".AppNavbar">
                    <SVGLogoElement />
                </nav>
                
                <div className=".AppDiv">
                    <h2 className=".AppH2">welcome to the jungle</h2>
                </div>
            </div>
        </main>
    );
};

export default App;
