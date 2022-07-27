import CardChild from "./CardComp/CardChild"
import { useContext } from "react"
import { CardContext } from "../../utils/card-context"

const Card = () =>{
    const {filteredData} = useContext(CardContext)

    return<>
        <div className='recommended-videos'>
          {filteredData.map((video)=>(
              <CardChild key={video.id} video={video}/>
          ))}
        </div>
    </>
}

export default Card