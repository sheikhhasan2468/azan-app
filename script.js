function datacheck(){
    let countryName=document.getElementById("country").value;
    let cityName=document.getElementById("CITY").value;
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=${countryName}&method=1`)
    .then (function(response){
        console.log(response)
        let data=response.data
        let azantimings=`
     <P>FAJR:${data.data.timings.Fajr}AM</P>
        <P>Dhuhr:${data.data.timings.Dhuhr}PM</P>
        <P>Asr:${data.data.timings.Asr}PM</P>
        <P>Maghrib:${data.data.timings.Maghrib}PM</P>
        <P>Isha:${data.data.timings.Isha}PM</P>
   `
   document.querySelector(".resultdiv").innerHTML=azantimings
 })
 .catch(function(error){
    alert("ERROR")
 })
}