* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #080b16;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

body { overflow-x: hidden; }

button, input { font: inherit; }
button { color: inherit; border: 0; cursor: pointer; }

/* Splash & Ana Ekran */
.splash {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle, #252d65 0%, #0b1020 45%, #080b16 80%);
}

.logo {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-size: 50px;
  background: linear-gradient(145deg, #7165ff, #416fff);
  box-shadow: 0 20px 70px rgba(80,80,255,.4);
}

.splash h1 { margin-top: 25px; font-size: 35px; line-height: .95; letter-spacing: 2px; }
.splash p { color: #9ba5c4; }

.loader {
  width: 130px;
  height: 4px;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 20px;
  background: #252b43;
}
.loader span {
  display: block;
  width: 50%;
  height: 100%;
  background: #766cff;
  animation: loading 1.5s infinite;
}

.home {
  max-width: 700px;
  min-height: 100vh;
  margin: auto;
  padding: 25px 18px 110px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header small { color: #7f89aa; font-weight: bold; letter-spacing: 2px; }
header h1 { margin: 5px 0; font-size: 23px; }

.profile {
  width: 45px;
  height: 45px;
  border-radius: 15px;
  background: #171c30;
  font-size: 20px;
}

.hero {
  margin-top: 25px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  background: linear-gradient(135deg, #5d53dd, #355dce);
}
.hero span { font-size: 10px; font-weight: bold; letter-spacing: 1px; }
.hero h2 { font-size: 28px; line-height: 1; margin: 12px 0; }
.hero p { max-width: 300px; color: #dce0ff; font-size: 13px; }
.trophy { font-size: 60px; display: flex; align-items: center; }

.title { margin-top: 30px; font-size: 21px; }

.game {
  width: 100%;
  margin-top: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  border-radius: 20px;
  background: #12172a;
  border: 1px solid #222945;
}
.game:active { transform: scale(.98); }
.game-icon {
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  background: #1e2541;
  font-size: 28px;
}
.game div:nth-child(2) { flex: 1; }
.game h3 { margin: 0 0 5px; font-size: 16px; }
.game p { margin: 0 0 7px; color: #8992ae; font-size: 12px; }
.game small { color: #786eff; font-size: 10px; font-weight: bold; }
.game strong { font-size: 28px; color: #68718e; }
.disabled { opacity: .45; }

.home-players { margin-top: 25px; }
.home-player {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px;
  margin-top: 8px;
  border-radius: 15px;
  background: #12172a;
  border: 1px solid #222945;
}
.home-player span { font-size: 22px; }
.home-player strong { flex: 1; font-size: 13px; }
.home-player b { color: #9c93ff; font-size: 12px; }

nav {
  position: fixed;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  width: 92%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-radius: 22px;
  background: rgba(15,19,36,.95);
  border: 1px solid #252b45;
  z-index: 50;
}
nav button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background: none;
  color: #707994;
  font-size: 18px;
}
nav small { font-size: 9px; }

/* ÇİZİM YARIŞMASI STİLLERİ */
.drawing-page {
  min-height: 100vh;
  padding: 18px;
  max-width: 700px;
  margin: auto;
}

.game-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #171c30;
  font-size: 32px;
  line-height: 1;
}

.round-title {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.round-title small { color: #7f89aa; font-size: 9px; font-weight: bold; letter-spacing: 1px; }
.round-title strong { margin-top: 3px; font-size: 16px; }

.timer, .hide-time {
  min-width: 70px;
  padding: 10px;
  text-align: center;
  border-radius: 13px;
  background: #1c2340;
  color: #8e83ff;
  font-weight: bold;
}
.timer.danger, .hide-time.danger { background: #49202b; color: #ff7188; }

.turn-banner {
  margin-top: 14px;
  padding: 12px 15px;
  border-radius: 16px;
  background: #12172a;
  border: 1px solid #292f49;
}
.turn-banner span { display: block; margin-top: 4px; color: #7f89aa; font-size: 11px; }

.mission {
  position: relative;
  margin-top: 14px;
  padding: 20px;
  border-radius: 22px;
  background: linear-gradient(135deg,#29275d,#202d5d);
  overflow: hidden;
}
.mission small { color: #9da5ca; font-size: 9px; font-weight: bold; letter-spacing: 2px; }
.mission h1 { margin: 8px 0 0; font-size: 25px; }
.mission > span { position: absolute; right: 20px; top: 13px; font-size: 45px; }
.mission-hidden { border-color: #222945; }

.draw-card {
  margin-top: 12px;
  padding: 8px;
  border-radius: 22px;
  background: #151a2d;
  border: 1px solid #2a3049;
}
#drawCanvas {
  display: block;
  width: 100%;
  height: 330px;
  border-radius: 16px;
  background: #0e1220;
  touch-action: none;
}

.draw-tools { display: flex; gap: 10px; margin-top: 12px; }
.draw-tools button {
  min-height: 50px;
  padding: 0 18px;
  border-radius: 16px;
  background: #1a2035;
  font-weight: bold;
}
.draw-tools .finish {
  flex: 1;
  background: linear-gradient(135deg,#6c60ed,#416fff);
}

.players {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}
.player {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border-radius: 15px;
  background: #12172a;
  border: 1px solid #222945;
}
.player.current { border-color: #6b60ed; }
.player > span {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #202641;
  font-size: 18px;
}
.player div { display: flex; flex-direction: column; }
.player strong { font-size: 12px; }
.player small { margin-top: 3px; color: #69728d; font-size: 9px; }

/* CHAT STİLLERİ */
.chat-panel {
  margin-top: 14px;
  border-radius: 20px;
  overflow: hidden;
  background: #101527;
  border: 1px solid #272e49;
}
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-bottom: 1px solid #252b43;
}
.chat-header div { display: flex; flex-direction: column; }
.chat-header strong { font-size: 13px; }
.chat-header small { margin-top: 3px; color: #69728d; font-size: 9px; }
.chat-header b { color: #8f85ff; font-size: 11px; }
.chat-messages {
  height: 145px;
  padding: 10px;
  overflow-y: auto;
}
.chat-message {
  width: fit-content;
  max-width: 88%;
  margin: 6px 0;
  padding: 8px 10px;
  border-radius: 12px;
  background: #1b2138;
  font-size: 12px;
}
.chat-message strong { color: #a9a1ff; }
.system-message {
  margin: 6px 0;
  padding: 8px 10px;
  border-radius: 12px;
  background: #18253a;
  color: #9ba8c7;
  font-size: 11px;
}
.guess-input-area {
  display: flex;
  gap: 7px;
  padding: 9px;
  border-top: 1px solid #252b43;
}
.guess-input-area input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  padding: 12px;
  border-radius: 12px;
  background: #181e34;
  color: white;
}
.guess-input-area button {
  padding: 0 13px;
  border-radius: 12px;
  background: #5f56df;
  font-size: 11px;
  font-weight: bold;
}
.guess-input-area button:disabled, .guess-input-area input:disabled {
  opacity: .45;
}

.round-result, .results {
  min-height: 100vh;
  max-width: 600px;
  margin: auto;
  padding: 40px 18px;
  text-align: center;
}
.round-result-icon, .result-icon { font-size: 65px; margin-bottom: 10px; }
.round-result > small, .results > small {
  color: #8d83ff;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 2px;
}
.round-result h1, .results h1 { margin: 10px 0; font-size: 25px; }
.round-result > p, .results > p { color: #858da8; }

.winner-preview, .winner-final-drawing {
  margin: 20px 0;
  padding: 10px;
  border-radius: 22px;
  background: #12172a;
  border: 1px solid #343b5d;
}
.winner-preview-title, .winner-final-header {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 8px 12px;
  text-align: left;
}
.winner-preview-title > span { font-size: 20px; }
.winner-preview-title div, .winner-final-header div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.winner-preview-title strong { font-size: 13px; }
.winner-preview-title small, .winner-final-header small { margin-top: 3px; color: #69728d; font-size: 9px; }
.winner-preview img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 15px;
  background: #0e1220;
}
.round-summary {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
  margin-top: 12px;
}
.round-summary div {
  padding: 12px 7px;
  border-radius: 14px;
  background: #12172a;
}
.round-summary span, .round-summary b { display: block; }
.round-summary span { color: #707994; font-size: 9px; }
.round-summary b { margin-top: 5px; color: #a49cff; }

.round-scores, .score-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.score {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  background: #12172a;
  border: 1px solid #222945;
  text-align: left;
}
.rank { width: 25px; text-align: center; color: #777f99; font-weight: bold; }
.score > span { font-size: 22px; }
.score-name { flex: 1; display: flex; flex-direction: column; }
.score-name strong { font-size: 13px; }
.score-name small { margin-top: 3px; color: #69728d; font-size: 9px; }
.score b { font-size: 17px; color: #9c93ff; }
.score.champion { border-color: #6259db; background: linear-gradient(135deg,#1c2040,#151a30); }

.winner-final-header { justify-content: space-between; }
.winner-final-header strong { margin-top: 4px; font-size: 17px; }
.winner-final-header > span { font-size: 32px; }
.winner-image { overflow: hidden; border-radius: 17px; background: #0e1220; }
.winner-image img { display: block; width: 100%; height: 270px; object-fit: contain; }
.winning-task {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 6px 3px;
  text-align: left;
}
.winning-task span { color: #69728d; font-size: 8px; font-weight: bold; }
.winning-task strong { flex: 1; font-size: 11px; }
.winning-task b { color: #9c93ff; font-size: 12px; }

.empty-winner {
  margin: 20px 0;
  padding: 30px;
  border-radius: 20px;
  background: #12172a;
  color: #8992ae;
}
.empty-winner div { font-size: 40px; margin-bottom: 10px; }

.final-score-title {
  margin: 28px 0 12px;
  text-align: left;
  font-size: 16px;
  color: #cbd0e2;
}

.primary-button, .secondary-button {
  width: 100%;
  min-height: 52px;
  margin-top: 12px;
  border-radius: 17px;
  font-weight: bold;
}
.primary-button { background: linear-gradient(135deg,#6c60ed,#416fff); }
.secondary-button { background: #171c30; color: #9ba3bb; }

/* --- SAKLAMBAÇ 3D PROP HUNT STİLLERİ --- */
.hide-page {
  min-height: 100vh;
  padding: 14px;
  background: #080b16;
}

.hide-header {
  max-width: 1500px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hide-header > div:nth-child(2) { flex: 1; display: flex; flex-direction: column; }
.hide-header small { color: #7f89aa; font-size: 9px; font-weight: bold; letter-spacing: 2px; }
.hide-header strong { margin-top: 3px; font-size: 16px; }

.hide-topbar {
  max-width: 1500px;
  margin: 12px auto;
  display: flex;
  gap: 10px;
}
.hunter-card {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 170px;
  padding: 9px 12px;
  border-radius: 16px;
  background: #171c30;
  border: 1px solid #343b5d;
}
.hunter-card > span { font-size: 25px; }
.hunter-card div { display: flex; flex-direction: column; }
.hunter-card small { color: #ff788e; font-size: 8px; font-weight: bold; }
.hunter-card strong { font-size: 12px; margin-top: 2px; }
.hide-tip {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 16px;
  background: #11172a;
  color: #aeb6ce;
  border: 1px solid #252b45;
  font-size: 12px;
}

.hide-game-shell {
  position: relative;
  max-width: 1500px;
  margin: auto;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid #303752;
  background: #151a22;
  box-shadow: 0 20px 70px rgba(0,0,0,.35);
}

.hide-viewport {
  width: 100%;
  height: min(67vh, 720px);
  min-height: 450px;
  overflow: hidden;
  position: relative;
  background: #1c201d;
}

.hide-map {
  position: absolute;
  width: 2200px;
  height: 1350px;
  left: 0;
  top: 0;
  background-image: url('1000232847.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #1d241f;
}

.map-title {
  position: absolute;
  left: 34px;
  top: 28px;
  z-index: 4;
  padding: 8px 14px;
  border-radius: 10px;
  background: rgba(8,12,18,.82);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
}
.map-note {
  position: absolute;
  z-index: 4;
  left: 34px;
  top: 72px;
  max-width: 420px;
  padding: 7px 11px;
  border-radius: 10px;
  background: rgba(8,12,18,.66);
  color: #d9dfec;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .7px;
}

.prop {
  opacity: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
  position: absolute;
  z-index: 5;
}
.prop span, .prop small { opacity: 0; }

.hide-player {
  position: absolute;
  z-index: 20;
  width: 52px;
  height: 76px;
  margin-left: -26px;
  margin-top: -38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  box-shadow: 0 8px 18px rgba(0,0,0,.28);
  overflow: visible;
  border-radius: 0;
}
.hide-player b {
  position: absolute;
  top: 76px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 3px 6px;
  border-radius: 7px;
  background: rgba(8,12,18,.78);
  color: #fff;
  font-size: 8px;
  font-weight: 800;
}
.character-shadow {
  position: absolute;
  left: 7px;
  bottom: 2px;
  width: 38px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0,0,0,.4);
  filter: blur(2px);
}
.character {
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 82px;
  transform-origin: 50% 100%;
  animation: characterIdle 1.6s ease-in-out infinite;
}
.character-head {
  position: absolute;
  left: 18px;
  top: 6px;
  width: 28px;
  height: 28px;
  border-radius: 48% 48% 44% 44%;
  background: #f2c6a3;
  border: 2px solid rgba(20,20,30,.75);
  z-index: 5;
  box-shadow: inset -4px -3px 0 rgba(0,0,0,.08);
}
.character-head::before,
.character-head::after {
  content: "";
  position: absolute;
  top: 10px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #202331;
}
.character-head::before { left: 6px; }
.character-head::after { right: 6px; }

.character-hair {
  position: absolute;
  left: 15px;
  top: 1px;
  width: 34px;
  height: 17px;
  border-radius: 18px 18px 8px 8px;
  background: #21191d;
  border: 2px solid rgba(10,10,15,.8);
  z-index: 7;
}
.character-hair::after {
  content: "";
  position: absolute;
  left: -2px;
  top: 7px;
  width: 9px;
  height: 13px;
  border-radius: 7px;
  background: inherit;
}
.character-face {
  position: absolute;
  z-index: 8;
  left: 27px;
  top: 19px;
  width: 10px;
  height: 4px;
  border-bottom: 2px solid #8f4e48;
  border-radius: 0 0 10px 10px;
}
.character-body {
  position: absolute;
  left: 14px;
  top: 32px;
  width: 36px;
  height: 28px;
  border-radius: 12px 12px 8px 8px;
  background: #51a7ff;
  border: 2px solid rgba(20,20,30,.75);
  z-index: 4;
  box-shadow: inset -5px -4px 0 rgba(0,0,0,.14);
}
.character-body::after {
  content: "";
  position: absolute;
  left: 11px;
  top: 6px;
  width: 9px;
  height: 11px;
  border-radius: 3px;
  background: rgba(255,255,255,.18);
}
.character-arm {
  position: absolute;
  top: 34px;
  width: 10px;
  height: 25px;
  border-radius: 8px;
  background: #51a7ff;
  border: 2px solid rgba(20,20,30,.7);
  z-index: 3;
}
.arm-left { left: 7px; transform: rotate(13deg); }
.arm-right { right: 7px; transform: rotate(-13deg); }

.character-leg {
  position: absolute;
  top: 56px;
  width: 12px;
  height: 17px;
  border-radius: 4px 4px 7px 7px;
  background: #273149;
  border: 2px solid rgba(10,12,20,.8);
  z-index: 2;
}
.leg-left { left: 18px; }
.leg-right { right: 18px; }

.character-shoe {
  position: absolute;
  top: 69px;
  width: 17px;
  height: 7px;
  border-radius: 7px 7px 4px 4px;
  background: #121620;
  z-index: 3;
}
.shoe-left { left: 13px; }
.shoe-right { right: 13px; }

.hide-player.p1 .character-body,
.hide-player.p1 .character-arm { background: #2786f2; }
.hide-player.p2 .character-body,
.hide-player.p2 .character-arm { background: #36bf62; }
.hide-player.p3 .character-body,
.hide-player.p3 .character-arm { background: #f2b82f; }
.hide-player.p4 .character-body,
.hide-player.p4 .character-arm { background: #9d4ee2; }

.hide-player.p1 .character-head { background: #f0c09d; }
.hide-player.p2 .character-head { background: #8b5b3e; }
.hide-player.p3 .character-head { background: #f0bf95; }
.hide-player.p4 .character-head { background: #d69d78; }

.hide-player.frozen .character {
  filter: grayscale(1);
  animation: freezePulse .6s infinite alternate;
}
.hide-player.caught .character {
  opacity: .18;
  transform: scale(.7);
}

/* Eşyaya Dönüşme Modu (Prop Hunt) */
.hide-player.hidden-as-prop {
  width: 92px;
  height: 72px;
  margin-left: -46px;
  margin-top: -36px;
  border-radius: 13px;
  background: rgba(36,25,18,.96);
  border: 3px solid rgba(255,255,255,.18);
  box-shadow: 0 8px 20px rgba(0,0,0,.35);
}
.hide-player.hidden-as-prop .character,
.hide-player.hidden-as-prop .character-shadow { display: none; }
.hide-player.hidden-as-prop b {
  position: static;
  transform: none;
  padding: 0;
  background: transparent;
  font-size: 10px;
  color: #f5ddb5;
}
.hide-player.hidden-as-prop .prop-visual {
  display: block;
  font-size: 39px;
  line-height: 1;
  filter: drop-shadow(0 4px 2px rgba(0,0,0,.4));
}

.whistle-ping {
  position: absolute;
  z-index: 35;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,212,76,.2);
  border: 3px solid #ffd44f;
  color: #ffd44f;
  font-size: 35px;
  animation: ping 1.2s ease-out forwards;
  pointer-events: none;
}

.mini-map {
  position: absolute;
  z-index: 45;
  right: 15px;
  top: 15px;
  width: 165px;
  height: 115px;
  padding: 8px;
  border-radius: 15px;
  background: rgba(11,16,29,.9);
  border: 1px solid #46506e;
}
.mini-map-title { font-size: 8px; color: #9ea7c3; font-weight: bold; margin-bottom: 5px; }
.mini-map-grid {
  position: relative;
  width: 100%;
  height: 85px;
  border-radius: 9px;
  background: #263529;
}
.mini-dot {
  position: absolute;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.mini-dot.p1 { background: #51a7ff; }
.mini-dot.p2 { background: #62d98b; }
.mini-dot.p3 { background: #ffd34d; }
.mini-dot.p4 { background: #c38bff; }

.hide-controls {
  position: absolute;
  z-index: 50;
  left: 18px;
  bottom: 18px;
  right: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
}
.joystick {
  position: relative;
  width: 130px;
  height: 130px;
  pointer-events: auto;
  border-radius: 50%;
  background: rgba(9,14,25,.75);
  border: 2px solid rgba(255,255,255,.2);
}
.joystick button {
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(28,35,55,.9);
}
.joystick [data-dir="up"] { left: 44px; top: 6px; }
.joystick [data-dir="left"] { left: 6px; top: 44px; }
.joystick [data-dir="right"] { right: 6px; top: 44px; }
.joystick [data-dir="down"] { left: 44px; bottom: 6px; }

.action-buttons {
  display: flex;
  gap: 9px;
  pointer-events: auto;
  align-items: flex-end;
}
.action {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: rgba(13,18,31,.9);
  border: 2px solid #3c4563;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0,0,0,.35);
}
.action small { margin-top: 4px; font-size: 8px; font-weight: bold; }
.action.whistle { border-color: #e1b93d; }
.action.attack { border-color: #e65d6d; }
.action.transform { border-color: #52b6ff; }
.action.normal { border-color: #56d98d; }
.action.catch { border-color: #ff815f; }
.action:disabled { opacity: .28; filter: grayscale(1); cursor: not-allowed; }

.hide-players {
  max-width: 1500px;
  margin: 12px auto 100px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 8px;
}
.hide-player-card {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border-radius: 14px;
  background: #12172a;
  border: 1px solid #222945;
}
.hide-player-card.hunter { border-color: #b94e5e; }
.hide-player-card > span { font-size: 22px; }
.hide-player-card div { flex: 1; display: flex; flex-direction: column; }
.hide-player-card strong { font-size: 12px; }
.hide-player-card small { margin-top: 3px; color: #707994; font-size: 9px; }
.hide-player-card > b { color: #9c93ff; }

.hide-champion {
  margin: 25px 0;
  padding: 30px;
  border-radius: 24px;
  background: linear-gradient(135deg,#1d2140,#12182b);
  border: 1px solid #6259db;
}
.hide-champion div { font-size: 55px; }
.hide-champion strong { display: block; margin-top: 8px; font-size: 22px; }
.hide-champion span { display: block; margin-top: 5px; color: #a39aff; font-weight: bold; }

.primary-button:active, .secondary-button:active, .action:active, .joystick button:active { transform: scale(.96); }

@keyframes characterIdle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-2px) rotate(-1deg); }
}
@keyframes ping {
  from { transform: scale(.4); opacity: 1; }
  to { transform: scale(1.8); opacity: 0; }
}
@keyframes freezePulse {
  from { transform: scale(.9); }
  to { transform: scale(1.05); }
}
@keyframes loading {
  from { transform: translateX(-130px); }
  to { transform: translateX(280px); }
}

@media (max-width: 900px) {
  .hide-viewport { height: 62vh; min-height: 430px; }
  .hide-map { transform: scale(.72); transform-origin: 0 0; }
  .hide-controls { bottom: 12px; }
  .hide-players { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 700px) {
  .hide-map { transform: scale(.72); }
  .map-note { max-width: 300px; font-size: 7px; }
  .hide-player { transform: scale(.9); }
}

@media (max-width: 600px) {
  .home, .drawing-page { padding-left: 14px; padding-right: 14px; }
  .hero { padding: 20px; }
  .hero h2 { font-size: 24px; }
  .trophy { font-size: 45px; }
  #drawCanvas { height: 280px; }
  .players { grid-template-columns: 1fr 1fr; }
  .round-summary { grid-template-columns: repeat(3,1fr); }
  .hide-page { padding: 9px; }
  .hide-viewport { height: 58vh; min-height: 400px; }
  .hide-map { transform: scale(.54); }
  .mini-map { transform: scale(.8); transform-origin: top right; }
  .action-buttons { gap: 5px; }
  .action { width: 63px; height: 63px; }
  .action small { font-size: 7px; }
  .joystick { width: 112px; height: 112px; }
  .joystick button { width: 36px; height: 36px; }
  .joystick [data-dir="up"] { left: 38px; }
  .joystick [data-dir="left"] { top: 38px; }
  .joystick [data-dir="right"] { top: 38px; }
  .joystick [data-dir="down"] { left: 38px; }
}

@media (max-width: 430px) {
  .hide-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .action-buttons { margin-left: auto; }
  .action { width: 58px; height: 58px; }
  .hide-viewport { height: 64vh; }
}
