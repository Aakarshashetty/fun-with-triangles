const sides = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector(".calc-btn");
const output = document.querySelector(".output");

const calculateArea = () => {
    if(sides[0].value && sides[1].value !== null){
        const res = (sides[0].value * sides[1].value)/2;
       // console.log(res);
        displayUI(res);
    }else{
        output.innerText = "please enter valid input";
    }
};
const displayUI = res=>{
    output.innerText = `Area of the triangle is ${res}`;
};
calcBtn.addEventListener("click", calculateArea);