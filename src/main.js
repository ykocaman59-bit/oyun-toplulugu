import "./style.css";

const app = document.getElementById("app");

const TOTAL_DRAWINGS_PER_PLAYER = 4;
const DRAW_TIME = 60;

/*
  Maksimum 4 oyuncu.
  Numara oyun boyunca değişmez.
*/
let players = [
  {
    id: 1,
    name: "KralBaba",
    emoji: "👤",
    score: 0,
    active: true,
    drawings: 0
  },
  {
    id: 2,
    name: "Ali",
    emoji: "🤖",
    score: 0,
    active: true,
    drawings: 0
  },
  {
    id: 3,
    name: "Ece",
    emoji: "🤖",
    score: 0,
    active: true,
    drawings: 0
  },
  {
    id: 4,
    name: "Mert",
    emoji: "🤖",
    score: 0,
    active: true,
    drawings: 0
  }
];

/*
  Çok sayıda görev üretmek için temel görevler.
  Buradan kombinasyonlarla 10.000+ görev üretilebilir.
*/
const baseTasks = [
  ["KEDİ", "🐱"],
  ["KÖPEK", "🐶"],
  ["EV", "🏠"],
  ["AĞAÇ", "🌳"],
  ["GÜNEŞ", "☀️"],
  ["AY", "🌙"],
  ["ARABA", "🚗"],
  ["UÇAK", "✈️"],
  ["GEMİ", "🚢"],
  ["BALIK", "🐟"],
  ["KUŞ", "🐦"],
  ["ÇİÇEK", "🌸"],
  ["ELMA", "🍎"],
  ["MUZ", "🍌"],
  ["KARPUZ", "🍉"],
  ["PİZZA", "🍕"],
  ["HAMBURGER", "🍔"],
  ["DONDURMA", "🍦"],
  ["PASTA", "🎂"],
  ["KAHVE", "☕"],
  ["KİTAP", "📖"],
  ["TELEFON", "📱"],
  ["BİLGİSAYAR", "💻"],
  ["SAAT", "⌚"],
  ["GÖZLÜK", "👓"],
  ["ŞAPKA", "🎩"],
  ["TOP", "⚽"],
  ["GİTAR", "🎸"],
  ["DAVUL", "🥁"],
  ["TAÇ", "👑"],
  ["KILIÇ", "⚔️"],
  ["ROKET", "🚀"],
  ["KARDAN ADAM", "⛄"],
  ["KAR", "❄️"],
  ["YAĞMUR", "🌧️"],
  ["BULUT", "☁️"],
  ["GÖKKUŞAĞI", "🌈"],
  ["YILDIRIM", "⚡"],
  ["VOLKAN", "🌋"],
  ["DAĞ", "⛰️"],
  ["DENİZ", "🌊"],
  ["ADA", "🏝️"],
  ["KÖPRÜ", "🌉"],
  ["KALE", "🏰"],
  ["KULE", "🗼"],
  ["FENER", "🏮"],
  ["BALON", "🎈"],
  ["UÇURTMA", "🪁"],
  ["ROBOT", "🤖"],
  ["UZAYLI", "👽"],
  ["HAYALET", "👻"],
  ["CANAVAR", "👹"],
  ["EJDERHA", "🐉"],
  ["DİNAZOR", "🦖"],
  ["ASLAN", "🦁"],
  ["KAPLAN", "🐯"],
  ["FİL", "🐘"],
  ["ZÜRAFA", "🦒"],
  ["MAYMUN", "🐒"],
  ["TAVŞAN", "🐰"],
  ["KAPLUMBAĞA", "🐢"],
  ["YILAN", "🐍"],
  ["KELEBEK", "🦋"],
  ["ARI", "🐝"],
  ["ÖRÜMCEK", "🕷️"],
  ["KURBAĞA", "🐸"],
  ["PENGUEN", "🐧"],
  ["KUTUP AYISI", "🐻‍❄️"],
  ["PANDA", "🐼"],
  ["KAMERA", "📷"],
  ["TELEVİZYON", "📺"],
  ["LAMBA", "💡"],
  ["SANDALYE", "🪑"],
  ["MASA", "🪵"],
  ["KAPI", "🚪"],
  ["PENCERE", "🪟"],
  ["YATAK", "🛏️"],
  ["SAAT", "⏰"],
  ["ANAHTAR", "🔑"],
  ["KİLİT", "🔒"],
  ["ŞEMSİYE", "☂️"],
  ["ÇANTA", "👜"],
  ["AYAKKABI", "👟"],
  ["BİSİKLET", "🚲"],
  ["MOTOSİKLET", "🏍️"],
  ["OTOBÜS", "🚌"],
  ["TREN", "🚆"],
  ["HELİKOPTER", "🚁"],
  ["AMBULANS", "🚑"],
  ["İTFAİYE", "🚒"],
  ["POLİS ARABASI", "🚓"]
];

