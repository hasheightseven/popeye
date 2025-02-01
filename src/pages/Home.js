import "../App.css";
import LogoPopeye from "../components/LogoPopeye.js";
import BottomMenu from "./components/BottomMenu.js";

function Home() {
    return (
        <div className="AppHome">
            <LogoPopeye />
            <BottomMenu />
        </div>
    );
}

export default Home;