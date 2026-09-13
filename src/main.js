import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `
  <main class="splash">

    <div class="logo">
      🎮
    </div>

    <h1>
      OYUN<br>
      TOPLULUĞU
    </h1>

    <p>
      Herkes oynar. Herkes yarışır.
    </p>

    <div class="loader">
      <span></span>
    </div>

  </main>
`;

setTimeout(() => {

  app.innerHTML = `
    <main class="home">

      <header>

        <div>
          <small>MERHABA 👋</small>

          <h1>
            Oyun Topluluğu
          </h1>
        </div>

        <button class="profile">
          👤
        </button>

      </header>


      <section class="hero">

        <div>

          <span>OFFLINE MVP</span>

          <h2>
            Yarışmaya<br>
            hazır mısın?
          </h2>

          <p>
            Mini oyunlarda arkadaşlarınla
            yarışacağın topluluk.
          </p>

        </div>

        <div class="trophy">
          🏆
        </div>

      </section>


      <h2 class="title">
        Oyunlar
      </h2>


      <button class="game">

        <div class="game-icon">
          🎨
        </div>

        <div>
          <h3>
            Çizim Yarışması
          </h3>

          <p>
            Verilen şeyi en güzel kim çizecek?
          </p>

          <small>
            OFFLINE TEST
          </small>
        </div>

        <strong>
          ›
        </strong>

      </button>


      <button class="game disabled">

        <div class="game-icon">
          🫣
        </div>

        <div>
          <h3>
            Saklambaç
          </h3>

          <p>
            Labirentte ebe olmadan kaç!
          </p>

          <small>
            YAKINDA
          </small>
        </div>

        <strong>
          ›
        </strong>

      </button>


      <button class="game disabled">

        <div class="game-icon">
          ⚡
        </div>

        <div>
          <h3>
            Refleks
          </h3>

          <p>
            En hızlı tepki veren kazanır.
          </p>

          <small>
            YAKINDA
          </small>
        </div>

        <strong>
          ›
        </strong>

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

}, 1800);
