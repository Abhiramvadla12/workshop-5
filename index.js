let start = document.getElementById('start');
let arr = ['abhi','ram','suresh','ramesh','raju']
const questions = [{
    'question1':'1)How do you create an empty array in JavaScript? ',
    'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
    'correct':'let arr = new Array();'
    
},
{
    'question2':' 2)Which one of the following also known as Conditional Expression:',
    'answers':['Alternative to if-else',' Switch statement','If-then-else statement ','immediate if '],
    'correct':'let arr = new Array();'
},
{
    'question3':'3)How do you create an empty array in JavaScript? ',
    'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
    'correct':'let arr = new Array();'
},
{
    'question4':'4)How do you create an empty array in JavaScript? ',
    'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
    'correct':'let arr = new Array();'
},
{
    'question5':'5)How do you create an empty array in JavaScript? ',
    'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
    'correct':'let arr = new Array();'
},

]

start.addEventListener('click',function(){
     let div1 = document.getElementById('inner');
     div1.style.display = 'none';
     //inner div
     let div2 = document.createElement('div');
     div2.id = 'div2';
     //timer
     let p1 = document.createElement('p');
        p1.id = "p1"
        p1.innerHTML = "Time : 60";
        div2.appendChild(p1);
        container.appendChild(div2);
        //question -1 :
        let q1 = document.createElement('h2');
        q1.id = 'q1';
        q1.innerHTML = `${questions[0].question1}`
        div2.appendChild(q1);
        //options:
        let q1op1 = document.createElement('button');
        let q1op2 = document.createElement('button');
        let q1op3 = document.createElement('button');
        let q1op4 = document.createElement('button');
        q1op1.id ='q1op1';
        q1op2.id ='q1op2';
        q1op3.id ='q1op3';
        q1op4.id ='q1op4';
        q1op1.innerHTML = `${questions[0].answers[0]}`;
        q1op2.innerHTML = `${questions[0].answers[1]}`
        q1op3.innerHTML = `${questions[0].answers[2]}`
        q1op4.innerHTML = `${questions[0].answers[3]}`
        div2.appendChild(q1op1);
        div2.appendChild(q1op2);
        div2.appendChild(q1op3);
        div2.appendChild(q1op4);
        //save & next:
        let next = document.createElement('button');
        next.id = 'next';
        next.innerHTML = 'save&next';
        div2.appendChild(next);
        next.addEventListener('click',function (){
            div2.style.display = 'none';
        let div3 = document.createElement('div');
     div3.id = 'div3';
     //timer
     let p2 = document.createElement('p');
    p2.id = "p2"
     p2.innerHTML = "Time : 60";
     div3.appendChild(p2);
     container.appendChild(div3);
    //question -1 :
    let q2 = document.createElement('h2');
    q2.id = 'q2';
    q2.innerHTML = `${questions[1].question2}`;
    div3.appendChild(q2);
    //options:
    let q2op1 = document.createElement('button');
    let q2op2 = document.createElement('button');
    let q2op3 = document.createElement('button');
    let q2op4 = document.createElement('button');
    q2op1.id ='q2op1';
    q2op2.id ='q2op2';
    q2op3.id ='q2op3';
    q2op4.id ='q2op4';
    q2op1.innerHTML = `${questions[1].answers[0]}`;
    q2op2.innerHTML = `${questions[1].answers[1]}`;
    q2op3.innerHTML = `${questions[1].answers[2]}`;
    q2op4.innerHTML = `${questions[1].answers[3]}`;
    div3.appendChild(q2op1);
    div3.appendChild(q2op2);
    div3.appendChild(q2op3);
    div3.appendChild(q2op4);
    //previous :
    let prev1 = document.createElement('button');
    prev1.id = 'prev1';
    prev1.innerHTML = 'previous';
    //save & next:
    let next1 = document.createElement('button');
    next1.id = 'next1';
    next1.innerHTML = 'save&next';
    div3.appendChild(prev1);
    div3.appendChild(next1);
    prev1.addEventListener('click',function(){
        div3.style.display = 'none';
        div2.style.display = 'block';
        // div2.style.display = 'block'
    })
    next1.addEventListener('click',function(){
        div3.style.display = 'none';
        let div4 = document.createElement('div');
        div4.id = 'div4';
        //timer
        let p3 = document.createElement('p');
        p3.id = "p3"
        p3.innerHTML = "Time : 60";
        div4.appendChild(p3);
        container.appendChild(div4);
        //question -1 :
        let q3 = document.createElement('h2');
        q3.id = 'q2';
        q3.innerHTML = `${questions[2].question3}`
        div4.appendChild(q3);
        //options:
        let q3op1 = document.createElement('button');
        let q3op2 = document.createElement('button');
        let q3op3 = document.createElement('button');
        let q3op4 = document.createElement('button');
        q3op1.id ='q3op1';
        q3op2.id ='q3op2';
        q3op3.id ='q3op3';
        q3op4.id ='q3op4';
        q3op1.innerHTML = `${questions[2].answers[0]}`;
        q3op2.innerHTML = `${questions[2].answers[1]}`
        q3op3.innerHTML = `${questions[2].answers[2]}`
        q3op4.innerHTML = `${questions[2].answers[3]}`
        div4.appendChild(q3op1);
        div4.appendChild(q3op2);
        div4.appendChild(q3op3);
        div4.appendChild(q3op4);
        //previous :
        let prev2 = document.createElement('button');
        prev2.id = 'prev2';
        prev2.innerHTML = 'previous';
        //save & next:
        let next2 = document.createElement('button');
        next2.id = 'next2';
        next2.innerHTML = 'save&next';
        div4.appendChild(prev2);
        div4.appendChild(next2);
        prev2.addEventListener('click',function(){
            div4.style.display = 'none';
            div3.style.display = 'block';
            // div2.style.display = 'block'
        })
        next2.addEventListener('click',function(){
            div4.style.display = 'none';
            let div5 = document.createElement('div');
            div5.id = 'div5';
            //timer
            let p4 = document.createElement('p');
            p4.id = "p4"
            p4.innerHTML = "Time : 60";
            div5.appendChild(p4);
            container.appendChild(div5);
            //question -1 :
            let q4 = document.createElement('h2');
            q4.id = 'q2';
            q4.innerHTML = `${questions[3].question4}`
            div5.appendChild(q4);
            //options:
            let q4op1 = document.createElement('button');
            let q4op2 = document.createElement('button');
            let q4op3 = document.createElement('button');
            let q4op4 = document.createElement('button');
            q4op1.id ='q4op1';
            q4op2.id ='q4op2';
            q4op3.id ='q4op3';
            q4op4.id ='q4op4';
            q4op1.innerHTML = `${questions[3].answers[0]}`;
            q4op2.innerHTML = `${questions[3].answers[1]}`
            q4op3.innerHTML = `${questions[3].answers[2]}`
            q4op4.innerHTML = `${questions[3].answers[3]}`
            div5.appendChild(q4op1);
            div5.appendChild(q4op2);
            div5.appendChild(q4op3);
            div5.appendChild(q4op4);
            //previous :
            let prev3 = document.createElement('button');
            prev3.id = 'prev3';
            prev3.innerHTML = 'previous';
            //save & next:
            let next3 = document.createElement('button');
            next3.id = 'next3';
            next3.innerHTML = 'save&next';
            div5.appendChild(prev3);
            div5.appendChild(next3);
            prev3.addEventListener('click',function(){
                div5.style.display = 'none';
                div4.style.display = 'block';
                // div2.style.display = 'block'
            })
            next3.addEventListener('click',function(){
                div5.style.display = 'none';
                let div6 = document.createElement('div');
                div6.id = 'div6';
                //timer
                let p5 = document.createElement('p');
                p5.id = "p5"
                p5.innerHTML = "Time : 60";
                div6.appendChild(p5);
                container.appendChild(div6);
                //question -1 :
                let q5 = document.createElement('h2');
                q5.id = 'q2';
                q5.innerHTML = `${questions[4].question5}`
                div6.appendChild(q5);
                //options:
                let q5op1 = document.createElement('button');
                let q5op2 = document.createElement('button');
                let q5op3 = document.createElement('button');
                let q5op4 = document.createElement('button');
                q5op1.id ='q5op1';
                q5op2.id ='q5op2';
                q5op3.id ='q5op3';
                q5op4.id ='q5op4';
                q5op1.innerHTML = `${questions[4].answers[0]}`;
                q5op2.innerHTML = `${questions[4].answers[1]}`
                q5op3.innerHTML = `${questions[4].answers[2]}`
                q5op4.innerHTML = `${questions[4].answers[3]}`
                div6.appendChild(q5op1);
                div6.appendChild(q5op2);
                div6.appendChild(q5op3);
                div6.appendChild(q5op4);
                //previous :
                let prev4 = document.createElement('button');
                prev4.id= 'prev4';
                prev4.innerHTML = 'previous';
                //save & next:
                let next4 = document.createElement('button');
                next4.id = 'next4';
                next4.innerHTML = 'save&next';
                div6.appendChild(prev4);
                div6.appendChild(next4);
                prev4.addEventListener('click',function(){
                    div6.style.display = 'none';
                    div5.style.display = 'block';
            })
            next4.addEventListener('click',function(){
                div6.style.display = 'none';
                let div7 = document.createElement('div');
                let h1 = document.createElement('h1');
                h1.id = "h1";
                h1.innerHTML = 'Quizz completed!';
                div7.appendChild(h1);
                container.appendChild(div7);
                let saveScore = document.createElement('button');
                let restart = document.createElement('button');
                saveScore.id = 'saveScore';
                restart.id = 'restart';
                saveScore.innerHTML = 'save score';
                restart.innerHTML = 'restart';
                div7.append(saveScore,restart);
                restart.addEventListener('click',function(){
                    div7.style.display = "none";
                    div2.style.display = 'block'
                })
            })

        })
        })
    })
})

});
