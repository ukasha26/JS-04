// 1. Elements ko pakrein
const body = document.getElementById('mainBody');
const btn = document.getElementById('lightBtn');

// 2. State variable (Shuru mein lights ON hain, to dark OFF hai)
let isDark = false;

// 3. Function jo button click par chalega
btn.addEventListener('click', () => {
    
    // JS sirf Tailwind ki classes ko toggle (on/off) karega
    // Jab click hoga, agar ye classes hain to hat jayengi, nahi hain to lag jayengi
    body.classList.toggle('bg-slate-900');
    body.classList.toggle('text-white');
    btn.classList.toggle('border-white');

    // 4. State Management (Logic)
    isDark = !isDark; // Har click par false ko true, aur true ko false karein

    if (isDark) {
        btn.innerText = "Turn On Lights";
    } else {
        btn.innerText = "Turn Off Lights";
    }
});