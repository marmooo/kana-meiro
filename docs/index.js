const remSize=parseInt(getComputedStyle(document.documentElement).fontSize),size=10,meiro=new Array(12);let score=0,counter=0,prevPos=1,idiomEnds=[],idiomsNum,isCorrect=!0,idioms=[];const words="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュー".split(""),audioContext=new globalThis.AudioContext,audioBufferCache={};loadAudio("error","mp3/cat.mp3"),loadAudio("correct","mp3/correct3.mp3"),loadAudio("incorrect","mp3/incorrect1.mp3"),loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark")}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light")):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"))}async function playAudio(e,t){const s=await loadAudio(e,audioBufferCache[e]),n=audioContext.createBufferSource();if(n.buffer=s,t){const e=audioContext.createGain();e.gain.value=t,e.connect(audioContext.destination),n.connect(e),n.start()}else n.connect(audioContext.destination),n.start()}async function loadAudio(e,t){if(audioBufferCache[e])return audioBufferCache[e];const s=await fetch(t),o=await s.arrayBuffer(),n=await audioContext.decodeAudioData(o);return audioBufferCache[e]=n,n}function unlockAudio(){audioContext.resume()}function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function shuffle(e){for(let t=e.length;1<t;t--){const n=Math.floor(Math.random()*t);[e[n],e[t-1]]=[e[t-1],e[n]]}return e}function prependIdiomLink(e,t){const n=document.createElement("a");n.textContent=e,document.documentElement.lang.startsWith("zh")?n.href="https://www.bing.com/search?q="+e:n.href="https://www.google.com/search?q="+e+"とは",n.target="_blank",n.rel="noopener noreferer",t?n.className="btn btn-light m-1":n.className="btn btn-secondary m-1",n.role="button",solvedPanel.prepend(n)}function showSolved(){const e=idiomEnds.findIndex(e=>e>prevPos);e>=0&&idioms.slice(e,idiomsNum).forEach(e=>{prependIdiomLink(e,!1)})}function showAnswer(){showSolved(!1);const e=document.getElementById("meiro").children;for(let t=0;t<size;t++){const n=e[t].children;for(let e=0;e<size;e++)meiro[t][e]>0&&(n[e].className="",n[e].classList.add("table-danger"))}const t=document.getElementById("startButton");t.classList.remove("d-none");const n=document.getElementById("answerButton");n.classList.add("d-none")}function getNeighborText(e,t,n,s){let o=e[t].children[n].textContent;return s==1?meiro[t-1][n]!=0&&(o+=e[t-1].children[n].textContent):s==2?meiro[t+1][n]!=0&&(o+=e[t+1].children[n].textContent):s==3?meiro[t][n-1]!=0&&(o+=e[t].children[n-1].textContent):meiro[t][n+1]!=0&&(o+=e[t].children[n+1].textContent),o}function setNeighborText(e,t,n,s,o,i){i||(e[t].children[n].textContent=o[0]),s==1?e[t-1].children[n].textContent=o[1]:s==2?e[t+1].children[n].textContent=o[1]:s==3?e[t].children[n-1].textContent=o[1]:e[t].children[n+1].textContent=o[1]}function randomizeText(e,t){if(t){const t=e[0];for(let n=0;n<5;n++)if(e=t+words[getRandomInt(0,words.length)],!includeIdiom(e))return e}return e}function includeIdiom(e){return!!idioms.includes(e.slice(0,2))}function strictNeighbor(e,t,n,s,o){let i=getNeighborText(e,t,n,s);i.length==2&&(i=randomizeText(i,o),setNeighborText(e,t,n,s,i,o))}function strictSolution(){const e=document.getElementById("meiro").children;for(let t=0;t<size;t++)for(let n=0;n<size;n++)if(meiro[t][n]==0)0<=t-1&&strictNeighbor(e,t,n,1,!1),t+1<size&&strictNeighbor(e,t,n,2,!1),0<=n-1&&strictNeighbor(e,t,n,3,!1),n+1<size&&strictNeighbor(e,t,n,4,!1);else{const s=getNeighborRoutes(t,n);for(let o=0;o<s.length;o++)strictNeighbor(e,t,n,s[o][2],!0)}}function startGame(){for(;solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);generateGame(),strictSolution();const e=document.getElementById("startButton");e.classList.add("d-none");const t=document.getElementById("answerButton");t.classList.remove("d-none"),prevPos=1}function isPassableRoute(e,t,n){return n.length==4||n.length==3&&(e==0||e==size-1||t==0||t==size-1)}function isPassableNeighbor(e,t,n){return n.length>=3||n.length==2&&(e==0||e==size-1||t==0||t==size-1)}function getRoute(e,t,n,s){const i=shuffle([1,2,3,4]);let o=getNeighborRoutes(e,t);if(!isPassableNeighbor(e,t,o))return!1;for(let a=0;a<i.length;a++){if(i[a]==1&&0<=e-s&&n!=2){let n=!0;for(let i=1;i<=s;i++)if(o=getNeighborRoutes(e-i,t),!isPassableRoute(e-i,t,o)){n=!1;break}if(n)return[e-1,t,1]}if(i[a]==2&&e+s<size&&n!=1){let n=!0;for(let i=1;i<=s;i++)if(o=getNeighborRoutes(e+i,t),!isPassableRoute(e+i,t,o)){n=!1;break}if(n)return[e+1,t,2]}if(i[a]==3&&0<=t-s&&n!=4){let n=!0;for(let i=1;i<=s;i++)if(o=getNeighborRoutes(e,t-i),!isPassableRoute(e,t-i,o)){n=!1;break}if(n)return[e,t-1,3]}if(i[a]==4&&t+s<size&&n!=3){let n=!0;for(let i=1;i<=s;i++)if(o=getNeighborRoutes(e,t+i),!isPassableRoute(e,t+i,o)){n=!1;break}if(n)return[e,t+1,4]}}return!1}function getNeighborRoutes(e,t){const n=[];return 0<=e-1&&meiro[e-1][t]==0&&n.push([e-1,t,1]),e+1<size&&meiro[e+1][t]==0&&n.push([e+1,t,2]),0<=t-1&&meiro[e][t-1]==0&&n.push([e,t-1,3]),t+1<size&&meiro[e][t+1]==0&&n.push([e,t+1,4]),n}function paint(e,t,n,s){if(n==1){for(let n=0;n<s;n++)counter+=1,meiro[e-n][t]=counter;return[e-s+1,t]}if(n==2){for(let n=0;n<s;n++)counter+=1,meiro[e+n][t]=counter;return[e+s-1,t]}if(n==3){for(let n=0;n<s;n++)counter+=1,meiro[e][t-n]=counter;return[e,t-s+1]}for(let n=0;n<s;n++)counter+=1,meiro[e][t+n]=counter;return[e,t+s-1]}function checkIdiomEnds(){let e=0;idiomEnds=[];for(let t=0;t<counter;t++)e+=idioms[t].length,idiomEnds.push(e)}function generateGame(){idioms=shuffle(idioms);let t=!0;for(;t;){let e=0,n=getRandomInt(1,size-1),i=!0;counter=0;for(let e=0;e<size;e++){meiro[e]=new Array(size);for(let t=0;t<size;t++)meiro[e][t]=0}let s=getRoute(e,n,-1,idioms[0].length),o=paint(e,n,s[2],idioms[0].length);e=o[0],n=o[1];let a=1;for(;i;){const r=shuffle(getNeighborRoutes(e,n));if(r.length==0)i=!1;else{let c=!0;for(let l=0;l<r.length;l++)if(s=getRoute(r[l][0],r[l][1],r[l][2],idioms[a].length-1),s){c=!1,paint(r[l][0],r[l][1],r[l][2],1),o=paint(s[0],s[1],s[2],idioms[a].length-1),e=o[0],n=o[1],(e==0||e==size-1||n==0||n==size-1)&&(i=!1,counter>20&&(t=!1)),a+=1;break}c&&(i=!1)}}idiomsNum=a}checkIdiomEnds();const n=idioms.slice(0,idiomsNum).join(""),e=document.getElementById("meiro");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<size;t++){const s=document.createElement("tr");e.appendChild(s);for(let i=0;i<size;i++){const e=document.createElement("td"),o=meiro[t][i];o==0?e.textContent=words[getRandomInt(0,words.length)]:(o==1&&e.classList.add("table-secondary"),e.textContent=n[o-1]),s.appendChild(e),e.onclick=()=>{meiroClickEvent(e,o)}}}}function meiroClickEvent(e,t){if(e.classList.toggle("table-primary"),e.classList.contains("table-primary"))if(prevPos==t)playAudio("error");else if(t-prevPos==1&&t!=0){prevPos+=1,playAudio("correct"),e.onclick=null;const n=idiomEnds.findIndex(e=>e==t);n>=0&&(isCorrect&&(score+=idioms[n].length,document.getElementById("score").textContent=score),prependIdiomLink(idioms[n],isCorrect),isCorrect=!0)}else e.classList.toggle("table-primary"),playAudio("incorrect"),isCorrect=!1}function resizeFontSize(e){const t=document.getElementById("masu").offsetWidth,n=1.2,s=remSize*5,o=11,i=(t-s-o)/12/n;e.style.fontSize=i+"px"}const meiroObj=document.getElementById("meiro");resizeFontSize(meiroObj),globalThis.addEventListener("resize",()=>{resizeFontSize(meiroObj)}),fetch("words.lst").then(e=>e.text()).then(e=>{for(e.trim().split(`
`).forEach(e=>{idioms.push(e)}),generateGame(),strictSolution();solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);showAnswer()}),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("startButton").onclick=startGame,document.getElementById("answerButton").onclick=showAnswer,document.addEventListener("click",unlockAudio,{once:!0,useCapture:!0})