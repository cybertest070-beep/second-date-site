function nextStep(step){

document.querySelectorAll('.step')
.forEach(s=>s.classList.remove('active'));

document.getElementById('step'+step)
.classList.add('active');
}

function yesClicked(){

confetti({
particleCount:200,
spread:120
});

nextStep(2);
}

const noBtn=document.getElementById('noBtn');

noBtn.addEventListener('mouseover',()=>{

const x=Math.random()*250-125;
const y=Math.random()*150-75;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

const texts=[
"No 🙈",
"Really? 😅",
"Think Again 😭",
"Please? 🥺",
"Last Chance ❤️"
];

noBtn.innerText=
texts[Math.floor(Math.random()*texts.length)];
});

let selectedActivity="";

document.querySelectorAll('.activity')
.forEach(item=>{

item.addEventListener('click',()=>{

document.querySelectorAll('.activity')
.forEach(a=>a.classList.remove('selected'));

item.classList.add('selected');

selectedActivity=item.innerText;
});
});

function showConfirmation(){

const date=
document.getElementById('date').value;

const time=
document.getElementById('time').value;

document.getElementById('summary').innerHTML=
`
<h3>💖 Our Date Plan</h3>
<br>
<b>📅 Date:</b> ${date}<br><br>
<b>⏰ Time:</b> ${time}<br><br>
<b>✨ Activity:</b> ${selectedActivity}
`;

confetti({
particleCount:300,
spread:180
});

nextStep(4);
}

function copyPlan(){

const text=
document.getElementById('summary').innerText;

navigator.clipboard.writeText(text);

alert("Copied ❤️");
}

const text=
"💖 Will You Go On A Second Date With Me?";

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById('typing').innerHTML+=
text.charAt(i);

i++;

setTimeout(typeWriter,50);
}
}

typeWriter();

function createHeart(){

const heart=
document.createElement('div');

heart.className='heart';

heart.innerHTML='💖';

heart.style.left=
Math.random()*100+'vw';

heart.style.animationDuration=
(5+Math.random()*5)+'s';

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);
}

setInterval(createHeart,500);