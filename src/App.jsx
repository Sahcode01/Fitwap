import {useState} from "react"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData =[
    {text1:"Get Fit, Stay ", text2:"Strong, Always"},
    {text1:"Push Harder, Achieve ", text2:"Your Goals"},
    {text1:"Commit to Be Fit Today,", text2:"Fit Today"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
   return (
    <>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}

      />
    </>
  )
}

export default App