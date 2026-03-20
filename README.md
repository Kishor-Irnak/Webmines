<h1>Background Beams</h1>

body {
margin: 0;
background-color: black;
overflow: hidden;
display: grid;
place-content: center;
height: 100vh;
}

h1 {
position: relative;
z-index: 2;
font: 4vw sans-serif;
color: white;
}

h1:after {
content: "";
position: absolute;
inset: 0;
background: linear-gradient(
to bottom,
rgba(0, 0, 0, 0) 0%,
rgba(0, 0, 0, 0.95) 100%
);
}

.line {
position: absolute;
width: 1px;
background-color: rgba(255, 255, 255, 0.1);
height: 100vh;
z-index: 1;
}

.line::after {
content: "";
position: absolute;
left: 0;
width: 100%;
height: 80px;

background: linear-gradient(
to bottom,
rgba(255, 255, 255, 0),
rgba(0, 230, 250, 0.8)
);
animation: fall var(--ani-duration) var(--ani-delay) linear infinite;
}

@keyframes fall {
0% {
top: -100px;
}
100% {
top: 100%;
}
}
//coment
const lineCount = 20;

for (let i = 1; i <= lineCount; i++) {
const line = document.createElement("div");
line.classList.add("line");
line.style.setProperty(
"left",
`${i * (100 / lineCount) + Math.random() * 5 - 5}%`
);
line.style.setProperty("--ani-duration", 8 + Math.random() _ 10 + "s");
line.style.setProperty("--ani-delay", -Math.random() _ 10 + "s");
document.body.appendChild(line);
}
