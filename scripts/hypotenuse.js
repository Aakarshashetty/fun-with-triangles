const sides = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector(".calculate");
const output = document.querySelector(".output");

const claculateHypotenuse = ()=>{
//    console.log(sides[0].value**2,sides[1].value**2);
    if(sides[0].value && sides[1].value !== null){
        const res =  (Math.sqrt((sides[0].value ** 2) + (sides[1].value**2)));
    //console.log(res);
        displayUI(res);
    }else{
        output.innerText = "Please Enter valid Input😐";
    }
};
const displayUI = res => {
    output.innerText = `The length of hypotenuse is ${res}🙂`;
};
calcBtn.addEventListener("click", claculateHypotenuse);