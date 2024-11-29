import React,{useState,useEffect,useRef} from "react"

function Stopwatch(){

    const [isrunning,setIR]=useState(false);
    const [elapsedTime,setIT]=useState(0);
    const inntervalIdRef=useRef(null);
    const starttimeRef=useRef(0);

    useEffect(()=>{
        if(isrunning){
            inntervalIdRef.current=setInterval(()=>{
                setIT(Date.now()-starttimeRef.current)
            },10);
        }

        return ()=> {
            clearInterval(inntervalIdRef.current)
        }
    },[isrunning]);

    function start(){
        setIR(true);
        starttimeRef.current=Date.now()-elapsedTime;
    }
    function stop(){
        setIR(false);

    }
    function restart(){
        setIT(0);
        setIR(false);
    }

    function formatTime(){
        let hr=Math.floor(elapsedTime/(1000*60*60));
        let min=Math.floor(elapsedTime/(1000*60)%60);
        let sec=Math.floor(elapsedTime/(1000)%60);
        let millisec=Math.floor((elapsedTime%1000)/10);

        hr=String(hr).padStart(2,"0");
        min=String(min).padStart(2,"0");
        sec=String(sec).padStart(2,"0");
        millisec=String(millisec).padStart(2,"0");
        return `${min} : ${sec} : ${millisec}`;
    }

    return (
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center">
                <h1 className="text-white font-extrabold text-8xl text-center mb-10">
                    STOP WATCH
                </h1>
                <div className="w-6/12 h-2/3 bg-slate-200 mt-10 rounded-xl flex flex-col justify-between border-8">
                    <div className="bg-purple-300 h-5/6 border-2 border-black rounded-lg  m-3 font-mono flex items-center justify-center text-7xl font-extrabold ">{formatTime()}</div>
                    <div className="flex gap-10 justify-center m-10 text-white">
                        <button onClick={start} className="bg-green-500 rounded-lg p-3 border-2 border-black">START</button>
                        <button onClick={restart}  className="bg-blue-500 rounded-lg p-3 border-2 border-black">RESTART</button>
                        <button onClick={stop}  className="bg-red-500 rounded-lg p-3 border-2 border-black">STOP</button>
                    </div>
                </div>
        </div>
    );
}
export default Stopwatch