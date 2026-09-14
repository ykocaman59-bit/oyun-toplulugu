import "./style.css";

const app = document.getElementById("app");

const baseTasks = [
  { text: "DOMATES ÇİZ", emoji: "🍅" },
  { text: "KEDİ ÇİZ", emoji: "🐱" },
  { text: "EV ÇİZ", emoji: "🏠" },
  { text: "AĞAÇ ÇİZ", emoji: "🌳" },
  { text: "GÜNEŞ ÇİZ", emoji: "☀️" },
  { text: "ARABA ÇİZ", emoji: "🚗" },
  { text: "KÖPEK ÇİZ", emoji: "🐶" },
  { text: "ÇİÇEK ÇİZ", emoji: "🌸" },
  { text: "ELMA ÇİZ", emoji: "🍎" },
  { text: "PİZZA ÇİZ", emoji: "🍕" },
  { text: "DONDURMA ÇİZ", emoji: "🍦" },
  { text: "UÇAK ÇİZ", emoji: "✈️" },
  { text: "GEMİ ÇİZ", emoji: "🚢" },
  { text: "ROKET ÇİZ", emoji: "🚀" },
  { text: "KAMYON ÇİZ", emoji: "🚚" },
  { text: "BİSİKLET ÇİZ", emoji: "🚲" },
  { text: "AĞIZ ÇİZ", emoji: "👄" },
  { text: "GÖZ ÇİZ", emoji: "👁️" },
  { text: "KALP ÇİZ", emoji: "❤️" },
  { text: "YILDIZ ÇİZ", emoji: "⭐" },
  { text: "AY ÇİZ", emoji: "🌙" },
  { text: "BULUT ÇİZ", emoji: "☁️" },
  { text: "YAĞMUR ÇİZ", emoji: "🌧️" },
  { text: "GÖKKUŞAĞI ÇİZ", emoji: "🌈" },
  { text: "KAR TANESİ ÇİZ", emoji: "❄️" },
  { text: "KORSAN ÇİZ", emoji: "🏴‍☠️" },
  { text: "ROBOT ÇİZ", emoji: "🤖" },
  { text: "CANAVAR ÇİZ", emoji: "👾" },
  { text: "UZAYLI ÇİZ", emoji: "👽" },
  { text: "PRENSES ÇİZ", emoji: "👸" },
  { text: "KRAL ÇİZ", emoji: "🤴" },
  { text: "SÜPER KAHRAMAN ÇİZ", emoji: "🦸" },
  { text: "DİNOZOR ÇİZ", emoji: "🦖" },
  { text: "FİL ÇİZ", emoji: "🐘" },
  { text: "ASLAN ÇİZ", emoji: "🦁" },
  { text: "MAYMUN ÇİZ", emoji: "🐒" },
  { text: "BALIK ÇİZ", emoji: "🐟" },
  { text: "KÖPEKBALIĞI ÇİZ", emoji: "🦈" },
  { text: "KELEBEK ÇİZ", emoji: "🦋" },
  { text: "ARİ ÇİZ", emoji: "🐝" },
  { text: "KAPLUMBAĞA ÇİZ", emoji: "🐢" },
  { text: "YILAN ÇİZ", emoji: "🐍" },
  { text: "ÖRDEK ÇİZ", emoji: "🦆" },
  { text: "TAVŞAN ÇİZ", emoji: "🐰" },
  { text: "PENGUEN ÇİZ", emoji: "🐧" },
  { text: "FUTBOL TOPU ÇİZ", emoji: "⚽" },
  { text: "BASKETBOL TOPU ÇİZ", emoji: "🏀" },
  { text: "GİTAR ÇİZ", emoji: "🎸" },
  { text: "DAVUL ÇİZ", emoji: "🥁" },
  { text: "PİYANO ÇİZ", emoji: "🎹" },
  { text: "TELEVİZYON ÇİZ", emoji: "📺" },
  { text: "TELEFON ÇİZ", emoji: "📱" },
  { text: "BİLGİSAYAR ÇİZ", emoji: "💻" },
  { text: "SAAT ÇİZ", emoji: "⏰" },
  { text: "GÖZLÜK ÇİZ", emoji: "👓" },
  { text: "ŞAPKA ÇİZ", emoji: "🎩" },
  { text: "ÇANTA ÇİZ", emoji: "👜" },
  { text: "ANAHTAR ÇİZ", emoji: "🔑" },
  { text: "KİTAP ÇİZ", emoji: "📖" },
  { text: "KALEM ÇİZ", emoji: "✏️" },
  { text: "KAMERA ÇİZ", emoji: "📷" },
  { text: "FENER ÇİZ", emoji: "🔦" },
  { text: "TAÇ ÇİZ", emoji: "👑" },
  { text: "KUM SAATİ ÇİZ", emoji: "⌛" },
  { text: "HEDİYE KUTUSU ÇİZ", emoji: "🎁" },
  { text: "BALON ÇİZ", emoji: "🎈" },
  { text: "PASTA ÇİZ", emoji: "🎂" },
  { text: "KAHVE ÇİZ", emoji: "☕" },
  { text: "HAMBURGER ÇİZ", emoji: "🍔" },
  { text: "PATATES ÇİZ", emoji: "🍟" },
  { text: "MUZ ÇİZ", emoji: "🍌" },
  { text: "KARPUZ ÇİZ", emoji: "🍉" },
  { text: "ÇİLEK ÇİZ", emoji: "🍓" },
  { text: "MANTAR ÇİZ", emoji: "🍄" },
  { text: "AĞAÇ EVİ ÇİZ", emoji: "🏡" },
  { text: "KALE ÇİZ", emoji: "🏰" },
  { text: "DENİZ FENERİ ÇİZ", emoji: "🗼" },
  { text: "KÖPRÜ ÇİZ", emoji: "🌉" },
  { text: "DAĞ ÇİZ", emoji: "⛰️" },
  { text: "VOLKAN ÇİZ", emoji: "🌋" },
  { text: "ADA ÇİZ", emoji: "🏝️" },
  { text: "ÇÖL ÇİZ", emoji: "🏜️" },
  { text: "KAMP ÇADIRI ÇİZ", emoji: "⛺" }
];

