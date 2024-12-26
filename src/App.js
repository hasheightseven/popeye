import "./App.css";
import SVGLogoElement from "./SVGLogoElement.js";

function App() {
    return (
        <main className=".App">
            <nav className=".AppNavbar">
                <SVGLogoElement />
            </nav>
            <div className=".AppDiv">
                <h2 className=".AppH2">welcome to the jungle</h2>
            </div>
        </main>
    );
};

export default App;