/*
  10.000+ görev oluşturuyoruz.
  Aynı nesnenin farklı durumlarını da görev haline getiriyoruz.
*/
const modifiers = [
  "BÜYÜK",
  "KÜÇÜK",
  "KOMİK",
  "MİNİK",
  "DEV",
  "HIZLI",
  "YAVAŞ",
  "UYUYAN",
  "KOŞAN",
  "ZIPLAYAN",
  "UÇAN",
  "YÜZEN",
  "GÜLEN",
  "AĞLAYAN",
  "KORKAN",
  "ŞAŞIRAN",
  "KIZGIN",
  "MUTLU",
  "ÜZGÜN",
  "KAYBOLMUŞ",
  "KIRIK",
  "ESKİ",
  "YENİ",
  "FUTBOL OYNAYAN",
  "DANS EDEN",
  "ŞAPKA TAKAN",
  "GÖZLÜK TAKAN",
  "YAĞMURDA",
  "KARDA",
  "UZAYDA"
];

function createTaskPool() {
  const pool = [];

  for (const [name, emoji] of baseTasks) {
    pool.push({
      text: `${name} ÇİZ`,
      answer: name,
      emoji
    });

    for (const modifier of modifiers) {
      pool.push({
        text: `${modifier} ${name} ÇİZ`,
        answer: `${modifier} ${name}`,
        emoji
      });
    }
  }

  /*
    Havuzu büyütmek için kombinasyonlar.
  */
  for (const [name, emoji] of baseTasks) {
    for (let i = 0; i < modifiers.length; i++) {
      for (let j = i + 1; j < modifiers.length; j++) {
        pool.push({
          text: `${modifiers[i]} ${modifiers[j]} ${name} ÇİZ`,
          answer: `${modifiers[i]} ${modifiers[j]} ${name}`,
          emoji
        });
      }
    }
  }

  return pool;
}

const taskPool = createTaskPool();

let usedTasks = [];

let currentDrawerIndex = 0;
let totalDrawings = 0;
let currentTask = null;

let timer = null;
let seconds = DRAW_TIME;

let canvas = null;
let ctx = null;
let drawing = false;

let currentGuesses = [];
let currentCorrectPlayers = [];
let currentChat = [];

let currentDrawingData = null;

function getActivePlayers() {
  return players.filter(player => player.active);
}

function getNextActivePlayer(startIndex) {
  if (getActivePlayers().length === 0) return null;

  let index = startIndex;

  for (let i = 0; i < players.length; i++) {
    const player = players[index];

    if (
      player &&
      player.active &&
      player.drawings < TOTAL_DRAWINGS_PER_PLAYER
    ) {
      return player;
    }

    index = (index + 1) % players.length;
  }

  return null;
}

function getCurrentDrawer() {
  return players[currentDrawerIndex];
}

function randomTask() {
  const available = taskPool.filter(
    task => !usedTasks.includes(task)
  );

  if (available.length === 0) {
    usedTasks = [];
    return taskPool[
      Math.floor(Math.random() * taskPool.length)
    ];
  }

  const task =
    available[Math.floor(Math.random() * available.length)];

  usedTasks.push(task);

  return task;
}

