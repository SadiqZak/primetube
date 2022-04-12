import CardChild from "./CardComp/CardChild"
import { useContext } from "react"
import { CardContext } from "../../utils/card-context"

const Card = () =>{
    const {filteredData} = useContext(CardContext)
    return<>
        <div className='recommended-videos'>
          {filteredData.map(({id, img, title, source, videodetailState})=>(
              <CardChild key={id} id={id} img={img} title={title} source={source} videodetailState={videodetailState}/>
          ))}
        </div>
    </>
}

export default Card