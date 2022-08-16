const crtAns = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100°", "30°", "a + b + c", "no", "45°"];
const form = document.querySelector(".form");
const btn = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

let score = 0;
const calculateScore = () => {
    //console.log("calc score");
    const userAns = [form.question1.value, form.question2.value, form.question3.value, form.question4.value, form.question5.value, form.question6.value, form.question7.value, form.question8.value, form.question9.value, form.question10.value]
    userAns.forEach((answer, index) => {
        if(answer === crtAns[index]){
            score++;
        }
        console.log(score);
        displayUI(score);
    });
};
const displayUI = (score)=>{
    scrollTo(0,1e9);
    let html = `Your score is ${score}`;
    output.innerText = html;
};
btn.addEventListener("click", e=>{
    e.preventDefault();
    calculateScore();
});