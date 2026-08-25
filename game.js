/**
 * スライムクリッカー放置RPG - ゲームエンジン (v1.5.0)
 */

// --- 1. 定数・マスターデータ ---

// 50レベルごとに切り替わる12種類の美麗背景ステージ！
const STAGES = [
  { 
    id: 1, 
    name: "始まりの草原", 
    icon: "🌲", 
    envClass: "env-stage-1", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #fef08a 20%, #f59e0b 80%);"></div>
      <div class="env-cloud cloud-1"></div>
      <div class="env-cloud cloud-2"></div>
      <div class="env-cloud cloud-3"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <path d="M0,120 L0,70 Q70,20 140,70 T280,60 T420,50 T500,80 L500,120 Z" fill="#15803d" opacity="0.5"/>
        <path d="M0,120 L0,90 Q90,50 180,90 T360,75 T500,95 L500,120 Z" fill="#166534" opacity="0.7"/>
      </svg>
      <div class="env-windmill">🏠<span class="blades">🌀</span></div>
      <div class="env-foreground-decor">
        <span>🌲</span><span>🌸</span><span>🌻</span><span>🌳</span>
      </div>
    `
  },
  { 
    id: 2, 
    name: "水晶の洞窟", 
    icon: "💎", 
    envClass: "env-stage-2", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #7dd3fc 20%, #0369a1 80%); box-shadow: 0 0 35px #38bdf8;"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <path d="M0,0 L50,40 L100,10 L160,50 L220,15 L280,45 L340,10 L400,50 L460,15 L500,40 L500,0 Z" fill="#1e1b4b" opacity="0.9"/>
        <path d="M0,120 L0,80 L80,50 L160,85 L250,40 L340,90 L420,55 L500,80 L500,120 Z" fill="#0f172a" opacity="0.7"/>
      </svg>
      <div style="position: absolute; top: 40%; left: 15%; font-size: 2.2rem; filter: drop-shadow(0 0 10px #38bdf8); animation: magic-float 3s infinite ease-in-out;">💎</div>
      <div style="position: absolute; top: 35%; right: 18%; font-size: 2.5rem; filter: drop-shadow(0 0 12px #c084fc); animation: magic-float 3.5s infinite ease-in-out 1s;">✨</div>
      <div class="env-foreground-decor">
        <span>💎</span><span>⛏️</span><span>✨</span><span>💎</span>
      </div>
    `
  },
  { 
    id: 3, 
    name: "毒の沼地", 
    icon: "🧪", 
    envClass: "env-stage-3", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #d8b4fe 20%, #7e22ce 80%); box-shadow: 0 0 35px #a855f7;"></div>
      <div class="env-cloud cloud-1" style="background: rgba(168, 85, 247, 0.4);"></div>
      <div class="env-cloud cloud-2" style="background: rgba(147, 51, 234, 0.3);"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <path d="M0,120 L0,85 Q120,40 240,90 T480,70 L500,80 L500,120 Z" fill="#3b0764" opacity="0.7"/>
      </svg>
      <div style="position: absolute; bottom: 70px; left: 20%; font-size: 1.8rem; animation: float-up-particle 3s infinite ease-in-out;">🟣</div>
      <div style="position: absolute; bottom: 60px; right: 25%; font-size: 1.5rem; animation: float-up-particle 3.5s infinite ease-in-out 1.2s;">🧪</div>
      <div class="env-foreground-decor">
        <span>🍄</span><span>🧪</span><span>💀</span><span>🍄</span>
      </div>
    `
  },
  { 
    id: 4, 
    name: "灼熱の火山", 
    icon: "🌋", 
    envClass: "env-stage-4", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #fca5a5 20%, #dc2626 80%); box-shadow: 0 0 45px #ef4444;"></div>
      <div class="env-cloud cloud-1" style="background: rgba(50, 20, 20, 0.6);"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <polygon points="60,120 180,20 300,120" fill="#7f1d1d" opacity="0.8"/>
        <polygon points="170,30 180,15 190,30" fill="#f87171"/>
        <polygon points="260,120 380,35 480,120" fill="#450a0a" opacity="0.9"/>
      </svg>
      <div style="position: absolute; bottom: 75px; left: 18%; font-size: 1.8rem; animation: float-up-particle 2.5s infinite ease-in-out;">🔥</div>
      <div style="position: absolute; bottom: 85px; right: 20%; font-size: 2rem; animation: float-up-particle 2.8s infinite ease-in-out 0.8s;">☄️</div>
      <div class="env-foreground-decor">
        <span>🌋</span><span>🔥</span><span>☄️</span><span>🔥</span>
      </div>
    `
  },
  { 
    id: 5, 
    name: "天空の神殿", 
    icon: "✨", 
    envClass: "env-stage-5", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #ffffff 30%, #fde047 80%); box-shadow: 0 0 50px #fbbf24;"></div>
      <div class="env-cloud cloud-1" style="background: rgba(255, 255, 255, 0.9);"></div>
      <div class="env-cloud cloud-2" style="background: rgba(255, 255, 255, 0.75);"></div>
      <div class="env-cloud cloud-3" style="background: rgba(255, 255, 255, 0.85);"></div>
      <div style="position: absolute; top: 25%; left: 10%; font-size: 2.8rem; filter: drop-shadow(0 0 10px #fbbf24); animation: magic-float 4s infinite ease-in-out;">🏛️</div>
      <div style="position: absolute; top: 20%; right: 12%; font-size: 2.2rem; filter: drop-shadow(0 0 15px #fef08a); animation: magic-float 3.5s infinite ease-in-out 1.5s;">🕊️</div>
      <div class="env-foreground-decor">
        <span>🏛️</span><span>✨</span><span>☁️</span><span>🏛️</span>
      </div>
    `
  },
  { 
    id: 6, 
    name: "魔界の深淵", 
    icon: "🌌", 
    envClass: "env-stage-6", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #a855f7 10%, #000000 70%); box-shadow: 0 0 45px #9333ea; border: 2px solid #c084fc;"></div>
      <div style="position: absolute; top: 20%; left: 20%; font-size: 2.6rem; animation: spin-slow 15s linear infinite; filter: drop-shadow(0 0 15px #a855f7);">🔯</div>
      <div style="position: absolute; top: 28%; right: 15%; font-size: 2.2rem; animation: magic-float 3s infinite ease-in-out;">👁️</div>
      <div class="env-foreground-decor">
        <span>🌌</span><span>👁️</span><span>🔮</span><span>🌌</span>
      </div>
    `
  },
  { 
    id: 7, 
    name: "氷結の雪原", 
    icon: "❄️", 
    envClass: "env-stage-7", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #e0f2fe 30%, #38bdf8 80%); box-shadow: 0 0 40px #7dd3fc;"></div>
      <div class="env-cloud cloud-1" style="background: rgba(224, 242, 254, 0.7);"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <polygon points="30,120 120,20 220,120" fill="#bae6fd" opacity="0.8"/>
        <polygon points="180,120 300,10 420,120" fill="#e0f2fe" opacity="0.9"/>
      </svg>
      <div style="position: absolute; top: 30%; left: 15%; font-size: 2.2rem; animation: magic-float 3.5s infinite ease-in-out;">❄️</div>
      <div style="position: absolute; top: 40%; right: 20%; font-size: 2.4rem; animation: magic-float 4s infinite ease-in-out 1s;">🧊</div>
      <div class="env-foreground-decor">
        <span>❄️</span><span>⛄</span><span>🧊</span><span>❄️</span>
      </div>
    `
  },
  { 
    id: 8, 
    name: "黄金の砂漠", 
    icon: "🏜️", 
    envClass: "env-stage-8", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #fef08a 20%, #eab308 80%); box-shadow: 0 0 50px #ca8a04;"></div>
      <svg class="env-mountains" viewBox="0 0 500 120" preserveAspectRatio="none">
        <polygon points="100,120 200,30 300,120" fill="#b45309" opacity="0.85"/>
        <polygon points="260,120 370,45 470,120" fill="#92400e" opacity="0.9"/>
      </svg>
      <div style="position: absolute; top: 35%; left: 20%; font-size: 2.5rem; animation: magic-float 3s infinite ease-in-out;">🏺</div>
      <div class="env-foreground-decor">
        <span>🏜️</span><span>🌵</span><span>🐪</span><span>🏜️</span>
      </div>
    `
  },
  { 
    id: 9, 
    name: "深海の海底神殿", 
    icon: "🌊", 
    envClass: "env-stage-9", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #2dd4bf 20%, #0f766e 80%); box-shadow: 0 0 45px #14b8a6;"></div>
      <div style="position: absolute; bottom: 80px; left: 15%; font-size: 1.8rem; animation: float-up-particle 3.5s infinite ease-in-out;">🫧</div>
      <div style="position: absolute; bottom: 60px; right: 22%; font-size: 2.2rem; animation: float-up-particle 4s infinite ease-in-out 1s;">🫧</div>
      <div class="env-foreground-decor">
        <span>🪸</span><span>🐚</span><span>🫧</span><span>🔱</span>
      </div>
    `
  },
  { 
    id: 10, 
    name: "嵐の雷鳴山", 
    icon: "⚡", 
    envClass: "env-stage-10", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #c084fc 20%, #4338ca 80%); box-shadow: 0 0 50px #818cf8;"></div>
      <div class="env-cloud cloud-1" style="background: rgba(30, 27, 75, 0.85);"></div>
      <div class="env-cloud cloud-2" style="background: rgba(49, 46, 129, 0.8);"></div>
      <div style="position: absolute; top: 25%; left: 25%; font-size: 2.8rem; animation: pulse-glow 1.5s infinite ease-in-out;">⚡</div>
      <div class="env-foreground-decor">
        <span>⚡</span><span>⛈️</span><span>🌩️</span><span>⚡</span>
      </div>
    `
  },
  { 
    id: 11, 
    name: "冥界の黄泉平坂", 
    icon: "💀", 
    envClass: "env-stage-11", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #f43f5e 20%, #881337 80%); box-shadow: 0 0 50px #e11d48;"></div>
      <div style="position: absolute; top: 30%; left: 18%; font-size: 2.5rem; animation: magic-float 3s infinite ease-in-out;">🕯️</div>
      <div style="position: absolute; top: 35%; right: 20%; font-size: 2.2rem; animation: magic-float 3.5s infinite ease-in-out 1s;">👻</div>
      <div class="env-foreground-decor">
        <span>🕯️</span><span>👻</span><span>💀</span><span>🕯️</span>
      </div>
    `
  },
  { 
    id: 12, 
    name: "星辰の宇宙空間", 
    icon: "🪐", 
    envClass: "env-stage-12", 
    renderEnv: () => `
      <div class="celestial-body" style="background: radial-gradient(circle, #f472b6 20%, #3b0764 80%); box-shadow: 0 0 60px #c084fc; border: 2px solid #f472b6;"></div>
      <div style="position: absolute; top: 20%; left: 15%; font-size: 3rem; animation: spin-slow 20s linear infinite;">🪐</div>
      <div style="position: absolute; top: 30%; right: 18%; font-size: 2.6rem; animation: magic-float 3s infinite ease-in-out;">🌠</div>
      <div class="env-foreground-decor">
        <span>🪐</span><span>🌌</span><span>🌠</span><span>🌟</span>
      </div>
    `
  }
];

// --- 2. モンスター種族・カテゴリデータ (100レベルごとに大進化＆50レベルごとに見た目・装備が進化！) ---
const MONSTER_CATEGORIES = [
  // 💧 スライム族（Lv.1〜99）
  {
    minLevel: 1,
    maxLevel: 49,
    raceName: "スライム族（初級）",
    icon: "💧",
    types: [
      { name: "グリーンスライム", color1: "#86efac", color2: "#22c55e", color3: "#15803d", eyeType: "cute" },
      { name: "ブルースライム", color1: "#7dd3fc", color2: "#0284c7", color3: "#0369a1", eyeType: "cute" },
      { name: "ポイズンスライム", color1: "#d8b4fe", color2: "#9333ea", color3: "#581c87", eyeType: "evil" }
    ],
    bossPrefix: "キング"
  },
  {
    minLevel: 50,
    maxLevel: 99,
    raceName: "武装スライム族（上級）",
    icon: "💧",
    types: [
      { name: "ナイトスライム", color1: "#fca5a5", color2: "#ef4444", color3: "#991b1b", eyeType: "fierce" },
      { name: "ホーリーライム", color1: "#fef08a", color2: "#eab308", color3: "#854d0e", eyeType: "cute" },
      { name: "ダークスライム", color1: "#94a3b8", color2: "#334155", color3: "#0f172a", eyeType: "evil" }
    ],
    bossPrefix: "覇王"
  },

  // 💀 スケルトン族（Lv.100〜199）
  {
    minLevel: 100,
    maxLevel: 149,
    raceName: "スケルトン歩兵隊",
    icon: "💀",
    types: [
      { name: "ガイコツ見張り兵", color1: "#f8fafc", color2: "#cbd5e1", color3: "#64748b", eyeType: "skull" },
      { name: "ボーンウォリアー", color1: "#e2e8f0", color2: "#94a3b8", color3: "#475569", eyeType: "skull" },
      { name: "スカルメイジ", color1: "#c084fc", color2: "#9333ea", color3: "#581c87", eyeType: "magic" }
    ],
    bossPrefix: "スケルトンロード"
  },
  {
    minLevel: 150,
    maxLevel: 199,
    raceName: "重装スカルナイト族",
    icon: "💀",
    types: [
      { name: "カースドスケルトン", color1: "#fca5a5", color2: "#dc2626", color3: "#7f1d1d", eyeType: "fierce" },
      { name: "ファントム重装騎士", color1: "#67e8f9", color2: "#0891b2", color3: "#164e63", eyeType: "magic" },
      { name: "漆黒のデスナイト", color1: "#94a3b8", color2: "#334155", color3: "#020617", eyeType: "skull" }
    ],
    bossPrefix: "骸骨大将軍"
  },

  // 👺 ゴブリン族（Lv.200〜299）
  {
    minLevel: 200,
    maxLevel: 249,
    raceName: "グリーンゴブリン族",
    icon: "👺",
    types: [
      { name: "ゴブリンシーフ", color1: "#86efac", color2: "#22c55e", color3: "#14532d", eyeType: "goblin" },
      { name: "ゴブリンスカウト", color1: "#4ade80", color2: "#16a34a", color3: "#052e16", eyeType: "goblin" },
      { name: "オークウォーリアー", color1: "#a3e635", color2: "#65a30d", color3: "#365314", eyeType: "goblin" },
      { name: "ゴブリンファイター", color1: "#86efac", color2: "#15803d", color3: "#052e16", eyeType: "goblin" }
    ],
    bossPrefix: "頭領グリーンゴブリン"
  },
  {
    minLevel: 250,
    maxLevel: 299,
    raceName: "レッドゴブリン狂戦士族",
    icon: "👺",
    types: [
      { name: "レッドゴブリン", color1: "#fca5a5", color2: "#ef4444", color3: "#7f1d1d", eyeType: "goblin" },
      { name: "ブラッドオーク", color1: "#f87171", color2: "#dc2626", color3: "#450a0a", eyeType: "goblin" },
      { name: "トロールバーサーカー", color1: "#fca5a5", color2: "#b91c1c", color3: "#450a0a", eyeType: "goblin" },
      { name: "獄炎ゴブリン呪術師", color1: "#fed7aa", color2: "#ea580c", color3: "#7c2d12", eyeType: "goblin" }
    ],
    bossPrefix: "大頭領レッドゴブリン"
  },

  // 🗿 ゴーレム族（Lv.300〜399）
  {
    minLevel: 300,
    maxLevel: 349,
    raceName: "遺跡の巨岩ゴーレム族",
    icon: "🗿",
    types: [
      { name: "ロックゴーレム", color1: "#d6d3d1", color2: "#78716c", color3: "#44403c", eyeType: "golem" },
      { name: "アイアンゴーレム", color1: "#cbd5e1", color2: "#64748b", color3: "#1e293b", eyeType: "golem" },
      { name: "クリスタルゴーレム", color1: "#7dd3fc", color2: "#0284c7", color3: "#1e3a8a", eyeType: "magic" }
    ],
    bossPrefix: "古代守護巨神"
  },
  {
    minLevel: 350,
    maxLevel: 399,
    raceName: "古代魔導機神コロッサス",
    icon: "🗿",
    types: [
      { name: "マグマ機神ゴーレム", color1: "#fdba74", color2: "#dc2626", color3: "#7f1d1d", eyeType: "fierce" },
      { name: "黄金ルーンコロッサス", color1: "#fef08a", color2: "#eab308", color3: "#78350f", eyeType: "golem" },
      { name: "虚空の魔導巨神", color1: "#c084fc", color2: "#7e22ce", color3: "#3b0764", eyeType: "magic" }
    ],
    bossPrefix: "古代殲滅機神"
  },

  // 👿 デーモン族（Lv.400〜499）
  {
    minLevel: 400,
    maxLevel: 449,
    raceName: "魔王軍・尖兵デーモン族",
    icon: "👿",
    types: [
      { name: "シャドウインプ", color1: "#c084fc", color2: "#7e22ce", color3: "#3b0764", eyeType: "demon" },
      { name: "レッサーデーモン", color1: "#f87171", color2: "#dc2626", color3: "#450a0a", eyeType: "demon" },
      { name: "死神リーパー", color1: "#94a3b8", color2: "#1e293b", color3: "#020617", eyeType: "skull" }
    ],
    bossPrefix: "魔王軍幹部"
  },
  {
    minLevel: 450,
    maxLevel: 499,
    raceName: "大魔王・ヘルロード族",
    icon: "👿",
    types: [
      { name: "アークデーモン", color1: "#fb7185", color2: "#e11d48", color3: "#881337", eyeType: "fierce" },
      { name: "地獄の大公爵", color1: "#f87171", color2: "#991b1b", color3: "#450a0a", eyeType: "demon" },
      { name: "冥界の支配王", color1: "#c084fc", color2: "#581c87", color3: "#020617", eyeType: "magic" }
    ],
    bossPrefix: "極悪大魔王"
  },

  // 🐉 ドラゴン族（Lv.500〜599）
  {
    minLevel: 500,
    maxLevel: 549,
    raceName: "契約飛竜・ワイバーン族",
    icon: "🐉",
    types: [
      { name: "グリーンワイバーン", color1: "#86efac", color2: "#15803d", color3: "#052e16", eyeType: "dragon" },
      { name: "フロストドラゴン", color1: "#bae6fd", color2: "#0284c7", color3: "#0c4a6e", eyeType: "dragon" },
      { name: "カオスドラゴン", color1: "#e879f9", color2: "#86198f", color3: "#4a044e", eyeType: "dragon" }
    ],
    bossPrefix: "天空の覇竜"
  },
  {
    minLevel: 550,
    maxLevel: 599,
    raceName: "太古の炎龍帝・エンペラー族",
    icon: "🐉",
    types: [
      { name: "フレイムエンペラー", color1: "#fca5a5", color2: "#b91c1c", color3: "#450a0a", eyeType: "dragon" },
      { name: "黒炎の神竜", color1: "#94a3b8", color2: "#0f172a", color3: "#000000", eyeType: "dragon" },
      { name: "黄金の極竜王", color1: "#fef08a", color2: "#f59e0b", color3: "#78350f", eyeType: "dragon" }
    ],
    bossPrefix: "創世の炎龍帝"
  },

  // 🌌 星辰の邪神（Lv.600〜699）
  {
    minLevel: 600,
    maxLevel: 649,
    raceName: "星辰の邪神・コズミック族",
    icon: "🌌",
    types: [
      { name: "コズミックビースト", color1: "#c084fc", color2: "#3b0764", color3: "#000000", eyeType: "cosmic" },
      { name: "星喰らいの影", color1: "#f472b6", color2: "#831843", color3: "#0f172a", eyeType: "cosmic" },
      { name: "虚無の巨怪", color1: "#38bdf8", color2: "#1e1b4b", color3: "#020617", eyeType: "cosmic" }
    ],
    bossPrefix: "宇宙支配神"
  },
  {
    minLevel: 650,
    maxLevel: 699,
    raceName: "深淵の旧支配者・アザトース族",
    icon: "🌌",
    types: [
      { name: "アザトースの化身", color1: "#fbbf24", color2: "#7c2d12", color3: "#000000", eyeType: "cosmic" },
      { name: "混沌の盲目神", color1: "#f43f5e", color2: "#581c87", color3: "#020617", eyeType: "cosmic" },
      { name: "次元を喰らう終焉神", color1: "#38bdf8", color2: "#0f172a", color3: "#000000", eyeType: "cosmic" }
    ],
    bossPrefix: "万物の根源神"
  },

  // 👑 超越神（Lv.700〜）
  {
    minLevel: 700,
    maxLevel: 749,
    raceName: "超越神・至高神界族",
    icon: "👑",
    types: [
      { name: "光輪の至高神", color1: "#fef08a", color2: "#f59e0b", color3: "#78350f", eyeType: "cosmic" },
      { name: "時空の覇帝", color1: "#c084fc", color2: "#7c3aed", color3: "#2e1065", eyeType: "demon" }
    ],
    bossPrefix: "全知全能の"
  },
  {
    minLevel: 750,
    maxLevel: 999999,
    raceName: "アルティメット創世覇神族",
    icon: "👑",
    types: [
      { name: "終焉の創世龍神", color1: "#f43f5e", color2: "#991b1b", color3: "#000000", eyeType: "dragon" },
      { name: "全宇宙の創造神", color1: "#fef08a", color2: "#f59e0b", color3: "#3b0764", eyeType: "cosmic" }
    ],
    bossPrefix: "アルティメット至高神"
  }
];

const BUILDINGS_MASTER = [
  { id: "trap", name: "スライム捕獲罠", icon: "🪤", attackIcon: "🪤", desc: "自動でスライムを捕獲する罠を仕掛ける", baseCost: 15, baseDPS: 0.8 },
  { id: "novice", name: "見習い冒険者", icon: "🗡️", attackIcon: "⚔️", desc: "剣を振るって加勢してくれる仲間", baseCost: 100, baseDPS: 4 },
  { id: "archer", name: "弓兵の塔", icon: "🏹", attackIcon: "🏹", desc: "遠距離から矢を雨あられと射掛ける", baseCost: 1100, baseDPS: 25 },
  { id: "mage_tower", name: "魔導オートタワー", icon: "🔮", attackIcon: "🔮", desc: "古代魔術で自動迎撃する防衛塔", baseCost: 12000, baseDPS: 120 },
  { id: "ranch", name: "スライム自動牧場", icon: "🏡", attackIcon: "⚡", desc: "スライムを飼育して継続ゴールド化", baseCost: 130000, baseDPS: 450 },
  { id: "cannon", name: "魔導カノン砲", icon: "💥", attackIcon: "💥", desc: "広範囲を吹き飛ばす重火器砲台", baseCost: 1400000, baseDPS: 2000 },
  { id: "guild", name: "冒険者ギルド支部", icon: "🏰", attackIcon: "🛡️", desc: "大勢の熟練冒険者を雇い入れ総攻撃", baseCost: 20000000, baseDPS: 10000 },
  { id: "dragon", name: "契約ドラゴン", icon: "🐉", attackIcon: "🔥", desc: "伝説の竜を召喚し圧倒的ブレスで殲滅する", baseCost: 330000000, baseDPS: 60000 }
];

// --- 通常スキルマスター（ゴールドで購入・スッキリ厳選） ---
const SKILLS_MASTER = [
  { id: "click_power_1", name: "力任せの打撃", icon: "👊", desc: "クリック攻撃力が +25% 増加する", cost: 50, type: "passive" },
  { id: "crit_chance_1", name: "弱点見極め", icon: "🎯", desc: "クリティカル率+10%、クリティカル倍率が2.5倍になる", cost: 300, type: "passive" },
  { id: "trap_mastery", name: "罠の改良術", icon: "⚙️", desc: "「スライム捕獲罠」の生産効率が3倍になる", cost: 800, type: "passive" },
  { id: "click_combo", name: "連撃の心得", icon: "⚡", desc: "クリック時、25%の確率で2回連続ダメージを与える", cost: 1500, type: "passive" },
  { id: "skill_berserk", name: "スキル: バーサーク", icon: "🔥", desc: "【アクティブ】15秒間、クリック攻撃力とDPSが3倍になる (CD: 60秒)", cost: 2000, type: "active", cd: 60, duration: 15 },
  { id: "meteor_resonance", name: "流星の共鳴", icon: "💫", desc: "隕石ラッシュの持続時間が +6秒(計26秒) 延長され、攻撃倍率が 2.5倍 になる", cost: 5000, type: "passive" },
  { id: "click_power_2", name: "剣技の心得", icon: "⚔️", desc: "DPS（秒間自動攻撃力）の 3% がクリック攻撃力に加算される", cost: 8000, type: "passive" },
  { id: "guardian_aegis", name: "守護者の加護", icon: "🛡️", desc: "ボス戦の制限時間が 40秒 ➔ 55秒 に延長される", cost: 15000, type: "passive" },
  { id: "bounty_hunter", name: "賞金首ハンター", icon: "💎", desc: "スライム討伐時の獲得ゴールドが +50% 増加する", cost: 40000, type: "passive" },
  { id: "skill_goldrush", name: "スキル: ゴールドラッシュ", icon: "💰", desc: "【アクティブ】即座に秒間DPSの30秒分のゴールドを獲得する (CD: 90秒)", cost: 60000, type: "active", cd: 90 },
  { id: "thunder_strike", name: "雷光の閃き", icon: "⚡", desc: "クリティカル時、追加でDPS 3秒分の電撃ダメージを与える", cost: 80000, type: "passive" },
  { id: "building_synergy", name: "連携の極意", icon: "🤝", desc: "すべての建物の攻撃力・生産力が 2倍 になる", cost: 150000, type: "passive" },
  { id: "skill_cyclone", name: "スキル: サイクロン", icon: "🌪️", desc: "【アクティブ】10秒間、仲間たちの自動攻撃スピードが3倍になり超連打する (CD: 75秒)", cost: 200000, type: "active", cd: 75, duration: 10 },
  { id: "skill_meteor", name: "スキル: メテオ落とし", icon: "☄️", desc: "【アクティブ】巨大な隕石を落とし、スライムに現在DPSの50倍ダメージを一撃で与える (CD: 120秒)", cost: 500000, type: "active", cd: 120 },
  { id: "golden_touch", name: "ミダスタッチ", icon: "✨", desc: "クリック時、10%の確率でスライムの最大HP20%相当のボーナスゴールドを獲得", cost: 2000000, type: "passive" }
];

// --- 古代の秘術（古代スキルポイント SP を消費して永続強化・必要SPコスト「1,2Lv:1pt / 3,4Lv:2pt...」制・12種類） ---
const REBIRTH_SKILLS_MASTER = [
  { 
    id: "soul_strike", 
    name: "魂の研鑽", 
    icon: "👊", 
    desc: "クリック攻撃力が永続で +10% 増加する (現在: +{val}%)", 
    maxLevel: 10, 
    valuePerLevel: 10 
  },
  { 
    id: "ancient_craft", 
    name: "古代の建築術", 
    icon: "🏛️", 
    desc: "すべての建物の生産力が永続で +8% 増加する (現在: +{val}%)", 
    maxLevel: 10, 
    valuePerLevel: 8 
  },
  { 
    id: "merchant_wit", 
    name: "商人の知恵", 
    icon: "💰", 
    desc: "モンスター討伐時のゴールドが永続で +10% 増加する (現在: +{val}%)", 
    maxLevel: 10, 
    valuePerLevel: 10 
  },
  { 
    id: "true_eye", 
    name: "真理の瞳", 
    icon: "🎯", 
    desc: "クリティカル率+1.5%、クリティカル倍率+10% (現在: 率+{val1}%, 倍率+{val2}%)", 
    maxLevel: 10, 
    val1: 1.5, 
    val2: 10 
  },
  { 
    id: "battle_flow", 
    name: "精神統一", 
    icon: "⚡", 
    desc: "全アクティブスキルのクールダウンが 5% 短縮される (現在: -{val}%)", 
    maxLevel: 5, 
    valuePerLevel: 5 
  },
  { 
    id: "cosmic_calamity", 
    name: "天変地異の秘術", 
    icon: "☄️", 
    desc: "隕石ラッシュの発生間隔が 5秒 短縮される (現在: -{val}秒)", 
    maxLevel: 5, 
    valuePerLevel: 5 
  },
  { 
    id: "boss_bounty", 
    name: "王者の風格", 
    icon: "👑", 
    desc: "ボスモンスター討伐時の獲得ゴールドが永続で +25% 増加する (現在: +{val}%)", 
    maxLevel: 10, 
    valuePerLevel: 25 
  },
  { 
    id: "life_leech", 
    name: "生命の浸蝕", 
    icon: "🩸", 
    desc: "クリック時、敵の最大HPの 0.3% 分の追加ダメージを与える (現在: +{val}%)", 
    maxLevel: 10, 
    valuePerLevel: 0.3 
  },
  { 
    id: "inferno_surge", 
    name: "業火の覇気", 
    icon: "🌋", 
    desc: "隕石ラッシュ中の全攻撃力倍率が +0.3倍 上昇する (現在: +{val}倍)", 
    maxLevel: 5, 
    valuePerLevel: 0.3 
  },
  { 
    id: "time_lord", 
    name: "刻の支配者", 
    icon: "⌛", 
    desc: "ボス戦の制限時間が永続で +4秒 延長される (現在: +{val}秒)", 
    maxLevel: 5, 
    valuePerLevel: 4 
  },
  { 
    id: "crystal_blessing", 
    name: "水晶の導き", 
    icon: "💎", 
    desc: "転生に必要な水晶💎の数が -1個 軽減される（最低1個）(現在: -{val}個)", 
    maxLevel: 3, 
    valuePerLevel: 1 
  },
  { 
    id: "auto_fairy", 
    name: "オートタップ小妖精", 
    icon: "🧚", 
    desc: "1秒に1回、自動でスライムをクリックしてくれるお助け妖精を召喚！", 
    maxLevel: 1, 
    valuePerLevel: 1 
  }
];

// --- 2. サウンドエンジン (Web Audio API) ---
class SoundController {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    } catch (e) {
      this.ctx = null;
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1, freqSlide = null) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (freqSlide) {
        osc.frequency.exponentialRampToValueAtTime(freqSlide, this.ctx.currentTime + duration);
      }

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // AudioContext fails gracefully without stopping the game
    }
  }

  playHit() {
    this.playTone(280 + Math.random() * 40, 'sine', 0.08, 0.15, 140);
  }

  playAutoHit() {
    this.playTone(380 + Math.random() * 40, 'triangle', 0.06, 0.08, 200);
  }

  playCrit() {
    this.playTone(700, 'triangle', 0.15, 0.2, 1200);
  }

  playDefeat() {
    this.playTone(400, 'sine', 0.08, 0.12, 600);
    setTimeout(() => this.playTone(600, 'sine', 0.12, 0.15, 800), 50);
  }

  playBossDefeat() {
    this.playTone(523.25, 'triangle', 0.12, 0.2);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.12, 0.2), 80);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.15, 0.25), 160);
    setTimeout(() => this.playTone(1046.50, 'triangle', 0.3, 0.3), 240);
  }

  playLevelUp() {
    this.playTone(523.25, 'triangle', 0.08, 0.15);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.08, 0.15), 60);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.15, 0.18), 120);
  }

  playBuy() {
    this.playTone(987.77, 'square', 0.08, 0.08);
    setTimeout(() => this.playTone(1318.51, 'square', 0.12, 0.08), 60);
  }

  playSkill() {
    this.playTone(300, 'sawtooth', 0.3, 0.2, 900);
  }

  playRebirth() {
    this.playTone(300, 'sine', 0.2, 0.2, 800);
    setTimeout(() => this.playTone(600, 'sine', 0.2, 0.2, 1200), 120);
    setTimeout(() => this.playTone(900, 'triangle', 0.4, 0.3, 1600), 240);
  }
}

// --- 3. ゲーム状態 (State) ---
class Game {
  constructor() {
    this.sound = new SoundController();
    
    this.state = {
      gold: 0,
      totalGold: 0,
      clickLevel: 0,         // 常設クリック強化レベル（剣術の鍛錬）
      crystals: 0,           // ボス討伐で手に入る「転生の水晶 💎」（初期値0個）
      totalCrystals: 0,      // 累計獲得した転生の水晶
      skillPoints: 0,        // 転生で手に入る「古代スキルポイント 🔮 (SP)」
      totalSkillPoints: 0,   // 累計獲得した古代スキルポイント
      rebirthCount: 0,       // 転生回数
      totalClicks: 0,
      totalKills: 0,
      currentLevel: 1,
      bossTimer: 40,
      playTime: 0,
      lastSaved: Date.now(),
      soundEnabled: true,
      buyMultiplier: 1,
      buildings: {},
      skills: {},
      rebirthSkills: {},     // 習得した古代の秘術 { skillId: level }
      meteorRushTimer: 120,  // ☄️ 120秒周期 20秒間の隕石ラッシュカウントダウン
      meteorRushActiveTime: 0,// 隕石ラッシュ発動中の残り時間
      meteorRushParticleTimer: 0,
      activeCooldowns: {
        skill_berserk: 0,
        skill_goldrush: 0,
        skill_meteor: 0,
        skill_cyclone: 0
      },
      activeBuffs: {
        berserk: 0,
        cyclone: 0
      }
    };

    this.enemy = {
      name: "グリーンスライム",
      level: 1,
      hp: 25,
      maxHp: 25,
      gold: 5,
      isBoss: false,
      isMetal: false,
      raceName: "スライム族",
      color1: "#86efac",
      color2: "#22c55e",
      color3: "#15803d",
      eyeType: "cute"
    };

    BUILDINGS_MASTER.forEach(b => this.state.buildings[b.id] = 0);
    SKILLS_MASTER.forEach(s => this.state.skills[s.id] = false);
    REBIRTH_SKILLS_MASTER.forEach(rs => this.state.rebirthSkills[rs.id] = 0);

    this.lastFrameTime = performance.now();
    this.autoSaveTimer = 0;
    this.autoAttackTimer = 0;
    this.fairyClickTimer = 0;
    this.isDefeating = false;
  }

  init() {
    this.loadGame();
    this.setupDOM();
    this.setupEventListeners();
    this.spawnEnemy();
    this.updateArenaEnvironment();
    this.renderFieldBuildings();
    this.renderAll();

    requestAnimationFrame(this.loop.bind(this));
  }

  // 50レベルごとに切り替わるステージインデックス
  getStageIndex(level = this.state.currentLevel) {
    return Math.floor((level - 1) / 50) % STAGES.length;
  }

  getStageNumber(level = this.state.currentLevel) {
    return Math.floor((level - 1) / 50) + 1;
  }

  isBossLevel(level = this.state.currentLevel) {
    return level % 10 === 0;
  }

  // 転生に必要な水晶数：1回目は1個、2回目は2個、3回目は3個...と1個ずつ増加！（水晶の導きで軽減）
  getRequiredCrystals() {
    const blessing = this.state.rebirthSkills["crystal_blessing"] || 0;
    const baseReq = (this.state.rebirthCount || 0) + 1;
    return Math.max(1, baseReq - blessing);
  }

  // 転生可能判定：必要水晶数を満たしているか
  canRebirth() {
    return this.state.crystals >= this.getRequiredCrystals();
  }

  // ボス戦制限時間（守護者の加護 + 刻の支配者 +4秒/Lv）
  getBossTimerDuration() {
    let t = 40;
    if (this.state.skills["guardian_aegis"]) t = 55;
    const timeLord = this.state.rebirthSkills["time_lord"] || 0;
    return t + (timeLord * 4);
  }

  // 古代の秘術（SPスキル）の必要SP計算：1,2Lv->1pt / 3,4Lv->2pt / 5,6Lv->3pt / 7,8Lv->4pt / 9,10Lv->5pt
  getRebirthSkillCost(skillId) {
    const rs = REBIRTH_SKILLS_MASTER.find(x => x.id === skillId);
    if (!rs) return 1;
    if (rs.id === "auto_fairy") return 1;
    const curLvl = this.state.rebirthSkills[skillId] || 0;
    return Math.floor(curLvl / 2) + 1;
  }

  // ☄️ 隕石ラッシュ関連の計算（120秒周期 20秒間持続、天変地異で-5秒/Lv）
  getMeteorInterval() {
    const calamityLvl = this.state.rebirthSkills["cosmic_calamity"] || 0;
    return Math.max(60, 120 - calamityLvl * 5);
  }

  getMeteorDuration() {
    return this.state.skills["meteor_resonance"] ? 26 : 20;
  }

  getMeteorMultiplier() {
    const base = this.state.skills["meteor_resonance"] ? 2.5 : 2.0;
    const surge = (this.state.rebirthSkills["inferno_surge"] || 0) * 0.3;
    return base + surge;
  }

  isMeteorRushActive() {
    return (this.state.meteorRushActiveTime || 0) > 0;
  }

  // 常設クリック強化のコスト計算（購入倍率 x1, x10, x100 に対応！）
  getClickUpgradeCost(countToAdd = 1) {
    const lvl = this.state.clickLevel || 0;
    if (countToAdd === 1) {
      return Math.floor(10 * Math.pow(1.12, lvl) + lvl * 5);
    }
    let total = 0;
    for (let i = 0; i < countToAdd; i++) {
      total += Math.floor(10 * Math.pow(1.12, lvl + i) + (lvl + i) * 5);
    }
    return total;
  }

  // クリック攻撃力の計算（基礎 + 剣術鍛錬 + パッシブ + DPS連動ボーナス + 隕石ラッシュ倍率）
  getClickPower() {
    const lvl = this.state.clickLevel || 0;
    let base = 1 + Math.floor(lvl * 0.6);

    if (this.state.skills["click_power_1"]) base = Math.floor(base * 1.25);

    // DPS連動ボーナス
    const dps = this.getDPS(false);
    let dpsBonusRatio = 0;
    if (this.state.skills["click_power_2"]) dpsBonusRatio += 0.03;

    if (dpsBonusRatio > 0) {
      base += Math.floor(dps * dpsBonusRatio);
    }

    // 転生パッシブ: 魂の研鑽 (+10%/Lv)
    const soulStrikeLvl = this.state.rebirthSkills["soul_strike"] || 0;
    if (soulStrikeLvl > 0) {
      base = Math.floor(base * (1 + soulStrikeLvl * 0.10));
    }
    if (this.state.activeBuffs.berserk > 0) base *= 3;
    if (this.isMeteorRushActive()) base = Math.floor(base * this.getMeteorMultiplier());
    return Math.max(1, base);
  }

  getCritInfo() {
    let chance = 0.05;
    let multiplier = 2.0;
    if (this.state.skills["crit_chance_1"]) {
      chance += 0.10;
      multiplier = 2.5;
    }
    // 転生パッシブ: 真理の瞳 (+1.5%率, +10%倍率/Lv)
    const eyeLvl = this.state.rebirthSkills["true_eye"] || 0;
    if (eyeLvl > 0) {
      chance += eyeLvl * 0.015;
      multiplier += eyeLvl * 0.10;
    }
    return { chance, multiplier };
  }

  getDPS(withBuffs = true) {
    let totalDPS = 0;
    BUILDINGS_MASTER.forEach(b => {
      const count = this.state.buildings[b.id] || 0;
      if (count > 0) {
        let bDPS = b.baseDPS * count;
        if (b.id === "trap" && this.state.skills["trap_mastery"]) bDPS *= 3;
        if (this.state.skills["building_synergy"]) bDPS *= 2;
        totalDPS += bDPS;
      }
    });

    // 転生パッシブ: 古代の建築術 (+8%/Lv)
    const craftLvl = this.state.rebirthSkills["ancient_craft"] || 0;
    if (craftLvl > 0) {
      totalDPS = Math.floor(totalDPS * (1 + craftLvl * 0.08));
    }

    if (withBuffs) {
      if (this.state.activeBuffs.berserk > 0) {
        totalDPS *= 3;
      }
      if (this.isMeteorRushActive()) {
        totalDPS = Math.floor(totalDPS * this.getMeteorMultiplier());
      }
    }
    return totalDPS;
  }

  getBuildingCost(b, countToAdd = 1) {
    const currentCount = this.state.buildings[b.id] || 0;
    const r = 1.15;
    if (countToAdd === 1) {
      return Math.floor(b.baseCost * Math.pow(r, currentCount));
    }
    const totalCost = b.baseCost * (Math.pow(r, currentCount) * (Math.pow(r, countToAdd) - 1)) / (r - 1);
    return Math.floor(totalCost);
  }

  // --- レベル帯に応じたモンスター生成 ---
  spawnEnemy() {
    const level = this.state.currentLevel;
    const isBoss = this.isBossLevel(level);

    // レベルに応じたモンスターカテゴリ（種族）を検索
    let category = MONSTER_CATEGORIES.find(c => level >= c.minLevel && level <= c.maxLevel);
    if (!category) category = MONSTER_CATEGORIES[MONSTER_CATEGORIES.length - 1];

    const typeIdx = (level - 1) % category.types.length;
    const type = category.types[typeIdx];

    const isMetal = !isBoss && Math.random() < 0.05;

    let baseHp = Math.floor(25 + (level - 1) * 22 + Math.pow(level, 1.55) * 8);
    let baseGold = Math.max(3, Math.floor(4 + (level - 1) * 2.5 + Math.pow(level, 1.25) * 1.2));

    if (isMetal) {
      this.enemy = {
        name: `✨ メタル${type.name} (Lv.${level})`,
        level: level,
        hp: Math.max(15, Math.floor(baseHp * 0.35)),
        maxHp: Math.max(15, Math.floor(baseHp * 0.35)),
        gold: baseGold * 12,
        isBoss: false,
        isMetal: true,
        raceName: category.raceName,
        color1: "#e2e8f0",
        color2: "#94a3b8",
        color3: "#475569",
        eyeType: type.eyeType
      };
    } else if (isBoss) {
      const bossHp = Math.floor(baseHp * 3.8);
      const bossGold = Math.floor(baseGold * 5.0);
      this.state.bossTimer = this.getBossTimerDuration();

      this.enemy = {
        name: `👑 ${category.bossPrefix}${type.name} (Lv.${level})`,
        level: level,
        hp: bossHp,
        maxHp: bossHp,
        gold: bossGold,
        isBoss: true,
        isMetal: false,
        raceName: category.raceName,
        color1: type.color1,
        color2: type.color2,
        color3: type.color3,
        eyeType: type.eyeType
      };
    } else {
      this.enemy = {
        name: `${type.name} (Lv.${level})`,
        level: level,
        hp: baseHp,
        maxHp: baseHp,
        gold: baseGold,
        isBoss: false,
        isMetal: false,
        raceName: category.raceName,
        color1: type.color1,
        color2: type.color2,
        color3: type.color3,
        eyeType: type.eyeType
      };
    }

    this.updateSlimeAppearance();
    this.renderEnemyUI();
  }

  // --- モンスターの外見・SVG動的描画（全端末・WebKit/Safari互換 100%確実描画 ＆ 50Lvごとの装備・衣装進化！） ---
  updateSlimeAppearance() {
    const wrapper = document.getElementById("slime-target");
    if (!wrapper || !this.enemy) return;

    const color1 = this.enemy.color1 || "#86efac";
    const color2 = this.enemy.color2 || "#22c55e";
    const color3 = this.enemy.color3 || "#15803d";
    const race = this.enemy.raceName || "";
    const et = this.enemy.eyeType || "";
    const name = this.enemy.name || "";
    const isBoss = this.enemy.isBoss;
    const isMetal = this.enemy.isMetal;
    const level = this.enemy.level || 1;

    // 50レベルごとの前後半判定（false: 前半50Lv / true: 後半50Lv の上位装備・進化形態！）
    const tier50 = Math.floor((level - 1) / 50) % 2 === 1;

    let bodySvg = "";

    if (race.includes("スケルトン") || race.includes("ガイコツ") || race.includes("ボーン") || et === "skull" || name.includes("スケルトン") || name.includes("ボーン") || name.includes("ガイコツ")) {
      // 💀 スケルトン族（前半: スケルトン歩兵 / 後半50Lv: 重装スカルナイト・大剣・鉄盾・マント！）
      const capeSvg = tier50 ? `
        <!-- なびく真紅のナイトマント（後半50Lv専用） -->
        <path d="M48,95 Q15,145 10,195 Q50,185 70,195 Q60,145 55,100 Z" fill="#991b1b" stroke="#450a0a" stroke-width="2" />
        <path d="M152,95 Q185,145 190,195 Q150,185 130,195 Q140,145 145,100 Z" fill="#991b1b" stroke="#450a0a" stroke-width="2" />
      ` : "";

      const helmSvg = tier50 ? `
        <!-- 角付き鉄の騎士ヘルム（後半50Lv専用） -->
        <path d="M42,40 Q100,10 158,40 L160,65 Q100,48 40,65 Z" fill="#475569" stroke="#0f172a" stroke-width="2.5" />
        <polygon points="45,40 25,12 50,28" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5" />
        <polygon points="155,40 175,12 150,28" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5" />
        <line x1="60" y1="54" x2="140" y2="54" stroke="#0f172a" stroke-width="3" />
      ` : "";

      const shieldSvg = tier50 ? `
        <!-- 鉄製スパイクシールド（後半50Lv専用） -->
        <polygon points="8,125 42,118 46,168 25,186 6,162" fill="#334155" stroke="#0f172a" stroke-width="3" />
        <circle cx="25" cy="150" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="2" />
        <polygon points="25,140 21,128 29,128" fill="#f8fafc" />
      ` : `
        <!-- 古びた木の盾（前半50Lv） -->
        <polygon points="12,130 38,122 42,165 24,180 8,160" fill="#78350f" stroke="#451a03" stroke-width="2.5" />
        <polygon points="18,138 34,132 36,160 24,170 14,158" fill="#9a3412" />
        <line x1="25" y1="130" x2="25" y2="172" stroke="#451a03" stroke-width="2" />
      `;

      const swordSvg = tier50 ? `
        <!-- 銀色の大剣 クレイモア（後半50Lv専用） -->
        <polygon points="168,145 198,75 180,150" fill="#f8fafc" stroke="#334155" stroke-width="2.5" filter="drop-shadow(0 0 8px #38bdf8)" />
        <line x1="162" y1="148" x2="182" y2="148" stroke="#fbbf24" stroke-width="5" stroke-linecap="round" />
        <circle cx="188" cy="110" r="3.5" fill="#38bdf8" />
        <line x1="172" y1="148" x2="172" y2="166" stroke="#451a03" stroke-width="4" stroke-linecap="round" />
      ` : `
        <!-- 錆びたショートソード（前半50Lv） -->
        <polygon points="168,145 192,105 178,148" fill="#94a3b8" stroke="#334155" stroke-width="2" />
        <line x1="162" y1="148" x2="178" y2="148" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
        <line x1="170" y1="148" x2="170" y2="162" stroke="#451a03" stroke-width="3" stroke-linecap="round" />
      `;

      bodySvg = `
        <!-- 背後の交差する大腿骨（クロスボーン 🦴） -->
        <g stroke="#e2e8f0" stroke-width="12" stroke-linecap="round" fill="none">
          <line x1="20" y1="20" x2="180" y2="180" />
          <line x1="180" y1="20" x2="20" y2="180" />
        </g>
        <circle cx="16" cy="16" r="8" fill="#f8fafc" /><circle cx="26" cy="26" r="8" fill="#f8fafc" />
        <circle cx="184" cy="16" r="8" fill="#f8fafc" /><circle cx="174" cy="26" r="8" fill="#f8fafc" />
        <circle cx="16" cy="184" r="8" fill="#f8fafc" /><circle cx="26" cy="174" r="8" fill="#f8fafc" />
        <circle cx="184" cy="184" r="8" fill="#f8fafc" /><circle cx="174" cy="174" r="8" fill="#f8fafc" />

        ${capeSvg}

        <!-- 💀 胴体セクション（首・鎖骨・肋骨・脊椎・骨盤） -->
        <g id="skeleton-torso">
          <rect x="94" y="85" width="12" height="15" rx="3" fill="#cbd5e1" stroke="#1e293b" stroke-width="2" />
          <path d="M50,102 Q100,110 150,102" stroke="#f8fafc" stroke-width="6" stroke-linecap="round" fill="none" />
          <rect x="95" y="100" width="10" height="85" rx="3" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
          
          <path d="M56,115 Q100,126 144,115" stroke="#f8fafc" stroke-width="5.5" fill="none" stroke-linecap="round" />
          <path d="M60,132 Q100,143 140,132" stroke="#f8fafc" stroke-width="5.5" fill="none" stroke-linecap="round" />
          <path d="M66,149 Q100,158 134,149" stroke="#f8fafc" stroke-width="5" fill="none" stroke-linecap="round" />
          <path d="M72,165 Q100,172 128,165" stroke="#f8fafc" stroke-width="4.5" fill="none" stroke-linecap="round" />
          
          <path d="M65,182 Q100,196 135,182 L128,198 L72,198 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5" />
          
          <!-- 左腕 ＆ 盾 -->
          <path d="M50,104 L26,142 L32,165" stroke="#cbd5e1" stroke-width="6" fill="none" stroke-linecap="round" />
          ${shieldSvg}
          
          <!-- 右腕 ＆ 剣 -->
          <path d="M150,104 L174,138 L170,158" stroke="#cbd5e1" stroke-width="6" fill="none" stroke-linecap="round" />
          ${swordSvg}
        </g>

        <!-- 💀 頭部セクション -->
        <g id="skeleton-head">
          <path d="M100,12 C142,12 158,35 155,65 C152,85 135,92 130,104 L130,118 L70,118 L70,104 C65,92 48,85 45,65 C42,35 58,12 100,12 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#334155" stroke-width="3.5" />
          
          <path d="M100,16 L94,34 L104,46 L96,62" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
          
          <ellipse cx="72" cy="62" rx="16" ry="17" fill="#0f172a" stroke="#1e293b" stroke-width="2.5" />
          <circle cx="72" cy="62" r="6" fill="#ef4444" filter="drop-shadow(0 0 8px #ef4444)" />
          <circle cx="74" cy="60" r="2" fill="#ffffff" />
          
          <ellipse cx="128" cy="62" rx="16" ry="17" fill="#0f172a" stroke="#1e293b" stroke-width="2.5" />
          <circle cx="128" cy="62" r="6" fill="#ef4444" filter="drop-shadow(0 0 8px #ef4444)" />
          <circle cx="130" cy="60" r="2" fill="#ffffff" />
          
          <polygon points="100,75 92,90 108,90" fill="#0f172a" />
          
          <rect x="76" y="98" width="48" height="20" rx="3" fill="#0f172a" stroke="#1e293b" stroke-width="2" />
          <path d="M82,98 L82,118 M91,98 L91,118 M100,98 L100,118 M109,98 L109,118 M118,98 L118,118 M76,108 L124,108" 
                stroke="#f8fafc" stroke-width="2.5" stroke-linecap="square" />
          
          ${helmSvg}
        </g>
      `;
    } else if (race.includes("ゴブリン") || race.includes("グブリン") || race.includes("魔獣") || race.includes("オーク") || race.includes("トロール") || et === "goblin" || name.includes("ゴブリン") || name.includes("オーク") || name.includes("トロール")) {
      // 👺 ゴブリン族（前半50Lv: グリーンゴブリン短剣 / 後半50Lv: レッドゴブリン狂戦士 二刀流戦斧＆毛皮＆紫マント！）
      const capeSvg = tier50 ? `
        <!-- 紫の狂戦士マント（後半50Lv専用） -->
        <path d="M38,100 Q10,150 15,195 Q50,185 65,190" fill="#581c87" stroke="#3b0764" stroke-width="2" />
        <path d="M162,100 Q190,150 185,195 Q150,185 135,190" fill="#581c87" stroke="#3b0764" stroke-width="2" />
      ` : "";

      const furArmors = tier50 ? `
        <!-- 獣毛ファージャケット（後半50Lv専用） -->
        <ellipse cx="48" cy="98" rx="16" ry="12" fill="#d97706" stroke="#78350f" stroke-width="2" />
        <ellipse cx="152" cy="98" rx="16" ry="12" fill="#d97706" stroke="#78350f" stroke-width="2" />
      ` : "";

      const headGear = tier50 ? `
        <!-- 角付き鉄のサークレット（後半50Lv専用） -->
        <path d="M46,44 Q100,56 154,44 L152,32 Q100,44 48,32 Z" fill="#334155" stroke="#0f172a" stroke-width="2" />
        <polygon points="68,40 58,16 76,34" fill="#f8fafc" stroke="#0f172a" stroke-width="1.5" />
        <polygon points="132,40 142,16 124,34" fill="#f8fafc" stroke="#0f172a" stroke-width="1.5" />
        <circle cx="100" cy="45" r="4.5" fill="#dc2626" />
      ` : `
        <!-- 額の赤バンダナ（前半50Lv） -->
        <path d="M48,46 Q100,60 152,46 L152,34 Q100,48 48,34 Z" fill="#b91c1c" stroke="#450a0a" stroke-width="2" />
      `;

      const weaponsSvg = tier50 ? `
        <!-- 左手 トマホーク戦斧（二刀流 🪓） -->
        <polygon points="10,120 0,105 16,100 22,115" fill="#cbd5e1" stroke="#0f172a" stroke-width="2" />
        <line x1="6" y1="135" x2="20" y2="100" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
        
        <!-- 右手 トマホーク戦斧（二刀流 🪓） -->
        <polygon points="190,120 200,105 184,100 178,115" fill="#cbd5e1" stroke="#0f172a" stroke-width="2" />
        <line x1="194" y1="135" x2="180" y2="100" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
      ` : `
        <!-- 右手 ゴブリンダガー（短剣 🗡️） -->
        <polygon points="176,148 198,95 186,155" fill="#e2e8f0" stroke="#334155" stroke-width="2.5" />
        <line x1="172" y1="150" x2="190" y2="150" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" />
        <line x1="180" y1="150" x2="180" y2="168" stroke="#78350f" stroke-width="3.5" stroke-linecap="round" />
      `;

      bodySvg = `
        ${capeSvg}

        <!-- 👺 胴体セクション -->
        <g id="goblin-torso">
          <rect x="85" y="80" width="30" height="25" fill="${color2}" stroke="${color3}" stroke-width="2.5" />
          <path d="M30,118 C30,96 68,96 100,96 C132,96 170,96 170,118 L165,190 L35,190 Z" 
                fill="${color2}" stroke="${color3}" stroke-width="3.5" />
          
          <path d="M45,98 L76,98 L72,172 L36,172 Z" fill="#78350f" stroke="#451a03" stroke-width="2" />
          <path d="M155,98 L124,98 L128,172 L164,172 Z" fill="#78350f" stroke="#451a03" stroke-width="2" />
          
          <path d="M72,112 L128,122 M128,112 L72,122 M70,135 L130,145 M130,135 L70,145 M70,158 L130,165" 
                stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
          
          <rect x="34" y="170" width="132" height="20" fill="#451a03" stroke="#0f172a" stroke-width="2.5" />
          <rect x="86" y="165" width="28" height="30" rx="5" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" />
          <rect x="93" y="172" width="14" height="16" rx="2" fill="#451a03" />
          
          ${furArmors}

          <path d="M35,115 L14,148 L18,175" stroke="${color2}" stroke-width="12" stroke-linecap="round" fill="none" />
          <rect x="8" y="148" width="16" height="12" rx="3" fill="#451a03" stroke="#000" stroke-width="1.5" />
          
          <path d="M165,115 L186,148 L180,168" stroke="${color2}" stroke-width="12" stroke-linecap="round" fill="none" />
          <rect x="176" y="148" width="16" height="12" rx="3" fill="#451a03" stroke="#000" stroke-width="1.5" />

          ${weaponsSvg}
        </g>

        <!-- 👺 頭部セクション -->
        <g id="goblin-head">
          <polygon points="42,75 0,30 32,95" fill="${color2}" stroke="${color3}" stroke-width="3" />
          <polygon points="38,72 8,38 32,90" fill="#fca5a5" opacity="0.8" />
          <polygon points="158,75 200,30 168,95" fill="${color2}" stroke="${color3}" stroke-width="3" />
          <polygon points="162,72 192,38 168,90" fill="#fca5a5" opacity="0.8" />
          
          <circle cx="12" cy="48" r="4.5" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />
          
          <path d="M100,20 C138,20 156,48 152,78 C148,108 126,128 100,138 C74,128 52,108 48,78 C44,48 62,20 100,20 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="${color3}" stroke-width="3.5" />
          
          <polygon points="92,22 100,-4 108,22" fill="#0f172a" />
          <polygon points="76,26 84,2 96,26" fill="#0f172a" />
          <polygon points="104,26 116,2 124,26" fill="#0f172a" />
          
          ${headGear}

          <polygon points="60,68 86,78 66,85" fill="#fef08a" stroke="#0f172a" stroke-width="2" />
          <circle cx="74" cy="76" r="4" fill="#7f1d1d" />
          <circle cx="76" cy="74" r="1.5" fill="#ffffff" />
          
          <polygon points="140,68 114,78 134,85" fill="#fef08a" stroke="#0f172a" stroke-width="2" />
          <circle cx="126" cy="76" r="4" fill="#7f1d1d" />
          <circle cx="124" cy="74" r="1.5" fill="#ffffff" />
          
          <polygon points="100,62 88,96 112,96" fill="${color3}" stroke="#0f172a" stroke-width="2" />
          <circle cx="94" cy="92" r="2.5" fill="#0f172a" />
          <circle cx="106" cy="92" r="2.5" fill="#0f172a" />
          
          <path d="M68,110 Q100,130 132,110" stroke="#0f172a" stroke-width="4" fill="none" stroke-linecap="round" />
          <polygon points="76,122 82,96 90,122" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
          <polygon points="110,122 118,96 124,122" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
        </g>
      `;
    } else if (race.includes("ゴーレム") || race.includes("巨神") || et === "golem" || name.includes("ゴーレム") || name.includes("巨神")) {
      // 🗿 ゴーレム族（前半50Lv: 遺跡の巨像 / 後半50Lv: 古代魔導機神コロッサス 黄金装甲・灼熱メガコア・浮遊ビット！）
      const bitWeapons = tier50 ? `
        <!-- 浮遊する3つの古代ビット兵器（後半50Lv専用） -->
        <polygon points="25,45 35,35 30,55 20,50" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" stroke="#0284c7" stroke-width="1.5" />
        <polygon points="175,45 185,35 180,55 170,50" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" stroke="#0284c7" stroke-width="1.5" />
        <polygon points="100,-2 108,-12 100,-17 92,-12" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" stroke="#0284c7" stroke-width="1.5" />
      ` : "";

      const coreSvg = tier50 ? `
        <!-- 灼熱の超古代メガコア（後半50Lv専用 🔥） -->
        <polygon points="100,114 125,138 100,162 75,138" fill="#ef4444" filter="drop-shadow(0 0 20px #ef4444)" stroke="#991b1b" stroke-width="3" />
        <circle cx="100" cy="138" r="9" fill="#fbbf24" filter="drop-shadow(0 0 10px #fbbf24)" />
        <circle cx="100" cy="138" r="4" fill="#ffffff" />
      ` : `
        <!-- 古代魔法動力コア（前半50Lv 💎） -->
        <polygon points="100,118 120,138 100,158 80,138" fill="#38bdf8" filter="drop-shadow(0 0 16px #38bdf8)" stroke="#0284c7" stroke-width="2.5" />
        <polygon points="100,126 110,138 100,150 90,138" fill="#ffffff" />
      `;

      const goldenArmors = tier50 ? `
        <!-- 黄金ルーン装甲プレート（後半50Lv専用） -->
        <polygon points="100,8 126,22 100,32 74,22" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <polygon points="5,70 30,45 42,95 15,110" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" />
        <polygon points="195,70 170,45 158,95 185,110" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" />
      ` : "";

      bodySvg = `
        ${bitWeapons}

        <!-- 🗿 胴体セクション -->
        <g id="golem-torso">
          <polygon points="0,75 35,45 48,110 15,130" fill="${color3}" stroke="#0f172a" stroke-width="4" />
          <polygon points="200,75 165,45 152,110 185,130" fill="${color3}" stroke="#0f172a" stroke-width="4" />
          
          <polygon points="12,125 38,118 45,185 18,190" fill="${color3}" stroke="#0f172a" stroke-width="3.5" />
          <polygon points="188,125 162,118 155,185 182,190" fill="${color3}" stroke="#0f172a" stroke-width="3.5" />
          
          <polygon points="45,95 155,95 165,195 35,195" 
                   fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#0f172a" stroke-width="5" />
          
          <path d="M45,95 L85,135 L65,175 M155,95 L115,135 L135,175 M85,135 L115,135" 
                stroke="#0f172a" stroke-width="4" fill="none" />
          
          ${coreSvg}
          ${goldenArmors}
        </g>

        <!-- 🗿 頭部セクション -->
        <g id="golem-head">
          <polygon points="100,12 155,30 162,88 138,108 62,108 38,88 45,30" 
                   fill="url(#monster-grad)" stroke="#0f172a" stroke-width="4.5" />
          
          <rect x="52" y="48" width="96" height="24" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2.5" />
          <circle cx="100" cy="60" r="10" fill="#38bdf8" filter="drop-shadow(0 0 14px #38bdf8)" />
          <circle cx="100" cy="60" r="4" fill="#ffffff" />
          
          <path d="M72,92 L128,92" stroke="#0f172a" stroke-width="7" stroke-linecap="square" />
        </g>
      `;
    } else if (race.includes("デーモン") || race.includes("魔王") || et === "demon" || name.includes("デーモン") || name.includes("魔王") || name.includes("インプ") || name.includes("リーパー")) {
      // 👿 デーモン族（前半50Lv: 尖兵デーモン / 後半50Lv: 大魔王・ヘルロード 4本角・漆黒魔王マント・魔剣ダークセイバー！）
      const extraHorns = tier50 ? `
        <!-- 追加の第2魔王角（後半50Lv専用） -->
        <path d="M50,45 C15,-25 -5,-15 -10,-35 C5,0 25,20 40,55 Z" fill="#991b1b" stroke="#000" stroke-width="3" />
        <path d="M150,45 C185,-25 205,-15 210,-35 C195,0 175,20 160,55 Z" fill="#991b1b" stroke="#000" stroke-width="3" />
      ` : "";

      const darkSaber = tier50 ? `
        <!-- 魔剣ダークセイバー（後半50Lv専用 ⚡🗡️） -->
        <polygon points="175,135 204,65 186,145" fill="#a855f7" filter="drop-shadow(0 0 14px #c084fc)" stroke="#ffffff" stroke-width="2" />
        <circle cx="190" cy="100" r="4" fill="#f43f5e" />
      ` : "";

      bodySvg = `
        <!-- 背後の巨大コウモリ翼 -->
        <path d="M35,85 Q-30,25 0,155 Q30,125 40,85 Z" fill="#1e1b4b" stroke="#000000" stroke-width="3" />
        <path d="M165,85 Q230,25 200,155 Q170,125 160,85 Z" fill="#1e1b4b" stroke="#000000" stroke-width="3" />

        <!-- 👿 胴体セクション -->
        <g id="demon-torso">
          <path d="M45,95 C45,80 75,80 100,80 C125,80 155,80 155,95 L145,190 L55,190 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#450a0a" stroke-width="4" />
          
          <path d="M100,90 L100,175 M62,120 Q100,130 138,120 M68,142 Q100,150 132,142 M74,162 Q100,168 126,162" 
                stroke="#450a0a" stroke-width="3" fill="none" />
          
          <polygon points="38,90 18,65 48,80" fill="#0f172a" stroke="#000" stroke-width="2" />
          <polygon points="162,90 182,65 152,80" fill="#0f172a" stroke="#000" stroke-width="2" />
          
          <path d="M45,100 L22,135 L26,165" stroke="#7f1d1d" stroke-width="10" stroke-linecap="round" fill="none" />
          <polygon points="20,165 24,180 28,165" fill="#ffffff" />
          <path d="M155,100 L178,135 L174,165" stroke="#7f1d1d" stroke-width="10" stroke-linecap="round" fill="none" />
          <polygon points="168,165 174,180 180,165" fill="#ffffff" />

          ${darkSaber}
        </g>

        <!-- 👿 頭部セクション -->
        <g id="demon-head">
          <path d="M68,42 C30,-15 10,-5 0,-20 C15,15 35,32 52,60 Z" fill="#450a0a" stroke="#000000" stroke-width="3" />
          <path d="M132,42 C170,-15 190,-5 200,-20 C185,15 165,32 148,60 Z" fill="#450a0a" stroke="#000000" stroke-width="3" />
          
          ${extraHorns}

          <path d="M100,22 C138,22 155,50 150,82 C145,110 128,125 100,128 C72,125 55,110 50,82 C45,50 62,22 100,22 Z" 
                fill="url(#monster-grad)" stroke="#450a0a" stroke-width="3.5" />
          
          <circle cx="100" cy="45" r="7.5" fill="#dc2626" filter="drop-shadow(0 0 10px #dc2626)" />
          
          <polygon points="56,66 84,78 60,84" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <circle cx="72" cy="76" r="4" fill="#7f1d1d" />
          <polygon points="144,66 116,78 140,84" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <circle cx="128" cy="76" r="4" fill="#7f1d1d" />
          
          <path d="M72,100 Q100,120 128,100" stroke="#0f172a" stroke-width="4" fill="#450a0a" />
          <polygon points="80,100 85,110 90,100" fill="#ffffff" />
          <polygon points="110,100 115,110 120,100" fill="#ffffff" />
        </g>
      `;
    } else if (race.includes("ドラゴン") || race.includes("飛竜") || race.includes("竜") || et === "dragon" || name.includes("ドラゴン") || name.includes("ワイバーン") || name.includes("竜")) {
      // 🐉 ドラゴン族（前半50Lv: ワイバーン / 後半50Lv: 太古の炎龍帝 6本黄金神角・ブレス発光・火の粉エフェクト！）
      const extraDragonHorns = tier50 ? `
        <!-- 黄金に輝く6本神角（後半50Lv専用） -->
        <polygon points="50,40 20,-8 40,40" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <polygon points="150,40 180,-8 160,40" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
      ` : "";

      const breathGlow = tier50 ? `
        <!-- 喉元のブレス発光帯 ＆ 舞い散る火の粉（後半50Lv専用 🔥） -->
        <path d="M90,75 L100,105 L110,75 Z" fill="#fbbf24" filter="drop-shadow(0 0 14px #f59e0b)" />
        <circle cx="35" cy="55" r="3" fill="#ef4444" filter="drop-shadow(0 0 6px #ef4444)" />
        <circle cx="165" cy="55" r="3" fill="#ef4444" filter="drop-shadow(0 0 6px #ef4444)" />
        <circle cx="100" cy="2" r="4" fill="#fbbf24" filter="drop-shadow(0 0 8px #fbbf24)" />
      ` : "";

      bodySvg = `
        <polygon points="30,85 0,35 15,140" fill="#78350f" stroke="#451a03" stroke-width="2.5" />
        <polygon points="170,85 200,35 185,140" fill="#78350f" stroke="#451a03" stroke-width="2.5" />

        <!-- 🐉 胴体セクション -->
        <g id="dragon-torso">
          <path d="M45,95 C45,75 155,75 155,95 L145,190 L55,190 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#451a03" stroke-width="4" />
          
          <path d="M68,100 Q100,110 132,100 L126,188 Q100,195 74,188 Z" fill="#fef08a" stroke="#d97706" stroke-width="2.5" />
          <line x1="70" y1="120" x2="130" y2="120" stroke="#d97706" stroke-width="2" />
          <line x1="72" y1="140" x2="128" y2="140" stroke="#d97706" stroke-width="2" />
          <line x1="74" y1="160" x2="126" y2="160" stroke="#d97706" stroke-width="2" />
          <line x1="75" y1="178" x2="125" y2="178" stroke="#d97706" stroke-width="2" />
          
          <path d="M45,105 L20,140 L26,165" stroke="${color2}" stroke-width="10" stroke-linecap="round" fill="none" />
          <polygon points="18,165 24,180 30,165" fill="#fef08a" stroke="#d97706" stroke-width="1.5" />
          <path d="M155,105 L180,140 L174,165" stroke="${color2}" stroke-width="10" stroke-linecap="round" fill="none" />
          <polygon points="170,165 176,180 182,165" fill="#fef08a" stroke="#d97706" stroke-width="1.5" />
        </g>

        <!-- 🐉 頭部セクション -->
        <g id="dragon-head">
          <polygon points="70,45 35,2 55,45" fill="#78350f" stroke="#451a03" stroke-width="2.5" />
          <polygon points="130,45 165,2 145,45" fill="#78350f" stroke="#451a03" stroke-width="2.5" />
          <polygon points="80,40 60,12 72,40" fill="#9a3412" />
          <polygon points="120,40 140,12 128,40" fill="#9a3412" />
          
          ${extraDragonHorns}

          <path d="M100,18 C145,18 165,48 160,85 C155,115 132,125 100,125 C68,125 45,115 40,85 C35,48 55,18 100,18 Z" 
                fill="url(#monster-grad)" stroke="#451a03" stroke-width="3.5" />
          
          <ellipse cx="70" cy="65" rx="14" ry="11" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <rect x="68" cy="56" width="3.5" height="18" rx="1.5" fill="#0f172a" />
          <ellipse cx="130" cy="65" rx="14" ry="11" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <rect x="128" cy="56" width="3.5" height="18" rx="1.5" fill="#0f172a" />
          
          <circle cx="88" cy="95" r="3.5" fill="#0f172a" />
          <circle cx="112" cy="95" r="3.5" fill="#0f172a" />
          
          <path d="M65,108 Q100,128 135,108" stroke="#0f172a" stroke-width="4" fill="none" />
          <polygon points="76,108 81,118 86,108" fill="#ffffff" />
          <polygon points="96,109 100,120 104,109" fill="#ffffff" />
          <polygon points="114,108 119,118 124,108" fill="#ffffff" />

          ${breathGlow}
        </g>
      `;
    } else if (race.includes("宇宙") || race.includes("星辰") || race.includes("邪神") || race.includes("コズミック") || et === "cosmic" || name.includes("コズミック") || name.includes("アザトース") || name.includes("星")) {
      // 🌌 星辰の邪神（前半50Lv: コズミック / 後半50Lv: アザトース 12本触手・超邪眼・ブラックホール魔方陣！）
      const cosmicCircle = tier50 ? `
        <!-- コズミックブラックホール魔方陣（後半50Lv専用） -->
        <circle cx="100" cy="100" r="92" fill="none" stroke="#a855f7" stroke-width="3" stroke-dasharray="4,8" opacity="0.85" />
      ` : "";

      const eyeSvg = tier50 ? `
        <!-- 真紅の超邪眼（後半50Lv専用） -->
        <ellipse cx="100" cy="65" rx="30" ry="22" fill="#ef4444" filter="drop-shadow(0 0 16px #ef4444)" stroke="#0f172a" stroke-width="3" />
        <circle cx="100" cy="65" r="11" fill="#450a0a" /><circle cx="100" cy="65" r="4" fill="#ffffff" />
      ` : `
        <!-- 開眼した第三の目（前半50Lv） -->
        <ellipse cx="100" cy="65" rx="26" ry="18" fill="#f472b6" stroke="#0f172a" stroke-width="3" />
        <circle cx="100" cy="65" r="10" fill="#3b0764" /><circle cx="100" cy="65" r="3.5" fill="#ffffff" />
      `;

      bodySvg = `
        ${cosmicCircle}

        <!-- 蠢く太い触手群 -->
        <path d="M25,115 Q-15,145 0,185" stroke="#7e22ce" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M175,115 Q215,145 200,185" stroke="#7e22ce" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M40,135 Q15,175 35,195" stroke="#a855f7" stroke-width="11" stroke-linecap="round" fill="none" />
        <path d="M160,135 Q185,175 165,195" stroke="#a855f7" stroke-width="11" stroke-linecap="round" fill="none" />
        <path d="M60,155 Q40,195 60,200" stroke="#c084fc" stroke-width="9" stroke-linecap="round" fill="none" />
        <path d="M140,155 Q160,195 140,200" stroke="#c084fc" stroke-width="9" stroke-linecap="round" fill="none" />

        <!-- コズミック胴体 -->
        <circle cx="100" cy="100" r="68" fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#c084fc" stroke-width="4.5" />
        
        ${eyeSvg}
        
        <!-- 怪異な瞳群 -->
        <ellipse cx="62" cy="105" rx="12" ry="12" fill="#fef08a" />
        <circle cx="62" cy="105" r="4.5" fill="#7f1d1d" />
        <ellipse cx="138" cy="105" rx="12" ry="12" fill="#fef08a" />
        <circle cx="138" cy="105" r="4.5" fill="#7f1d1d" />
        <circle cx="80" cy="135" r="8" fill="#fef08a" /><circle cx="80" cy="135" r="3" fill="#7f1d1d" />
        <circle cx="120" cy="135" r="8" fill="#fef08a" /><circle cx="120" cy="135" r="3" fill="#7f1d1d" />
      `;
    } else if (race.includes("超越") || race.includes("アルティメット") || race.includes("神") || name.includes("至高神") || name.includes("覇帝") || name.includes("創世龍")) {
      // 👑 超越神（前半50Lv: 八芒星・神衣 / 後半50Lv: アルティメット 6枚神翼・創世神杖・黄金オーラ！）
      const wingsAndStaff = tier50 ? `
        <!-- 純白の6枚神翼（後半50Lv専用 🪽） -->
        <path d="M30,65 Q-30,15 10,105" stroke="#f8fafc" stroke-width="8" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 10px #fbbf24)" />
        <path d="M170,65 Q230,15 190,105" stroke="#f8fafc" stroke-width="8" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 10px #fbbf24)" />
        
        <!-- 創世の神杖（セプター 🪄） -->
        <line x1="175" y1="85" x2="175" y2="185" stroke="#fbbf24" stroke-width="4.5" stroke-linecap="round" />
        <polygon points="175,70 186,85 175,94 164,85" fill="#38bdf8" filter="drop-shadow(0 0 12px #38bdf8)" />
      ` : "";

      bodySvg = `
        <!-- 背後の八芒星光輪 -->
        <circle cx="100" cy="100" r="88" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,6" />
        <polygon points="100,8 192,100 100,192 8,100" fill="none" stroke="#fef08a" stroke-width="2.5" opacity="0.8" />
        <polygon points="100,12 188,100 100,188 12,100" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.8" transform="rotate(45 100 100)" />
        
        ${wingsAndStaff}

        <!-- 聖なる白金の神衣（ローブ胴体） -->
        <path d="M45,90 L155,90 L168,195 L32,195 Z" fill="#f8fafc" stroke="#fbbf24" stroke-width="4" />
        <path d="M75,90 L100,140 L125,90" fill="#fbbf24" opacity="0.85" />
        <circle cx="100" cy="155" r="8" fill="#38bdf8" filter="drop-shadow(0 0 10px #38bdf8)" />
        
        <circle cx="22" cy="120" r="9" fill="#38bdf8" filter="drop-shadow(0 0 12px #38bdf8)" />
        <circle cx="178" cy="120" r="9" fill="#38bdf8" filter="drop-shadow(0 0 12px #38bdf8)" />

        <!-- 神性頭部 -->
        <path d="M100,20 C145,20 168,55 162,95 C158,125 135,135 100,135 C65,135 42,125 38,95 C32,55 55,20 100,20 Z" 
              fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#fef08a" stroke-width="4" />
        
        <ellipse cx="68" cy="78" rx="15" ry="10" fill="#ffffff" stroke="#d97706" stroke-width="2" />
        <circle cx="68" cy="78" r="5.5" fill="#38bdf8" />
        <ellipse cx="132" cy="78" rx="15" ry="10" fill="#ffffff" stroke="#d97706" stroke-width="2" />
        <circle cx="132" cy="78" r="5.5" fill="#38bdf8" />
        <circle cx="100" cy="50" r="10" fill="#fef08a" stroke="#d97706" stroke-width="2" filter="drop-shadow(0 0 12px #fbbf24)" />
        <circle cx="100" cy="50" r="4" fill="#7c3aed" />
      `;
    } else {
      // 💧 スライム族（前半50Lv: かわいいスライム / 後半50Lv: ナイト兜 ＆ 初心者リボンタイ 🎀）
      const knightSlimeGear = tier50 ? `
        <!-- ナイトバイザー兜（後半50Lv専用 🛡️） -->
        <path d="M58,48 Q100,26 142,48 L144,66 Q100,50 56,66 Z" fill="#64748b" stroke="#1e293b" stroke-width="2" />
        <line x1="75" y1="56" x2="125" y2="56" stroke="#0f172a" stroke-width="2.5" />
        <!-- 勇敢なリボンタイ（🎀） -->
        <polygon points="100,134 88,148 112,148" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
        <circle cx="100" cy="134" r="3.5" fill="#fbbf24" />
      ` : "";

      bodySvg = `
        <path fill="url(#monster-grad)" filter="url(#slime-glow)"
              d="M100,30 C150,30 185,85 185,135 C185,175 155,185 100,185 C45,185 15,175 15,135 C15,85 50,30 100,30 Z" />
        <path fill="rgba(255, 255, 255, 0.45)" d="M65,55 C80,45 110,45 125,55 C105,50 85,50 65,55 Z" />
        <ellipse cx="60" cy="70" rx="10" ry="16" fill="rgba(255, 255, 255, 0.4)" transform="rotate(-20 60 70)" />
        <ellipse cx="70" cy="115" rx="8" ry="12" fill="#0f172a" />
        <circle cx="68" cy="111" r="4" fill="#ffffff" />
        <ellipse cx="130" cy="115" rx="8" ry="12" fill="#0f172a" />
        <circle cx="128" cy="111" r="4" fill="#ffffff" />
        <ellipse cx="52" cy="130" rx="9" ry="5" fill="#f43f5e" opacity="0.6" />
        <ellipse cx="148" cy="130" rx="9" ry="5" fill="#f43f5e" opacity="0.6" />
        <path d="M92,128 Q100,136 108,128" stroke="#0f172a" stroke-width="3" fill="none" stroke-linecap="round" />
        ${knightSlimeGear}
      `;
    }

    let accessorySvg = "";
    if (isBoss) {
      accessorySvg = `
        <polygon points="70,35 80,5 100,25 120,5 130,35" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <circle cx="80" cy="5" r="3" fill="#ef4444" />
        <circle cx="100" cy="25" r="3" fill="#38bdf8" />
        <circle cx="120" cy="5" r="3" fill="#ef4444" />
      `;
    } else if (isMetal) {
      accessorySvg = `
        <polygon points="100,5 108,22 126,22 111,33 117,50 100,39 83,50 89,33 74,22 92,22" fill="#f8fafc" opacity="0.85" />
      `;
    }

    wrapper.innerHTML = `
      <svg class="slime-svg" id="slime-svg-element" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="monster-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="${color1}" />
            <stop offset="60%" stop-color="${color2}" />
            <stop offset="100%" stop-color="${color3}" />
          </radialGradient>
          <filter id="slime-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g id="monster-content">
          ${bodySvg}
        </g>
        <g id="slime-accessory">
          ${accessorySvg}
        </g>
      </svg>
    `;
  }

  // --- ダイナミック背景環境の更新（50レベルごとに切り替え！） ---
  updateArenaEnvironment() {
    const stageIdx = this.getStageIndex();
    const stage = STAGES[stageIdx];
    const arena = document.getElementById("slime-arena");
    if (arena) {
      arena.className = `slime-arena ${stage.envClass}`;
    }

    const envContainer = document.getElementById("arena-environment");
    if (envContainer && stage.renderEnv) {
      envContainer.innerHTML = stage.renderEnv();
    }
  }

  // --- フィールド建物のレンダリング ---
  renderFieldBuildings() {
    const layer = document.getElementById("field-buildings-layer");
    if (!layer) return;

    let html = "";
    const b = this.state.buildings;

    if (b["trap"] && b["trap"] > 0) {
      html += `<div class="field-unit unit-trap" id="unit-trap"><span class="field-unit-icon">🪤</span><span class="field-unit-count">${b["trap"]}</span></div>`;
      if (b["trap"] >= 10) {
        html += `<div class="field-unit unit-trap-2"><span class="field-unit-icon">🪤</span></div>`;
      }
    }

    if (b["novice"] && b["novice"] > 0) {
      html += `<div class="field-unit unit-novice" id="unit-novice"><span class="field-unit-icon">🗡️</span><span class="field-unit-count">${b["novice"]}</span></div>`;
    }

    if (b["archer"] && b["archer"] > 0) {
      html += `<div class="field-unit unit-archer" id="unit-archer"><span class="field-unit-icon">🏹</span><span class="field-unit-count">${b["archer"]}</span></div>`;
    }

    if (b["mage_tower"] && b["mage_tower"] > 0) {
      html += `<div class="field-unit unit-mage_tower" id="unit-mage_tower"><span class="field-unit-icon">🔮</span><span class="field-unit-count">${b["mage_tower"]}</span></div>`;
    }

    if (b["ranch"] && b["ranch"] > 0) {
      html += `<div class="field-unit unit-ranch" id="unit-ranch"><span class="field-unit-icon">🏡</span><span class="field-unit-count">${b["ranch"]}</span></div>`;
    }

    if (b["cannon"] && b["cannon"] > 0) {
      html += `<div class="field-unit unit-cannon" id="unit-cannon"><span class="field-unit-icon">💥</span><span class="field-unit-count">${b["cannon"]}</span></div>`;
    }

    if (b["guild"] && b["guild"] > 0) {
      html += `<div class="field-unit unit-guild" id="unit-guild"><span class="field-unit-icon">🏰</span><span class="field-unit-count">${b["guild"]}</span></div>`;
    }

    if (b["dragon"] && b["dragon"] > 0) {
      html += `<div class="field-unit unit-dragon" id="unit-dragon"><span class="field-unit-icon">🐉</span><span class="field-unit-count">${b["dragon"]}</span></div>`;
    }

    // オートタップ妖精
    if (this.state.rebirthSkills["auto_fairy"] >= 1) {
      html += `<div class="field-unit unit-fairy" id="unit-fairy"><span class="field-unit-icon">🧚</span></div>`;
    }

    layer.innerHTML = html;
  }

  // --- 仲間たちの自動攻撃アクション（加勢攻撃でも多めにコイン獲得！） ---
  triggerAutoAttackVisuals(totalDmg) {
    if (totalDmg <= 0) return;

    const slimeTarget = document.getElementById("slime-target");
    if (!slimeTarget) return;
    const slimeRect = slimeTarget.getBoundingClientRect();
    const headX = slimeRect.left + slimeRect.width / 2;
    const headY = slimeRect.top + 15;

    this.sound.playAutoHit();
    slimeTarget.classList.remove("hit");
    void slimeTarget.offsetWidth;
    slimeTarget.classList.add("hit");

    this.createDamagePopup(Math.ceil(totalDmg), false, true, headX, headY);

    let autoGold = Math.max(2, Math.floor(totalDmg * 0.8 + this.enemy.level * 1.2));
    const merchantLvl = this.state.rebirthSkills["merchant_wit"] || 0;
    if (merchantLvl > 0) {
      autoGold = Math.floor(autoGold * (1 + merchantLvl * 0.10));
    }
    this.addGold(autoGold);
    this.createDamagePopup(`🪙 +${this.formatNumber(autoGold)}`, false, false, headX + 22, headY - 10, true);

    const units = [
      { id: "unit-novice", icon: "⚔️" },
      { id: "unit-archer", icon: "🏹" },
      { id: "unit-mage_tower", icon: "🔮" },
      { id: "unit-dragon", icon: "🔥" },
      { id: "unit-cannon", icon: "💥" }
    ];

    const activeUnits = units.filter(u => document.getElementById(u.id));
    if (activeUnits.length > 0) {
      const chosen = activeUnits[Math.floor(Math.random() * activeUnits.length)];
      const el = document.getElementById(chosen.id);
      if (el) {
        const uRect = el.getBoundingClientRect();
        this.spawnAttackProjectile(chosen.icon, uRect.left + uRect.width / 2, uRect.top + uRect.height / 2, headX, headY + 30);
      }
    }
  }

  spawnAttackProjectile(icon, startX, startY, endX, endY) {
    const arena = document.getElementById("slime-arena");
    if (!arena) return;

    const proj = document.createElement("div");
    proj.className = "attack-projectile";
    proj.textContent = icon;

    const arenaRect = arena.getBoundingClientRect();
    proj.style.left = `${startX - arenaRect.left}px`;
    proj.style.top = `${startY - arenaRect.top}px`;

    arena.appendChild(proj);

    requestAnimationFrame(() => {
      proj.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(1.3)`;
      proj.style.opacity = "0.2";
    });

    setTimeout(() => proj.remove(), 280);
  }

  // --- クリック攻撃 ---
  handleClick(e = null) {
    if (this.isDefeating || this.enemy.hp <= 0) return;

    this.state.totalClicks = (this.state.totalClicks || 0) + 1;
    
    const clickPower = this.getClickPower();
    const crit = this.getCritInfo();
    const isCrit = Math.random() < crit.chance;
    let dmg = isCrit ? Math.floor(clickPower * crit.multiplier) : clickPower;

    // 連撃の心得 (25%で2回連続ダメージ)
    const isCombo = this.state.skills["click_combo"] && Math.random() < 0.25;
    if (isCombo) dmg *= 2;

    let clickGold = Math.max(1, Math.floor(clickPower * 0.5 + (this.enemy.level * 0.3)));
    const merchantLvl = this.state.rebirthSkills["merchant_wit"] || 0;
    if (merchantLvl > 0) {
      clickGold = Math.floor(clickGold * (1 + merchantLvl * 0.10));
    }
    this.addGold(clickGold);

    const slimeTarget = document.getElementById("slime-target");
    if (slimeTarget) {
      slimeTarget.classList.remove("hit");
      void slimeTarget.offsetWidth;
      slimeTarget.classList.add("hit");
    }

    if (isCrit) {
      this.sound.playCrit();
    } else {
      this.sound.playHit();
    }

    let headX = window.innerWidth / 2;
    let headY = 250;
    if (slimeTarget) {
      const rect = slimeTarget.getBoundingClientRect();
      headX = rect.left + rect.width / 2;
      headY = rect.top + 15;
    }

    this.createDamagePopup(dmg, isCrit, false, headX, headY);
    if (isCombo) {
      this.createDamagePopup(`⚡ 2連撃!!`, true, false, headX - 25, headY - 20);
    }
    this.createDamagePopup(`🪙 +${this.formatNumber(clickGold)}`, false, false, headX + 18, headY - 12, true);

    // 雷光の閃き (クリティカル時、追加でDPS 3秒分の電撃ダメージ)
    if (isCrit && this.state.skills["thunder_strike"]) {
      const dps = this.getDPS(false);
      if (dps > 0) {
        const shockDmg = Math.max(1, Math.floor(dps * 3));
        dmg += shockDmg;
        this.createDamagePopup(`⚡雷光 +${this.formatNumber(shockDmg)}`, true, false, headX - 30, headY - 35);
      }
    }

    // 転生パッシブ: 生命の浸蝕 (敵最大HPの 0.3%/Lv 追加ダメージ)
    const leechLvl = this.state.rebirthSkills["life_leech"] || 0;
    if (leechLvl > 0) {
      const leechDmg = Math.max(1, Math.floor(this.enemy.maxHp * (leechLvl * 0.003)));
      dmg += leechDmg;
      this.createDamagePopup(`🩸浸蝕 +${this.formatNumber(leechDmg)}`, false, false, headX + 30, headY - 25);
    }

    if (this.state.skills["golden_touch"] && Math.random() < 0.1) {
      const bonus = Math.max(1, Math.floor(this.enemy.maxHp * 0.2));
      this.addGold(bonus);
      this.createDamagePopup(`✨ 大金 +${this.formatNumber(bonus)}`, true, false, headX + 25, headY - 30, true);
    }

    this.applyDamage(dmg);
  }

  applyDamage(amount) {
    if (this.isDefeating || this.enemy.hp <= 0) return;

    this.enemy.hp -= amount;
    if (this.enemy.hp <= 0) {
      this.enemy.hp = 0;
      this.defeatEnemy();
    }
    this.renderEnemyUI();
  }

  // --- 敵討伐処理 (ボス撃破で「転生の水晶 💎」ドロップ！) ---
  defeatEnemy() {
    if (this.isDefeating) return;
    this.isDefeating = true;

    this.state.totalKills++;

    const isBoss = this.enemy.isBoss;
    if (isBoss) {
      this.sound.playBossDefeat();
      this.state.crystals += 1;
      this.state.totalCrystals += 1;
      this.renderCrystals();
    } else {
      this.sound.playDefeat();
    }

    let goldReward = this.enemy.gold;
    if (this.state.skills["bounty_hunter"]) {
      goldReward = Math.floor(goldReward * 1.5);
    }
    const merchantLvl = this.state.rebirthSkills["merchant_wit"] || 0;
    if (merchantLvl > 0) {
      goldReward = Math.floor(goldReward * (1 + merchantLvl * 0.10));
    }
    // 転生パッシブ: 王者の風格 (ボス討伐ゴールド +25%/Lv)
    const bossBountyLvl = this.state.rebirthSkills["boss_bounty"] || 0;
    if (isBoss && bossBountyLvl > 0) {
      goldReward = Math.floor(goldReward * (1 + bossBountyLvl * 0.25));
    }
    this.addGold(goldReward);

    const slimeTarget = document.getElementById("slime-target");
    const rect = slimeTarget.getBoundingClientRect();

    if (isBoss) {
      this.createDamagePopup(`👑 BOSS撃破！ 💎 転生の水晶 +1個！`, true, false, rect.left + rect.width / 2, rect.top + 10, false, false, false, true);
      this.showToast(`👑 ステージボス撃破！ 「転生の水晶 💎 +1個」を獲得！`);
    } else if (this.enemy.isMetal) {
      this.createDamagePopup(`✨ METAL撃破！ 🪙 +${this.formatNumber(goldReward)} G`, true, false, rect.left + rect.width / 2, rect.top + 10, true, true);
      this.showToast(`✨ レアモンスター討伐！ 大量のゴールドを獲得！`);
    } else {
      this.createDamagePopup(`🪙 +${this.formatNumber(goldReward)}`, false, false, rect.left + rect.width / 2, rect.top + 20, true);
    }

    slimeTarget.classList.add("defeat");

    setTimeout(() => {
      slimeTarget.classList.remove("defeat");

      this.state.currentLevel++;
      
      const newStageIndex = this.getStageIndex();
      const currentInStage = ((this.state.currentLevel - 1) % 50) + 1;
      
      if (currentInStage === 1 && this.state.currentLevel > 1) {
        const stage = STAGES[newStageIndex];
        this.sound.playLevelUp();
        this.showToast(`🎉 新ステージ突入！ 「${stage.name}」に到達しました！`);
        this.updateArenaEnvironment();
      } else {
        this.showToast(`🆙 LEVEL UP! Lv.${this.state.currentLevel} のモンスターが出現！`);
      }

      this.spawnEnemy();
      this.renderStageInfo();
      this.renderRebirthBanner();
      this.isDefeating = false;
    }, 280);
  }

  addGold(amount) {
    if (amount <= 0) return;
    this.state.gold += amount;
    this.state.totalGold += amount;
    this.renderGold();
    this.updateShopButtons();
  }

  // --- 常設: 剣術の鍛錬（クリック攻撃力強化・まとめ買い対応） ---
  upgradeClickPower() {
    const mult = this.state.buyMultiplier || 1;
    const cost = this.getClickUpgradeCost(mult);
    if (this.state.gold >= cost) {
      this.state.gold -= cost;
      this.state.clickLevel = (this.state.clickLevel || 0) + mult;
      this.sound.playBuy();
      this.renderGold();
      this.renderClickUpgrade();
      this.renderCombatStats();
      this.showToast(`⚔️ 剣術の鍛錬 を x${mult} 強化しました！ (Lv.${this.state.clickLevel})`);
    }
  }

  buyBuilding(buildingId) {
    const b = BUILDINGS_MASTER.find(x => x.id === buildingId);
    if (!b) return;

    const mult = this.state.buyMultiplier;
    const cost = this.getBuildingCost(b, mult);

    if (this.state.gold >= cost) {
      this.state.gold -= cost;
      this.state.buildings[buildingId] = (this.state.buildings[buildingId] || 0) + mult;
      this.sound.playBuy();
      this.renderGold();
      this.renderBuildings();
      this.renderCombatStats();
      this.renderFieldBuildings();
      this.showToast(`🏢 ${b.name} を x${mult} 建設しました！`);
    }
  }

  unlockSkill(skillId) {
    const s = SKILLS_MASTER.find(x => x.id === skillId);
    if (!s || this.state.skills[skillId]) return;

    if (this.state.gold >= s.cost) {
      this.state.gold -= s.cost;
      this.state.skills[skillId] = true;
      this.sound.playBuy();
      this.renderGold();
      this.renderSkills();
      this.renderCombatStats();
      this.renderActiveSkillBar();
      this.showToast(`✨ スキル「${s.name}」を習得しました！`);
    }
  }

  // --- 古代の秘術（SPを消費して永続強化・必要SPインクリメント制） ---
  upgradeRebirthSkill(skillId) {
    const rs = REBIRTH_SKILLS_MASTER.find(x => x.id === skillId);
    if (!rs) return;

    const currentLvl = this.state.rebirthSkills[skillId] || 0;
    if (currentLvl >= rs.maxLevel) return;

    const cost = this.getRebirthSkillCost(skillId);
    if (this.state.skillPoints >= cost) {
      this.state.skillPoints -= cost;
      this.state.rebirthSkills[skillId] = currentLvl + 1;
      this.sound.playBuy();
      this.renderSkillPoints();
      this.renderRebirthSkills();
      this.renderCombatStats();
      this.renderFieldBuildings();
      this.showToast(`🔮 秘術「${rs.name}」を Lv.${this.state.rebirthSkills[skillId]} に強化！ (SP -${cost})`);
    }
  }

  // --- 水晶を消費して転生を実行（基本SP +2 pt、30%確率で +3 pt 獲得！） ---
  executeRebirth() {
    const req = this.getRequiredCrystals();
    if (this.state.crystals < req) {
      this.showToast(`❌ 転生には「転生の水晶 💎」が ${req}個 必要です！`);
      return;
    }

    this.sound.playRebirth();

    // 基本2pt、30%の確率で奇跡の大成功3pt獲得！
    const isCriticalSP = Math.random() < 0.30;
    const gainedSP = isCriticalSP ? 3 : 2;

    this.state.crystals -= req;
    this.state.skillPoints += gainedSP;
    this.state.totalSkillPoints += gainedSP;
    this.state.rebirthCount += 1;

    // 進行リセット
    this.state.currentLevel = 1;
    this.state.gold = 0;
    this.state.clickLevel = 0; // クリック強化もLv.1から強くてニューゲーム

    // 建物と通常スキルを初期化（古代SPと秘術は永久保持！）
    BUILDINGS_MASTER.forEach(b => this.state.buildings[b.id] = 0);
    SKILLS_MASTER.forEach(s => this.state.skills[s.id] = false);

    // クールダウン初期化
    for (let sId in this.state.activeCooldowns) this.state.activeCooldowns[sId] = 0;
    this.state.activeBuffs.berserk = 0;

    this.spawnEnemy();
    this.updateArenaEnvironment();
    this.renderFieldBuildings();
    this.renderAll();
    this.saveGame();

    document.getElementById("rebirth-modal")?.classList.remove("show");
    if (isCriticalSP) {
      this.showToast(`🌟✨【奇跡の大成功！】古代スキルポイント(SP)を【超ボーナス +3 pt】獲得しました！！ (${this.state.rebirthCount}回目の転生)`);
    } else {
      this.showToast(`🔮 転生完了 (${this.state.rebirthCount}回目)！ 古代スキルポイント(SP)を +2 pt 獲得しました！`);
    }
  }

  activateSkill(skillId) {
    const s = SKILLS_MASTER.find(x => x.id === skillId);
    if (!s || !this.state.skills[skillId]) return;
    if (this.state.activeCooldowns[skillId] > 0) return;

    this.sound.playSkill();

    const flowLvl = this.state.rebirthSkills["battle_flow"] || 0;
    let cdTime = s.cd;
    if (flowLvl > 0) {
      cdTime = Math.max(10, Math.floor(cdTime * (1 - flowLvl * 0.10)));
    }

    if (skillId === "skill_berserk") {
      this.state.activeCooldowns[skillId] = cdTime;
      this.state.activeBuffs.berserk = s.duration;
      this.showToast("🔥 バーサーク発動！ 攻撃力3倍！");
      this.renderCombatStats();
    } else if (skillId === "skill_goldrush") {
      this.state.activeCooldowns[skillId] = cdTime;
      const dps = this.getDPS();
      const gain = Math.max(50, Math.floor(dps * 30));
      this.addGold(gain);
      this.showToast(`💰 ゴールドラッシュ！ +${this.formatNumber(gain)} G 獲得！`);
      
      const slimeTarget = document.getElementById("slime-target");
      const rect = slimeTarget.getBoundingClientRect();
      this.createDamagePopup(`💰 +${this.formatNumber(gain)} G`, true, false, rect.left + rect.width / 2, rect.top + 20, true, true);
    } else if (skillId === "skill_meteor") {
      this.state.activeCooldowns[skillId] = cdTime;
      const dps = this.getDPS();
      const clickP = this.getClickPower();
      const meteorDmg = Math.max(100, Math.floor(Math.max(dps * 50, clickP * 30)));
      
      this.showToast("☄️ メテオストライク直撃！！");
      const slimeTarget = document.getElementById("slime-target");
      const rect = slimeTarget.getBoundingClientRect();
      this.createDamagePopup(`☄️ ${this.formatNumber(meteorDmg)}!`, true, false, rect.left + rect.width / 2, rect.top);
      this.applyDamage(meteorDmg);
    } else if (skillId === "skill_cyclone") {
      this.state.activeCooldowns[skillId] = cdTime;
      this.state.activeBuffs.cyclone = s.duration;
      this.showToast("🌪️ サイクロン発動！ 仲間たちの攻撃速度が3倍！！");
    }

    this.renderActiveSkillBar();
  }

  // 落下する巨大隕石パーティクル
  spawnMeteorParticle() {
    const arena = document.getElementById("slime-arena");
    if (!arena) return;
    const p = document.createElement("div");
    p.className = "meteor-drop-particle";
    p.textContent = "☄️";
    const startX = 40 + Math.random() * (arena.clientWidth - 100);
    p.style.left = `${startX}px`;
    p.style.top = "10px";
    arena.appendChild(p);

    setTimeout(() => {
      p.remove();
      this.sound.playTone(180 + Math.random() * 60, 'sawtooth', 0.12, 0.18, 500);
      const slimeTarget = document.getElementById("slime-target");
      if (slimeTarget) {
        slimeTarget.classList.remove("hit");
        void slimeTarget.offsetWidth;
        slimeTarget.classList.add("hit");
      }
    }, 600);
  }

  renderMeteorTimer() {
    const textEl = document.getElementById("meteor-timer-text");
    const badge = document.getElementById("meteor-timer-badge");
    if (!textEl) return;

    if (this.isMeteorRushActive()) {
      const sec = Math.ceil(this.state.meteorRushActiveTime);
      textEl.textContent = `ラッシュ中: ${sec}s`;
      if (badge) badge.classList.add("rushing");
    } else {
      const totalSec = Math.max(0, Math.ceil(this.state.meteorRushTimer));
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      textEl.textContent = `隕石: ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      if (badge) badge.classList.remove("rushing");
    }
  }

  loop(currentTime) {
    const deltaTime = (currentTime - this.lastFrameTime) / 1000;
    this.lastFrameTime = currentTime;

    if (deltaTime > 0 && deltaTime < 5) {
      this.update(deltaTime);
    }

    requestAnimationFrame(this.loop.bind(this));
  }

  update(dt) {
    this.state.playTime += dt;

    // ☄️ 180秒周期 12秒間の隕石ラッシュ（メテオフィーバー）の更新
    if (this.isMeteorRushActive()) {
      this.state.meteorRushActiveTime = Math.max(0, this.state.meteorRushActiveTime - dt);
      this.state.meteorRushParticleTimer = (this.state.meteorRushParticleTimer || 0) + dt;

      if (this.state.meteorRushParticleTimer >= 0.7) {
        this.state.meteorRushParticleTimer = 0;
        this.spawnMeteorParticle();
      }

      if (this.state.meteorRushActiveTime === 0) {
        // 隕石ラッシュ終了
        this.state.meteorRushTimer = this.getMeteorInterval();
        const arena = document.getElementById("slime-arena");
        if (arena) arena.classList.remove("meteor-rush-active");
        this.renderCombatStats();
        this.showToast("☄️ 隕石ラッシュが終了しました。");
      }
    } else {
      this.state.meteorRushTimer = (this.state.meteorRushTimer || this.getMeteorInterval()) - dt;
      if (this.state.meteorRushTimer <= 0) {
        // 隕石ラッシュ発動！
        this.state.meteorRushActiveTime = this.getMeteorDuration();
        this.state.meteorRushParticleTimer = 0;
        const arena = document.getElementById("slime-arena");
        if (arena) arena.classList.add("meteor-rush-active");
        this.sound.playSkill();
        this.renderCombatStats();
        this.showToast("🔥☄️ 業火の刻！ 隕石ラッシュ発動！ 全攻撃力 2倍！！ 🔥");
      }
    }
    this.renderMeteorTimer();

    // 1. DPSによる自動攻撃（サイクロン発動時はスピード3倍！）
    const dps = this.getDPS();
    if (dps > 0) {
      const dmgThisFrame = dps * dt;
      this.applyDamage(dmgThisFrame);

      const attackSpeedMult = (this.state.activeBuffs.cyclone > 0) ? 3 : 1;
      this.autoAttackTimer += dt * attackSpeedMult;
      if (this.autoAttackTimer >= 0.8) {
        this.autoAttackTimer = 0;
        this.triggerAutoAttackVisuals(dps * 0.8);
      }
    }

    // 2. オートタップ小妖精（1秒に1回自動クリック）
    if (this.state.rebirthSkills["auto_fairy"] >= 1 && this.enemy.hp > 0 && !this.isDefeating) {
      this.fairyClickTimer += dt;
      if (this.fairyClickTimer >= 1.0) {
        this.fairyClickTimer = 0;
        this.handleClick();
      }
    }

    // 3. ボスタイマー
    if (this.enemy.isBoss && this.enemy.hp > 0) {
      this.state.bossTimer -= dt;
      if (this.state.bossTimer <= 0) {
        this.showToast("⏱️ ボス戦タイムオーバー！前Lvに戻って再強化しよう！");
        this.state.currentLevel = Math.max(1, this.state.currentLevel - 1);
        this.spawnEnemy();
        this.renderStageInfo();
        this.renderRebirthBanner();
      }
      this.renderBossTimer();
    }

    // 4. クールダウン・バフ更新
    let cdChanged = false;
    for (let sId in this.state.activeCooldowns) {
      if (this.state.activeCooldowns[sId] > 0) {
        this.state.activeCooldowns[sId] = Math.max(0, this.state.activeCooldowns[sId] - dt);
        cdChanged = true;
      }
    }

    if (this.state.activeBuffs.berserk > 0) {
      this.state.activeBuffs.berserk = Math.max(0, this.state.activeBuffs.berserk - dt);
      if (this.state.activeBuffs.berserk === 0) {
        this.renderCombatStats();
      }
      cdChanged = true;
    }

    if (this.state.activeBuffs.cyclone > 0) {
      this.state.activeBuffs.cyclone = Math.max(0, this.state.activeBuffs.cyclone - dt);
      cdChanged = true;
    }

    if (cdChanged) {
      this.renderActiveSkillBar();
    }

    this.autoSaveTimer += dt;
    if (this.autoSaveTimer >= 10) {
      this.autoSaveTimer = 0;
      this.saveGame();
    }
  }

  renderAll() {
    this.renderGold();
    this.renderCrystals();
    this.renderSkillPoints();
    this.renderStageInfo();
    this.renderEnemyUI();
    this.renderCombatStats();
    this.renderClickUpgrade();
    this.renderBuildings();
    this.renderSkills();
    this.renderRebirthSkills();
    this.renderRebirthBanner();
    this.renderActiveSkillBar();
    this.renderMeteorTimer();
    this.renderStats();
  }

  renderGold() {
    const goldEl = document.getElementById("gold-display");
    const gpsEl = document.getElementById("gps-display");
    if (goldEl) goldEl.textContent = this.formatNumber(Math.floor(this.state.gold));
    if (gpsEl) gpsEl.textContent = this.formatNumber(this.getDPS());
  }

  renderCrystals() {
    const cEl = document.getElementById("crystal-display");
    if (cEl) cEl.textContent = this.state.crystals.toLocaleString();
  }

  renderSkillPoints() {
    const spEl = document.getElementById("sp-display");
    if (spEl) spEl.textContent = this.state.skillPoints.toLocaleString();
  }

  // --- 常設: 剣術の鍛錬カードの描画（倍率対応） ---
  renderClickUpgrade() {
    const container = document.getElementById("click-upgrade-container");
    if (!container) return;

    const lvl = this.state.clickLevel || 0;
    const mult = this.state.buyMultiplier || 1;
    const cost = this.getClickUpgradeCost(mult);
    const canAfford = this.state.gold >= cost;
    const currentPower = this.getClickPower();

    container.innerHTML = `
      <div class="click-upgrade-card">
        <div class="building-icon-wrap" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4);">⚔️</div>
        <div class="building-details">
          <div class="building-name-row">
            <span class="building-name" style="color: #f87171;">剣術の鍛錬 (クリック強化)</span>
            <span class="building-level" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4);">Lv.${lvl}</span>
          </div>
          <div class="building-production" style="color: #fca5a5;">
            現在の威力: <strong>${this.formatNumber(currentPower)}</strong> / クリック
          </div>
        </div>
        <button class="click-upgrade-btn" id="btn-upgrade-click" ${!canAfford ? 'disabled' : ''}>
          <span>強化 (+${mult})</span>
          <span style="font-size: 0.78rem;">🪙 ${this.formatNumber(cost)}</span>
        </button>
      </div>
    `;

    document.getElementById("btn-upgrade-click")?.addEventListener("click", () => this.upgradeClickPower());
  }

  // --- 超見やすい目立つ転生バナーの更新 ---
  renderRebirthBanner() {
    const banner = document.getElementById("rebirth-banner");
    const btn = document.getElementById("btn-rebirth-trigger");
    const title = document.getElementById("rebirth-banner-text");
    const sub = document.getElementById("rebirth-banner-sub");
    if (!banner || !btn) return;

    const req = this.getRequiredCrystals();
    const available = this.canRebirth();
    const nextRebirthNum = (this.state.rebirthCount || 0) + 1;

    if (available) {
      banner.className = "rebirth-banner available";
      btn.disabled = false;
      btn.innerHTML = `<span>💎 転生する (${req}個消費 / SP+2〜3)</span>`;
      title.textContent = `✨ 転生可能！ (${nextRebirthNum}回目の転生)`;
      sub.textContent = `所持水晶: 💎 ${this.state.crystals} / 必要: ${req}個 を消費して「古代SP 🔮 +2pt (確率で+3pt)」を獲得！`;
    } else {
      banner.className = "rebirth-banner locked";
      btn.disabled = true;
      btn.innerHTML = `<span>🔒 水晶不足 (${this.state.crystals}/${req}個)</span>`;
      title.textContent = `転生システム (${nextRebirthNum}回目の転生には水晶💎が ${req}個 必要)`;
      sub.textContent = `ステージボスを倒して水晶を集めよう！ (現在: 💎 ${this.state.crystals} / ${req}個)`;
    }
  }

  renderStageInfo() {
    const stageIdx = this.getStageIndex();
    const stage = STAGES[stageIdx];
    const stageNum = this.getStageNumber();

    document.getElementById("stage-icon").textContent = stage.icon;
    document.getElementById("stage-title").textContent = `ステージ ${stageNum}: ${stage.name}`;
    
    const progressEl = document.getElementById("stage-progress-text");
    const currentInStage = ((this.state.currentLevel - 1) % 50) + 1;
    
    if (this.enemy.isBoss) {
      progressEl.innerHTML = `<span style="color: #ef4444; font-weight: bold;">⚠️ BOSS戦！ (Lv.${this.state.currentLevel}) 💎水晶ドロップ！</span>`;
    } else {
      progressEl.textContent = `種族: ${this.enemy.raceName} | 進行度: ${currentInStage} / 50 (Lv.${this.state.currentLevel})`;
    }

    const bossBadge = document.getElementById("boss-timer-badge");
    if (this.enemy.isBoss) {
      bossBadge.classList.add("active");
      this.renderBossTimer();
    } else {
      bossBadge.classList.remove("active");
    }
  }

  renderBossTimer() {
    const badge = document.getElementById("boss-timer-val");
    if (badge) badge.textContent = Math.ceil(this.state.bossTimer);
  }

  renderEnemyUI() {
    document.getElementById("enemy-name").textContent = this.enemy.name;
    
    const curHp = Math.max(0, Math.ceil(this.enemy.hp));
    const maxHp = this.enemy.maxHp;
    const pct = Math.min(100, Math.max(0, (curHp / maxHp) * 100));

    const bar = document.getElementById("enemy-hp-bar");
    if (bar) bar.style.width = `${pct}%`;

    const txt = document.getElementById("enemy-hp-text");
    if (txt) txt.textContent = `${this.formatNumber(curHp)} / ${this.formatNumber(maxHp)} HP`;
  }

  renderCombatStats() {
    const clickEl = document.getElementById("stat-click-power");
    const dpsEl = document.getElementById("stat-dps");
    if (clickEl) clickEl.textContent = this.formatNumber(this.getClickPower());
    if (dpsEl) dpsEl.textContent = this.formatNumber(this.getDPS());
  }

  renderBuildings() {
    const container = document.getElementById("building-list");
    if (!container) return;

    const mult = this.state.buyMultiplier;

    container.innerHTML = BUILDINGS_MASTER.map(b => {
      const count = this.state.buildings[b.id] || 0;
      const cost = this.getBuildingCost(b, mult);
      const canAfford = this.state.gold >= cost;

      let bDPS = b.baseDPS;
      if (b.id === "trap" && this.state.skills["trap_mastery"]) bDPS *= 3;
      if (this.state.skills["building_synergy"]) bDPS *= 2;
      const currentTotalDPS = bDPS * count;

      return `
        <div class="building-card ${!canAfford ? 'cant-afford' : ''}">
          <div class="building-icon-wrap">${b.icon}</div>
          <div class="building-details">
            <div class="building-name-row">
              <span class="building-name">${b.name}</span>
              <span class="building-level">Lv.${count}</span>
            </div>
            <div class="building-production">
              +${this.formatNumber(bDPS)} DPS/個 (合計: +${this.formatNumber(currentTotalDPS)}/秒)
            </div>
          </div>
          <button class="building-buy-btn" data-buy="${b.id}" ${!canAfford ? 'disabled' : ''}>
            <span>購入 (+${mult})</span>
            <span class="building-cost">🪙 ${this.formatNumber(cost)}</span>
          </button>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".building-buy-btn").forEach(btn => {
      btn.onclick = () => this.buyBuilding(btn.dataset.buy);
    });
  }

  renderSkills() {
    const container = document.getElementById("skill-list");
    if (!container) return;

    container.innerHTML = SKILLS_MASTER.map(s => {
      const isUnlocked = this.state.skills[s.id] || false;
      const canAfford = this.state.gold >= s.cost;

      return `
        <div class="skill-card ${isUnlocked ? 'unlocked' : ''}">
          <div class="skill-card-icon">${s.icon}</div>
          <div class="skill-card-info">
            <span class="skill-card-name">${s.name}</span>
            <span class="skill-card-desc">${s.desc}</span>
          </div>
          <div>
            ${isUnlocked 
              ? `<span class="skill-badge-max">✓ 習得済</span>`
              : `<button class="skill-unlock-btn" data-unlock="${s.id}" ${!canAfford ? 'disabled' : ''}>
                   🪙 ${this.formatNumber(s.cost)}
                 </button>`
            }
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".skill-unlock-btn").forEach(btn => {
      btn.onclick = () => this.unlockSkill(btn.dataset.unlock);
    });
  }

  // --- 転生スキル（古代の秘術・必要SPインクリメント制）レンダリング ---
  renderRebirthSkills() {
    const container = document.getElementById("rebirth-skill-list");
    if (!container) return;

    container.innerHTML = REBIRTH_SKILLS_MASTER.map(rs => {
      const currentLvl = this.state.rebirthSkills[rs.id] || 0;
      const isMax = currentLvl >= rs.maxLevel;
      const cost = this.getRebirthSkillCost(rs.id);
      const canAfford = !isMax && this.state.skillPoints >= cost;

      let descText = rs.desc;
      if (rs.valuePerLevel !== undefined) {
        const val = Number((currentLvl * rs.valuePerLevel).toFixed(1));
        descText = descText.replace("{val}", val);
      }
      if (rs.val1 !== undefined && rs.val2 !== undefined) {
        const v1 = Number((currentLvl * rs.val1).toFixed(1));
        const v2 = Number((currentLvl * rs.val2).toFixed(1));
        descText = descText.replace("{val1}", v1).replace("{val2}", v2);
      }

      return `
        <div class="rebirth-skill-card ${isMax ? 'maxed' : ''}">
          <div class="skill-card-icon" style="border-color: var(--border-purple);">${rs.icon}</div>
          <div class="skill-card-info">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="skill-card-name">${rs.name}</span>
              <span style="font-size: 0.8rem; color: var(--accent-purple-light); font-weight: 800;">Lv.${currentLvl} / ${rs.maxLevel}</span>
            </div>
            <span class="skill-card-desc">${descText}</span>
          </div>
          <div>
            ${isMax 
              ? `<span class="skill-badge-max" style="color: var(--accent-purple-light); border-color: var(--accent-purple); background: rgba(168, 85, 247, 0.2);">★ MASTER</span>`
              : `<button class="rebirth-skill-btn" data-rs-unlock="${rs.id}" ${!canAfford ? 'disabled' : ''}>
                   🔮 ${cost} SP
                 </button>`
            }
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".rebirth-skill-btn").forEach(btn => {
      btn.onclick = () => this.upgradeRebirthSkill(btn.dataset.rsUnlock);
    });
  }

  renderActiveSkillBar() {
    const map = [
      { id: "skill_berserk", btnId: "skill-btn-berserk", cdId: "cd-berserk", sMaster: SKILLS_MASTER.find(x => x.id === "skill_berserk") },
      { id: "skill_goldrush", btnId: "skill-btn-goldrush", cdId: "cd-goldrush", sMaster: SKILLS_MASTER.find(x => x.id === "skill_goldrush") },
      { id: "skill_meteor", btnId: "skill-btn-meteor", cdId: "cd-meteor", sMaster: SKILLS_MASTER.find(x => x.id === "skill_meteor") },
      { id: "skill_cyclone", btnId: "skill-btn-cyclone", cdId: "cd-cyclone", sMaster: SKILLS_MASTER.find(x => x.id === "skill_cyclone") }
    ];

    map.forEach(item => {
      const btn = document.getElementById(item.btnId);
      const cdOverlay = document.getElementById(item.cdId);
      if (!btn || !cdOverlay) return;

      const isUnlocked = this.state.skills[item.id] || false;
      const currentCD = this.state.activeCooldowns[item.id] || 0;
      const maxCD = item.sMaster ? item.sMaster.cd : 60;

      if (!isUnlocked) {
        btn.disabled = true;
        btn.title = "スキルタブで習得すると使用可能になります";
        cdOverlay.style.height = "0%";
        cdOverlay.textContent = "未習得";
      } else {
        if (currentCD > 0) {
          btn.disabled = true;
          const pct = (currentCD / maxCD) * 100;
          cdOverlay.style.height = `${pct}%`;
          cdOverlay.textContent = `${Math.ceil(currentCD)}s`;
        } else {
          btn.disabled = false;
          cdOverlay.style.height = "0%";
          cdOverlay.textContent = "";
        }
      }

      if (item.id === "skill_berserk" && this.state.activeBuffs.berserk > 0) {
        btn.classList.add("active");
      } else if (item.id === "skill_cyclone" && this.state.activeBuffs.cyclone > 0) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  updateShopButtons() {
    // 剣術鍛錬ボタン（倍率対応）
    const clickBtn = document.getElementById("btn-upgrade-click");
    if (clickBtn) {
      const mult = this.state.buyMultiplier || 1;
      clickBtn.disabled = this.state.gold < this.getClickUpgradeCost(mult);
    }

    document.querySelectorAll(".building-buy-btn").forEach(btn => {
      const bId = btn.dataset.buy;
      const b = BUILDINGS_MASTER.find(x => x.id === bId);
      if (b) {
        const cost = this.getBuildingCost(b, this.state.buyMultiplier);
        btn.disabled = this.state.gold < cost;
      }
    });

    document.querySelectorAll(".skill-unlock-btn").forEach(btn => {
      const sId = btn.dataset.unlock;
      const s = SKILLS_MASTER.find(x => x.id === sId);
      if (s) {
        btn.disabled = this.state.gold < s.cost;
      }
    });

    document.querySelectorAll(".rebirth-skill-btn").forEach(btn => {
      const rsId = btn.dataset.rsUnlock;
      const rs = REBIRTH_SKILLS_MASTER.find(x => x.id === rsId);
      if (rs) {
        const cost = this.getRebirthSkillCost(rsId);
        btn.disabled = this.state.skillPoints < cost;
      }
    });
  }

  renderStats() {
    const kills = document.getElementById("stat-total-kills");
    const gold = document.getElementById("stat-total-gold");
    const crystals = document.getElementById("stat-total-crystals");
    const rebirths = document.getElementById("stat-rebirth-count");
    const clicks = document.getElementById("stat-total-clicks");
    const stage = document.getElementById("stat-max-stage");
    const time = document.getElementById("stat-play-time");

    const stageIdx = this.getStageIndex();
    const stageData = STAGES[stageIdx];
    const stageNum = this.getStageNumber();

    if (kills) kills.textContent = `${this.state.totalKills.toLocaleString()} 体`;
    if (gold) gold.textContent = `${this.formatNumber(this.state.totalGold)} G`;
    if (crystals) crystals.textContent = `${this.state.totalCrystals.toLocaleString()} 個`;
    if (rebirths) rebirths.textContent = `${this.state.rebirthCount.toLocaleString()} 回 (累計SP: ${this.state.totalSkillPoints}pt)`;
    if (clicks) clicks.textContent = `${this.state.totalClicks.toLocaleString()} 回`;
    if (stage) stage.textContent = `Lv.${this.state.currentLevel} (ステージ ${stageNum}: ${stageData.name})`;
    if (time) {
      const minutes = Math.floor(this.state.playTime / 60);
      time.textContent = `${minutes} 分 (${Math.floor(this.state.playTime)} 秒)`;
    }
  }

  createDamagePopup(text, isCrit, isAuto, x, y, isCoin = false, isBounty = false, isSoul = false, isCrystal = false) {
    const arena = document.getElementById("slime-arena");
    if (!arena) return;

    const popup = document.createElement("div");
    if (isCrystal) {
      popup.className = "coin-popup crystal-bounty";
    } else if (isSoul) {
      popup.className = "coin-popup soul-bounty";
    } else if (isBounty) {
      popup.className = "coin-popup bounty";
    } else if (isCoin) {
      popup.className = "coin-popup";
    } else {
      popup.className = `damage-number ${isCrit ? 'crit' : ''} ${isAuto ? 'auto-dmg' : ''}`;
    }
    popup.textContent = text;

    const arenaRect = arena.getBoundingClientRect();
    const relX = x - arenaRect.left;
    const relY = y - arenaRect.top;

    popup.style.left = `${relX}px`;
    popup.style.top = `${relY}px`;
    if (!isCoin && !isSoul && !isCrystal) {
      popup.style.setProperty('--rand-x', (Math.random() * 50 - 25));
    }

    arena.appendChild(popup);
    setTimeout(() => popup.remove(), (isBounty || isSoul || isCrystal) ? 1200 : 850);
  }

  showToast(msg) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  formatNumber(num) {
    if (num === null || num === undefined) return "0";
    if (num < 10000) return Math.floor(num).toLocaleString();

    const units = [
      { val: 1e16, name: "京" },
      { val: 1e12, name: "兆" },
      { val: 1e8, name: "億" },
      { val: 1e4, name: "万" }
    ];

    for (let u of units) {
      if (num >= u.val) {
        return (num / u.val).toFixed(2).replace(/\.00$/, '') + u.name;
      }
    }
    return Math.floor(num).toLocaleString();
  }

  setupDOM() {
    this.sound.enabled = this.state.soundEnabled;
    const soundText = document.getElementById("sound-text");
    if (soundText) soundText.textContent = this.sound.enabled ? "ON" : "OFF";
  }

  setupEventListeners() {
    // iPad / iOS Safari 連打時の画面拡大（ダブルタップズーム）を完全防止
    document.addEventListener("dblclick", (e) => {
      e.preventDefault();
    }, { passive: false });

    let lastTouchTime = 0;
    document.addEventListener("touchend", (e) => {
      const now = Date.now();
      if (now - lastTouchTime <= 350) {
        e.preventDefault();
      }
      lastTouchTime = now;
    }, { passive: false });

    document.addEventListener("gesturestart", (e) => {
      e.preventDefault();
    });

    // どのデバイス（PCマウス、iPad/iPhoneタッチ、Android）でも100%確実に反応するタップ処理
    let lastTapTimestamp = 0;
    const processUserTap = (e) => {
      const now = Date.now();
      if (e.type === "click" && now - lastTapTimestamp < 350) {
        return; // touchstartで既に処理済みの場合は重複をスキップ
      }
      if (e.type === "touchstart") {
        lastTapTimestamp = now;
      }
      const touch = (e.touches && e.touches.length > 0) ? e.touches[0] : e;
      this.handleClick(touch);
    };

    const slimeTarget = document.getElementById("slime-target");
    if (slimeTarget) {
      slimeTarget.addEventListener("touchstart", (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        processUserTap(e);
      }, { passive: false });

      slimeTarget.addEventListener("click", (e) => {
        processUserTap(e);
      });
    }

    // アリーナ全体の空きエリアをタップしても攻撃が当たる親切設計！
    const arenaEl = document.getElementById("slime-arena");
    if (arenaEl) {
      arenaEl.addEventListener("touchstart", (e) => {
        if (e.target.closest("button") || e.target.closest(".building-buy-btn") || e.target.closest(".skill-unlock-btn") || e.target.closest(".rebirth-skill-btn") || e.target.closest(".active-skill-btn")) {
          return;
        }
        if (e.target.closest("#slime-target")) return; // スライム本体で処理される
        if (e.cancelable) e.preventDefault();
        processUserTap(e);
      }, { passive: false });

      arenaEl.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target.closest(".building-buy-btn") || e.target.closest(".skill-unlock-btn") || e.target.closest(".rebirth-skill-btn") || e.target.closest(".active-skill-btn")) {
          return;
        }
        if (e.target.closest("#slime-target")) return;
        processUserTap(e);
      });
    }

    const btnSound = document.getElementById("btn-sound");
    if (btnSound) {
      btnSound.addEventListener("click", () => {
        this.sound.enabled = !this.sound.enabled;
        this.state.soundEnabled = this.sound.enabled;
        document.getElementById("sound-text").textContent = this.sound.enabled ? "ON" : "OFF";
        this.showToast(`🔊 サウンド: ${this.sound.enabled ? 'ON' : 'OFF'}`);
        this.saveGame();
      });
    }

    const saveHandler = () => {
      this.saveGame();
      this.showToast("💾 進行状況を保存しました！");
    };
    const btnSave = document.getElementById("btn-save");
    const btnManualSave = document.getElementById("btn-manual-save");
    if (btnSave) btnSave.addEventListener("click", saveHandler);
    if (btnManualSave) btnManualSave.addEventListener("click", saveHandler);

    // リセット処理
    const doReset = () => {
      if (confirm("本当にデータを完全初期化して最初からやり直しますか？\n（所持水晶や古代SP・秘術もすべてリセットされます）")) {
        for (let i = 1; i <= 10; i++) {
          localStorage.removeItem(`slime_idle_quest_save_v${i}`);
        }
        localStorage.removeItem("slime_idle_quest_save");
        location.reload();
      }
    };

    document.getElementById("btn-reset-data")?.addEventListener("click", doReset);
    document.getElementById("btn-header-reset")?.addEventListener("click", doReset);

    // 転生バナーボタン & モーダル処理
    document.getElementById("btn-rebirth-trigger")?.addEventListener("click", () => {
      const req = this.getRequiredCrystals();
      if (!this.canRebirth()) {
        this.showToast(`❌ 転生には「転生の水晶 💎」が ${req}個 必要です！ (現在: ${this.state.crystals}個)`);
        return;
      }

      const desc = document.getElementById("modal-rebirth-desc");
      if (desc) {
        desc.innerHTML = `
          「転生の水晶 💎 ×${req}個」を消費して転生します。<br>
          ゴールドと建物はリセットされ Lv.1 からの再スタートとなりますが、<br>
          <strong style="color: #d8b4fe;">「古代スキルポイント 🔮 +2 SP（確率で +3 SP！）」を獲得し、習得した古代の秘術はすべて永久に引き継がれます！</strong>
        `;
      }

      const confirmBtn = document.getElementById("btn-confirm-rebirth");
      if (confirmBtn) {
        confirmBtn.textContent = `💎 ${req}個消費して転生！`;
      }

      const modal = document.getElementById("rebirth-modal");
      if (modal) modal.classList.add("show");
    });

    document.getElementById("btn-cancel-rebirth")?.addEventListener("click", () => {
      document.getElementById("rebirth-modal")?.classList.remove("show");
    });

    document.getElementById("btn-confirm-rebirth")?.addEventListener("click", () => {
      this.executeRebirth();
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        const tabName = btn.dataset.tab;
        const targetPane = document.getElementById(`pane-${tabName}`);
        if (targetPane) targetPane.classList.add("active");
        if (tabName === "stats") this.renderStats();
        if (tabName === "rebirth") this.renderRebirthSkills();
      });
    });

    document.querySelectorAll(".mult-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mult-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.buyMultiplier = parseInt(btn.dataset.mult, 10) || 1;
        this.renderClickUpgrade();
        this.renderBuildings();
      });
    });

    document.getElementById("skill-btn-berserk")?.addEventListener("click", () => this.activateSkill("skill_berserk"));
    document.getElementById("skill-btn-goldrush")?.addEventListener("click", () => this.activateSkill("skill_goldrush"));
    document.getElementById("skill-btn-meteor")?.addEventListener("click", () => this.activateSkill("skill_meteor"));
    document.getElementById("skill-btn-cyclone")?.addEventListener("click", () => this.activateSkill("skill_cyclone"));

    document.getElementById("btn-claim-offline")?.addEventListener("click", () => {
      document.getElementById("offline-modal")?.classList.remove("show");
    });
  }

  saveGame() {
    this.state.lastSaved = Date.now();
    try {
      localStorage.setItem("slime_idle_quest_save_v7", JSON.stringify(this.state));
    } catch (e) {
      console.warn("Save failed:", e);
    }
  }

  loadGame() {
    try {
      for (let i = 1; i <= 6; i++) {
        localStorage.removeItem(`slime_idle_quest_save_v${i}`);
      }
      localStorage.removeItem("slime_idle_quest_save");

      const dataStr = localStorage.getItem("slime_idle_quest_save_v7");
      if (!dataStr) {
        this.sanitizeState();
        return;
      }

      const data = JSON.parse(dataStr);
      if (data && typeof data === "object") {
        this.state = Object.assign(this.state, data);
        this.sanitizeState();

        const now = Date.now();
        const last = Number(this.state.lastSaved) || now;
        const elapsedSec = Math.max(0, Math.floor((now - last) / 1000));

        if (elapsedSec > 10) {
          const maxSec = 86400;
          const effectiveSec = Math.min(elapsedSec, maxSec);
          const dps = this.getDPS(false);

          if (dps > 0) {
            const offlineGold = Math.floor(dps * effectiveSec * 0.7);
            if (offlineGold > 0) {
              this.state.gold = (Number(this.state.gold) || 0) + offlineGold;
              this.state.totalGold = (Number(this.state.totalGold) || 0) + offlineGold;

              setTimeout(() => {
                const modal = document.getElementById("offline-modal");
                const goldVal = document.getElementById("offline-gold-val");
                const desc = document.getElementById("offline-modal-desc");
                if (modal && goldVal && desc) {
                  const hours = Math.floor(effectiveSec / 3600);
                  const mins = Math.floor((effectiveSec % 3600) / 60);
                  desc.textContent = `留守にしていた ${hours > 0 ? hours + '時間' : ''}${mins}分の間に、仲間たちが自動でスライムを討伐しました！`;
                  goldVal.textContent = `+${this.formatNumber(offlineGold)} G`;
                  modal.classList.add("show");
                }
              }, 500);
            }
          }
        }
      }
    } catch (e) {
      console.warn("Load failed, falling back to default:", e);
      this.sanitizeState();
    }
  }

  // どんな端末や古いセーブデータでも100%安全に稼働させるサニタイズ処理
  sanitizeState() {
    this.state.gold = Number(this.state.gold) || 0;
    this.state.totalGold = Number(this.state.totalGold) || 0;
    this.state.clickLevel = Number(this.state.clickLevel) || 0;
    this.state.crystals = Number(this.state.crystals) || 0;
    this.state.totalCrystals = Number(this.state.totalCrystals) || 0;
    this.state.skillPoints = Number(this.state.skillPoints) || 0;
    this.state.totalSkillPoints = Number(this.state.totalSkillPoints) || 0;
    this.state.rebirthCount = Number(this.state.rebirthCount) || 0;
    this.state.currentLevel = Math.max(1, Number(this.state.currentLevel) || 1);
    this.state.buyMultiplier = Number(this.state.buyMultiplier) || 1;
    this.state.meteorRushTimer = (typeof this.state.meteorRushTimer === 'number' && !isNaN(this.state.meteorRushTimer) && this.state.meteorRushTimer <= 120) ? this.state.meteorRushTimer : 120;
    this.state.meteorRushActiveTime = Number(this.state.meteorRushActiveTime) || 0;

    this.state.buildings = this.state.buildings || {};
    BUILDINGS_MASTER.forEach(b => {
      if (typeof this.state.buildings[b.id] !== 'number' || isNaN(this.state.buildings[b.id])) {
        this.state.buildings[b.id] = 0;
      }
    });

    this.state.skills = this.state.skills || {};
    SKILLS_MASTER.forEach(s => {
      if (typeof this.state.skills[s.id] !== 'boolean') {
        this.state.skills[s.id] = false;
      }
    });

    this.state.rebirthSkills = this.state.rebirthSkills || {};
    REBIRTH_SKILLS_MASTER.forEach(rs => {
      if (typeof this.state.rebirthSkills[rs.id] !== 'number' || isNaN(this.state.rebirthSkills[rs.id])) {
        this.state.rebirthSkills[rs.id] = 0;
      }
    });

    this.state.activeCooldowns = this.state.activeCooldowns || {};
    ['skill_berserk', 'skill_goldrush', 'skill_meteor', 'skill_cyclone'].forEach(sId => {
      this.state.activeCooldowns[sId] = Number(this.state.activeCooldowns[sId]) || 0;
    });

    this.state.activeBuffs = this.state.activeBuffs || {};
    this.state.activeBuffs.berserk = Number(this.state.activeBuffs.berserk) || 0;
    this.state.activeBuffs.cyclone = Number(this.state.activeBuffs.cyclone) || 0;
  }
}

// どんな端末や読み込み順序でも100%確実に初期化起動
const initGameApp = () => {
  try {
    const game = new Game();
    game.init();
    window.__SLIME_QUEST_GAME__ = game;
  } catch (err) {
    console.error("Game launch error:", err);
  }
};

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", initGameApp);
} else {
  initGameApp();
}
