import { useEffect,useRef, useState } from "react"

const GameAssets = () => {
    const [message,setMessage] = useState("")
    const [greenTime, setGreenTime] = useState(null);
    const divRef = useRef(null);
    const handleClick = () =>{
        if(divRef.current.style.backgroundColor == 'green'){
            const clickTime = new Date().getTime();
            const reactionTime = (clickTime - greenTime) / 1000;
            setMessage(`You took ${reactionTime} !`)
        }
        else{
            setMessage("You clicked early");
        }
    }
    useEffect(()=>{
        const randomTime = Math.floor(Math.random() * 6000) + 1000;
        const timer = setTimeout(() => {
            if (divRef.current) {
                divRef.current.style.backgroundColor = 'green';
                setGreenTime(new Date().getTime());
              }
          }, randomTime);
          return () => clearTimeout(timer);
    },[])
  return (
    <>
        {message ? <p className="Game-Message">{message}</p>: <div className="Game-Assets" ref={divRef} onClick={handleClick}></div>}
    </>
    
    
  )
}
export default GameAssets