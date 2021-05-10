const val1 = document.querySelector(".val1");
const val2 = document.querySelector(".val2");
const service = document.querySelector(".service");
const btn = document.querySelector(".btn");
const ans = document.querySelector(".ans");
const result = document.querySelector(".result");
const container = document.querySelector(".container");
var billAmt;
var numOfPeople;

var serviceVal;

var total;

btn.addEventListener('click', function () {
   if (val1.value != "" && val2.value != "") {
     dew();
     result.style.display = 'block';
     container.style.padding  = '0px';
   }

   else{
    alert("Please Input Values");
   }
});
const dew = ()=>{
        if (service.value === "outstanding") {
        serviceVal = 0.3;
    }
    else if (service.value === "good") {
        serviceVal = 0.2;
    }
        else if (service.value === "ok") {
        serviceVal = 0.15;
    }
            else if (service.value === "bad") {
        serviceVal = 0.1;
    }
                else if (service.value === "terrible") {
        serviceVal = 0.05;
    }
    else{
          alert("Please Input Values");
    }

    billAmt = val1.value;
    numOfPeople = val2.value;
  
    total = (billAmt * serviceVal) / numOfPeople;
      total = Math.round(total * 100) / 100;

      total = total.toFixed(2);

    ans.innerHTML = total;
};