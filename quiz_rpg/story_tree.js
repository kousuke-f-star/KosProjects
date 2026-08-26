/**
 * Story Tree & RPG Nodes for Quiz RPG
 * Defines all jobs, branch nodes, events, monsters, shops, and endings.
 */

const JOBS = {
  hero: {
    id: "hero",
    name: "勇者",
    icon: "⚔️",
    desc: "攻守のバランスに優れ、クリティカルダメージが高い万能の戦士。",
    hp: 120,
    mp: 30,
    atk: 25,
    def: 10,
    timeLimit: 18,
    passive: "不屈の闘志（ピンチ時に攻撃力1.5倍）",
    skill: {
      name: "ギガブレイク",
      cost: 15,
      desc: "知恵の光を刃に宿し、敵に大ダメージを与える！",
      action: "attack_heavy"
    }
  },
  mage: {
    id: "mage",
    name: "大魔導士",
    icon: "🧙‍♂️",
    desc: "高いMPと知力を持ち、4択の選択肢を2択に絞り込む魔法を操る。",
    hp: 90,
    mp: 60,
    atk: 30,
    def: 5,
    timeLimit: 20,
    passive: "魔力泉（毎ターンMPが自動回復）",
    skill: {
      name: "アナライズ（50:50）",
      cost: 20,
      desc: "選択肢を2つ消し去り、正解を2択に絞り込む！",
      action: "eliminate_options"
    }
  },
  rogue: {
    id: "rogue",
    name: "怪盗",
    icon: "🗡️",
    desc: "すばやい身のこなしでクイズ回答時間を延ばし、獲得ゴールドも多い。",
    hp: 100,
    mp: 40,
    atk: 22,
    def: 8,
    timeLimit: 25,
    passive: "黄金の指先（獲得ゴールド1.5倍）",
    skill: {
      name: "タイムストップ",
      cost: 15,
      desc: "時間を10秒間完全に停止させて落ち着いて考える！",
      action: "freeze_timer"
    }
  },
  paladin: {
    id: "paladin",
    name: "聖騎士",
    icon: "🛡️",
    desc: "圧倒的なHPと防御力を誇り、回復魔法や不正解バリアを持つ。",
    hp: 150,
    mp: 35,
    atk: 18,
    def: 15,
    timeLimit: 18,
    passive: "神聖加護（被ダメージを20%軽減）",
    skill: {
      name: "ホーリーヒール",
      cost: 15,
      desc: "HPを最大値の50%回復し、状態を整える！",
      action: "heal"
    }
  }
};

const ITEMS = [
  { id: "potion", name: "薬草ポーション", icon: "🧪", price: 30, type: "consumable", effect: "heal_hp_50", desc: "HPを50回復する。" },
  { id: "ether", name: "知恵の霊薬", icon: "✨", price: 40, type: "consumable", effect: "heal_mp_30", desc: "MPを30回復する。" },
  { id: "scroll_5050", name: "真実の巻物", icon: "📜", price: 50, type: "consumable", effect: "eliminate_options", desc: "クイズの誤答選択肢を2つ消滅させる。" },
  { id: "hourglass", name: "刻の砂時計", icon: "⏳", price: 45, type: "consumable", effect: "add_time_10", desc: "クイズの残り時間を10秒延長する。" },
  { id: "shield_charm", name: "身代わりのお守り", icon: "🧿", price: 80, type: "consumable", effect: "barrier_one_miss", desc: "不正解のダメージを1回だけ無効化する。" },
  { id: "sage_ring", name: "賢者の指輪", icon: "💍", price: 120, type: "equip", atk: 10, mp: 20, desc: "知力と魔力を高める魔法の指輪。" },
  { id: "dragon_armor", name: "竜鱗の鎧", icon: "🥋", price: 150, type: "equip", hp: 40, def: 10, desc: "竜の鱗を編み込んだ強固な鎧。" }
];

