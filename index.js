let start = document.getElementById('start');
let arr = ['abhi','ram','suresh','ramesh','raju']
start.addEventListener('click',function(){
    const questions = [{
        'question1':'How do you create an empty array in JavaScript? ',
        'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
        'correct':'let arr = new Array();'
        
    },
    {
        'question2':'How do you create an empty array in JavaScript? ',
        'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
        'correct':'let arr = new Array();'
    },
    {
        'question3':'How do you create an empty array in JavaScript? ',
        'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
        'correct':'let arr = new Array();'
    },
    {
        'question4':'How do you create an empty array in JavaScript? ',
        'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
        'correct':'let arr = new Array();'
    },
    {
        'question5':'How do you create an empty array in JavaScript? ',
        'answers':['let arr = new Array();',' let arr = [];','let arr = {}; ','let arr = null; '],
        'correct':'let arr = new Array();'
    },
    
]
        let div = document.getElementById('contianer');
        div.remove();
        div.innerHTML = questions[0]['question1']
});

