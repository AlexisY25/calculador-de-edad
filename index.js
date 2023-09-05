function calculate(){
    setInterval(() =>{
        let birthdate = new Date (document.getElementById('birthdate').value);

        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        document.getElementById('years').innerHTML = Math.floor(ageInYears);
        document.getElementById('months').innerHTML = Math.floor(ageInMonths % 12);
        document.getElementById('days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.getElementById('hours').innerHTML = Math.floor(ageInHrs % 24);
        document.getElementById('minutes').innerHTML = Math.floor(ageInMins % 60);
        document.getElementById('seconds').innerHTML = Math.floor(ageInS % 60);
        document.getElementById('seconds').style.borderBottom = '1px grey solid';

     }, 1000);
}

function reset(){
    window.location.reload();
}