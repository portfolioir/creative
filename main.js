// ===========================
//   PORTFOLIO DATA
// ===========================
const posts = [
  {
    id: 1,
    thumbnail: "img/web/w1.webp",
    images: [
      "img/web/w1.webp"
    ],
    link: "https://sungran.com/",
    description: "<p><br><span>コーポレートサイト制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。リニューアル前は簡易的なコーポレートサイトでしたが、改修後は企業としての信頼感を意識し、事業内容がシンプルに伝わる構成で構築しています。<br><br>■ターゲット<br>BtoB企業担当者、求職者<br><br>■ ポイント<br>JavaScriptによるアニメーションを取り入れ、企業のコーポレートサイトとしての信頼感や見やすさを意識して制作しました。</p>",
    likes: "Webサイト制作<br><br>株式会社SUNGRAN"
  },
  {
    id: 2,
    thumbnail: "img/web/w2.webp",
    images: [
      "img/web/w2.webp"
    ],
    link: "https://sokaiteki.jp/",
    description: "<p><br><span>ブランドサイト制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。女性向けのコスメサイトのため、シンプルなデザインを活かし、商品の魅力が伝わりやすい構成で制作しました。<br><br>■ターゲット<br>BtoB企業担当者、BtoCサイト訪問者<br><br>■ ポイント<br>JavaScriptによるアニメーションを取り入れ、ユーザーが商品情報を見やすいよう意識して実装しました。</p>",
    likes: "ブランドサイト制作<br><br>Sokaiteki"
  },
  {
    id: 3,
    thumbnail: "img/web/w3.webp",
    images: [
      "img/web/w3.webp"
    ],
    link: "https://sokaiteki.jp/decogao/",
    description: "<p><br><span>ブランドサイト制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。女性向けのコスメサイトのため、シンプルなデザインを活かし、商品の魅力が伝わりやすい構成で制作しました。<br><br>■ターゲット<br>BtoB企業担当者、BtoCサイト訪問者<br><br>■ ポイント<br>JavaScriptによるアニメーションを取り入れ、ユーザーが商品情報を見やすいよう意識して実装しました。</p>",
    likes: "ブランドサイト制作<br><br>Sokaiteki deCOGAO"
  },
  {
    id: 4,
    thumbnail: "img/web/w4.webp",
    images: [
      "img/web/w4.webp"
    ],
    link: "https://sokaiteki.jp/facialtowel/",
    description: "<p><br><span>ブランドサイト制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。女性向けのコスメサイトのため、シンプルなデザインを活かし、商品の魅力が伝わりやすい構成で制作しました。<br><br>■ターゲット<br>BtoB企業担当者、BtoCサイト訪問者<br><br>■ ポイント<br>JavaScriptによるアニメーションを取り入れ、ユーザーが商品情報を見やすいよう意識して実装しました。</p>",
    likes: "ブランドサイト制作<br><br>Sokaiteki Facial towel"
  },
  {
    id: 5,
    thumbnail: "img/web/w5.webp",
    images: [
      "img/web/w5.webp"
    ],
    link: "https://www.rakuten.ne.jp/gold/hayaritsushin/sokaiteki_diagnosis/",
    description: "<p><br><span>診断サイト制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。女性向けのコスメブランドの、診断コンテンツを通して、ユーザーが簡単な質問に回答することで結果を表示するWebサイトです。JavaScriptを用いて回答内容に応じた診断結果を表示する仕組みを実装しています。<br><br>■ターゲット<br>BtoB企業担当者、BtoCサイト訪問者<br><br>■ ポイント<br>JavaScriptを用いて回答内容に応じた診断結果を表示するプログラム。</p>",
    likes: "診断サイト制作<br><br>Sokaiteki"
  },
  {
    id: 6,
    thumbnail: "img/web/w6.webp",
    images: [
      "img/web/w6.webp"
    ],
    link: "https://sungran.com/moifan/",
    description: "<p><br><span>makuake LP 制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。デザイナーと2名体制でサイト構成を検討し、コーディングを担当しました。<br><br>■ターゲット<br>BtoB企業担当者、BtoCサイト訪問者<br><br>■ ポイント<br>LPの特性を活かし、各セクションで商品の魅力が伝わるよう、JavaScriptで動的な演出を実装しました。ユーザーがスクロールする流れに沿って情報が自然に目に入るよう工夫しています。</p>",
    likes: "makuake LP 制作<br><br>moifan"
  },
  {
    id: 7,
    thumbnail: "img/s_goods/g27.webp",
    images: [
      "img/s_goods/g1.webp",
      "img/s_goods/g2.webp",
      "img/s_goods/g3.webp",
      "img/s_goods/g4.webp",
      "img/s_goods/g5.webp",
      "img/s_goods/g6.webp",
      "img/s_goods/g7.webp",
      "img/s_goods/g8.webp",
      "img/s_goods/g9.webp",
      "img/s_goods/g10.webp",
      "img/s_goods/g11.webp",
      "img/s_goods/g12.webp",
      "img/s_goods/g13.webp",
      "img/s_goods/g14.webp",
      "img/s_goods/g15.webp",
      "img/s_goods/g16.webp",
      "img/s_goods/g17.webp",
      "img/s_goods/g18.webp",
      "img/s_goods/g19.webp",
      "img/s_goods/g20.webp",
      "img/s_goods/g21.webp",
      "img/s_goods/g22.webp",
      "img/s_goods/g23.webp",
      "img/s_goods/g24.webp",
      "img/s_goods/g25.webp",
      "img/s_goods/g26.webp",
      "img/s_goods/g27.webp",
      "img/s_goods/g28.webp",
      "img/s_goods/g29.webp",
      "img/s_goods/g30.webp",
      "img/s_goods/g31.webp",
      "img/s_goods/g32.webp",
      "img/s_goods/g33.webp",
      "img/s_goods/g34.webp",
      "img/s_goods/g35.webp",
      "img/s_goods/g36.webp",
      "img/s_goods/g37.webp",
      "img/s_goods/g38.webp",
      "img/s_goods/g39.webp",
      "img/s_goods/g40.webp",
      "img/s_goods/g41.webp",
      "img/s_goods/g42.webp",
      "img/s_goods/g43.webp",
      "img/s_goods/g44.webp",
      "img/s_goods/g45.webp",
      "img/s_goods/g46.webp",
      "img/s_goods/g47.webp",
      "img/s_goods/g48.webp",
      "img/s_goods/g49.webp",
      "img/s_goods/g50.webp",
      "img/s_goods/g51.webp",
      "img/s_goods/g52.webp",
      "img/s_goods/g53.webp",
      "img/s_goods/g54.webp",
      "img/s_goods/g55.webp",
      "img/s_goods/g56.webp",
      "img/s_goods/g57.webp",
      "img/s_goods/g58.webp",
      "img/s_goods/g59.webp",
      "img/s_goods/g60.webp",
      "img/s_goods/g61.webp",
      "img/s_goods/g62.webp",
      "img/s_goods/g63.webp",
      "img/s_goods/g64.webp",
      "img/s_goods/g65.webp",
      "img/s_goods/g66.webp",
      "img/s_goods/g67.webp",
      "img/s_goods/g68.webp",
      "img/s_goods/g69.webp",
      "img/s_goods/g70.webp",
      "img/s_goods/g71.webp",
      "img/s_goods/g72.webp",
      "img/s_goods/g73.webp",
      "img/s_goods/g74.webp",
      "img/s_goods/g75.webp",
      "img/s_goods/g76.webp",
      "img/s_goods/g77.webp",
      "img/s_goods/g78.webp",
      "img/s_goods/g79.webp",
      "img/s_goods/g80.webp",
      "img/s_goods/g81.webp",
      "img/s_goods/g82.webp",
      "img/s_goods/g83.webp",
      "img/s_goods/g84.webp",
      "img/s_goods/g85.webp",
      "img/s_goods/g86.webp",
      "img/s_goods/g87.webp"
    ],
    link: "",
    description: "<p><br><span>格闘技興行グッズ制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。「RIZIN公式オンラインストア」で取り扱うグッズの制作実績になります。RIZIN本部からいただいたポスター画像や、カモ柄等、様々なデザインをグッズに落とし込んだグラフィック制作物です。</p>",
    likes: "デザイン制作制作<br><br>RIZIN 公式グッズ"
  },
  {
    id: 8,
    thumbnail: "img/s_banner/b1.webp",
    images: [
      "img/s_banner/b1.webp",
      "img/s_banner/b2.webp",
      "img/s_banner/b3.webp",
      "img/s_banner/b4.webp",
      "img/s_banner/b5.webp",
      "img/s_banner/b6.webp",
      "img/s_banner/b7.webp"
    ],
    link: "",
    description: "<p><br><span>格闘技興行グッズ制作</span><br><br>■ 概要<br>株式会社SUNGRAN在籍時の制作物です。「RIZIN公式オンラインストア」で取り扱うグッズの販促用バナー画像の制作物です。</p>",
    likes: "バナー制作<br><br>RIZIN 公式グッズ"
  },
  {
    id: 9,
    thumbnail: "img/h1/1.webp",
    images: [
      "img/h1/1.webp",
      "img/h1/2.webp",
      "img/h1/3.webp",
      "img/h1/4.webp",
      "img/h1/5.webp",
      "img/h1/6.webp",
      "img/h1/7.webp",
      "img/h1/8.webp",
      "img/h1/9.webp",
      "img/h1/10.webp"
    ],
    link: "",
    description: "<p><br><span>ナイトワーク グラフィックデザイン制作</span><br><br>■ 概要<br>株式会社Lucky在籍時の制作物です。<br><br>ブランドイメージを大切にしながら、高級感と存在感を演出。視線を惹きつけるレイアウトと洗練されたデザインで、店舗・キャストの魅力が伝わるクリエイティブに仕上げました。</p>",
    likes: "グラフィックデザイン制作<br><br>ナイトワーク"
  },
  {
    id: 10,
    thumbnail: "img/h2/1.webp",
    images: [
      "img/h2/1.webp",
      "img/h2/2.webp"
    ],
    link: "",
    description: "<p><br><span>ナイトワーク グラフィックデザイン制作</span><br><br>■ 概要<br>株式会社Lucky在籍時の制作物です。<br><br>ターゲット層に強く印象を残すことを意識し、世界観と視認性を両立したデザインを制作。店舗やキャストの魅力を最大限に引き出し、集客・ブランディングにつながるビジュアルを目指しました。</p>",
    likes: "グラフィックデザイン制作<br><br>ナイトワーク"
  },
  {
    id: 11,
    thumbnail: "img/h3/1.webp",
    images: [
      "img/h3/1.webp",
      "img/h3/2.webp",
      "img/h3/3.webp"
    ],
    link: "",
    description: "<p><br><span>ナイトワーク グラフィックデザイン制作</span><br><br>■ 概要<br>株式会社Lucky在籍時の制作物です。<br><br>コンセプトに合わせたビジュアル設計を行い、世界観・視認性・訴求力のバランスを重視して制作。見る人の印象に残るデザインを目指し、ブランディングと集客の両面に配慮した仕上がりです。</p>",
    likes: "グラフィックデザイン制作<br><br>ナイトワーク"
  },
  {
    id: 12,
    thumbnail: "img/h4/1.webp",
    images: [
      "img/h4/1.webp",
      "img/h4/2.webp",
      "img/h4/3.webp"
    ],
    link: "",
    description: "<p><br><span>ナイトワーク グラフィックデザイン制作</span><br><br>■ 概要<br>株式会社Lucky在籍時の制作物です。<br><br>コンセプトに合わせたビジュアル設計を行い、世界観・視認性・訴求力のバランスを重視して制作。見る人の印象に残るデザインを目指し、ブランディングと集客の両面に配慮した仕上がりです。</p>",
    likes: "グラフィックデザイン制作<br><br>ナイトワーク"
  },
  {
    id: 5,
    thumbnail: "img/h5/1.webp",
    images: [
      "img/h5/1.webp",
      "img/h5/2.webp"
    ],
    link: "",
    description: "<p><br><span>ナイトワーク グラフィックデザイン制作</span><br><br>■ 概要<br>株式会社Lucky在籍時の制作物です。<br><br>一瞬で目を惹くインパクトと情報の伝わりやすさを両立。配色や構図、文字組みにこだわり、競合との差別化を図りながら印象に残るビジュアルを制作しました。</p>",
    likes: "グラフィックデザイン制作<br><br>ナイトワーク"
  },

];

