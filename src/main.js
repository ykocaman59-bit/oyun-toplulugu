import "./style.css";

const app = document.getElementById("app");

const tasks = [
  { text: "DOMATES ÇİZ", emoji: "🍅" },
  { text: "KEDİ ÇİZ", emoji: "🐱" },
  { text: "EV ÇİZ", emoji: "🏠" },
  { text: "AĞAÇ ÇİZ", emoji: "🌳" },
  { text: "GÜNEŞ ÇİZ", emoji: "☀️" }
];

let timer;
let seconds = 60;
let drawing = false;
let canvas;
let ctx;

function showSplash() {
  app.innerHTML = `
    <main class="splash">
      <div class="logo">🎮</div>
      <h1>OYUN<br>TOPLULUĞU</h1>
      <p>Herkes oynar. Herkes yarışır.</p>
      <div class="loader"><span></span></div>
    </main>
  `;

  setTimeout(showHome, 1800);
}

function showHome() {
  app.innerHTML = `
    <main class="home">
      <header>
        <div>
          <small>MERHABA 👋</small>
          <h1>Oyun Topluluğu</h1>
        </div>
        <button class="profile">👤</button>
      </header>

      <section class="hero">
        <div>
          <span>OFFLINE MVP</span>
          <h2>Yarışmaya<br>hazır mısın?</h2>
          <p>Mini oyunlarda arkadaşlarınla yarış.</p>
        </div>
        <div class="trophy">🏆</div>
      </section>

      <h2 class="title">Oyunlar</h2>

      <button class="game" id="drawingGame">
        <div class="game-icon">🎨</div>
        <div>
          <h3>Çizim Yarışması</h3>
          <p>Verilen şeyi en güzel kim çizecek?</p>
          <small>OFFLINE TEST</small>
        </div>
        <strong>›</strong>
      </button>

      <button class="game disabled">
        <div class="game-icon">🫣</div>
        <div>
          <h3>Saklambaç</h3>
          <p>Labirentte ebe olmadan kaç!</p>
          <small>YAKINDA</small>
        </div>
        <strong>›</strong>
      </button>

      <button class="game disabled">
        <div class="game-icon">⚡</div>
        <div>
          <h3>Refleks</h3>
          <p>En hızlı tepki veren kazanır.</p>
          <small>YAKINDA</small>
        </div>
        <strong>›</strong>
      </button>

      <nav>
        <button>🏠<small>Ana Sayfa</small></button>
        <button>🏆<small>Sıralama</small></button>
        <button>⚙️<small>Ayarlar</small></button>
      </nav>
    </main>
  `;

  document
    .getElementById("drawingGame")
    .addEventListener("click", startDrawingGame);
}

function startDrawingGame() {
  clearInterval(timer);

  const task = tasks[Math.floor(Math.random() * tasks.length)];
  seconds = 60;

  app.innerHTML = `
    <main class="drawing-page">

      <header class="game-header">
        <button class="back" id="backHome">‹</button>

        <div class="round-title">
          <small>ÇİZİM YARIŞMASI</small>
          <strong>1. TUR</strong>
        </div>

        <div class="timer" id="timer">01:00</div>
      </header>

      <section class="mission">
        <small>GÖREV</small>
        <h1>${task.text}</h1>
        <span>${task.emoji}</span>
      </section>

      <section class="draw-card">
        <canvas id="drawCanvas"></canvas>
      </section>

      <div class="draw-tools">
        <button id="clearCanvas">🗑️ Temizle</button>
        <button id="finishDrawing" class="finish">BİTİRDİM ✓</button>
      </div>

      <section class="players">
        <div class="player me">
          <span>👤</span>
          <div>
            <strong>Sen</strong>
            <small>Çiziyorsun...</small>
          </div>
        </div>

        <div class="player">
          <span>🤖</span>
          <div>
            <strong>Bot Ali</strong>
            <small>Çiziyor...</small>
          </div>
        </div>

        <div class="player">
          <span>🤖</span>
          <div>
            <strong>Bot Ece</strong>
            <small>Çiziyor...</small>
          </div>
        </div>

        <div class="player">
          <span>🤖</span>
          <div>
            <strong>Bot Mert</strong>
            <small>Çiziyor...</small>
          </div>
        </div>
      </section>

    </main>
  `;

  setupCanvas();

  document
    .getElementById("backHome")
    .addEventListener("click", () => {
      clearInterval(timer);
      showHome();
    });

  document
    .getElementById("clearCanvas")
    .addEventListener("click", clearCanvas);

  document
    .getElementById("finishDrawing")
    .addEventListener("click", finishDrawing);

  timer = setInterval(() => {
    seconds--;

    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    const timerElement = document.getElementById("timer");

    if (timerElement) {
      timerElement.textContent = `${min}:${sec}`;

      if (seconds <= 10) {
        timerElement.classList.add("danger");
      }
    }

    if (seconds <= 0) {
      clearInterval(timer);
      finishDrawing();
    }
  }, 1000);
}

function setupCanvas() {
  canvas = document.getElementById("drawCanvas");

  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;

  ctx = canvas.getContext("2d");

  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";

  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
}

function getPosition(event) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function startDrawing(event) {
  drawing = true;

  canvas.setPointerCapture(event.pointerId);

  const pos = getPosition(event);

  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(event) {
  if (!drawing) return;

  const pos = getPosition(event);

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDrawing() {
  drawing = false;
}

function clearCanvas() {
  const rect = canvas.getBoundingClientRect();

  ctx.clearRect(0, 0, rect.width, rect.height);
}

function finishDrawing() {
  clearInterval(timer);

  const canvasData = canvas.toDataURL();

  showResults(canvasData);
}

function showResults(canvasData) {
  const myScore = Math.floor(Math.random() * 31) + 65;
  const bot1 = Math.floor(Math.random() * 31) + 55;
  const bot2 = Math.floor(Math.random() * 31) + 55;
  const bot3 = Math.floor(Math.random() * 31) + 55;

  const scores = [
    { name: "Sen", emoji: "👤", score: myScore },
    { name: "Bot Ali", emoji: "🤖", score: bot1 },
    { name: "Bot Ece", emoji: "🤖", score: bot2 },
    { name: "Bot Mert", emoji: "🤖", score: bot3 }
  ].sort((a, b) => b.score - a.score);

  const winner = scores[0];

  app.innerHTML = `
    <main class="results">

      <div class="result-icon">🏆</div>

      <small>TUR TAMAMLANDI</small>

      <h1>${winner.emoji} ${winner.name} KAZANDI!</h1>

      <p>Çizimler değerlendirildi.</p>

      <div class="my-drawing">
        <div>
          <small>SENİN ÇİZİMİN</small>
        </div>
        <img src="${canvasData}" alt="Çizimin">
      </div>

      <section class="score-list">
        ${scores
          .map(
            (player, index) => `
              <div class="score">
                <div class="rank">${index + 1}</div>
                <span>${player.emoji}</span>

                <div class="score-name">
                  <strong>${player.name}</strong>
                  <small>${index === 0 ? "🏆 Kazanan" : "Tamamladı"}</small>
                </div>

                <b>${player.score}</b>
              </div>
            `
          )
          .join("")}
      </section>

      <button class="primary-button" id="playAgain">
        TEKRAR OYNA
      </button>

      <button class="secondary-button" id="goHome">
        ANA SAYFAYA DÖN
      </button>

    </main>
  `;

  document
    .getElementById("playAgain")
    .addEventListener("click", startDrawingGame);

  document
    .getElementById("goHome")
    .addEventListener("click", showHome);
}

showSplash();
