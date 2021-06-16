import React from 'react';

const DigitalClock = ()=>{
            let Time=null;
            let timeStr = 'clock';
        setInterval(()=>{
             Time = new Date();
            timeStr = `
            ${Time.getHours()}:
            ${Time.getMinutes()}:
            ${Time.getSeconds()}`;

            console.log(timeStr);
        },1000)

//Template String : in JS where we need to mix JS with 'string' 
    return(
        <div>{timeStr}</div>
    );
}
export default DigitalClock;