function showSplash() {
  app.innerHTML = `
    <main class="splash">
      <div class="logo">🎮</div>

      <h1>OYUN<br>TOPLULUĞU</h1>

      <p>Herkes oynar. Herkes yarışır.</p>

      <div class="loader">
        <span></span>
      </div>
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

          <h2>
            Yarışmaya<br>
            hazır mısın?
          </h2>

          <p>
            Çiz, tahmin et ve en yüksek puanı toplamaya çalış.
          </p>
        </div>

        <div class="trophy">🏆</div>
      </section>

      <h2 class="title">Oyunlar</h2>

      <button class="game" id="drawingGame">

        <div class="game-icon">🎨</div>

        <div>
          <h3>Çizim & Tahmin Yarışması</h3>

          <p>
            Bir kişi çizer, diğerleri tahmin eder.
          </p>

          <small>
            4 OYUNCU • 16 ÇİZİM
          </small>
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
        <button>
          🏠
          <small>Ana Sayfa</small>
        </button>

        <button>
          🏆
          <small>Sıralama</small>
        </button>

        <button>
          ⚙️
          <small>Ayarlar</small>
        </button>
      </nav>

    </main>
  `;

  document
    .getElementById("drawingGame")
    .addEventListener("click", startNewGame);
}

function startNewGame() {
  clearInterval(timer);

  players.forEach(player => {
    player.score = 0;
    player.active = true;
    player.drawings = 0;
  });

  usedTasks = [];

  currentDrawerIndex = 0;
  totalDrawings = 0;

  currentTask = null;

  currentGuesses = [];
  currentCorrectPlayers = [];
  currentChat = [];

  startNextDrawing();
}

function startNextDrawing() {
  clearInterval(timer);

  const activePlayers = getActivePlayers();

  /*
    Bir kişi kaldıysa oyun biter.
  */
  if (activePlayers.length <= 1) {
    showFinalResults(true);
    return;
  }

  /*
    Her aktif oyuncu 4 kez çizdiyse oyun biter.
  */
  const hasRemainingDrawing = activePlayers.some(
    player => player.drawings < TOTAL_DRAWINGS_PER_PLAYER
  );

  if (!hasRemainingDrawing) {
    showFinalResults(false);
    return;
  }

  const drawer = getNextActivePlayer(currentDrawerIndex);

  if (!drawer) {
    showFinalResults(false);
    return;
  }

  currentDrawerIndex = drawer.id - 1;

  currentTask = randomTask();

  currentGuesses = [];
  currentCorrectPlayers = [];
  currentChat = [];

  currentDrawingData = null;

  seconds = DRAW_TIME;

  renderDrawingScreen();

  setupCanvas();

  startTimer();
}

