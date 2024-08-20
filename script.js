let clock = document.querySelector("#clock");


const setDate = () => {
    let curTime = new Date().toLocaleTimeString();
    clock.innerText = curTime;
};

setDate();


setInterval(() => {
    setDate();
}, 1000);