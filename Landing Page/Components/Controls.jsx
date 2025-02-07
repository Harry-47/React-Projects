import { FaCirclePlay } from "react-icons/fa6"
import { FaPauseCircle } from "react-icons/fa"


const Controls = ({togglePlayPause,isPlaying, heroData, setHeroIndex, heroIndex}) => {
  
  let button = isPlaying ? <FaPauseCircle /> : <FaCirclePlay />; 

  return (
    <>
    <div className="controls">
    <div className="heroText">
      <p>{heroData.text1}</p>
      <p>{heroData.text2}</p>
    </div>

    <ul className="dots">
     <li className={`dot ${heroIndex === 0 && `orange`}`} onClick={()=> {setHeroIndex(0)}}></li>
     <li className={`dot ${heroIndex === 1 && `orange`}`} onClick={()=> {setHeroIndex(1)}}></li>
     <li className={`dot ${heroIndex === 2 && `orange`}`} onClick={()=> {setHeroIndex(2)}}></li>

    </ul>
    <div className="button">
    <button className="heroButton" onClick={togglePlayPause}>
      {button}
    </button>
    <p>See the video</p>
    </div>
    </div>
    </>
    
  )
}

export default Controls;
