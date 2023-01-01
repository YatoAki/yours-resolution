import React from "react";

const Home = () => {

    return(
        <div className="flex-grow flex items-center justify-center flex-col gap-5">
            <h1 className="text-8xl font-bold">Create your resolution</h1>
            <h3 className="tracking-widest mt-11">Commit yourself by showing off your resolution to loved ones</h3>
            <a href="create" className="text-sm bg-white text-sky-900 font-black hover:scale-105 transition-transform px-20 py-4 rounded-full cursor-pointer">Find Out</a>
        </div>
    )
}

export default Home;