// ===========================
//   BUILD GRID
// ===========================
const grid = document.getElementById('post-grid');
// document.getElementById('post-count').textContent = posts.length;

posts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', post.title);

  card.innerHTML = `
    <img src="${post.thumbnail}" alt="${post.title}" loading="lazy" />
    <div class="post-overlay">
      <div class="overlay-stat">
        
        ${post.likes}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(post));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      openModal(post);
    }
  });

  grid.appendChild(card);
});

// ===========================
//   SLIDER
// ===========================
const sliderTrack = document.getElementById('slider-track');
const sliderDots  = document.getElementById('slider-dots');
const prevBtn     = document.getElementById('slider-prev');
const nextBtn     = document.getElementById('slider-next');

let currentIndex = 0;
let totalSlides  = 0;

function buildSlider(images) {
  currentIndex = 0;
  totalSlides = images.length;

  sliderTrack.innerHTML = '';

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slider-slide';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `slide ${i + 1}`;
    img.loading = i === 0 ? 'eager' : 'lazy';

    slide.appendChild(img);
    sliderTrack.appendChild(slide);
  });

  sliderDots.innerHTML = '';

  if (totalSlides > 1) {
    images.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `${i + 1}枚目`);

      dot.addEventListener('click', () => goTo(i));

      sliderDots.appendChild(dot);
    });
  }

  updateSlider();
}

function goTo(index) {
  currentIndex = Math.max(
    0,
    Math.min(index, totalSlides - 1)
  );

  updateSlider();
}

function updateSlider() {

  sliderTrack.style.transform =
    `translateX(-${currentIndex * 100}%)`;

  sliderDots.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalSlides - 1;

  prevBtn.style.display =
    totalSlides <= 1 ? 'none' : '';

  nextBtn.style.display =
    totalSlides <= 1 ? 'none' : '';
}

prevBtn.addEventListener('click', () => {
  goTo(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  goTo(currentIndex + 1);
});

// ===========================
//   SWIPE
// ===========================
let touchStartX = 0;

sliderTrack.addEventListener(
  'touchstart',
  e => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true }
);

sliderTrack.addEventListener(
  'touchend',
  e => {

    const diff =
      touchStartX -
      e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      goTo(currentIndex + (diff > 0 ? 1 : -1));
    }

  }
);

// ===========================
//   KEYBOARD
// ===========================
document.addEventListener('keydown', e => {

  if (
    !document
      .getElementById('modal-overlay')
      .classList.contains('open')
  ) return;

  if (e.key === 'ArrowLeft') {
    goTo(currentIndex - 1);
  }

  if (e.key === 'ArrowRight') {
    goTo(currentIndex + 1);
  }

});

// ===========================
//   MODAL
// ===========================
const overlay  = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('modal-close');

function openModal(post) {

  buildSlider(post.images);

  document.getElementById('modal-title').textContent =
    post.title;

  document.getElementById('modal-desc').innerHTML =
    post.description;

  const linkBtn =
    document.getElementById('modal-link');

  if (post.link && post.link.trim() !== '') {
    linkBtn.href = post.link;
    linkBtn.style.display = 'inline-flex';
  } else {
    linkBtn.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

description.replace(/\n/g, '<br>')