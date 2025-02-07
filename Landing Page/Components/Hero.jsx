import image1 from '../Assets/177924-sports_car-bmw-cars-2023_bmw_m3-headlamp-550x310.jpg'
import image2 from '../assets/bmw_headlights_lights_137326_300x168.jpg'
import image3 from '../assets/download (19).jpeg'
import video from '../assets/4632167-uhd_3840_2160_25fps.mp4'
const Hero = ({index, isPlaying})=> {

    return (
        
        <>
         
         {
            (!isPlaying &&  index === 0) ? <img src={image1} alt="no image to show " style={{height: "100%", width: "100%", position: "fixed", top: "0", left: "0", opacity: "0.9", filter: "brightness(0.5)", zIndex : "-1"} }/> : null
         }
         {
             (!isPlaying &&  index === 1) ? <img src={image2} alt="no image to show " style={{height: "100%", width: "100%", position: "fixed", top: "0", left: "0",  opacity: "0.9", filter: "brightness(0.5)", zIndex : "-1"}}/> : null
         }
         {
            (!isPlaying &&  index === 2) ? <img src={image3} alt="no image to show " style={{height: "100%", width: "100%", position: "fixed", top: "0", left: "0",  opacity: "0.9", filter: "brightness(0.5)", zIndex : "-1"}}/> : null
         }
         {
            isPlaying &&  <video autoPlay muted loop className="fadeIn" style={{height: "133%", width: "100%", position: "fixed", top: "-50", left: "0", marginTop: "-59px", opacity: "0.9", filter: "brightness(0.5)", zIndex : "-1" }} >
                <source  src={video} type='video/mp4'/>
            </video>
             
         }
         
         </>
    )
}
export default Hero;