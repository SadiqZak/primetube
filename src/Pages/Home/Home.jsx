import Card from "../../Components/Card/Card"
import Chips from "../../Components/Chips/Chips"
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home=()=>{
  return (
    <div className="video-container flex">
    <Sidebar />
    <div className="color-primary wd-100">
      <Chips/>
      <Card/>
      </div>
  </div>
    
  )
}

export default Home