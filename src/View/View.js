import React,{useEffect, useState} from "react";
import db from '../firebase.js';
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot, 
    Timestamp,
    deleteDoc
  } from 'firebase/firestore';

const View = () => {

    const [message,setMessage] = useState([])
    const [codeEntered,setCodeEntered] = useState(false);
    const [loading,setLoading] = useState(false);

    const codePressed = () => {
        const resolutonToken = document.getElementById("code").value;
        console.log(resolutonToken)
        const q = query(collection(db,resolutonToken),orderBy("created"))
        onSnapshot(q,(querySnapshot) => {
            setMessage(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
        setLoading(true);
        setTimeout(()=>{ 
            setCodeEntered(true)
            setLoading(false);
        
        },5000)
        
        console.log(message)
        
    }

    useEffect(() => {
        setCodeEntered(false);
    },[])

    const getTime = () => {
        const currentdate = new Date(); 
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        let minute = currentdate.getMinutes().toString();
        console.log(minute)
        if (minute.length <= 1){
            minute = "0" + minute;
        }
        const datetime = currentdate.getDate() + " "
                + monthNames[currentdate.getMonth()]  + " " 
                + currentdate.getFullYear() + ", "  
                + currentdate.getHours() + ":" + minute;
        return datetime
    }

    return(
        <div className="flex-grow flex justify-between">
            <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-7xl">Check out</h1>
                <h2 className="text-3xl tracking-widest">what people are dreaming</h2>
                <h3 className="bg-white text-sky-900 w-fit py-2 px-5 rounded-full text-sm font-bold">{getTime()}</h3>
            </div>

                            {
                                (
                                    () => {
                                        if (codeEntered===false){
                                            return(
                                                <div className="flex flex-col justify-center items-center gap-5 px-20">   
                                                {
                                (
                                    ()=>{
                                        console.log("loading")
                                        if(loading){
                                            return(
                                                <h1 className="text-center text-green-200">Please wait, Loading...</h1>
                                            )
                                        }
                                    }
                                )()
                            }
                                    <h1 className="font-bold text-4xl">Enter the code</h1>
                                    <input id="code" type="text" className="text-xs focus:outline-none bg-slate-800 py-2 px-5 rounded-md w-1/2 h-8 text-center" placeholder="Enter 5-character code"/>
                                    <button onClick={codePressed} className="text-xs bg-white text-sky-900 font-bold hover:scale-110 transition-transform px-3 py-2 rounded-md cursor-pointer">Find Out</button>
                                    <p className="text-center text-sm">Dreams are what drive people each days.<br/> By looking at other people's dreams, may you have a chance to pursue your own one.</p>
                                </div>
                            )
                            
                        }else{
                            try{
                                return(
                                    <div className="bg-white text-slate-800 w-2/5 my-10 p-10 pb-7 text-sm font-semibold">
                                <h1>This is my resolution written at <span className="italic font-bold">{message[0].data.time}</span></h1>
                                <h2 className="text-xl mt-5 mb-2 font-bold">Here is the record of my last year journey</h2>
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Happiest moment</h3>
                                    <p id="happiest" className="text-xs">{message[0].data.lastYear[0]}</p>
                                </div>
    
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Saddest moment</h3>
                                    <p id="Saddest" className="text-xs">{message[0].data.lastYear[1]}</p>
                                </div>
    
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Biggest Regret</h3>
                                    <p id="Regret" className="text-xs">{message[0].data.lastYear[2]}</p>
                                </div>
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Biggest Achievement</h3>
                                    <p id="Achievement" className="text-xs">{message[0].data.lastYear[3]}</p>
                                </div>
    
                                <h2 className="text-xl mt-5 mb-2 font-bold">Here is my goal for upcoming journey</h2>
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Life Goal</h3>
                                    <p id="Life" className="text-xs">{message[0].data.thisYear[0]}</p>
                                </div>
    
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Career Goal</h3>
                                    <p id="Career" className="text-xs">{message[0].data.thisYear[1]}</p>
                                </div>
    
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Education Goal</h3>
                                    <p id="Education" className="text-xs">{message[0].data.thisYear[2]}</p>
                                </div>
    
                                <div>
                                    <h3 className="tracking-wide text-sm leading-9">Relationship Goal</h3>
                                    <p id="Relationship" className="text-xs">{message[0].data.thisYear[3]}</p>
                                </div>
    
                                <h3 className="text-xs mt-5">Code {message[0].data.code}</h3>
                            </div>
                                )
                            }catch{
                                alert("Invalid ID, Please refresh the page to start again")
                            }
                            
                            
                        }
                    }
                )()
            }
            

            
        </div>
    )
}

export default View;