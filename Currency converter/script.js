let dropdown=document.querySelectorAll("select");
let container=document.querySelector(".container");

for(let s of dropdown){
for( let currcode in countryList){
    let option=document.createElement("option");
    option.innerText=currcode;
    option.value=currcode;
    s.append(option);

    if(s.id=="from" && currcode=="USD"){
    option.selected="selected";
    }
    else if (s.id=="to" && currcode=="INR"){
        option.selected="selected";

    }

}
s.addEventListener("change",(e)=>{
    imgChange(e);
    });
}

function imgChange(ee){
let currcode= ee.target.value;
    let ISO=countryList[currcode];
let img=ee.target.parentElement.querySelector("img");
img.src=`https://flagsapi.com/${ISO}/shiny/64.png`;

}