function renderDrawingScreen() {
  const drawer = getCurrentDrawer();
  const activePlayers = getActivePlayers();

  const progress =
    Math.round(
      (totalDrawings /
        Math.max(1, activePlayers.length * TOTAL_DRAWINGS_PER_PLAYER)) *
        100
    );

  const isDrawer = true;

  app.innerHTML = `
    <main class="drawing-page">

      <header class="game-header">

        <button class="back" id="backHome">
          ‹
        </button>

        <div class="round-title">

          <small>
            ÇİZİM & TAHMİN
          </small>

          <strong>
            ${totalDrawings + 1}. ÇİZİM
          </strong>

        </div>

        <div class="timer" id="timer">
          01:00
        </div>

      </header>

      <div class="round-progress">
        <div style="width:${progress}%"></div>
      </div>

      <section class="mission">

        <small>
          ÇİZEN OYUNCU
        </small>

        <h1>
          ${drawer.emoji} ${drawer.name}
        </h1>

        <p style="color:#9da5ca;margin:7px 0 0;font-size:12px;">
          Görevi sadece çizen oyuncu görüyor.
        </p>

      </section>

      <section class="draw-card">

        <canvas id="drawCanvas"></canvas>

      </section>

      <div class="draw-tools">

        <button id="clearCanvas">
          🗑️ Temizle
        </button>

        <button id="finishDrawing" class="finish">
          BİTİRDİM ✓
        </button>

      </div>

      <section class="chat-panel">

        <div class="chat-header">
          💬 Tahminler
        </div>

        <div class="chat-messages" id="chatMessages">

          <div class="system-message">
            ${drawer.name} çiziyor.
            Diğer oyuncular tahmin edebilir.
          </div>

        </div>

        <div class="guess-input-area">

          <input
            id="guessInput"
            type="text"
            placeholder="Tahminini yaz..."
            autocomplete="off"
          />

          <button id="sendGuess">
            Gönder
          </button>

        </div>

      </section>

      <section class="players">

        ${players
          .map(
            player => `
              <div class="player ${
                player.active ? "" : "offline"
              } ${
                player.id === drawer.id ? "me" : ""
              }">

                <span>
                  ${player.emoji}
                </span>

                <div>

                  <strong>
                    ${player.id}. ${player.name}
                  </strong>

                  <small>
                    ${
                      player.active
                        ? player.id === drawer.id
                          ? "Çiziyor..."
                          : "Tahmin ediyor..."
                        : "ÇIKTI"
                    }
                  </small>

                </div>

              </div>
            `
          )
          .join("")}

      </section>

    </main>
  `;

  /*
    Gerçek oyunda sadece çizen oyuncunun görevi görünür.
    Buradaki demo/offline yapıda canvas ekranı ortak olduğu için
    görev metnini ayrıca çizim ekranında göstermek yerine
    sistem mantığı currentTask üzerinden yürütülüyor.
  */

  const finishButton =
    document.getElementById("finishDrawing");

  const clearButton =
    document.getElementById("clearCanvas");

  const backButton =
    document.getElementById("backHome");

  const sendButton =
    document.getElementById("sendGuess");

  const guessInput =
    document.getElementById("guessInput");

  /*
    Demo olarak aktif çizici kendi ekranında görevi görür.
  */
  const mission = document.querySelector(".mission");

  mission.innerHTML = `
    <small>
      ${drawer.name} İÇİN GÖREV
    </small>

    <h1>
      ${currentTask.emoji}
      ${currentTask.text}
    </h1>
  `;

  clearButton.addEventListener(
    "click",
    clearCanvas
  );

  finishButton.addEventListener(
    "click",
    finishDrawing
  );

  backButton.addEventListener(
    "click",
    () => {
      clearInterval(timer);
      showHome();
    }
  );

  sendButton.addEventListener(
    "click",
    submitGuess
  );

  guessInput.addEventListener(
    "keydown",
    event => {
      if (event.key === "Enter") {
        submitGuess();
      }
    }
  );
}

function submitGuess() {
  const drawer = getCurrentDrawer();
  const input = document.getElementById("guessInput");

  if (!input) return;

  const text = input.value.trim();

  if (!text) return;

  /*
    Çizen kişi tahmin gönderemez.
  */
  if (currentCorrectPlayers.includes(drawer.id)) {
    input.value = "";
    return;
  }

  /*
    Demo sisteminde tahmin eden kişi,
    çizici dışındaki ilk uygun aktif oyuncudan alınır.
  */
  const guesser = getActivePlayers().find(
    player =>
      player.id !== drawer.id &&
      !currentGuesses.some(
        guess => guess.playerId === player.id
      )
  );

  if (!guesser) {
    input.value = "";
    return;
  }

  const normalizedGuess =
    text
      .toLocaleUpperCase("tr-TR")
      .trim();

  const normalizedAnswer =
    currentTask.answer
      .toLocaleUpperCase("tr-TR")
      .trim();

  const isCorrect =
    normalizedGuess === normalizedAnswer ||
    normalizedAnswer.includes(normalizedGuess) ||
    normalizedGuess.includes(normalizedAnswer);

  /*
    Yanlış cevap herkese gösterilir.
  */
  currentGuesses.push({
    playerId: guesser.id,
    text,
    correct: isCorrect
  });

  if (isCorrect) {
    currentCorrectPlayers.push(guesser.id);

    const correctOrder =
      currentCorrectPlayers.length;

    let points = 0;

    if (correctOrder === 1) points = 10;
    if (correctOrder === 2) points = 5;
    if (correctOrder === 3) points = 3;

    guesser.score += points;

    addChatMessage(`
      🏆 ${guesser.name}
      doğru cevapladı ve
      <strong>${points} puan</strong> aldı.
    `);

    /*
      DOĞRU CEVAP KESİNLİKLE GÖSTERİLMEZ.
    */
  } else {
    addChatMessage(`
      <strong>${guesser.name}</strong>:
      ${escapeHtml(text)}
    `);
  }

  input.value = "";

  /*
    Üç tahminci de bildiyse süreyi bekleme.
  */
  const guessers =
    getActivePlayers().filter(
      player => player.id !== drawer.id
    );

  if (
    currentCorrectPlayers.length ===
    guessers.length
  ) {
    setTimeout(
      finishDrawing,
      700
    );
  }
}

