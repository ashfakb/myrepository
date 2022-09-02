
function realtimeClock() {
    var clock = new Date();

    var hours = clock.getHours();
    var minutes = clock .getMinutes();
    
    var seconds = clock.getSeconds();


    //Add AM and Pm system
    var AmPm = (hours < 12) ? "AM":"PM";

    //convert hours in 1 2hours
    hours = (hours > 12) ? hours - 12 : hours; 


    // pad the hours and minutes with leading zero
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    //display the clock
    document.getElementById("time").innerHTML =
        hours + " : " + minutes + " " + AmPm;
    var t = setTimeout(realtimeClock, 500);

}

const mediaQuery = window.matchMedia('(max-width: 700px)');



  if (mediaQuery.matches) {
    console.log("it fucking matched")
    const sec = document.querySelector(" .second");
    const min = document.querySelector(" .minute");
    const hour = document.querySelector(" .hour");

    setInterval(() => {
      const t = new Date();
      const mA = t.getMinutes() * 6;
      const sA = t.getSeconds() * 6;
      
      sec.style.transform = `rotateZ(${sA}deg)`;
      min.style.transform = `rotateZ(${mA}deg)`;
    })

  }
  
  
