/**
 * スライムクリッカー放置RPG - ゲームエンジン
 */

// --- 1. 定数・マスターデータ ---
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
];

const SLIME_TYPES = [
  { name: "グリーンスライム", color1: "#86efac", color2: "#22c55e", color3: "#15803d" },
  { name: "ブルースライム", color1: "#7dd3fc", color2: "#0284c7", color3: "#0369a1" },
  { name: "ポイズンスライム", color1: "#d8b4fe", color2: "#9333ea", color3: "#581c87" },
  { name: "フレイムスライム", color1: "#fca5a5", color2: "#ef4444", color3: "#991b1b" },
  { name: "ホーリーライム", color1: "#fef08a", color2: "#eab308", color3: "#854d0e" },
  { name: "ダークスライム", color1: "#94a3b8", color2: "#334155", color3: "#0f172a" },
];

const BUILDINGS_MASTER = [
  { id: "trap", name: "スライム捕獲罠", icon: "🪤", attackIcon: "🪤", desc: "自動でスライムを捕獲して少しずつコインを稼ぐ", baseCost: 15, baseDPS: 1 },
  { id: "novice", name: "見習い剣士", icon: "🗡️", attackIcon: "⚔️", desc: "駆け出しの冒険者が定期的にスライムを斬りつける", baseCost: 100, baseDPS: 8 },
  { id: "archer", name: "弓兵の物見櫓", icon: "🏹", attackIcon: "🏹", desc: "遠距離から矢を雨のように降らせて討伐支援", baseCost: 1100, baseDPS: 45 },
  { id: "mage_tower", name: "魔導オートタワー", icon: "🔮", attackIcon: "🔮", desc: "魔力で自動追尾の魔法弾を連射する古代兵器", baseCost: 12000, baseDPS: 220 },
  { id: "ranch", name: "スライム自動牧場", icon: "🏡", attackIcon: "🍖", desc: "スライムを繁殖・出荷して大量の素材と富を得る", baseCost: 130000, baseDPS: 1000 },
  { id: "cannon", name: "錬金術カノン砲", icon: "💥", attackIcon: "💥", desc: "超高圧の錬金エネルギー弾でまとめて粉砕する", baseCost: 1400000, baseDPS: 6000 },
  { id: "guild", name: "冒険者ギルド本部", icon: "🏰", attackIcon: "🛡️", desc: "精鋭の冒険者部隊を一斉派遣して掃討作戦を展開", baseCost: 20000000, baseDPS: 40000 },
  { id: "dragon", name: "契約ドラゴン", icon: "🐉", attackIcon: "🔥", desc: "伝説の竜を召喚し圧倒的ブレスで殲滅する", baseCost: 330000000, baseDPS: 300000 }
];

const SKILLS_MASTER = [
  { id: "click_power_1", name: "力任せの打撃", icon: "👊", desc: "クリック攻撃力が +100% 増加する", cost: 50, type: "passive" },
  { id: "crit_chance_1", name: "弱点見極め", icon: "🎯", desc: "クリティカル率+10%、クリティカル倍率が2.5倍になる", cost: 300, type: "passive" },
  { id: "trap_mastery", name: "罠の改良術", icon: "⚙️", desc: "「スライム捕獲罠」の生産効率が3倍になる", cost: 800, type: "passive" },
  { id: "skill_berserk", name: "スキル: バーサーク", icon: "🔥", desc: "【アクティブ】15秒間、クリック攻撃力とDPSが3倍になる (CD: 60秒)", cost: 2000, type: "active", cd: 60, duration: 15 },
  { id: "click_power_2", name: "剣技の心得", icon: "⚔️", desc: "DPS（秒間自動攻撃力）の10%がクリック攻撃力に加算される", cost: 8000, type: "passive" },
  { id: "bounty_hunter", name: "賞金首ハンター", icon: "💎", desc: "スライム討伐時の獲得ゴールドが +50% 増加する", cost: 25000, type: "passive" },
  { id: "skill_goldrush", name: "スキル: ゴールドラッシュ", icon: "💰", desc: "【アクティブ】即座に秒間DPSの30秒分のゴールドを獲得する (CD: 90秒)", cost: 60000, type: "active", cd: 90 },
  { id: "building_synergy", name: "連携の極意", icon: "🤝", desc: "すべての建物の攻撃力・生産力が 2倍 になる", cost: 150000, type: "passive" },
  { id: "skill_meteor", name: "スキル: メテオ落とし", icon: "☄️", desc: "【アクティブ】巨大な隕石を落とし、スライムに現在DPSの50倍ダメージを一撃で与える (CD: 120秒)", cost: 500000, type: "active", cd: 120 },
  { id: "crit_power_2", name: "会心の極意", icon: "⚡", desc: "クリティカル率+15%、クリティカル倍率が 5倍 に跳ね上がる", cost: 1500000, type: "passive" },
  { id: "golden_touch", name: "ミダスタッチ", icon: "👑", desc: "クリック時、10%の確率でスライムの最大HP20%相当のボーナスゴールドを獲得", cost: 5000000, type: "passive" }
];