/*
 * Büyük görev havuzu.
 *
 * Burada aynı görevlerin kopyalanması yerine farklı görevleri
 * otomatik olarak oluşturuyoruz.
 *
 * 80+ temel görev x farklı ek tanımlar = 1000+ görev.
 */
const modifiers = [
  "KÜÇÜK",
  "BÜYÜK",
  "KOMİK",
  "TATLI",
  "KORKUNÇ",
  "UZAYDA",
  "DENİZDE",
  "DAĞDA",
  "GECE",
  "GÜNDÜZ",
  "YAĞMURDA",
  "KARDA",
  "UÇAN",
  "KOŞAN",
  "ZıPLAYAN"
];

function createTaskPool() {
  const pool = [...baseTasks];

  baseTasks.forEach((task) => {
    modifiers.forEach((modifier) => {
      pool.push({
        text: `${modifier} ${task.text}`,
        emoji: task.emoji
      });
    });
  });

  return pool;
}

const taskPool = createTaskPool();

let timer;
let seconds = 60;
let drawing = false;
let canvas;
let ctx;

let currentRound = 0;
const TOTAL_ROUNDS = 15;

let usedTasks = [];
let roundResults = [];

const players = [
  { name: "Sen", emoji: "👤" },
  { name: "Bot Ali", emoji: "🤖" },
  { name: "Bot Ece", emoji: "🤖" },
  { name: "Bot Mert", emoji: "🤖" }
];

function randomTask() {
  const available = taskPool.filter(
    (task) => !usedTasks.some((used) => used.text === task.text)
  );

  const list = available.length ? available : taskPool;

  const task = list[Math.floor(Math.random() * list.length)];

  usedTasks.push(task);

  return task;
}

function randomScore() {
  return Math.floor(Math.random() * 41) + 55;
}

/*
 * Botların çizimini basit SVG olarak oluşturuyoruz.
 *
 * Böylece kazanan bot olduğunda sonuç ekranında
 * gerçekten o botun "çizimi" gösterilebiliyor.
 */
