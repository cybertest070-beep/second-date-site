function nextStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
}

function yesClicked() {
    confetti({ particleCount: 200, spread: 120 });
    nextStep(2);
}

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const card = document.querySelector('.card').getBoundingClientRect();
    const x = Math.random() * (card.width - 120);
    const y = Math.random() * (card.height - 60);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    const texts = ["No 🙈", "Really? 😅", "Think Again 😭", "Please? 🥺", "Last Chance ❤️"];
    noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
});

let selectedActivity = "";
document.querySelectorAll('.activity').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.activity').forEach(a => a.classList.remove('selected'));
        item.classList.add('selected');
        selectedActivity = item.innerText;
    });
});

function showConfirmation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    if (!date || !time || !selectedActivity) { alert("Please fill all details! ❤️"); return; }
    
    document.getElementById('summary').innerHTML = `<h3>💖 Our Date Plan</h3><br><b>📅 Date:</b> ${date}<br><br><b>⏰ Time:</b> ${time}<br><br><b>✨ Activity:</b> ${selectedActivity}`;
    document.getElementById('final-date').value = date;
    document.getElementById('final-time').value = time;
    document.getElementById('final-activity').value = selectedActivity;
    confetti({ particleCount: 300, spread: 180 });
    nextStep(4);
}

function copyPlan() {
    navigator.clipboard.writeText(document.getElementById('summary').innerText);
    alert("Copied ❤️");
}

const text = "💖 Hi Rajismita, Will You Go On A Date With Me?";
let i = 0;
function typeWriter() {
    if (i < text.length) { document.getElementById('typing').innerHTML += text.charAt(i); i++; setTimeout(typeWriter, 50); }
}
typeWriter();