const hour = document.getElementById('f3')
const minute = document.getElementById('f6')
const second = document.getElementById('f8')
const ampm = document.getElementById('f9')


const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let session = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12;
    

    if(hr<10){
        hr = "0" + hr;
    }

    if(min<10){
        min = "0" + min;
    }

    if(sec<10){
        sec = "0" + sec;
    }


    if(hr >= 08  && session == 'AM'){
        document.getElementById("hh1").src = "image1.png";
        document.getElementById("gg").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("cc").innerText = "GOOD MORNING!! WAKE UP !!";
    }

    if( hr < 04 && session =='PM'){
        document.getElementById("hh1").src = "image2.png";
        document.getElementById("gg").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("cc").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }

    if(hr >= 04 && session == 'PM'){
        document.getElementById("hh1").src = "image3.png";
        document.getElementById("gg").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("cc").innerText = "GOOD EVENING !!";
    }

    if(hr >= 08 && hr < 12 && session =='PM'){
        document.getElementById("hh1").src = "image4.png";
        document.getElementById("gg").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("cc").innerText = "GOOD NIGHT !!";
    }


    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    ampm.textContent = session;

    if (hr > 12) {
        hr = hr - 12;
    }
    

},
1000);



function hello(){

    selectElement = document.querySelector('#first');
    output = selectElement.value;
    document.querySelector('#ee1').textContent = output;

    selectElement = document.querySelector('#second');
    output = selectElement.value;
    document.querySelector('#ee2').textContent = output;

    selectElement = document.querySelector('#third');
    output = selectElement.value;
    document.querySelector('#ee3').textContent = output;

    selectElement = document.querySelector('#fourth');
    output = selectElement.value;
    document.querySelector('#ee4').textContent = output;

}


let change = document.querySelector("#dd");

change.addEventListener("mouseover", function(){
    this.textContent = "Party Time !!";
})

change.addEventListener("mouseout", function(){
    this.textContent = "Set Alarm ";
})