function createBotDrawing(task, botIndex) {
  const variations = [
    {
      shape: `
        <circle cx="200" cy="125" r="75"/>
        <circle cx="170" cy="105" r="8"/>
        <circle cx="230" cy="105" r="8"/>
        <path d="M165 150 Q200 180 235 150"/>
      `
    },
    {
      shape: `
        <rect x="115" y="70" width="170" height="130" rx="25"/>
        <circle cx="165" cy="125" r="12"/>
        <circle cx="235" cy="125" r="12"/>
        <path d="M160 165 Q200 185 240 165"/>
      `
    },
    {
      shape: `
        <polygon points="200,35 235,105 315,115 255,165 270,245 200,205 130,245 145,165 85,115 165,105"/>
      `
    },
    {
      shape: `
        <circle cx="200" cy="140" r="85"/>
        <circle cx="165" cy="120" r="10"/>
        <circle cx="235" cy="120" r="10"/>
        <path d="M155 165 Q200 205 245 165"/>
        <path d="M200 55 L200 20"/>
      `
    }
  ];

  const variation = variations[botIndex % variations.length];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="400"
         height="250"
         viewBox="0 0 400 250">
      <rect width="400" height="250" rx="20" fill="#0e1220"/>
      <g
        fill="none"
        stroke="#ffffff"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round">
        ${variation.shape}
      </g>

      <text
        x="200"
        y="225"
        text-anchor="middle"
        fill="#777f99"
        font-size="13"
        font-family="Arial">
        ${task.emoji}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

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
  clearInterval(timer);

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
          <p>15 turda en yüksek puanı topla ve kazan!</p>
        </div>
        <div class="trophy">🏆</div>
      </section>

      <h2 class="title">Oyunlar</h2>

      <button class="game" id="drawingGame">
        <div class="game-icon">🎨</div>
        <div>
          <h3>Çizim Yarışması</h3>
          <p>15 farklı çizimde en yüksek toplam puanı al.</p>
          <small>15 TUR • RASTGELE GÖREVLER</small>
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
    .addEventListener("click", startNewGame);
}

function startNewGame() {
  clearInterval(timer);

  currentRound = 0;
  usedTasks = [];
  roundResults = [];

  startDrawingRound();
}

