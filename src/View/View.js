import React from "react";

const View = () => {

    return(
        <div className="flex-grow flex justify-between">
            <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-7xl">Check out</h1>
                <h2 className="text-3xl tracking-widest">what people are dreaming</h2>
                <h3 className="bg-white text-sky-900 w-fit py-2 px-5 rounded-full text-sm font-bold">1 January 2023, 12:00 AM</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 px-20">   
                <h1 className="font-bold text-4xl">Enter the code</h1>
                <input type="text" className="text-xs focus:outline-none bg-slate-800 py-2 px-5 rounded-md w-1/2 h-8 text-center"/>
                <button className="text-xs bg-white text-sky-900 font-bold hover:scale-110 transition-transform px-3 py-2 rounded-md cursor-pointer">Find Out</button>
                <p className="text-center text-sm">Dreams are what drive people each days.<br/> By looking at other people's dreams, may you have a chance to pursue your own one.</p>
            </div>
        </div>
    )
}

export default View;