import React,{useRef,useState,useEffect} from "react";
import randomstring from 'randomstring';
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

const Create = () => {
    const [resolutonToken,setResolutionToken] = useState();

    const handleSaveData = async (e) => {
        e.preventDefault()
        const happiest = document.getElementById("Happiest").value;
        const saddest = document.getElementById("Saddest").value;
        const regret = document.getElementById("Regret").value;
        const achievement = document.getElementById("Achievement").value;
        const lastYear = [happiest,saddest,regret,achievement];
        const life = document.getElementById("Life").value;
        const career = document.getElementById("Career").value;
        const education = document.getElementById("Education").value;
        const relationship = document.getElementById("Relationship").value;
        const currentYear = [life,career,education,relationship];
        const token = "#" + randomstring.generate(5);
        setResolutionToken(token)
        console.log(token)
        try{
            await addDoc(collection(db,token), {
                code: token,
                thisYear: lastYear,
                lastYear: currentYear,
                created: Timestamp.now()
            })
        }catch{
            alert("Unexpected Error")
        }
    }


    return(
        <div className="flex-grow flex flex-col py-5 gap-8 pb-10">
            <h3 className="bg-white text-sky-900 w-fit py-2 px-5 rounded-full text-sm font-bold">1 January 2023, 12:00 AM</h3>
            
            <div className="space-y-4 my-5">
                <h1 className="text-xl tracking-widest font-bold mb-5">So how was last year?</h1>
                <div className="inputField">
                    <label htmlFor="Happiest">Happiest moment</label>
                    <input type="text" name="Happiest" id="Happiest" />
                </div>

                <div className="inputField">
                    <label htmlFor="Saddest">Saddest moment</label>
                    <input type="text" name="Saddest" id="Saddest" />
                </div>

                <div className="inputField">
                    <label htmlFor="Regret">Biggest Regret</label>
                    <input type="text" name="Regret" id="Regret" />
                </div>

                <div className="inputField">
                    <label htmlFor="Achievement">Biggest Achievement</label>
                    <input type="text" name="Achievement" id="Achievement" />
                </div>
            </div>

            <div className="space-y-5 my-5">
                <h1 className="text-xl tracking-widest font-bold mb-5">Then what is your resolution for this year?</h1>
                <div className="inputField">
                    <label htmlFor="Life">Life Goal</label>
                    <input type="text" name="Life" id="Life" />
                </div>

                <div className="inputField">
                    <label htmlFor="Career">Career Goal</label>
                    <input type="text" name="Career" id="Career" />
                </div>

                <div className="inputField">
                    <label htmlFor="Education">Education Goal</label>
                    <input type="text" name="Education" id="Education" />
                </div>

                <div className="inputField">
                    <label htmlFor="Relationship">Relationship Goal</label>
                    <input type="text" name="Relationship" id="Relationship" />
                </div>
            </div>

            <button className="text-xs bg-white text-sky-900 font-bold hover:tracking-widest transition-all px-3 py-2 rounded-md cursor-pointer w-fit" onClick={handleSaveData}>I will achieve it!</button>
            {
                (
                    () => {
                        if (resolutonToken){
                            return(
                                <h4 className="text-green-300 tracking-widest">Your resolution has been submitted successfully. <br/> <span className="leading-6 font-bold text-white  text-sm">Code: {resolutonToken}</span></h4>
                            )
                        }else{
                            return(
                                <p className="tracking-widest font-bolder text-xs">Good things always come to those who seek</p>
                            )
                        }
                    }
                )()
            }
        </div>
    )
}

export default Create;