setInterval(()=>{
    const d = new Date();
    const hrs = d.getHours();
    const mins = d.getMinutes();
    const secs = d.getSeconds();
    hrotation = 30*hrs + mins/2;
    mrotation = 6*mins;
    srotation = 6*secs;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);