let datePicker = document.querySelector(".date-picker");
let agePrint = document.querySelector(".age-print");
let nightMode = document.querySelector(".night-mode")

datePicker.addEventListener("change",function(e){
    calculateAge(e.target.value)

})
nightMode.addEventListener("click",function(){
    alert("Soon");
})
function calculateAge(value){
    var date = new Date(value);
    if(date.getTime()>Date.now()){
        agePrint.innerHTML = "You are not born yet."
    }else{
        var ms = Date.now() - date.getTime();
        var ageDate = new Date(ms);
        agePrint.innerHTML = Math.abs(ageDate.getUTCFullYear()-1970)
    }
    
};