function addChatMessage(message) {
  const chat =
    document.getElementById("chatMessages");

  if (!chat) return;

  const div =
    document.createElement("div");

  div.className = "chat-message";

  div.innerHTML = message;

  chat.appendChild(div);

  chat.scrollTop = chat.scrollHeight;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    seconds--;

    const timerElement =
      document.getElementById("timer");

    if (timerElement) {
      const min = String(
        Math.floor(seconds / 60)
      ).padStart(2, "0");

      const sec = String(
        seconds % 60
      ).padStart(2, "0");

      timerElement.textContent =
        `${min}:${sec}`;

      if (seconds <= 10) {
        timerElement.classList.add(
          "danger"
        );
      }
    }

    if (seconds <= 0) {
      clearInterval(timer);

      finishDrawing();
    }
  }, 1000);
}

function setupCanvas() {
  canvas =
    document.getElementById("drawCanvas");

  if (!canvas) return;

  const rect =
    canvas.getBoundingClientRect();

  const ratio =
    window.devicePixelRatio || 1;

  canvas.width =
    rect.width * ratio;

  canvas.height =
    rect.height * ratio;

  ctx =
    canvas.getContext("2d");

  ctx.scale(ratio, ratio);

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";

  canvas.addEventListener(
    "pointerdown",
    startDrawing
  );

  canvas.addEventListener(
    "pointermove",
    draw
  );

  canvas.addEventListener(
    "pointerup",
    stopDrawing
  );

  canvas.addEventListener(
    "pointercancel",
    stopDrawing
  );
}

function getPosition(event) {
  const rect =
    canvas.getBoundingClientRect();

  return {
    x:
      event.clientX -
      rect.left,

    y:
      event.clientY -
      rect.top
  };
}

function startDrawing(event) {
  drawing = true;

  canvas.setPointerCapture(
    event.pointerId
  );

  const pos =
    getPosition(event);

  ctx.beginPath();

  ctx.moveTo(
    pos.x,
    pos.y
  );
}

function draw(event) {
  if (!drawing) return;

  const pos =
    getPosition(event);

  ctx.lineTo(
    pos.x,
    pos.y
  );

  ctx.stroke();
}

function stopDrawing() {
  drawing = false;
}

function clearCanvas() {
  if (!canvas || !ctx) return;

  const rect =
    canvas.getBoundingClientRect();

  ctx.clearRect(
    0,
    0,
    rect.width,
    rect.height
  );
}

function finishDrawing() {
  if (!currentTask) return;

  clearInterval(timer);

  const drawer =
    getCurrentDrawer();

  /*
    Çizen kişi 12 puan.
  */
  drawer.score += 12;

  drawer.drawings += 1;

  currentDrawingData =
    canvas
      ? canvas.toDataURL()
      : null;

  totalDrawings++;

  /*
    Eğer çizen oyuncunun hakkı bittiyse
    onun sırası sonraki turda atlanır.
  */

  /*
    Sonraki aktif oyuncuyu bul.
  */
  const nextPlayer =
    getNextActivePlayer(
      (drawer.id) % players.length
    );

  /*
    Bir kişi kaldıysa oyun biter.
  */
  if (
    getActivePlayers().length === 1
  ) {
    showFinalResults(true);
    return;
  }

  /*
    Herkes 4 çizimini tamamladıysa final.
  */
  const allDone =
    getActivePlayers().every(
      player =>
        player.drawings >=
        TOTAL_DRAWINGS_PER_PLAYER
    );

  if (allDone) {
    showFinalResults(false);
    return;
  }

  if (nextPlayer) {
    currentDrawerIndex =
      nextPlayer.id - 1;
  }

  /*
    Kısa geçiş ekranı.
  */
  showRoundTransition(
    drawer,
    nextPlayer
  );
}

