const angleInput = document.querySelectorAll(".angle-input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const calculateSum = (angle1, angle2, angle3)=>{
    let sum = angle1+angle2+angle3;
    console.log(sum)
    return sum;
}
const isTriangle = () =>{
    const sumOfTriangles = calculateSum(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    if(sumOfTriangles === 180){
        output.innerText = "Yess It is a Triangle🔺";
    }else{
        output.innerText = "Oops! It is not a Triangle😐";
    }
}
btn.addEventListener("click",isTriangle);
    