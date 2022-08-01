import CardChild from "./CardComp/CardChild"
import { useContext } from "react"
import { CardContext } from "../../utils/card-context"

const Card = () =>{
    const {filteredData, state} = useContext(CardContext)

    return<>
        <div className='recommended-videos'>
          {filteredData.length!==0 ? filteredData.map((video)=>(
              <CardChild key={video.id} video={video}/>
          ))
        : <div>No videos under this category</div>
        }
        </div>
    </>
}

export default Card