function showRoundTransition(
  drawer,
  nextPlayer
) {
  app.innerHTML = `
    <main class="round-result">

      <div class="round-result-icon">
        🎨
      </div>

      <small>
        ÇİZİM TAMAMLANDI
      </small>

      <h1>
        ${drawer.name}
        +12 puan
      </h1>

      <p>
        Sıradaki oyuncu:
        <strong>
          ${nextPlayer?.name || ""}
        </strong>
      </p>

      <div class="winner-preview">

        <div class="winner-preview-title">

          <span>
            ${drawer.emoji}
          </span>

          <strong>
            ${drawer.name}'in çizimi
          </strong>

        </div>

        ${
          currentDrawingData
            ? `
              <img
                src="${currentDrawingData}"
                alt="Çizim"
              />
            `
            : ""
        }

      </div>

      <button
        class="primary-button"
        id="nextRound"
      >
        SIRADAKİ OYUNCU →
      </button>

    </main>
  `;

  document
    .getElementById("nextRound")
    .addEventListener(
      "click",
      startNextDrawing
    );
}

function showFinalResults(
  singleWinner = false
) {
  clearInterval(timer);

  const activePlayers =
    getActivePlayers();

  /*
    Bir kişi kaldıysa doğrudan kazanır.
  */
  if (
    singleWinner &&
    activePlayers.length === 1
  ) {
    const winner =
      activePlayers[0];

    app.innerHTML = `
      <main class="results">

        <div class="result-icon">
          🏆
        </div>

        <small>
          OYUN BİTTİ
        </small>

        <h1>
          ${winner.emoji}
          ${winner.name} KAZANDI!
        </h1>

        <p>
          Oyunda kalan son oyuncu.
        </p>

        <section class="score-list">

          <div class="score champion">

            <div class="rank">
              🥇
            </div>

            <span>
              ${winner.emoji}
            </span>

            <div class="score-name">

              <strong>
                ${winner.id}.
                ${winner.name}
              </strong>

              <small>
                🏆 Kazanan
              </small>

            </div>

            <b>
              ${winner.score}
            </b>

          </div>

        </section>

        <button
          class="primary-button"
          id="playAgain"
        >
          TEKRAR OYNA
        </button>

        <button
          class="secondary-button"
          id="goHome"
        >
          ANA SAYFAYA DÖN
        </button>

      </main>
    `;

    document
      .getElementById("playAgain")
      .addEventListener(
        "click",
        startNewGame
      );

    document
      .getElementById("goHome")
      .addEventListener(
        "click",
        showHome
      );

    return;
  }

  /*
    Normal final sıralaması.
    Çıkan oyuncular dahil edilmez.
  */
  const ranking =
    [...activePlayers]
      .sort(
        (a, b) =>
          b.score - a.score
      );

  app.innerHTML = `
    <main class="results">

      <div class="result-icon">
        🏆
      </div>

      <small>
        OYUN TAMAMLANDI
      </small>

      <h1>
        SONUÇLAR
      </h1>

      <p>
        ${totalDrawings} çizim tamamlandı.
      </p>

      <h2 class="final-score-title">
        🏆 GENEL SIRALAMA
      </h2>

      <section class="score-list">

        ${ranking
          .map(
            (player, index) => `
              <div class="score ${
                index === 0
                  ? "champion"
                  : ""
              }">

                <div class="rank">
                  ${
                    index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : "🏅"
                  }
                </div>

                <span>
                  ${player.emoji}
                </span>

                <div class="score-name">

                  <strong>
                    ${player.id}.
                    ${player.name}
                  </strong>

                  <small>
                    ${
                      index === 0
                        ? "🏆 Şampiyon"
                        : `${player.drawings} çizim`
                    }
                  </small>

                </div>

                <b>
                  ${player.score}
                </b>

              </div>
            `
          )
          .join("")}

      </section>

      ${
        players.some(
          player => !player.active
        )
          ? `
            <p
              style="
                margin-top:18px;
                font-size:11px;
                color:#69728d;
              "
            >
              Oyundan çıkan oyuncular
              final sıralamasına dahil edilmedi.
            </p>
          `
          : ""
      }

      <button
        class="primary-button"
        id="playAgain"
      >
        TEKRAR OYNA
      </button>

      <button
        class="secondary-button"
        id="goHome"
      >
        ANA SAYFAYA DÖN
      </button>

    </main>
  `;

  document
    .getElementById("playAgain")
    .addEventListener(
      "click",
      startNewGame
    );

  document
    .getElementById("goHome")
    .addEventListener(
      "click",
      showHome
    );
}

showSplash();