// --- 古代の秘術（古代スキルポイント SP を消費して永続強化） ---
const REBIRTH_SKILLS_MASTER = [
  { 
    id: "soul_strike", 
    name: "魂の研鑽", 
    icon: "👊", 
    desc: "クリック攻撃力が永続で +20% 増加する (現在: +{val}%)", 
    maxLevel: 5, 
    costPerLevel: 1, 
    valuePerLevel: 20 
  },
  { 
    id: "ancient_craft", 
    name: "古代の建築術", 
    icon: "🏛️", 
    desc: "すべての建物の生産力が永続で +15% 増加する (現在: +{val}%)", 
    maxLevel: 5, 
    costPerLevel: 1, 
    valuePerLevel: 15 
  },
  { 
    id: "merchant_wit", 
    name: "商人の知恵", 
    icon: "💰", 
    desc: "スライム討伐時のゴールドが永続で +20% 増加する (現在: +{val}%)", 
    maxLevel: 5, 
    costPerLevel: 1, 
    valuePerLevel: 20 
  },
  { 
    id: "true_eye", 
    name: "真理の瞳", 
    icon: "🎯", 
    desc: "クリティカル率+3%、クリティカル倍率+20% (現在: 率+{val1}%, 倍率+{val2}%)", 
    maxLevel: 3, 
    costPerLevel: 1, 
    val1: 3, 
    val2: 20 
  },
  { 
    id: "battle_flow", 
    name: "精神統一", 
    icon: "⚡", 
    desc: "全スキルのクールダウンが永続で 10% 短縮される (現在: -{val}%)", 
    maxLevel: 3, 
    costPerLevel: 1, 
    valuePerLevel: 10 
  },
  { 
    id: "auto_fairy", 
    name: "オートタップ小妖精", 
    icon: "🧚", 
    desc: "1秒に1回、自動でスライムをクリックしてくれるお助け妖精を召喚！", 
    maxLevel: 1, 
    costPerLevel: 1, 
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
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1, freqSlide = null) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
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
      // AudioContext fails gracefully
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
      activeCooldowns: {
        skill_berserk: 0,
        skill_goldrush: 0,
        skill_meteor: 0
      },
      activeBuffs: {
        berserk: 0
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
      color1: "#86efac",
      color2: "#22c55e",
      color3: "#15803d"
    };

    BUILDINGS_MASTER.forEach(b => this.state.buildings[b.id] = 0);
    SKILLS_MASTER.forEach(s => this.state.skills[s.id] = false);
    REBIRTH_SKILLS_MASTER.forEach(rs => this.state.rebirthSkills[rs.id] = 0);

    this.lastFrameTime = performance.now();
    this.autoSaveTimer = 0;
    this.autoAttackTimer = 0;
    this.fairyClickTimer = 0;
    this.isDefeating = false; // 討伐アニメーション中の重複ダメージ防止フラグ
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

  getStageIndex() {
    const stageIdx = Math.floor((this.state.currentLevel - 1) / 10);
    return Math.min(stageIdx, STAGES.length - 1);
  }

  isBossLevel(level = this.state.currentLevel) {
    return level % 10 === 0;
  }

  // 転生に必要な水晶数：1回目は1個、2回目は2個、3回目は3個...と1個ずつ増加！
  getRequiredCrystals() {
    return (this.state.rebirthCount || 0) + 1;
  }

  // 転生可能判定：必要水晶数を満たしているか
  canRebirth() {
    return this.state.crystals >= this.getRequiredCrystals();
  }

  getClickPower() {
    let power = 1;
    if (this.state.skills["click_power_1"]) power *= 2;
    if (this.state.skills["click_power_2"]) {
      const dps = this.getDPS(false);
      power += Math.floor(dps * 0.1);
    }
    // 転生パッシブ: 魂の研鑽 (+20%/Lv)
    const soulStrikeLvl = this.state.rebirthSkills["soul_strike"] || 0;
    if (soulStrikeLvl > 0) {
      power = Math.floor(power * (1 + soulStrikeLvl * 0.20));
    }
    if (this.state.activeBuffs.berserk > 0) power *= 3;
    return Math.max(1, power);
  }

  getCritInfo() {
    let chance = 0.05;
    let multiplier = 2.0;
    if (this.state.skills["crit_chance_1"]) {
      chance += 0.10;
      multiplier = 2.5;
    }
    if (this.state.skills["crit_power_2"]) {
      chance += 0.15;
      multiplier = 5.0;
    }
    // 転生パッシブ: 真理の瞳 (+3%率, +20%倍率/Lv)
    const eyeLvl = this.state.rebirthSkills["true_eye"] || 0;
    if (eyeLvl > 0) {
      chance += eyeLvl * 0.03;
      multiplier += eyeLvl * 0.20;
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

    // 転生パッシブ: 古代の建築術 (+15%/Lv)
    const craftLvl = this.state.rebirthSkills["ancient_craft"] || 0;
    if (craftLvl > 0) {
      totalDPS = Math.floor(totalDPS * (1 + craftLvl * 0.15));
    }

    if (withBuffs && this.state.activeBuffs.berserk > 0) {
      totalDPS *= 3;
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

  // --- スライム生成 ---
  spawnEnemy() {
    const level = this.state.currentLevel;
    const stageIdx = this.getStageIndex();
    const isBoss = this.isBossLevel(level);
    
    const typeIdx = Math.min(stageIdx, SLIME_TYPES.length - 1);
    const type = SLIME_TYPES[typeIdx];

    const isMetal = !isBoss && Math.random() < 0.05;

    let baseHp = Math.floor(25 + (level - 1) * 20 + Math.pow(level, 1.6) * 8);
    let baseGold = Math.max(3, Math.floor(4 + (level - 1) * 2.5 + Math.pow(level, 1.3) * 1.2));

    if (isMetal) {
      this.enemy = {
        name: `✨ メタルスライム (Lv.${level})`,
        level: level,
        hp: Math.max(15, Math.floor(baseHp * 0.4)),
        maxHp: Math.max(15, Math.floor(baseHp * 0.4)),
        gold: baseGold * 12,
        isBoss: false,
        isMetal: true,
        color1: "#e2e8f0",
        color2: "#94a3b8",
        color3: "#475569"
      };
    } else if (isBoss) {
      const bossHp = Math.floor(baseHp * 3.8);
      const bossGold = Math.floor(baseGold * 5.0);
      this.state.bossTimer = 40;

      this.enemy = {
        name: `👑 キング${type.name} (Lv.${level})`,
        level: level,
        hp: bossHp,
        maxHp: bossHp,
        gold: bossGold,
        isBoss: true,
        isMetal: false,
        color1: type.color1,
        color2: type.color2,
        color3: type.color3
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
        color1: type.color1,
        color2: type.color2,
        color3: type.color3
      };
    }

    this.updateSlimeAppearance();
    this.renderEnemyUI();
  }

  updateSlimeAppearance() {
    const stop1 = document.getElementById("grad-stop-1");
    const stop2 = document.getElementById("grad-stop-2");
    const stop3 = document.getElementById("grad-stop-3");
    if (stop1 && stop2 && stop3) {
      stop1.setAttribute("stop-color", this.enemy.color1);
      stop2.setAttribute("stop-color", this.enemy.color2);
      stop3.setAttribute("stop-color", this.enemy.color3);
    }

    const acc = document.getElementById("slime-accessory");
    if (acc) {
      if (this.enemy.isBoss) {
        acc.innerHTML = `
          <polygon points="70,45 80,15 100,35 120,15 130,45" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
          <circle cx="80" cy="15" r="3" fill="#ef4444" />
          <circle cx="100" cy="35" r="3" fill="#38bdf8" />
          <circle cx="120" cy="15" r="3" fill="#ef4444" />
        `;
      } else if (this.enemy.isMetal) {
        acc.innerHTML = `
          <polygon points="100,5 108,22 126,22 111,33 117,50 100,39 83,50 89,33 74,22 92,22" fill="#f8fafc" opacity="0.8" />
        `;
      } else {
        acc.innerHTML = "";
      }
    }
  }

  // --- ダイナミック背景環境の更新 ---
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
    // ダメージ表示はスライムの頭上（上部中央）にピョンと出す！
    const headX = slimeRect.left + slimeRect.width / 2;
    const headY = slimeRect.top + 15;

    this.sound.playAutoHit();
    slimeTarget.classList.remove("hit");
    void slimeTarget.offsetWidth;
    slimeTarget.classList.add("hit");

    // スライム頭上に自動ダメージ表示
    this.createDamagePopup(Math.ceil(totalDmg), false, true, headX, headY);

    // 【加勢ボーナスコイン】仲間が攻撃するたびに多めのゴールドを自動獲得！
    let autoGold = Math.max(2, Math.floor(totalDmg * 0.8 + this.enemy.level * 1.2));
    const merchantLvl = this.state.rebirthSkills["merchant_wit"] || 0;
    if (merchantLvl > 0) {
      autoGold = Math.floor(autoGold * (1 + merchantLvl * 0.20));
    }
    this.addGold(autoGold);
    // 加勢コインポップアップ (頭上右側へスッと飛ぶ)
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

    this.state.totalClicks++;
    
    const clickPower = this.getClickPower();
    const crit = this.getCritInfo();
    const isCrit = Math.random() < crit.chance;
    const dmg = isCrit ? Math.floor(clickPower * crit.multiplier) : clickPower;

    let clickGold = Math.max(1, Math.floor(clickPower * 0.5 + (this.enemy.level * 0.3)));
    const merchantLvl = this.state.rebirthSkills["merchant_wit"] || 0;
    if (merchantLvl > 0) {
      clickGold = Math.floor(clickGold * (1 + merchantLvl * 0.20));
    }
    this.addGold(clickGold);

    const slimeTarget = document.getElementById("slime-target");
    slimeTarget.classList.remove("hit");
    void slimeTarget.offsetWidth;
    slimeTarget.classList.add("hit");

    if (isCrit) {
      this.sound.playCrit();
    } else {
      this.sound.playHit();
    }

    const rect = slimeTarget.getBoundingClientRect();
    // ダメージ表示は常にスライムの頭上（上部中央）に出す！
    const headX = rect.left + rect.width / 2;
    const headY = rect.top + 15;

    // ダメージポップアップ (頭上から上へ跳ね上がる)
    this.createDamagePopup(dmg, isCrit, false, headX, headY);
    // コインポップアップ (頭上右側へスッと飛ぶ)
    this.createDamagePopup(`🪙 +${this.formatNumber(clickGold)}`, false, false, headX + 18, headY - 12, true);

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
      // ボス討伐で転生の水晶を獲得！
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
      goldReward = Math.floor(goldReward * (1 + merchantLvl * 0.20));
    }
    this.addGold(goldReward);

    const slimeTarget = document.getElementById("slime-target");
    const rect = slimeTarget.getBoundingClientRect();

    if (isBoss) {
      this.createDamagePopup(`👑 BOSS撃破！ 💎 転生の水晶 +1個！`, true, false, rect.left + rect.width / 2, rect.top + 10, false, false, false, true);
      this.showToast(`👑 ステージボス撃破！ 「転生の水晶 💎 +1個」を獲得！`);
    } else {
      this.createDamagePopup(`討伐ボーナス +${this.formatNumber(goldReward)} G`, true, false, rect.left + rect.width / 2, rect.top + 25, true, true);
    }

    slimeTarget.classList.add("defeat");

    setTimeout(() => {
      slimeTarget.classList.remove("defeat");

      const oldStageIdx = this.getStageIndex();
      this.state.currentLevel++;
      this.sound.playLevelUp();

      const newStageIdx = this.getStageIndex();
      
      if (newStageIdx > oldStageIdx) {
        const stage = STAGES[newStageIdx];
        this.showToast(`🎉 STAGE CLEAR! 新ステージ「${stage.name}」へ到達！`);
        this.updateArenaEnvironment();
      } else {
        this.showToast(`🆙 LEVEL UP! Lv.${this.state.currentLevel} のスライムが出現！`);
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
      this.showToast(`✨ スキル「${s.name}」を習得！`);
    }
  }

  // --- 古代の秘術（SPを消費して永続強化） ---
  upgradeRebirthSkill(skillId) {
    const rs = REBIRTH_SKILLS_MASTER.find(x => x.id === skillId);
    if (!rs) return;

    const currentLvl = this.state.rebirthSkills[skillId] || 0;
    if (currentLvl >= rs.maxLevel) return;

    const cost = rs.costPerLevel;
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

  // --- 水晶を消費して転生を実行（SP +2 pt 獲得！） ---
  executeRebirth() {
    const req = this.getRequiredCrystals();
    if (this.state.crystals < req) {
      this.showToast(`❌ 転生には「転生の水晶 💎」が ${req}個 必要です！`);
      return;
    }

    this.sound.playRebirth();

    // 必要個数の水晶を消費して、古代スキルポイント(SP)を 2pt 獲得！
    this.state.crystals -= req;
    this.state.skillPoints += 2;
    this.state.totalSkillPoints += 2;
    this.state.rebirthCount += 1;

    // 進行リセット
    this.state.currentLevel = 1;
    this.state.gold = 0;

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
    }

    this.renderActiveSkillBar();
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

    // 1. DPSによる自動攻撃
    const dps = this.getDPS();
    if (dps > 0) {
      const dmgThisFrame = dps * dt;
      this.applyDamage(dmgThisFrame);

      this.autoAttackTimer += dt;
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

    // 4. クールダウン更新
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
    this.renderBuildings();
    this.renderSkills();
    this.renderRebirthSkills();
    this.renderRebirthBanner();
    this.renderActiveSkillBar();
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
      btn.innerHTML = `<span>💎 転生する (${req}個消費 / SP+2)</span>`;
      title.textContent = `✨ 転生可能！ (${nextRebirthNum}回目の転生)`;
      sub.textContent = `所持水晶: 💎 ${this.state.crystals} / 必要: ${req}個 を消費して「古代SP 🔮 +2 pt」を獲得！`;
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
    document.getElementById("stage-icon").textContent = stage.icon;
    document.getElementById("stage-title").textContent = `ステージ ${stage.id}: ${stage.name}`;
    
    const progressEl = document.getElementById("stage-progress-text");
    const currentInStage = ((this.state.currentLevel - 1) % 10) + 1;
    
    if (this.enemy.isBoss) {
      progressEl.innerHTML = `<span style="color: #ef4444; font-weight: bold;">⚠️ ステージ${stage.id} BOSS戦！ (Lv.${this.state.currentLevel}) 💎水晶ドロップ！</span>`;
    } else {
      progressEl.textContent = `進行度: ${currentInStage} / 10 (スライム Lv.${this.state.currentLevel})`;
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

  // --- 転生スキル（古代の秘術）レンダリング ---
  renderRebirthSkills() {
    const container = document.getElementById("rebirth-skill-list");
    if (!container) return;

    container.innerHTML = REBIRTH_SKILLS_MASTER.map(rs => {
      const currentLvl = this.state.rebirthSkills[rs.id] || 0;
      const isMax = currentLvl >= rs.maxLevel;
      const cost = rs.costPerLevel;
      const canAfford = !isMax && this.state.skillPoints >= cost;

      let descText = rs.desc;
      if (rs.valuePerLevel) {
        descText = descText.replace("{val}", currentLvl * rs.valuePerLevel);
      }
      if (rs.val1 && rs.val2) {
        descText = descText.replace("{val1}", currentLvl * rs.val1).replace("{val2}", currentLvl * rs.val2);
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
      } else {
        btn.classList.remove("active");
      }
    });
  }

  updateShopButtons() {
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
        const cost = rs.costPerLevel;
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

    if (kills) kills.textContent = `${this.state.totalKills.toLocaleString()} 体`;
    if (gold) gold.textContent = `${this.formatNumber(this.state.totalGold)} G`;
    if (crystals) crystals.textContent = `${this.state.totalCrystals.toLocaleString()} 個`;
    if (rebirths) rebirths.textContent = `${this.state.rebirthCount.toLocaleString()} 回 (累計SP: ${this.state.totalSkillPoints}pt)`;
    if (clicks) clicks.textContent = `${this.state.totalClicks.toLocaleString()} 回`;
    if (stage) stage.textContent = `Lv.${this.state.currentLevel} (ステージ ${stageData.id}: ${stageData.name})`;
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

    // 2本指ピンチズームの誤作動防止
    document.addEventListener("gesturestart", (e) => {
      e.preventDefault();
    });

    const slimeTarget = document.getElementById("slime-target");
    if (slimeTarget) {
      const handleSlimeTap = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        const touch = e.touches ? e.touches[0] : e;
        this.handleClick(touch);
      };

      // タッチデバイス（iPad/スマホ）では touchstart で即時発火＆ブラウザズームを完全防止
      slimeTarget.addEventListener("touchstart", handleSlimeTap, { passive: false });
      slimeTarget.addEventListener("mousedown", (e) => {
        // マウス操作時（タッチイベント発生時はmousedownは無視）
        if (!('ontouchstart' in window)) {
          handleSlimeTap(e);
        }
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
        this.renderBuildings();
      });
    });

    document.getElementById("skill-btn-berserk")?.addEventListener("click", () => this.activateSkill("skill_berserk"));
    document.getElementById("skill-btn-goldrush")?.addEventListener("click", () => this.activateSkill("skill_goldrush"));
    document.getElementById("skill-btn-meteor")?.addEventListener("click", () => this.activateSkill("skill_meteor"));

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
      if (!dataStr) return;

      const data = JSON.parse(dataStr);
      if (data && typeof data === "object") {
        this.state = Object.assign(this.state, data);

        const now = Date.now();
        const last = this.state.lastSaved || now;
        const elapsedSec = Math.floor((now - last) / 1000);

        if (elapsedSec > 10) {
          const maxSec = 86400;
          const effectiveSec = Math.min(elapsedSec, maxSec);
          const dps = this.getDPS(false);

          if (dps > 0) {
            const offlineGold = Math.floor(dps * effectiveSec * 0.7);
            if (offlineGold > 0) {
              this.state.gold += offlineGold;
              this.state.totalGold += offlineGold;

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
      console.warn("Load failed:", e);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.init();
});
