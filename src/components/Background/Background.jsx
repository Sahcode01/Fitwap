import "./Background.css"
import video from '../../assets/video.mp4'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Background = ({playStatus, heroCount}) => {

    if(playStatus){
        return(
            <video className="background  fade-in" autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </video>
        )
    }
    else if(heroCount === 0){
        return(
            <img src={img1} alt="A man in a gym" className="background fade-in" />
        )
    }
    else if(heroCount === 1){
        return(
            <img src={img2} alt="A man in a gym" className="background fade-in" />
        )
    }
    else if(heroCount === 2){
        return(
            <img src={img3} alt="A man in a gym" className="background fade-in" />
        )
    }
}

export default Background