function startDrawingRound() {
  clearInterval(timer);

  currentRound++;

  seconds = 60;

  const task = randomTask();

  app.innerHTML = `
    <main class="drawing-page">

      <header class="game-header">
        <button class="back" id="backHome">‹</button>

        <div class="round-title">
          <small>ÇİZİM YARIŞMASI</small>
          <strong>${currentRound}. / ${TOTAL_ROUNDS}. TUR</strong>
        </div>

        <div class="timer" id="timer">01:00</div>
      </header>

      <div class="round-progress">
        <div style="width:${(currentRound / TOTAL_ROUNDS) * 100}%"></div>
      </div>

      <section class="mission">
        <small>GÖREV ${currentRound}</small>
        <h1>${task.text}</h1>
        <span>${task.emoji}</span>
      </section>

      <section class="draw-card">
        <canvas id="drawCanvas"></canvas>
      </section>

      <div class="draw-tools">
        <button id="clearCanvas">🗑️ Temizle</button>
        <button id="finishDrawing" class="finish">
          BİTİRDİM ✓
        </button>
      </div>

      <section class="players">
        ${players
          .map(
            (player, index) => `
              <div class="player ${index === 0 ? "me" : ""}">
                <span>${player.emoji}</span>
                <div>
                  <strong>${player.name}</strong>
                  <small>${index === 0 ? "Çiziyorsun..." : "Çiziyor..."}</small>
                </div>
              </div>
            `
          )
          .join("")}
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
  const ratio = window.devicePixelRatio || 1;

  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;

  ctx = canvas.getContext("2d");

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

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
  if (!canvas) return;

  clearInterval(timer);

  const canvasData = canvas.toDataURL("image/png");

  const bot1Score = randomScore();
  const bot2Score = randomScore();
  const bot3Score = randomScore();

  const botDrawings = [
    createBotDrawing(
      usedTasks[usedTasks.length - 1],
      0
    ),
    createBotDrawing(
      usedTasks[usedTasks.length - 1],
      1
    ),
    createBotDrawing(
      usedTasks[usedTasks.length - 1],
      2
    )
  ];

  const myScore = randomScore();

  const round = {
    task: usedTasks[usedTasks.length - 1],

    players: [
      {
        name: "Sen",
        emoji: "👤",
        score: myScore,
        drawing: canvasData
      },
      {
        name: "Bot Ali",
        emoji: "🤖",
        score: bot1Score,
        drawing: botDrawings[0]
      },
      {
        name: "Bot Ece",
        emoji: "🤖",
        score: bot2Score,
        drawing: botDrawings[1]
      },
      {
        name: "Bot Mert",
        emoji: "🤖",
        score: bot3Score,
        drawing: botDrawings[2]
      }
    ]
  };

  roundResults.push(round);

  if (currentRound < TOTAL_ROUNDS) {
    showRoundResult(round);
  } else {
    showFinalResults();
  }
}

function showRoundResult(round) {
  const sorted = [...round.players].sort(
    (a, b) => b.score - a.score
  );

  const winner = sorted[0];

  app.innerHTML = `
    <main class="round-result">

      <div class="round-result-icon">🏆</div>

      <small>${currentRound}. TUR TAMAMLANDI</small>

      <h1>${winner.emoji} ${winner.name}</h1>

      <p>Bu turu ${winner.score} puanla kazandı.</p>

      <div class="winner-preview">
        <div class="winner-preview-title">
          <span>🏆</span>
          <strong>${winner.name}'in çizimi</strong>
        </div>

        <img
          src="${winner.drawing}"
          alt="${winner.name} çizimi"
        />
      </div>

      <section class="round-scores">
        ${sorted
          .map(
            (player, index) => `
              <div class="score">
                <div class="rank">${index + 1}</div>
                <span>${player.emoji}</span>

                <div class="score-name">
                  <strong>${player.name}</strong>
                  <small>${player.score} puan</small>
                </div>

                <b>${player.score}</b>
              </div>
            `
          )
          .join("")}
      </section>

      <button class="primary-button" id="nextRound">
        ${currentRound + 1}. TURA GEÇ →
      </button>

      <button class="secondary-button" id="quitGame">
        OYUNDAN ÇIK
      </button>

    </main>
  `;

  document
    .getElementById("nextRound")
    .addEventListener("click", startDrawingRound);

  document
    .getElementById("quitGame")
    .addEventListener("click", showHome);
}

function showFinalResults() {
  const totals = players.map((player) => {
    const playerRounds = roundResults.flatMap((round) =>
      round.players.filter(
        (roundPlayer) => roundPlayer.name === player.name
      )
    );

    const totalScore = playerRounds.reduce(
      (total, round) => total + round.score,
      0
    );

    return {
      name: player.name,
      emoji: player.emoji,
      score: totalScore
    };
  });

  totals.sort((a, b) => b.score - a.score);

  const winner = totals[0];

  /*
   * Kazananın gösterilecek çizimini bul.
   *
   * Kazanan bot ise son turdaki bot çizimi değil,
   * o oyuncunun oyun boyunca yaptığı en yüksek puanlı
   * çizimi gösteriyoruz.
   */
  const winnerDrawings = [];

  roundResults.forEach((round) => {
    const player = round.players.find(
      (p) => p.name === winner.name
    );

    if (player) {
      winnerDrawings.push({
        drawing: player.drawing,
        score: player.score,
        task: round.task
      });
    }
  });

  winnerDrawings.sort((a, b) => b.score - a.score);

  const winningDrawing = winnerDrawings[0];

  app.innerHTML = `
    <main class="results">

      <div class="result-icon">🏆</div>

      <small>15 TUR TAMAMLANDI</small>

      <h1>${winner.emoji} ${winner.name} KAZANDI!</h1>

      <p>
        ${winner.score} toplam puanla oyunun şampiyonu!
      </p>

      <div class="winner-final-drawing">

        <div class="winner-final-header">
          <div>
            <small>🏆 KAZANANIN ÇİZİMİ</small>
            <strong>${winner.name}</strong>
          </div>

          <span>${winningDrawing.task.emoji}</span>
        </div>

        <div class="winner-image">
          <img
            src="${winningDrawing.drawing}"
            alt="${winner.name} tarafından çizilen ${winningDrawing.task.text}"
          />
        </div>

        <div class="winning-task">
          <span>GÖREV</span>
          <strong>${winningDrawing.task.text}</strong>
          <b>${winningDrawing.score} PUAN</b>
        </div>

      </div>

      <h2 class="final-score-title">
        🏆 GENEL SIRALAMA
      </h2>

      <section class="score-list">

        ${totals
          .map(
            (player, index) => `
              <div class="score ${
                index === 0 ? "champion" : ""
              }">

                <div class="rank">
                  ${index === 0 ? "🏆" : index + 1}
                </div>

                <span>${player.emoji}</span>

                <div class="score-name">
                  <strong>${player.name}</strong>
                  <small>
                    ${
                      index === 0
                        ? "ŞAMPİYON"
                        : `${index + 1}. sıra`
                    }
                  </small>
                </div>

                <b>${player.score}</b>

              </div>
            `
          )
          .join("")}

      </section>

      <button class="primary-button" id="playAgain">
        YENİ OYUN 🎨
      </button>

      <button class="secondary-button" id="goHome">
        ANA SAYFAYA DÖN
      </button>

    </main>
  `;

  document
    .getElementById("playAgain")
    .addEventListener("click", startNewGame);

  document
    .getElementById("goHome")
    .addEventListener("click", showHome);
}

showSplash();