const STORY_TREE = {
  // ノード1: 始まりの神殿
  "start": {
    id: "start",
    title: "始まりの神殿",
    bgClass: "env-temple",
    icon: "🏛️",
    chapter: "プロローグ",
    story: "遥か古代より知識を司る『叡智の大神殿』。\n知恵の書が何者かに奪われ、世界の調和が乱れようとしています。\n運命に導かれしあなたは、神託の間に立ちました。",
    type: "choice",
    choices: [
      { text: "🌳 ささやきの森へ（自然と精霊の道）", target: "forest_1", genre: "nature", preview: "自然・生き物の問題" },
      { text: "🏰 叡智の古都アルカディアへ（歴史と文明の道）", target: "city_1", genre: "history", preview: "歴史・文化・地理の問題" },
      { text: "⚙️ 忘れられた古代遺跡へ（科学と技術の道）", target: "ruins_1", genre: "science", preview: "科学・宇宙・技術の問題" },
      { text: "🌋 灼熱のドラゴンの谷へ（伝説と試練の道）", target: "volcano_1", genre: "fantasy", preview: "ファンタジー・神話の問題" }
    ]
  },

  // ---------------- ルート1: ささやきの森 ----------------
  "forest_1": {
    id: "forest_1",
    title: "深緑のささやきの森",
    bgClass: "env-forest",
    icon: "🌲",
    chapter: "第1章：緑の息吹",
    story: "木漏れ日が揺れる神秘の森。草木がざわめき、森の守護獣があなたの前に立ちはだかりました！\n知恵を示して森の信頼を勝ち取りましょう。",
    type: "battle",
    genre: "nature",
    enemy: {
      name: "ウッド・ゴーレム",
      icon: "🪵",
      hp: 100,
      atk: 15,
      exp: 40,
      gold: 50,
      quizCount: 3,
      difficulty: "easy"
    },
    next: "forest_shop"
  },
  "forest_shop": {
    id: "forest_shop",
    title: "妖精の清らかな泉",
    bgClass: "env-spring",
    icon: "🧚‍♀️",
    chapter: "憩いの泉",
    story: "「よくぞ森の試練を越えましたね！」\n泉の妖精が澄んだ水で傷を癒やし、旅に必要な道具を分けてくれるようです。",
    type: "shop",
    healAmount: 50,
    next: "forest_branch"
  },
  "forest_branch": {
    id: "forest_branch",
    title: "森の深奥の分岐路",
    bgClass: "env-forest-deep",
    icon: "🌿",
    chapter: "第2章：運命の分水嶺",
    story: "森の奥深く、道が2つに分かれています。\n片方からは眩い光が、もう片方からは怪しげな幻霧が立ち込めています。",
    type: "choice",
    choices: [
      { text: "✨ 天空へと続く光の回廊へ進む", target: "holy_path", genre: "science", preview: "光の道：守護天使への道" },
      { text: "🍄 幻覚と混沌の胞子林へ潜入する", target: "chaos_path", genre: "riddle", preview: "闇の道：混沌の道化師への道" },
      { text: "📜 古代の知識を求めて大図書館へ寄り道", target: "wisdom_path", genre: "history", preview: "知恵の道：大賢者への道" },
      { text: "🐉 気配を感じて竜の巣窟へと向かう", target: "dragon_path", genre: "fantasy", preview: "力の道：古代竜王への道" }
    ]
  },

  // ---------------- ルート2: 叡智の古都 ----------------
  "city_1": {
    id: "city_1",
    title: "叡智の古都アルカディア",
    bgClass: "env-city",
    icon: "🏰",
    chapter: "第1章：白亜の都",
    story: "幾千年の歴史を刻む壮麗な古都。城門では歴史の番人が侵入者を試すべくクイズを出題してきます！",
    type: "battle",
    genre: "history",
    enemy: {
      name: "門番のグラディエーター",
      icon: "💂‍♂️",
      hp: 110,
      atk: 18,
      exp: 45,
      gold: 60,
      quizCount: 3,
      difficulty: "easy"
    },
    next: "city_shop"
  },
  "city_shop": {
    id: "city_shop",
    title: "アルカディア大バザール",
    bgClass: "env-market",
    icon: "🎪",
    chapter: "賑わう市場",
    story: "「いらっしゃい！世界中から集めた秘薬や装備があるよ！」\n行商人たちの活気ある声が響いています。",
    type: "shop",
    healAmount: 60,
    next: "city_branch"
  },
  "city_branch": {
    id: "city_branch",
    title: "古都の大時計塔の分岐",
    bgClass: "env-tower",
    icon: "🕰️",
    chapter: "第2章：都の陰影",
    story: "巨大な時計塔の広場。あなたは都のさらなる深部を目指します。どこへ向かいますか？",
    type: "choice",
    choices: [
      { text: "📚 禁書を収めた大図書館・真理の扉へ", target: "wisdom_path", genre: "trivia", preview: "知恵の道：大賢者への道" },
      { text: "🌑 地下に広がる影の暗黒街へ潜入", target: "shadow_path", genre: "riddle", preview: "影の道：影の王への道" },
      { text: "✨ 天空へと昇る光の昇降機へ乗る", target: "holy_path", genre: "science", preview: "光の道：守護神への道" },
      { text: "🌋 街外れの火山洞窟へ挑む", target: "dragon_path", genre: "fantasy", preview: "力の道：竜王への道" }
    ]
  },

  // ---------------- ルート3: 古代遺跡 ----------------
  "ruins_1": {
    id: "ruins_1",
    title: "忘れられた古代遺跡",
    bgClass: "env-ruins",
    icon: "⚙️",
    chapter: "第1章：失われた技術",
    story: "超古代文明が遺した巨大地下建造物。防衛セキュリティメカが侵入者を感知し起動しました！",
    type: "battle",
    genre: "science",
    enemy: {
      name: "セキュリティ・ギア",
      icon: "🤖",
      hp: 120,
      atk: 16,
      exp: 50,
      gold: 55,
      quizCount: 3,
      difficulty: "easy"
    },
    next: "ruins_shop"
  },
  "ruins_shop": {
    id: "ruins_shop",
    title: "古代の補給ステーション",
    bgClass: "env-tech",
    icon: "🔋",
    chapter: "古代の遺産",
    story: "「ピピッ…対象ノ生体反応ヲ確認。エネルギーヲ補給シ、物品ヲ提供シマス。」",
    type: "shop",
    healAmount: 70,
    next: "ruins_branch"
  },
  "ruins_branch": {
    id: "ruins_branch",
    title: "遺跡の主制御室の分岐",
    bgClass: "env-core",
    icon: "🎛️",
    chapter: "第2章：未来への回路",
    story: "メインフレームのモニターに複数の転送ゲートが表示されています。",
    type: "choice",
    choices: [
      { text: "📚 宇宙の記憶が眠る大図書館の端末へ", target: "wisdom_path", genre: "science", preview: "知恵の道：大賢者への道" },
      { text: "✨ 天空のソーラー回廊へ転送する", target: "holy_path", genre: "science", preview: "光の道：守護神への道" },
      { text: "🌑 地下の暗黒炉心へ降りる", target: "shadow_path", genre: "riddle", preview: "影の道：影の王への道" },
      { text: "🍄 暴走した生体実験エリアへ進む", target: "chaos_path", genre: "nature", preview: "闇の道：混沌の道化師への道" }
    ]
  },

  // ---------------- ルート4: ドラゴンの谷 ----------------
  "volcano_1": {
    id: "volcano_1",
    title: "灼熱のドラゴンの谷",
    bgClass: "env-volcano",
    icon: "🌋",
    chapter: "第1章：紅蓮の試練",
    story: "マグマが煮えたぎる灼熱の渓谷。炎のドレイクが火炎を吐きながら襲いかかってきました！",
    type: "battle",
    genre: "fantasy",
    enemy: {
      name: "フレイム・ドレイク",
      icon: "🦎",
      hp: 130,
      atk: 20,
      exp: 55,
      gold: 65,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "volcano_shop"
  },
  "volcano_shop": {
    id: "volcano_shop",
    title: "竜人の鍛冶工房",
    bgClass: "env-forge",
    icon: "⚒️",
    chapter: "熱き鍛冶場",
    story: "「ガハハ！ドラゴンの谷へよく来たな！我が鍛えし武具と秘薬を持っていけ！」",
    type: "shop",
    healAmount: 60,
    next: "volcano_branch"
  },
  "volcano_branch": {
    id: "volcano_branch",
    title: "火口の龍脈分岐",
    bgClass: "env-crater",
    icon: "🔥",
    chapter: "第2章：覇者の分かれ道",
    story: "轟音とともに吹き上がる溶岩。この先の道は世界の運命を大きく左右します。",
    type: "choice",
    choices: [
      { text: "🐉 竜王の玉座へ真っ直ぐ挑む！", target: "dragon_path", genre: "fantasy", preview: "力の道：古代竜王への道" },
      { text: "🌑 溶岩流の裏に隠された影の洞窟へ", target: "shadow_path", genre: "riddle", preview: "影の道：影の王への道" },
      { text: "🍄 奇妙な胞子が光る熱帯密林へ", target: "chaos_path", genre: "riddle", preview: "混沌の道：道化師への道" },
      { text: "📚 竜が守護する古代の知恵の碑文へ", target: "wisdom_path", genre: "history", preview: "知恵の道：大賢者への道" }
    ]
  },

  // ================= 中盤ルート（深層ステージ） =================

  // 1. 光の道（天空回廊）
  "holy_path": {
    id: "holy_path",
    title: "白銀の天空回廊",
    bgClass: "env-sky",
    icon: "☁️",
    chapter: "第3章：光の試練",
    story: "雲海を抜けた先にある天空の宮殿。聖なる守護天使が静かに剣を構えます。",
    type: "battle",
    genre: "all",
    enemy: {
      name: "聖光の従者ケルビム",
      icon: "🕊️",
      hp: 150,
      atk: 22,
      exp: 70,
      gold: 80,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "boss_holy"
  },

  // 2. 混沌の道（カオスダンジョン）
  "chaos_path": {
    id: "chaos_path",
    title: "狂乱のカオス・ラビリンス",
    bgClass: "env-chaos",
    icon: "🌀",
    chapter: "第3章：混沌の嘲笑",
    story: "常識がねじ曲がった奇妙な空間。宙に浮くトランプと鏡の中から怪物が現れました！",
    type: "battle",
    genre: "riddle",
    enemy: {
      name: "トリックスター・ドール",
      icon: "🎭",
      hp: 140,
      atk: 24,
      exp: 70,
      gold: 90,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "boss_chaos"
  },

  // 3. 知恵の道（大図書館）
  "wisdom_path": {
    id: "wisdom_path",
    title: "万象の星霜大図書館",
    bgClass: "env-library",
    icon: "📖",
    chapter: "第3章：知の深淵",
    story: "無限に連なる本棚と星図。知恵の幻影があなたに難問を投げかけます。",
    type: "battle",
    genre: "trivia",
    enemy: {
      name: "知識の魔導書グリモア",
      icon: "📕",
      hp: 145,
      atk: 20,
      exp: 75,
      gold: 85,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "boss_wisdom"
  },

  // 4. 影の道（暗黒街・影の回廊）
  "shadow_path": {
    id: "shadow_path",
    title: "影牢のダークコリドー",
    bgClass: "env-shadow",
    icon: "🌑",
    chapter: "第3章：暗黒の策略",
    story: "光の届かない漆黒の回廊。闇に潜むアサシンが音もなく立ちはだかりました。",
    type: "battle",
    genre: "riddle",
    enemy: {
      name: "シャドウ・アサシン",
      icon: "🥷",
      hp: 135,
      atk: 26,
      exp: 75,
      gold: 100,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "boss_shadow"
  },

  // 5. 力の道（竜王の玉座）
  "dragon_path": {
    id: "dragon_path",
    title: "覇竜の断崖",
    bgClass: "env-dragon",
    icon: "🐉",
    chapter: "第3章：覇者の領域",
    story: "咆哮とともに大地が揺れる。強大なる竜騎士が王の玉座を守るべく立ちはだかります！",
    type: "battle",
    genre: "fantasy",
    enemy: {
      name: "エリート竜騎士",
      icon: "🏇",
      hp: 160,
      atk: 25,
      exp: 80,
      gold: 90,
      quizCount: 3,
      difficulty: "normal"
    },
    next: "boss_dragon"
  },

  // ================= ボス戦 (Final Boss Battles) =================

  "boss_holy": {
    id: "boss_holy",
    title: "頂の聖堂：光の守護神",
    bgClass: "env-boss-holy",
    icon: "👼",
    chapter: "最終決戦：聖なる審判",
    story: "「我が光の試練を乗り越え、世界を照らす真の賢者となりなさい！」",
    type: "boss",
    genre: "boss",
    enemy: {
      name: "光の守護神セラフィム",
      icon: "👑",
      hp: 250,
      atk: 32,
      exp: 200,
      gold: 300,
      quizCount: 4,
      difficulty: "boss",
      isBoss: true
    },
    ending: "ending_holy"
  },

  "boss_chaos": {
    id: "boss_chaos",
    title: "混沌の舞台：狂気の宴",
    bgClass: "env-boss-chaos",
    icon: "🃏",
    chapter: "最終決戦：道化の嘲笑",
    story: "「ヒャハハ！世界の理なんて壊しちゃおうぜ！お前の知恵でボクを楽しませてくれよ！」",
    type: "boss",
    genre: "boss",
    enemy: {
      name: "混沌の道化師ジョーカー",
      icon: "🤡",
      hp: 230,
      atk: 35,
      exp: 200,
      gold: 350,
      quizCount: 4,
      difficulty: "boss",
      isBoss: true
    },
    ending: "ending_chaos"
  },

  "boss_wisdom": {
    id: "boss_wisdom",
    title: "真理の門：万物の観測者",
    bgClass: "env-boss-wisdom",
    icon: "🌌",
    chapter: "最終決戦：全知の試練",
    story: "「知識とは力であり、時に呪いでもある。そなたが世界の真理を背負う資格があるか試そう。」",
    type: "boss",
    genre: "boss",
    enemy: {
      name: "真理の観測者クロノス",
      icon: "🔮",
      hp: 240,
      atk: 30,
      exp: 200,
      gold: 300,
      quizCount: 4,
      difficulty: "boss",
      isBoss: true
    },
    ending: "ending_wisdom"
  },

  "boss_shadow": {
    id: "boss_shadow",
    title: "漆黒の玉座：影の支配者",
    bgClass: "env-boss-shadow",
    icon: "👿",
    chapter: "最終決戦：深淵の支配",
    story: "「光あるところに影あり。この世界を裏から操る真の王の前にひれ伏すがよい！」",
    type: "boss",
    genre: "boss",
    enemy: {
      name: "影の王シャドウロード",
      icon: "👤",
      hp: 260,
      atk: 34,
      exp: 200,
      gold: 400,
      quizCount: 4,
      difficulty: "boss",
      isBoss: true
    },
    ending: "ending_shadow"
  },

  "boss_dragon": {
    id: "boss_dragon",
    title: "龍王の火口：太古の紅蓮竜王",
    bgClass: "env-boss-dragon",
    icon: "🐲",
    chapter: "最終決戦：最強の咆哮",
    story: "「我が灼熱の息吹に耐えうる知恵と勇気を持つ者よ…全霊をもって挑んでくるがよい！！」",
    type: "boss",
    genre: "boss",
    enemy: {
      name: "古代竜王イグニス",
      icon: "🐉",
      hp: 280,
      atk: 36,
      exp: 250,
      gold: 500,
      quizCount: 4,
      difficulty: "boss",
      isBoss: true
    },
    ending: "ending_dragon"
  }
};

const ENDINGS = {
  "ending_holy": {
    id: "ending_holy",
    title: "🏆 エンディング1: 聖光の賢勇者",
    badge: "LIGHT HERO",
    icon: "✨",
    color: "#fbbf24",
    story: "光の守護神との激闘を制したあなたは、聖なる知恵を授かり、荒廃した世界を優しき光で照らす英雄となりました。\n人々はあなたの知恵と優しさを讃え、平和な時代が何世代にもわたって語り継がれました。"
  },
  "ending_chaos": {
    id: "ending_chaos",
    title: "🃏 エンディング2: カオス・トリックスター",
    badge: "CHAOS JOKER",
    icon: "🎭",
    color: "#ec4899",
    story: "道化師を打ち破り、その混沌の魔力を手に入れたあなた。\n既存の秩序や退屈なルールを吹き飛ばし、自由で変幻自在な新たな世界の創作者として歴史に名を刻みました。"
  },
  "ending_wisdom": {
    id: "ending_wisdom",
    title: "📚 エンディング3: 万象を解き明かす大賢者",
    badge: "GRAND SAGE",
    icon: "🌌",
    color: "#60a5fa",
    story: "真理の観測者の試練を全てクリアし、世界の根源たる大百科の全てのページを解読したあなた。\n時空を超越した大賢者として、世界を見守る守護者となりました。"
  },
  "ending_shadow": {
    id: "ending_shadow",
    title: "👑 エンディング4: 影の支配者",
    badge: "SHADOW LORD",
    icon: "🌑",
    color: "#a855f7",
    story: "影の王を倒し、暗黒街と裏の歴史の全てを手中に収めたあなた。\n表舞台には立たずとも、世界を真に動かす絶対的な黒幕として君臨することになりました。"
  },
  "ending_dragon": {
    id: "ending_dragon",
    title: "🐉 エンディング5: 竜を統べし覇王",
    badge: "DRAGON EMPEROR",
    icon: "🔥",
    color: "#ef4444",
    story: "古代竜王を力と知恵でねじ伏せ、竜族の絶対的忠誠を得たあなた。\n全大陸にその名を轟かせる最強無比の覇王として、新時代を切り開きました。"
  },
  "ending_true": {
    id: "ending_true",
    title: "🌟 TRUE END: 世界の理を創りし創造主",
    badge: "CREATOR OF FATE",
    icon: "👑",
    color: "#f59e0b",
    story: "一度もクイズを間違えることなく、圧倒的な完全正解で運命の迷宮を踏破したあなた。\nあなたは迷宮の管理者を超え、世界の新たな理（ルール）を創造する神格へと昇華しました！"
  },
  "ending_defeat": {
    id: "ending_defeat",
    title: "💀 GAME OVER: 知識尽き果てし旅路",
    badge: "FALLEN HERO",
    icon: "🪦",
    color: "#9ca3af",
    story: "強大な敵の前に知恵と力が尽き、あなたの冒険はここで幕を閉じました…。\nしかし、得た知識は決して無駄にはなりません。再び立ち上がり、迷宮へ挑みましょう！"
  }
};

window.JOBS = JOBS;
window.ITEMS = ITEMS;
window.STORY_TREE = STORY_TREE;
window.ENDINGS = ENDINGS;
