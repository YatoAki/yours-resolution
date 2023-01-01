import React from "react";

const Create = () => {

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

            <button className="text-xs bg-white text-sky-900 font-bold hover:tracking-widest transition-all px-3 py-2 rounded-md cursor-pointer w-fit">I will achieve it!</button>
            <p className="tracking-widest font-bolder text-xs">Good things always come to those who seek</p>
        </div>
    )
}

export default Create;