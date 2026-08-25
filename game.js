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

// --- 2. モンスター種族・カテゴリデータ (100レベルごとに新たな種族へ進化！) ---
const MONSTER_CATEGORIES = [
  {
    minLevel: 1,
    maxLevel: 99,
    raceName: "スライム族",
    icon: "💧",
    types: [
      { name: "グリーンスライム", color1: "#86efac", color2: "#22c55e", color3: "#15803d", eyeType: "cute" },
      { name: "ブルースライム", color1: "#7dd3fc", color2: "#0284c7", color3: "#0369a1", eyeType: "cute" },
      { name: "ポイズンスライム", color1: "#d8b4fe", color2: "#9333ea", color3: "#581c87", eyeType: "evil" },
      { name: "フレイムスライム", color1: "#fca5a5", color2: "#ef4444", color3: "#991b1b", eyeType: "fierce" },
      { name: "ホーリーライム", color1: "#fef08a", color2: "#eab308", color3: "#854d0e", eyeType: "cute" },
      { name: "ダークスライム", color1: "#94a3b8", color2: "#334155", color3: "#0f172a", eyeType: "evil" }
    ],
    bossPrefix: "キング"
  },
  {
    minLevel: 100,
    maxLevel: 199,
    raceName: "スケルトン族",
    icon: "💀",
    types: [
      { name: "ガイコツ見張り兵", color1: "#f8fafc", color2: "#cbd5e1", color3: "#64748b", eyeType: "skull" },
      { name: "ボーンウォリアー", color1: "#e2e8f0", color2: "#94a3b8", color3: "#475569", eyeType: "skull" },
      { name: "スカルメイジ", color1: "#c084fc", color2: "#9333ea", color3: "#581c87", eyeType: "magic" },
      { name: "カースドスケルトン", color1: "#fca5a5", color2: "#dc2626", color3: "#7f1d1d", eyeType: "fierce" },
      { name: "ファントムナイト", color1: "#67e8f9", color2: "#0891b2", color3: "#164e63", eyeType: "magic" }
    ],
    bossPrefix: "スケルトンロード"
  },
  {
    minLevel: 200,
    maxLevel: 299,
    raceName: "ゴブリン・魔獣族",
    icon: "👺",
    types: [
      { name: "ゴブリンシーフ", color1: "#86efac", color2: "#16a34a", color3: "#14532d", eyeType: "goblin" },
      { name: "ゴブリンファイター", color1: "#fdba74", color2: "#ea580c", color3: "#9a3412", eyeType: "goblin" },
      { name: "オークウォーリアー", color1: "#a3e635", color2: "#65a30d", color3: "#365314", eyeType: "fierce" },
      { name: "トロールバーサーカー", color1: "#fca5a5", color2: "#b91c1c", color3: "#450a0a", eyeType: "fierce" }
    ],
    bossPrefix: "大頭領ゴブリン"
  },
  {
    minLevel: 300,
    maxLevel: 399,
    raceName: "ゴーレム・魔導巨神族",
    icon: "🗿",
    types: [
      { name: "ロックゴーレム", color1: "#d6d3d1", color2: "#78716c", color3: "#44403c", eyeType: "golem" },
      { name: "アイアンゴーレム", color1: "#cbd5e1", color2: "#64748b", color3: "#1e293b", eyeType: "golem" },
      { name: "マグマゴーレム", color1: "#fdba74", color2: "#dc2626", color3: "#7f1d1d", eyeType: "fierce" },
      { name: "クリスタルゴーレム", color1: "#7dd3fc", color2: "#0284c7", color3: "#1e3a8a", eyeType: "magic" }
    ],
    bossPrefix: "古代巨神"
  },
  {
    minLevel: 400,
    maxLevel: 499,
    raceName: "デーモン・魔王軍族",
    icon: "👿",
    types: [
      { name: "シャドウインプ", color1: "#c084fc", color2: "#7e22ce", color3: "#3b0764", eyeType: "demon" },
      { name: "レッサーデーモン", color1: "#f87171", color2: "#dc2626", color3: "#450a0a", eyeType: "demon" },
      { name: "死神リーパー", color1: "#94a3b8", color2: "#1e293b", color3: "#020617", eyeType: "skull" },
      { name: "アークデーモン", color1: "#fb7185", color2: "#e11d48", color3: "#881337", eyeType: "fierce" }
    ],
    bossPrefix: "魔王"
  },
  {
    minLevel: 500,
    maxLevel: 599,
    raceName: "契約飛竜・ドラゴン族",
    icon: "🐉",
    types: [
      { name: "ワイバーン", color1: "#86efac", color2: "#15803d", color3: "#052e16", eyeType: "dragon" },
      { name: "フレイムドラゴン", color1: "#fca5a5", color2: "#b91c1c", color3: "#450a0a", eyeType: "dragon" },
      { name: "フロストドラゴン", color1: "#bae6fd", color2: "#0284c7", color3: "#0c4a6e", eyeType: "dragon" },
      { name: "カオスドラゴン", color1: "#e879f9", color2: "#86198f", color3: "#4a044e", eyeType: "dragon" }
    ],
    bossPrefix: "太古の覇竜"
  },
  {
    minLevel: 600,
    maxLevel: 699,
    raceName: "星辰の邪神・宇宙支配者族",
    icon: "🌌",
    types: [
      { name: "コズミックビースト", color1: "#c084fc", color2: "#3b0764", color3: "#000000", eyeType: "cosmic" },
      { name: "星喰らいの影", color1: "#f472b6", color2: "#831843", color3: "#0f172a", eyeType: "cosmic" },
      { name: "虚無の巨神", color1: "#38bdf8", color2: "#1e1b4b", color3: "#020617", eyeType: "cosmic" },
      { name: "アザトースの化身", color1: "#fbbf24", color2: "#7c2d12", color3: "#000000", eyeType: "cosmic" }
    ],
    bossPrefix: "万物の支配神"
  },
  {
    minLevel: 700,
    maxLevel: 999999,
    raceName: "超越神・アルティメット族",
    icon: "👑",
    types: [
      { name: "光輪の至高神", color1: "#fef08a", color2: "#f59e0b", color3: "#78350f", eyeType: "cosmic" },
      { name: "時空の覇帝", color1: "#c084fc", color2: "#7c3aed", color3: "#2e1065", eyeType: "demon" },
      { name: "終焉の創世龍", color1: "#f43f5e", color2: "#991b1b", color3: "#000000", eyeType: "dragon" }
    ],
    bossPrefix: "全知全能の"
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

  // --- モンスターの外見・SVG動的描画（種族ごとに完全専用グラフィック！） ---
  updateSlimeAppearance() {
    const stop1 = document.getElementById("grad-stop-1");
    const stop2 = document.getElementById("grad-stop-2");
    const stop3 = document.getElementById("grad-stop-3");
    if (stop1 && stop2 && stop3) {
      stop1.setAttribute("stop-color", this.enemy.color1);
      stop2.setAttribute("stop-color", this.enemy.color2);
      stop3.setAttribute("stop-color", this.enemy.color3);
    }

    const contentGroup = document.getElementById("monster-content");
    if (contentGroup) {
      const race = this.enemy.raceName || "";
      const et = this.enemy.eyeType || "";

      if (race.includes("スケルトン")) {
        // 💀 スケルトン族（頭蓋骨 ＆ 後ろの交差する大腿骨）
        contentGroup.innerHTML = `
          <!-- 後ろの交差する大腿骨（クロスボーン） -->
          <g stroke="#cbd5e1" stroke-width="12" stroke-linecap="round" fill="none">
            <line x1="28" y1="28" x2="172" y2="172" />
            <line x1="172" y1="28" x2="28" y2="172" />
          </g>
          <circle cx="24" cy="24" r="9" fill="#e2e8f0" /><circle cx="34" cy="34" r="9" fill="#e2e8f0" />
          <circle cx="176" cy="24" r="9" fill="#e2e8f0" /><circle cx="166" cy="34" r="9" fill="#e2e8f0" />
          <circle cx="24" cy="176" r="9" fill="#e2e8f0" /><circle cx="34" cy="166" r="9" fill="#e2e8f0" />
          <circle cx="176" cy="176" r="9" fill="#e2e8f0" /><circle cx="166" cy="166" r="9" fill="#e2e8f0" />
          
          <!-- 頭蓋骨ボディ -->
          <path d="M100,24 C148,24 175,54 175,100 C175,130 155,145 135,150 L135,182 L65,182 L65,150 C45,145 25,130 25,100 C25,54 52,24 100,24 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#475569" stroke-width="3.5" />
          
          <!-- 額のひび割れ -->
          <path d="M100,28 L94,48 L104,64 L98,82" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round" />
          
          <!-- 深い暗黒眼窩 ＆ 赤い発光眼 -->
          <ellipse cx="65" cy="100" rx="22" ry="24" fill="#0f172a" stroke="#334155" stroke-width="3" />
          <circle cx="65" cy="100" r="7" fill="#ef4444" filter="drop-shadow(0 0 8px #ef4444)" />
          <ellipse cx="135" cy="100" rx="22" ry="24" fill="#0f172a" stroke="#334155" stroke-width="3" />
          <circle cx="135" cy="100" r="7" fill="#ef4444" filter="drop-shadow(0 0 8px #ef4444)" />
          
          <!-- 三角形の鼻腔 -->
          <polygon points="100,120 92,138 108,138" fill="#0f172a" />
          
          <!-- 歯並びと顎骨 -->
          <rect x="75" y="156" width="50" height="22" rx="3" fill="#0f172a" />
          <path d="M80,156 L80,178 M90,156 L90,178 M100,156 L100,178 M110,156 L110,178 M120,156 L120,178 M75,167 L125,167" 
                stroke="#f8fafc" stroke-width="3" stroke-linecap="square" />
        `;
      } else if (race.includes("ゴブリン") || race.includes("魔獣")) {
        // 👺 ゴブリン・魔獣族（尖った大きな耳 + 鉤鼻 + 下牙 + ギョロ目）
        contentGroup.innerHTML = `
          <!-- 尖った大耳（左右） -->
          <polygon points="35,100 0,55 40,80" fill="${this.enemy.color2}" stroke="#14532d" stroke-width="3" />
          <polygon points="165,100 200,55 160,80" fill="${this.enemy.color2}" stroke="#14532d" stroke-width="3" />
          <polygon points="32,95 8,65 36,82" fill="#fca5a5" opacity="0.6" />
          <polygon points="168,95 192,65 164,82" fill="#fca5a5" opacity="0.6" />
          
          <!-- ゴブリンヘッド -->
          <path d="M100,32 C150,32 170,78 165,130 C160,170 140,185 100,185 C60,185 40,170 35,130 C30,78 50,32 100,32 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#14532d" stroke-width="3.5" />
          
          <!-- トゲトゲの頭髪 -->
          <polygon points="90,34 100,8 110,34" fill="#1e293b" />
          <polygon points="72,38 82,16 94,38" fill="#1e293b" />
          <polygon points="106,38 118,16 128,38" fill="#1e293b" />
          
          <!-- ギラつく黄色い目 -->
          <ellipse cx="68" cy="95" rx="14" ry="18" fill="#fef08a" stroke="#0f172a" stroke-width="3" />
          <ellipse cx="68" cy="95" rx="4" ry="10" fill="#7f1d1d" />
          <ellipse cx="132" cy="95" rx="14" ry="18" fill="#fef08a" stroke="#0f172a" stroke-width="3" />
          <ellipse cx="132" cy="95" rx="4" ry="10" fill="#7f1d1d" />
          
          <!-- 鉤鼻 -->
          <polygon points="100,88 90,126 110,126" fill="${this.enemy.color3}" stroke="#0f172a" stroke-width="2" />
          
          <!-- 裂けた口と突き出た下牙 -->
          <path d="M65,145 Q100,170 135,145" stroke="#0f172a" stroke-width="5" fill="none" stroke-linecap="round" />
          <polygon points="78,158 84,136 90,158" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
          <polygon points="110,158 116,136 122,158" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
        `;
      } else if (race.includes("ゴーレム") || race.includes("巨神")) {
        // 🗿 ゴーレム・魔導巨神族（角ばった岩石ブロック + 発光する古代の単眼コア）
        contentGroup.innerHTML = `
          <!-- 巨岩ブロックボディ -->
          <polygon points="100,18 168,48 178,130 148,185 52,185 22,130 32,48" 
                   fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#1e293b" stroke-width="5" />
          
          <!-- 岩の亀裂ライン -->
          <path d="M32,48 L80,75 L65,120 L100,140 L150,110 L168,48 M100,140 L100,185 M80,75 L120,75" 
                stroke="#0f172a" stroke-width="3.5" fill="none" />
          
          <!-- 単眼バイザー・発光コアスリット -->
          <rect x="45" y="85" width="110" height="26" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2.5" />
          <circle cx="100" cy="98" r="11" fill="#38bdf8" filter="drop-shadow(0 0 14px #38bdf8)" />
          <circle cx="100" cy="98" r="4" fill="#ffffff" />
          
          <!-- 無骨な口スリット -->
          <path d="M68,155 L132,155" stroke="#0f172a" stroke-width="8" stroke-linecap="round" />
        `;
      } else if (race.includes("デーモン") || race.includes("魔王")) {
        // 👿 デーモン・魔王軍族（湾曲した悪魔の角 + 翼 + 邪悪な吊り目）
        contentGroup.innerHTML = `
          <!-- 悪魔の角（左右） -->
          <path d="M60,60 C30,10 10,20 0,5 C20,35 35,45 50,75 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="2.5" />
          <path d="M140,60 C170,10 190,20 200,5 C180,35 165,45 150,75 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="2.5" />
          
          <!-- コウモリ翼（左右） -->
          <path d="M30,110 Q0,80 5,140 Q25,130 30,110 Z" fill="#450a0a" opacity="0.85" />
          <path d="M170,110 Q200,80 195,140 Q175,130 170,110 Z" fill="#450a0a" opacity="0.85" />
          
          <!-- デーモンボディ -->
          <path d="M100,42 C150,42 175,85 170,135 C165,175 145,185 100,185 C55,185 35,175 30,135 C25,85 50,42 100,42 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#450a0a" stroke-width="3.5" />
          
          <!-- 邪悪な吊り目 -->
          <polygon points="50,95 85,108 55,115" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <circle cx="68" cy="106" r="4" fill="#7f1d1d" />
          <polygon points="150,95 115,108 145,115" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <circle cx="132" cy="106" r="4" fill="#7f1d1d" />
          
          <!-- 額の魔王紋章 -->
          <circle cx="100" cy="70" r="8" fill="#dc2626" filter="drop-shadow(0 0 8px #dc2626)" />
          
          <!-- 牙の並ぶ邪悪な口 -->
          <path d="M70,145 Q100,175 130,145" stroke="#0f172a" stroke-width="4" fill="#450a0a" />
          <polygon points="80,145 85,156 90,145" fill="#ffffff" />
          <polygon points="110,145 115,156 120,145" fill="#ffffff" />
        `;
      } else if (race.includes("ドラゴン") || race.includes("飛竜")) {
        // 🐉 契約飛竜・ドラゴン族（竜の角 + 爬虫類の縦瞳 + 鋭い牙）
        contentGroup.innerHTML = `
          <!-- 竜の角（4本） -->
          <polygon points="65,55 35,8 50,55" fill="#78350f" stroke="#451a03" stroke-width="2" />
          <polygon points="135,55 165,8 150,55" fill="#78350f" stroke="#451a03" stroke-width="2" />
          <polygon points="75,50 60,18 70,50" fill="#9a3412" />
          <polygon points="125,50 140,18 130,50" fill="#9a3412" />
          
          <!-- ドラゴンヘッド -->
          <path d="M100,32 C155,32 180,75 175,130 C170,170 140,185 100,185 C60,185 30,170 25,130 C20,75 45,32 100,32 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#451a03" stroke-width="3.5" />
          
          <!-- ドラゴンの瞳（縦スリット） -->
          <ellipse cx="65" cy="98" rx="15" ry="12" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <rect x="63" y="88" width="4" height="20" rx="2" fill="#0f172a" />
          <ellipse cx="135" cy="98" rx="15" ry="12" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
          <rect x="133" y="88" width="4" height="20" rx="2" fill="#0f172a" />
          
          <!-- 鼻孔 -->
          <circle cx="88" cy="132" r="4" fill="#0f172a" />
          <circle cx="112" cy="132" r="4" fill="#0f172a" />
          
          <!-- 牙の並ぶ顎 -->
          <path d="M60,148 Q100,175 140,148" stroke="#0f172a" stroke-width="4" fill="none" />
          <polygon points="75,148 80,162 85,148" fill="#ffffff" />
          <polygon points="95,150 100,165 105,150" fill="#ffffff" />
          <polygon points="115,148 120,162 125,148" fill="#ffffff" />
        `;
      } else if (race.includes("宇宙") || race.includes("星辰")) {
        // 🌌 星辰の邪神・宇宙支配者族（蠢く触手 + 巨大な第三の目 + 無数の瞳）
        contentGroup.innerHTML = `
          <!-- 蠢く触手 -->
          <path d="M30,130 Q0,160 10,190" stroke="#7e22ce" stroke-width="12" stroke-linecap="round" fill="none" />
          <path d="M170,130 Q200,160 190,190" stroke="#7e22ce" stroke-width="12" stroke-linecap="round" fill="none" />
          <path d="M50,150 Q30,190 50,200" stroke="#a855f7" stroke-width="10" stroke-linecap="round" fill="none" />
          <path d="M150,150 Q170,190 150,200" stroke="#a855f7" stroke-width="10" stroke-linecap="round" fill="none" />
          
          <!-- コズミックボディ -->
          <circle cx="100" cy="110" r="70" fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#c084fc" stroke-width="4" />
          
          <!-- 開眼した第三の目（中央巨大） -->
          <ellipse cx="100" cy="78" rx="26" ry="18" fill="#f472b6" stroke="#0f172a" stroke-width="3" />
          <circle cx="100" cy="78" r="10" fill="#3b0764" />
          <circle cx="100" cy="78" r="4" fill="#ffffff" />
          
          <!-- 怪異な瞳群 -->
          <ellipse cx="65" cy="120" rx="12" ry="12" fill="#fef08a" />
          <circle cx="65" cy="120" r="5" fill="#7f1d1d" />
          <ellipse cx="135" cy="120" rx="12" ry="12" fill="#fef08a" />
          <circle cx="135" cy="120" r="5" fill="#7f1d1d" />
          <circle cx="82" cy="148" r="8" fill="#fef08a" /><circle cx="82" cy="148" r="3" fill="#7f1d1d" />
          <circle cx="118" cy="148" r="8" fill="#fef08a" /><circle cx="118" cy="148" r="3" fill="#7f1d1d" />
        `;
      } else if (race.includes("超越") || race.includes("アルティメット")) {
        // 👑 超越神・アルティメット族（幾何学光輪 + 至高の王冠 + 黄金の神眼）
        contentGroup.innerHTML = `
          <!-- 背後の幾何学光輪 -->
          <circle cx="100" cy="100" r="85" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,6" />
          <polygon points="100,10 190,100 100,190 10,100" fill="none" stroke="#fef08a" stroke-width="2" opacity="0.7" />
          <polygon points="100,15 185,100 100,185 15,100" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.7" transform="rotate(45 100 100)" />
          
          <!-- 神性ボディ -->
          <path d="M100,28 C150,28 180,75 175,130 C170,175 145,185 100,185 C55,185 30,175 25,130 C20,75 50,28 100,28 Z" 
                fill="url(#monster-grad)" filter="url(#slime-glow)" stroke="#fef08a" stroke-width="4" />
          
          <!-- 神眼 -->
          <ellipse cx="70" cy="105" rx="16" ry="10" fill="#ffffff" stroke="#d97706" stroke-width="2" />
          <circle cx="70" cy="105" r="6" fill="#38bdf8" />
          <ellipse cx="130" cy="105" rx="16" ry="10" fill="#ffffff" stroke="#d97706" stroke-width="2" />
          <circle cx="130" cy="105" r="6" fill="#38bdf8" />
          <circle cx="100" cy="72" r="10" fill="#fef08a" stroke="#d97706" stroke-width="2" filter="drop-shadow(0 0 10px #fbbf24)" />
          <circle cx="100" cy="72" r="4" fill="#7c3aed" />
        `;
      } else {
        // 💧 スライム族（ぷるぷるスライムボディ + 光沢 + ほっぺ）
        contentGroup.innerHTML = `
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
        `;
      }
    }

    const acc = document.getElementById("slime-accessory");
    if (acc) {
      if (this.enemy.isBoss) {
        acc.innerHTML = `
          <polygon points="70,35 80,5 100,25 120,5 130,35" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
          <circle cx="80" cy="5" r="3" fill="#ef4444" />
          <circle cx="100" cy="25" r="3" fill="#38bdf8" />
          <circle cx="120" cy="5" r="3" fill="#ef4444" />
        `;
      } else if (this.enemy.isMetal) {
        acc.innerHTML = `
          <polygon points="100,5 108,22 126,22 111,33 117,50 100,39 83,50 89,33 74,22 92,22" fill="#f8fafc" opacity="0.85" />
        `;
      } else {
        acc.innerHTML = "";
      }
    }
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

  // --- 水晶を消費して転生を実行（SP +1 pt 獲得！） ---
  executeRebirth() {
    const req = this.getRequiredCrystals();
    if (this.state.crystals < req) {
      this.showToast(`❌ 転生には「転生の水晶 💎」が ${req}個 必要です！`);
      return;
    }

    this.sound.playRebirth();

    // 必要個数の水晶を消費して、古代スキルポイント(SP)を 1pt 獲得！
    this.state.crystals -= req;
    this.state.skillPoints += 1;
    this.state.totalSkillPoints += 1;
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
    this.showToast(`🔮 転生完了 (${this.state.rebirthCount}回目)！ 古代スキルポイント(SP)を 2pt 獲得しました！`);
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
      btn.innerHTML = `<span>💎 転生する (${req}個消費 / SP+1)</span>`;
      title.textContent = `✨ 転生可能！ (${nextRebirthNum}回目の転生)`;
      sub.textContent = `所持水晶: 💎 ${this.state.crystals} / 必要: ${req}個 を消費して「古代SP 🔮 +1 pt」を獲得！`;
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
          <strong style="color: #d8b4fe;">「古代スキルポイント 🔮 +2 SP」を獲得し、習得した古代の秘術はすべて永久に引き継がれます！</strong>
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
