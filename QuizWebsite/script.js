const questions=[{
'que':'Which of the following is a  markup language?',
'a':'HTML',
'b':'CSS',
'c':'JavaScript',
'd':'PHP',
'correct':'a'

}
,
{
'que':'Which is the object oriented programming language?',
'a':'HTML',
'b':'CSS',
'c':'Java',
'd':'PHP',
'correct':'c'}
,
{
     'que':'What is the full form of css?',
'a':'Hyper text',
'b':'Cascading style sheets',
'c':'javascript',
'd':'PHP',
'correct':'b'
}]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll(".options")
const loadQuestion= ()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
const data=questions[index]
console.log(data)
quesBox.innerHTML=`${index+1}>${data.que}`;
optionInputs[0].nextElementSibling.innerHTML=data.a;
optionInputs[1].nextElementSibling.innerHTML=data.b;

optionInputs[2].nextElementSibling.innerHTML=data.c;

optionInputs[3].nextElementSibling.innerHTML=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];

    const ans=getAnswer()
if(ans==data.correct){
right++;

}else{
    wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
               

                
            
            }
        }
    )
    return answer;
}
 const reset=()=>{optionInputs.forEach(
    (input)=>{
        input.checked=false;
    
    
    }
)
 }
 const endQuiz=() => {
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>
    </div>`
 }
//initial call
loadQuestion();

