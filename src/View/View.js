import React from "react";

const View = () => {

    return(
        <div className="flex-grow flex justify-between">
            <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-7xl">Check out</h1>
                <h2 className="text-3xl tracking-widest">what people are dreaming</h2>
                <h3 className="bg-white text-sky-900 w-fit py-2 px-5 rounded-full text-sm font-bold">1 January 2023, 12:00 AM</h3>
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-5 px-20">   
                <h1 className="font-bold text-4xl">Enter the code</h1>
                <input type="text" className="text-xs focus:outline-none bg-slate-800 py-2 px-5 rounded-md w-1/2 h-8 text-center" placeholder="Enter 5-character code"/>
                <button className="text-xs bg-white text-sky-900 font-bold hover:scale-110 transition-transform px-3 py-2 rounded-md cursor-pointer">Find Out</button>
                <p className="text-center text-sm">Dreams are what drive people each days.<br/> By looking at other people's dreams, may you have a chance to pursue your own one.</p>
            </div> */}

            <div className="bg-white text-slate-800 w-2/5 my-10 p-10 pb-7 text-sm font-semibold">
                <h1>This is my resolution written at <span className="italic font-bold">1 January 2023, 12:00 AM</span></h1>
                <h2 className="text-xl mt-5 mb-2 font-bold">Here is the record of my last year journey</h2>
                <div>
                    <h3 className="tracking-wide text-sm leading-9">Happiest moment</h3>
                    <p id="happiest" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Saddest moment</h3>
                    <p id="Saddest" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Biggest Regret</h3>
                    <p id="Regret" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Happiest moment</h3>
                    <p id="happiest" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Biggest Achievement</h3>
                    <p id="Achievement" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <h2 className="text-xl mt-5 mb-2 font-bold">Here is my goal for upcoming journey</h2>
                <div>
                    <h3 className="tracking-wide text-sm leading-9">Life Goal</h3>
                    <p id="Life" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Saddest moment</h3>
                    <p id="Saddest" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Career Goal</h3>
                    <p id="Career" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Education Goal</h3>
                    <p id="Education" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <div>
                    <h3 className="tracking-wide text-sm leading-9">Relationship Goal</h3>
                    <p id="Relationship" className="text-xs">This and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and thatThis and that</p>
                </div>

                <h3 className="text-xs mt-5">Code #4897489</h3>
            </div>
        </div>
    )
}

export default View;