import {Home} from "./page/Home";
import SideBar from "./components/SideBar";
import BodyContent from "./components/BodyContent";
import BG from "./img/bg.png"

function App() {

  return (
    <>
        <div className="fixed w-full h-screen -z-10">
            <img src={BG} alt="bg" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-16 p-10 mx-auto xl:flex-row max-w-8xl">
            <SideBar />
            <BodyContent>
                <Home />
            </BodyContent>
        </div>
    </>
  )
}

export default App;