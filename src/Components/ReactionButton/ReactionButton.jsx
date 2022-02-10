
import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // y no wrk

const ReactionButton = ({ id, urls, reaction }) => {

    const [spamCounter, setSpamCount] = useState(0);

    const handleClick = () => {
        setSpamCount(spamCounter + 1);
        
        try{
            if(spamCounter >= 10){
                throw new Error("Please don't spam, ta xx");
            }
            console.log("Clicks - " + spamCounter);
            //{urls.regular} put this in local storage if the button event is "like"
            // otherwise, throw it away (into another storage object :))
            console.log("clicked " + reaction)
            console.log("clicked " + urls.regular)
            // will probably need to get local storage item, store in a var, update with new value, and re-add to local storage
            // should've used an actual db, idiot
            if (reaction === "like"){
                localStorage.setItem("likedImages", urls.regular);
                // append this to a list
            }
            if (reaction === "dislike"){
                localStorage.setItem("dislikedImages", urls.regular);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
        
            <button
                key={id}
                className="reaction-button"
                value={reaction}
                onClick={handleClick}
            >
                {reaction}
            </button>
        </>
    )

};


export default ReactionButton;