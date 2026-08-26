/**
 * Quiz Database for Quiz RPG
 * Over 100 4-choice questions categorized by genre and difficulty, with educational explanations.
 */

const QUIZ_DATABASE = [
  // ==================== 自然・生き物 (Nature & Animals) ====================
  {
    id: "nat_001",
    genre: "nature",
    difficulty: "easy",
    question: "タコの心臓は体の中にいくつあるでしょうか？",
    options: ["1つ", "2つ", "3つ", "4つ"],
    answer: 2, // 3つ
    explanation: "タコには全身に血液を送る主心臓が1つと、エラに血液を送るエラ心臓が2つあり、合計3つの心臓を持っています。"
  },
  {
    id: "nat_002",
    genre: "nature",
    difficulty: "easy",
    question: "世界で最も足が速い哺乳類であるチーターの最高時速は約何km？",
    options: ["約60km/h", "約110km/h", "約180km/h", "約250km/h"],
    answer: 1, // 約110km/h
    explanation: "チーターはわずか数秒で時速100km以上に加速でき、最高時速は約110〜120kmに達します。"
  },
  {
    id: "nat_003",
    genre: "nature",
    difficulty: "easy",
    question: "世界で一番背が高い木として知られる植物の種類は何でしょう？",
    options: ["スギ", "セコイア（ハイペリオン）", "クスノキ", "バオバブ"],
    answer: 1, // セコイア
    explanation: "アメリカのレッドウッド国立公園にあるセコイア（愛称ハイペリオン）は、樹高が115メートルを超えます。"
  },
  {
    id: "nat_004",
    genre: "nature",
    difficulty: "normal",
    question: "ペンギンが空を飛ぶ代わりに泳ぐのが得意ですが、翼のことを特に何と呼ぶ？",
    options: ["フィン", "フリッパー", "パドル", "ウイングレット"],
    answer: 1, // フリッパー
    explanation: "ペンギンの翼は水中を力強く羽ばたくように泳ぐためのヒレ状になっており「フリッパー」と呼ばれます。"
  },
  {
    id: "nat_005",
    genre: "nature",
    difficulty: "normal",
    question: "パンダの主食は竹や笹ですが、分類上は何の仲間（目）に属する？",
    options: ["草食目", "ネコ目（食肉目）", "齧歯（げっし）目", "有袋目"],
    answer: 1, // ネコ目（食肉目）
    explanation: "ジャイアントパンダは分類上はクマ科（ネコ目・食肉目）の仲間で、腸の構造などは肉食動物に近い特徴を持っています。"
  },
  {
    id: "nat_006",
    genre: "nature",
    difficulty: "normal",
    question: "植物が光合成を行うときに吸収する気体は何でしょう？",
    options: ["酸素", "二酸化炭素", "窒素", "水素"],
    answer: 1, // 二酸化炭素
    explanation: "植物は太陽の光エネルギーを使って二酸化炭素と水からデンプンを作り出し、副産物として酸素を放出します。"
  },
  {
    id: "nat_007",
    genre: "nature",
    difficulty: "hard",
    question: "地球上で最も強い毒を持つとされる「キロネックス（オーストラリアウンバチクラゲ）」の別名は何？",
    options: ["ハブクラゲ", "シーワスプ（海の蜂）", "カツオノエボシ", "アカクラゲ"],
    answer: 1, // シーワスプ
    explanation: "キロネックス・フレッケリは刺されると数分で命を落とすこともある危険な毒クラゲで、シーワスプ（海の蜂）と呼ばれます。"
  },
  {
    id: "nat_008",
    genre: "nature",
    difficulty: "hard",
    question: "昆虫の体は「頭部」「胸部」「腹部」に分かれていますが、脚はどこから生えている？",
    options: ["頭部", "胸部", "腹部", "胸部と腹部"],
    answer: 1, // 胸部
    explanation: "昆虫の6本の脚はすべて「胸部（前胸・中胸・後胸）」から左右1対ずつ生えています。"
  },
  {
    id: "nat_009",
    genre: "nature",
    difficulty: "boss",
    question: "地球上で最も長い寿命（数百年以上）を持つとされる脊椎動物は何でしょう？",
    options: ["ガラパゴスゾウガメ", "ニシオンデンザメ", "ホッキョククジラ", "ムカシトカゲ"],
    answer: 1, // ニシオンデンザメ
    explanation: "北大西洋に生息するニシオンデンザメは推定寿命が400年近くに達し、脊椎動物の中で最長寿とされています。"
  },
  {
    id: "nat_010",
    genre: "nature",
    difficulty: "easy",
    question: "ラクダのこぶの中身は主に何でできているでしょうか？",
    options: ["水", "脂肪", "筋肉", "骨"],
    answer: 1, // 脂肪
    explanation: "ラクダのこぶは水ではなく「脂肪」が詰まっており、エネルギー源や水分代謝に利用されます。"
  },

  // ==================== 科学・宇宙・古代遺跡 (Science & Space & Tech) ====================
  {
    id: "sci_001",
    genre: "science",
    difficulty: "easy",
    question: "太陽系の中で最も太陽に近い惑星はどれ？",
    options: ["金星", "水星", "火星", "地球"],
    answer: 1, // 水星
    explanation: "太陽に近い順に「水星・金星・地球・火星・木星・土星・天王星・海王星」と並んでいます。"
  },
  {
    id: "sci_002",
    genre: "science",
    difficulty: "easy",
    question: "水の化学式として正しいものはどれ？",
    options: ["CO2", "H2O", "NaCl", "O2"],
    answer: 1, // H2O
    explanation: "水は水素原子（H）2つと酸素原子（O）1つが結合した分子なので「H2O」です。"
  },
  {
    id: "sci_003",
    genre: "science",
    difficulty: "easy",
    question: "光が真空中を1秒間に進む距離はおよそどれくらい？",
    options: ["約3万km", "約30万km", "約300万km", "約3000万km"],
    answer: 1, // 約30万km
    explanation: "光の速さは秒速約30万kmで、これは地球を1秒間に7周半回ることができるスピードです。"
  },
  {
    id: "sci_004",
    genre: "science",
    difficulty: "normal",
    question: "磁石の「S極」と「S極」を近づけるとどうなる？",
    options: ["強く引き合う", "反発してしりぞけ合う", "回転する", "何も起きない"],
    answer: 1, // 反発してしりぞけ合う
    explanation: "磁石は同じ極同士（NとN、SとS）は反発し合い、異なる極同士（NとS）は引き合います。"
  },
  {
    id: "sci_005",
    genre: "science",
    difficulty: "normal",
    question: "地球の空気（大気）の中で最も多く含まれている気体は何？",
    options: ["酸素", "二酸化炭素", "窒素", "アルゴン"],
    answer: 2, // 窒素
    explanation: "大気の体積比率は、窒素が約78%、酸素が約21%、アルゴン約0.9%、二酸化炭素約0.04%です。"
  },
  {
    id: "sci_006",
    genre: "science",
    difficulty: "normal",
    question: "太陽系で最も体積が大きく、質量の重い最大の惑星はどれ？",
    options: ["土星", "海王星", "木星", "天王星"],
    answer: 2, // 木星
    explanation: "木星は太陽系最大の惑星で、地球が約1300個も入るほどの巨大なガス惑星です。"
  },
  {
    id: "sci_007",
    genre: "science",
    difficulty: "hard",
    question: "元素周期表で、原子番号「1」の元素は何？",
    options: ["ヘリウム", "水素", "リチウム", "炭素"],
    answer: 1, // 水素
    explanation: "原子番号1は「水素（H）」、2はヘリウム（He）、3はリチウム（Li）と続きます。"
  },
  {
    id: "sci_008",
    genre: "science",
    difficulty: "hard",
    question: "光さえも脱出できないほど超高密度の重力天体を何と呼ぶ？",
    options: ["白色矮星", "中性子星", "ブラックホール", "パルサー"],
    answer: 2, // ブラックホール
    explanation: "ブラックホールはその超強大な重力により、光（電磁波）であっても事象の地平面の内側から脱出できません。"
  },
  {
    id: "sci_009",
    genre: "science",
    difficulty: "boss",
    question: "万有引力の法則を発見し、運動の3法則を提唱したイギリスの物理学者は誰？",
    options: ["アルベルト・アインシュタイン", "アイザック・ニュートン", "ガリレオ・ガリレイ", "ニコラ・テスラ"],
    answer: 1, // アイザック・ニュートン
    explanation: "アイザック・ニュートンはリンゴが木から落ちるのを見て重力（万有引力）の着想を得たという逸話が有名です。"
  },
  {
    id: "sci_010",
    genre: "science",
    difficulty: "boss",
    question: "地球の地殻に最も多く含まれている元素は何でしょう？",
    options: ["ケイ素", "鉄", "酸素", "アルミニウム"],
    answer: 2, // 酸素
    explanation: "地殻の重量比で最も多い元素は「酸素（約46%）」、次いでケイ素（約28%）、アルミニウム（約8%）です。"
  },

  // ==================== 歴史・地理・古都 (History & Geography) ====================
  {
    id: "his_001",
    genre: "history",
    difficulty: "easy",
    question: "世界で最も面積が広い国はどこでしょう？",
    options: ["アメリカ", "中国", "ロシア", "カナダ"],
    answer: 2, // ロシア
    explanation: "ロシアの国土面積は約1710万平方kmで、世界の陸地面積の約8分の1を占める世界最大の国です。"
  },
  {
    id: "his_002",
    genre: "history",
    difficulty: "easy",
    question: "日本の富士山の標高は何メートル？",
    options: ["3,333m", "3,776m", "3,990m", "4,120m"],
    answer: 1, // 3,776m
    explanation: "富士山は日本最高峰の山で、標高は3,776メートルです。「みななろう（3776）」などの語呂合わせで親しまれています。"
  },
  {
    id: "his_003",
    genre: "history",
    difficulty: "easy",
    question: "世界三大ピラミッドがあることで有名な国はどこ？",
    options: ["ギリシャ", "エジプト", "ペルー", "イタリア"],
    answer: 1, // エジプト
    explanation: "エジプトのギザにあるクフ王、カフラー王、メンカウラー王の三大ピラミッドが世界的に有名です。"
  },
  {
    id: "his_004",
    genre: "history",
    difficulty: "normal",
    question: "世界で一番長い川として知られるアフリカ大陸の川は何？",
    options: ["アマゾン川", "ナイル川", "長江", "ミシシッピ川"],
    answer: 1, // ナイル川
    explanation: "ナイル川は全長約6,650kmで世界最長の川とされています（流域面積ではアマゾン川が世界一です）。"
  },
  {
    id: "his_005",
    genre: "history",
    difficulty: "normal",
    question: "日本で1192年（または1185年）に鎌倉幕府を開いた人物は誰？",
    options: ["平清盛", "源頼朝", "足利尊氏", "織田信長"],
    answer: 1, // 源頼朝
    explanation: "源頼朝は壇ノ浦の戦いで平氏を滅ぼし、征夷大将軍となって鎌倉幕府を開きました。"
  },
  {
    id: "his_006",
    genre: "history",
    difficulty: "normal",
    question: "世界で最も高い山「エベレスト（チョモランマ）」がある山脈は何？",
    options: ["アンデス山脈", "ロッキー山脈", "ヒマラヤ山脈", "アルプス山脈"],
    answer: 2, // ヒマラヤ山脈
    explanation: "ヒマラヤ山脈はアジア中央部に広がり、標高8,848mのエベレストをはじめとする世界の高峰が集まっています。"
  },
  {
    id: "his_007",
    genre: "history",
    difficulty: "hard",
    question: "古代ローマで建設された円形闘技場（コロッセウム）で主に戦っていた剣士を何と呼ぶ？",
    options: ["ファランクス", "グラディエーター（剣闘士）", "センチュリオン", "レギオン"],
    answer: 1, // グラディエーター
    explanation: "グラディエーター（剣闘士）は、古代ローマの円形闘技場で観衆のために命懸けの戦いを繰り広げました。"
  },
  {
    id: "his_008",
    genre: "history",
    difficulty: "hard",
    question: "ルネサンス期に「モナ・リザ」や「最後の晩餐」を描いた万能の天才は誰？",
    options: ["ミケランジェロ", "ラファエロ", "レオナルド・ダ・ヴィンチ", "ボッティチェリ"],
    answer: 2, // レオナルド・ダ・ヴィンチ
    explanation: "レオナルド・ダ・ヴィンチは絵画だけでなく科学、建築、解剖学など多彩な分野で傑出した業績を残しました。"
  },
  {
    id: "his_009",
    genre: "history",
    difficulty: "boss",
    question: "メソポタミア文明において「目には目を、歯には歯を」の同害復讐の法典を定めた王は誰？",
    options: ["ラムセス2世", "ハンムラビ王", "キュロス大王", "ギルガメシュ"],
    answer: 1, // ハンムラビ王
    explanation: "バビロニアのハンムラビ王が定めた「ハンムラビ法典」は、公平な裁判の規範として世界史に刻まれています。"
  },
  {
    id: "his_010",
    genre: "history",
    difficulty: "boss",
    question: "南米ペルーの標高約2,400mの尾根に築かれたインカ帝国の空中都市遺跡は何？",
    options: ["チチェン・イッツァ", "マチュ・ピチュ", "テオティワカン", "ティワナク"],
    answer: 1, // マチュ・ピチュ
    explanation: "マチュ・ピチュは15世紀のインカ帝国時代に山頂に築かれた石造都市で、世界遺産として有名です。"
  },

  // ==================== ファンタジー・ゲーム・伝説 (Fantasy & Myth) ====================
  {
    id: "fan_001",
    genre: "fantasy",
    difficulty: "easy",
    question: "北欧神話の雷神「トール」が持つとされる有名な武器（槌）の名前は何？",
    options: ["エクスカリバー", "グングニル", "ミョルニル", "レーヴァテイン"],
    answer: 2, // ミョルニル
    explanation: "ミョルニルは雷神トールが振るう強力な戦槌で、投げても手元に戻ってくる魔法の武器です。"
  },
  {
    id: "fan_002",
    genre: "fantasy",
    difficulty: "easy",
    question: "RPGでよく使われる用語「HP」の正式な英語は何の略？",
    options: ["Hero Power", "Hit Points", "High Potential", "Heart Peace"],
    answer: 1, // Hit Points
    explanation: "HPは「Hit Points（ヒットポイント）」の略で、キャラクターが耐えられるダメージ量を示します。"
  },
  {
    id: "fan_003",
    genre: "fantasy",
    difficulty: "easy",
    question: "西洋の伝説で、1本の角を持ち、処女にだけ心を開くとされる神秘的な聖獣は何？",
    options: ["ペガサス", "ユニコーン", "グリフォン", "キマイラ"],
    answer: 1, // ユニコーン
    explanation: "ユニコーン（一角獣）は額に一本の美しい角を持つ純白の馬のような姿をした伝説の生き物です。"
  },
  {
    id: "fan_004",
    genre: "fantasy",
    difficulty: "normal",
    question: "アーサー王伝説に登場する、円卓の騎士を率いたアーサー王の聖剣は何？",
    options: ["ガラティーン", "デュランダル", "エクスカリバー", "クラウ・ソラス"],
    answer: 2, // エクスカリバー
    explanation: "湖の貴婦人から授けられたとされる「エクスカリバー」は、王者の象徴たる伝説の聖剣です。"
  },
  {
    id: "fan_005",
    genre: "fantasy",
    difficulty: "normal",
    question: "ギリシャ神話で、見た者を石に変えてしまう髪の毛がヘビの怪物は誰？",
    options: ["スフィンクス", "メドゥーサ", "セイレーン", "ヒュドラ"],
    answer: 1, // メドゥーサ
    explanation: "ゴルゴン三姉妹の一人メドゥーサは、目を見た相手を石化させる能力を持っています。"
  },
  {
    id: "fan_006",
    genre: "fantasy",
    difficulty: "normal",
    question: "錬金術師たちが追い求めたとされる、卑金属を金に変え不老不死をもたらす石は何？",
    options: ["ラピスラズリ", "賢者の石", "オリハルコン", "ヒヒイロカネ"],
    answer: 1, // 賢者の石
    explanation: "「賢者の石（Philosopher's Stone）」は中世の錬金術師たちが研究した究極の霊薬・触媒です。"
  },
  {
    id: "fan_007",
    genre: "fantasy",
    difficulty: "hard",
    question: "北欧神話の最高神オーディンが持つ、決して的を外さない槍の名前は何？",
    options: ["グングニル", "ゲイボルグ", "ブリューナク", "ロンギヌス"],
    answer: 0, // グングニル
    explanation: "グングニルはドワーフによって作られ、投げると標的に必ず命中する主神オーディンの神槍です。"
  },
  {
    id: "fan_008",
    genre: "fantasy",
    difficulty: "hard",
    question: "エジプト神話で、死者の魂の心臓と「真実の羽根」を天秤にかけて裁きを行う冥界の神は誰？",
    options: ["ラー", "アヌビス", "オシリス", "ホルス"],
    answer: 1, // アヌビス
    explanation: "ジャッカルの頭部を持つアヌビス神は、死者の魂が極楽に行けるか天秤で量る役目を担いました。"
  },
  {
    id: "fan_009",
    genre: "fantasy",
    difficulty: "boss",
    question: "北欧神話において「神々の黄昏（世界の終末の日）」を意味する言葉は何？",
    options: ["ラグナロク", "アルマゲドン", "アポカリプス", "ヴァルハラ"],
    answer: 0, // ラグナロク
    explanation: "ラグナロク（Ragnarök）は神々と巨人族による最終戦争で、世界が一度滅び再生する物語です。"
  },
  {
    id: "fan_010",
    genre: "fantasy",
    difficulty: "boss",
    question: "古代ギリシャ神話で、開けてはいけない箱（壺）を開けてしまい、最後に「希望」だけが残った女性は誰？",
    options: ["ヘレネ", "パンドラ", "アンドロメダ", "アフロディーテ"],
    answer: 1, // パンドラ
    explanation: "人類最初の女性とされるパンドラが箱を開けたことであらゆる災いが世界に放たれ、底に希望だけが残りました。"
  },

  // ==================== 言葉・なぞなぞ・ひらめき (Riddles & Wordplay) ====================
  {
    id: "rid_001",
    genre: "riddle",
    difficulty: "easy",
    question: "パンはパンでも、食べると爆発しそうな危ないパンは何？",
    options: ["フランスパン", "フライパン", "アンパン", "ピーターパン"],
    answer: 1, // フライパン
    explanation: "「フライ（揚げる・飛ぶ）＋パン」または「パン」とつく調理器具のなぞなぞ定番ですね！"
  },
  {
    id: "rid_002",
    genre: "riddle",
    difficulty: "easy",
    question: "上に行くときは上がり、下に行くときは下がるけれど、自分自身は全く動かないものは何？",
    options: ["エレベーター", "かいだん（階段）", "エスカレーター", "ロープウェイ"],
    answer: 1, // 階段
    explanation: "階段は「上り階段」「下り階段」として人が上下しますが、階段そのものは動きません。"
  },
  {
    id: "rid_003",
    genre: "riddle",
    difficulty: "normal",
    question: "朝は4本足、昼は2本足、夕方は3本足で歩くものは何？（スフィンクスの謎かけ）",
    options: ["イヌ", "人間", "サル", "カエル"],
    answer: 1, // 人間
    explanation: "赤ちゃんのときはハイハイ（4本足）、大人は2本足、年老いると杖をついて3本足になる「人間」の一生を表しています。"
  },
  {
    id: "rid_004",
    genre: "riddle",
    difficulty: "normal",
    question: "使うときは投げ捨てて、使わないときは引き上げるものってなーんだ？",
    options: ["つり針", "イカリ（船の錨）", "ブーメラン", "ゴミ袋"],
    answer: 1, // イカリ
    explanation: "船を海上で固定するときに海へ投げ込み、出港するとき（使わないとき）に引き上げる「船の錨（いかり）」です。"
  },
  {
    id: "rid_005",
    genre: "riddle",
    difficulty: "normal",
    question: "買うときは黒く、使うときは赤く、捨てるときは灰色になるものは何？",
    options: ["炭（木炭）", "タイヤ", "ろうそく", "鉄鉱石"],
    answer: 0, // 炭
    explanation: "木炭は買ったときは黒く、火をつけると赤く燃え、燃え尽きて捨てるときは灰（灰色）になります。"
  },
  {
    id: "rid_006",
    genre: "riddle",
    difficulty: "hard",
    question: "「1日は24時間、1年は365日」ですが、うるう年（閏年）は1年何日？",
    options: ["364日", "365日", "366日", "367日"],
    answer: 2, // 366日
    explanation: "地球の公転周期は約365.2422日のため、約4年に一度2月29日を追加して366日になります。"
  },
  {
    id: "rid_007",
    genre: "riddle",
    difficulty: "hard",
    question: "四字熟語で「どんな困難にもくじけず、立ち向かうこと」を表すのはどれ？",
    options: ["七転八倒", "百折不撓（ひゃくせつふとう）", "付和雷同", "呉越同舟"],
    answer: 1, // 百折不撓
    explanation: "「百折不撓」は何百回折れても決してくじけない強い意志を表す四字熟語です。"
  },
  {
    id: "rid_008",
    genre: "riddle",
    difficulty: "boss",
    question: "数学で「0で割る（ゼロ除算）」計算を行うとどうなる？",
    options: ["答えは0になる", "答えは無限大になる", "定義されない（エラー）", "答えは1になる"],
    answer: 2, // 定義されない
    explanation: "通常の算術・数学体系において、0で割る演算は「定義されない（不能）」と定められています。"
  },

  // ==================== 雑学・生活・文化 (Trivia & Culture) ====================
  {
    id: "tri_001",
    genre: "trivia",
    difficulty: "easy",
    question: "トランプのカードで、ハートのキング（K）だけが持っていないヒゲは何？",
    options: ["あごヒゲ", "口ヒゲ", "ほおヒゲ", "全部ない"],
    answer: 1, // 口ヒゲ
    explanation: "ハートのキングはフランスのシャルルマーニュ大王がモデルとされ、口ヒゲが描かれていないのが特徴です。"
  },
  {
    id: "tri_002",
    genre: "trivia",
    difficulty: "easy",
    question: "オリンピックの五輪マークの5つの輪の色に含まれていないものはどれ？",
    options: ["青", "黄", "紫", "緑"],
    answer: 2, // 紫
    explanation: "五輪マークの5色は「青・黄・黒・緑・赤」で構成され、世界の五大陸を結びつけています。"
  },
  {
    id: "tri_003",
    genre: "trivia",
    difficulty: "normal",
    question: "消しゴムが鉛筆の文字を消せる主な原理は何？",
    options: ["紙を削り落とす", "黒鉛の粉をゴムが吸着して包み込む", "熱で黒鉛を溶かす", "化学反応で色を透明にする"],
    answer: 1, // 黒鉛の粉を吸着
    explanation: "紙の繊維に付着した鉛筆の黒鉛（炭素）の粉を、消しゴムのゴム質がより強い力で吸着して剥ぎ取っています。"
  },
  {
    id: "tri_004",
    genre: "trivia",
    difficulty: "normal",
    question: "世界で最初に作られたとされるカップ麺は何でしょう？",
    options: ["カップヌードル", "サッポロ一番", "赤いきつね", "出前一丁"],
    answer: 0, // カップヌードル
    explanation: "日清食品の創業者・安藤百福によって1971年に発売された「カップヌードル」が世界初のカップ麺です。"
  },
  {
    id: "tri_005",
    genre: "trivia",
    difficulty: "hard",
    question: "ピアノの鍵盤の標準的な総数は白鍵と黒鍵を合わせていくつ？",
    options: ["76鍵", "88鍵", "92鍵", "100鍵"],
    answer: 1, // 88鍵
    explanation: "標準的なグランドピアノやアップライトピアノは白鍵52鍵、黒鍵36鍵の合計88鍵で構成されています。"
  },
  {
    id: "tri_006",
    genre: "trivia",
    difficulty: "hard",
    question: "世界遺産条約を採択した国際機関の略称は何？",
    options: ["UNICEF", "UNESCO（ユネスコ）", "WHO", "UNHCR"],
    answer: 1, // UNESCO
    explanation: "UNESCO（国際連合教育科学文化機関）が人類共通の宝である世界遺産の登録・保護を推進しています。"
  },
  {
    id: "tri_007",
    genre: "trivia",
    difficulty: "boss",
    question: "国際宇宙ステーション（ISS）が地球を1周するのにかかる時間は約何分？",
    options: ["約45分", "約90分", "約180分", "約360分"],
    answer: 1, // 約90分
    explanation: "ISSは時速約28,000kmという猛スピードで飛行しており、わずか約90分で地球を1周（1日に約16周）します。"
  },

  // ==================== 追加問題（各エリア別バリエーション） ====================
  {
    id: "nat_011",
    genre: "nature",
    difficulty: "easy",
    question: "カメレオンが体の色を変える主な理由として、科学的に最も正しいのはどれ？",
    options: ["敵から隠れる擬態のためだけ", "体温調節や感情・コミュニケーションのため", "食べたエサの色が染み出すため", "眠っているときだけ変わる"],
    answer: 1,
    explanation: "カメレオンの体色変化は擬態だけでなく、日光を吸収する体温調整や興奮・威嚇などの感情表現に大きく使われます。"
  },
  {
    id: "nat_012",
    genre: "nature",
    difficulty: "normal",
    question: "鳥類の中で唯一、後ろ向きにホバリングしながら飛ぶことができる鳥は何？",
    options: ["ツバメ", "ハチドリ", "カワセミ", "スズメ"],
    answer: 1, // ハチドリ
    explanation: "ハチドリは毎秒数十回以上の超高速で羽ばたき、空中で静止（ホバリング）したり後退して飛ぶことができます。"
  },
  {
    id: "sci_011",
    genre: "science",
    difficulty: "easy",
    question: "氷が水に浮くのはなぜでしょう？",
    options: ["氷の方が水より密度が小さいから", "氷の中に空気が閉じ込められているから", "水が冷たいから", "氷の温度が0度以下だから"],
    answer: 0,
    explanation: "水は凍って結晶化すると分子の隙間が広がり体積が増えるため、液体の水よりも密度が軽くなって浮きます。"
  },
  {
    id: "sci_012",
    genre: "science",
    difficulty: "normal",
    question: "雷の光が見えてから「3秒後」にゴロゴロと音が聞こえた場合、雷までの距離はおよそ何メートル？",
    options: ["約300m", "約1,000m（1km）", "約3,000m（3km）", "約10,000m（10km）"],
    answer: 1, // 約1km
    explanation: "空気中の音の速さは秒速約340mなので、3秒×340m ＝ 約1,020メートル（約1km）となります。"
  },
  {
    id: "his_011",
    genre: "history",
    difficulty: "easy",
    question: "日本の紙幣（一万円札）の新しい肖像画に選ばれた「日本資本主義の父」と呼ばれる人物は誰？",
    options: ["福沢諭吉", "渋沢栄一", "津田梅子", "北里柴三郎"],
    answer: 1, // 渋沢栄一
    explanation: "渋沢栄一は明治から昭和にかけて約500もの企業の設立に関わり、日本経済の礎を築きました。"
  },
  {
    id: "his_012",
    genre: "history",
    difficulty: "normal",
    question: "地球上で最も深い場所とされる「マリアナ海溝・チャレンジャー海淵」の深さは約何メートル？",
    options: ["約3,000m", "約6,000m", "約11,000m", "約20,000m"],
    answer: 2, // 約11,000m
    explanation: "マリアナ海溝の最深部は水深約10,920メートル（約11km）に達し、エベレストがすっぽり沈む深さです。"
  },
  {
    id: "fan_011",
    genre: "fantasy",
    difficulty: "normal",
    question: "ドラゴンや怪物が守る宝物庫に眠る「呪われた指輪」を巡る北欧神話の英雄叙事詩は何？",
    options: ["ニーベルングの指環（ヴォルスンガ・サガ）", "イリアス", "オデュッセイア", "ベーオウルフ"],
    answer: 0,
    explanation: "魔竜ファヴニールを倒した英雄ジークフリート（シグルズ）とニーベルングの黄金・指輪の伝説です。"
  },
  {
    id: "fan_012",
    genre: "fantasy",
    difficulty: "hard",
    question: "ファンタジーの世界で登場する金属「ミスリル」を最初に生み出した作家は誰？",
    options: ["J・K・ローリング", "J・R・R・トールキン", "C・S・ルイス", "マイケル・モーパーゴ"],
    answer: 1, // トールキン
    explanation: "『指輪物語（ロード・オブ・ザ・リング）』の著者J・R・R・トールキンが生み出した銀のように輝く架空の強靭な金属です。"
  },
  {
    id: "rid_011",
    genre: "riddle",
    difficulty: "easy",
    question: "「切っても切っても、またすぐに現れる」人間の体の一部は何？",
    options: ["髪の毛や爪", "皮膚", "骨", "まつ毛だけ"],
    answer: 0,
    explanation: "髪の毛や爪は伸び続けるため、切っても時間が経つとまた伸びて現れます。"
  },
  {
    id: "rid_012",
    genre: "riddle",
    difficulty: "normal",
    question: "部屋に10本のロウソクが灯っています。風が吹いて2本消え、後でさらに1本消えました。最後まで残るロウソクは何本？",
    options: ["0本", "3本", "7本", "10本"],
    answer: 1, // 3本
    explanation: "消えなかった7本のロウソクは燃え尽きてしまいますが、消えた3本だけが燃え尽きずに残ります！"
  },
  {
    id: "tri_011",
    genre: "trivia",
    difficulty: "easy",
    question: "世界で最も多くの国で公用語として話されている言語は何？",
    options: ["中国語", "スペイン語", "英語", "フランス語"],
    answer: 2, // 英語
    explanation: "公用語として採用している国の数では「英語」が世界第1位（約50カ国以上）です。"
  },
  {
    id: "tri_012",
    genre: "trivia",
    difficulty: "normal",
    question: "野菜の「トマト」は、植物学的には「野菜」と「果物（果実）」のどちらに分類される？",
    options: ["果実（果物）", "根菜", "葉菜", "キノコ類"],
    answer: 0, // 果実
    explanation: "植物学的には花が咲いた後に種子を含む実をつけるため「果実（フルーツ）」に分類されます（農林水産省の生産区分では果菜）。"
  },
  // ==================== 追加問題・ジャンル別拡充 (Additional 30+ Questions) ====================
  {
    id: "nat_013",
    genre: "nature",
    difficulty: "easy",
    question: "コアラが食べることで知られるユーカリの葉ですが、ユーカリには本来どんな特徴がある？",
    options: ["非常に甘い", "微量の毒が含まれている", "海水でも育つ", "夜に光る"],
    answer: 1,
    explanation: "ユーカリの葉には毒素（タンニンや油分）が含まれており、コアラは特殊な長い盲腸で毒を分解・無毒化して食べています。"
  },
  {
    id: "nat_014",
    genre: "nature",
    difficulty: "normal",
    question: "シマウマの地肌（毛を剃ったときの皮膚）の色は何色でしょう？",
    options: ["白", "黒（または黒褐色）", "ピンク", "縞模様"],
    answer: 1,
    explanation: "シマウマの皮膚の地肌は黒色で、毛の生え方によって白と黒の縞模様が作られています。"
  },
  {
    id: "nat_015",
    genre: "nature",
    difficulty: "hard",
    question: "深海魚「デメニギス」の頭部は透明ですが、緑色の球体状の器官は何？",
    options: ["脳", "目（眼球）", "発光器", "胃"],
    answer: 1,
    explanation: "頭部の透明なドームの中にある緑色の球体がデメニギスの「目」で、真上を見上げて獲物の影を探します。"
  },
  {
    id: "sci_013",
    genre: "science",
    difficulty: "easy",
    question: "乾電池のプラス極とマイナス極のうち、凸（出っ張り）があるのはどっち？",
    options: ["プラス極", "マイナス極", "両方にある", "製品によって異なる"],
    answer: 0,
    explanation: "一般的な単1〜単4などの乾電池は、出っ張りがある突起側が「プラス（+）極」です。"
  },
  {
    id: "sci_014",
    genre: "science",
    difficulty: "normal",
    question: "ダイアモンドと鉛筆の芯（黒鉛）は、どちらも同じ元素からできています。その元素は何？",
    options: ["鉄", "ケイ素", "炭素", "硫黄"],
    answer: 2,
    explanation: "ダイアモンドも黒鉛も同じ「炭素（C）」の同素体で、結晶構造（結合の並び方）の違いで硬さや性質が大きく異なります。"
  },
  {
    id: "sci_015",
    genre: "science",
    difficulty: "hard",
    question: "絶対零度（これ以上下がらない理論上の最低温度）はおよそ摂氏（℃）何度？",
    options: ["-100℃", "-273.15℃", "-500℃", "-1000℃"],
    answer: 1,
    explanation: "絶対零度は0ケルビン（K）であり、摂氏では「-273.15℃」となります。原子や分子の熱運動が完全に静止する極限温度です。"
  },
  {
    id: "sci_016",
    genre: "science",
    difficulty: "boss",
    question: "相対性理論において提唱された「エネルギーと質量の等価性」を表す有名な方程式はどれ？",
    options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
    answer: 1,
    explanation: "アインシュタインが導き出した「E = mc²」は、質量（m）と光速度の2乗（c²）がエネルギー（E）に変換できることを示しています。"
  },
  {
    id: "his_013",
    genre: "history",
    difficulty: "easy",
    question: "「鳴かぬなら 鳴くまで待とう ホトトギス」と詠まれた、江戸幕府の初代将軍は誰？",
    options: ["織田信長", "豊臣秀吉", "徳川家康", "明智光秀"],
    answer: 2,
    explanation: "信長は「殺してしまえ」、秀吉は「鳴かせてみせよう」、家康は「鳴くまで待とう」の句でそれぞれの性格が例えられます。"
  },
  {
    id: "his_014",
    genre: "history",
    difficulty: "normal",
    question: "古代エジプト文字（ヒエログリフ）解読の決定打となった、1799年に発見された石碑は何？",
    options: ["ロゼッタ・ストーン", "モアブ碑文", "ハンムラビ石柱", "ベヒストゥン碑文"],
    answer: 0,
    explanation: "フランス軍がエジプトで発見した「ロゼッタ・ストーン」には同一内容が3種の文字で刻まれており、シャンポリオンが解読に成功しました。"
  },
  {
    id: "his_015",
    genre: "history",
    difficulty: "hard",
    question: "かつて地中海世界を支配したローマ帝国の公用語は何語だった？",
    options: ["ギリシャ語", "ラテン語", "英語", "フランス語"],
    answer: 1,
    explanation: "古代ローマ帝国の公用語は「ラテン語」で、現代のイタリア語・フランス語・スペイン語などの母体となりました。"
  },
  {
    id: "fan_013",
    genre: "fantasy",
    difficulty: "easy",
    question: "RPGで魔法を使うために消費する「MP」は一般的に何の略？",
    options: ["Magic Points", "Monster Power", "Mega Potion", "Master Piece"],
    answer: 0,
    explanation: "MPは「Magic Points（マジックポイント）」または「Mana Points」の略で、魔法の行使に必要な魔力量を表します。"
  },
  {
    id: "fan_014",
    genre: "fantasy",
    difficulty: "normal",
    question: "ギリシャ神話で、上半身が人間で下半身が馬の姿をした種族は何？",
    options: ["ミノタウロス", "ケンタウロス", "スフィンクス", "サテュロス"],
    answer: 1,
    explanation: "ケンタウロス族は馬の胴体に人間の上半身がついた姿で、弓術や医術、天文学に長けた賢者ケイローンなどが有名です。"
  },
  {
    id: "fan_015",
    genre: "fantasy",
    difficulty: "hard",
    question: "『千夜一夜物語（アラビアンナイト）』で、洞窟を開く呪文として有名な言葉は何？",
    options: ["アブラカダブラ", "開けゴマ！", "ビビディ・バビディ・ブー", "バルス！"],
    answer: 1,
    explanation: "「アリババと40人の盗賊」の中で、財宝が隠された岩の扉を開ける合言葉が「開けゴマ（Open Sesame）」です。"
  },
  {
    id: "rid_013",
    genre: "riddle",
    difficulty: "easy",
    question: "話すことはできないけれど、世界中のあらゆる質問に答えてくれる『紙の先生』は何？",
    options: ["テレビ", "本・辞書", "スマートフォン", "黒板"],
    answer: 1,
    explanation: "文字を通じてあらゆる知識や答えを教えてくれる「本」や「辞書」のなぞなぞです。"
  },
  {
    id: "rid_014",
    genre: "riddle",
    difficulty: "normal",
    question: "「10人の大人がひとつの傘に入ったのに、誰一人として服が濡れませんでした」なぜでしょう？",
    options: ["傘が超特大だったから", "雨が降っていなかったから", "みんなレインコートを着ていたから", "透明人間だったから"],
    answer: 1,
    explanation: "雨が降っていない（晴れている）日だったので、誰も濡れませんでした！"
  },
  {
    id: "rid_015",
    genre: "riddle",
    difficulty: "hard",
    question: "時計の長針と短針が「1日（24時間）」の間にピッタリ重なり合う回数は何回？",
    options: ["24回", "22回", "20回", "12回"],
    answer: 1,
    explanation: "長針が短針を追い越す周期は約65分27秒のため、12時間で11回、24時間では合計「22回」重なります。"
  },
  {
    id: "tri_013",
    genre: "trivia",
    difficulty: "easy",
    question: "日本の硬貨（1円玉〜500円玉）の中で、真ん中に穴が空いているのは「5円玉」とあと何円玉？",
    options: ["10円玉", "50円玉", "100円玉", "500円玉"],
    answer: 1,
    explanation: "現在発行されている日本の硬貨で穴が空いているのは「5円玉」と「50円玉」の2種類です。"
  },
  {
    id: "tri_014",
    genre: "trivia",
    difficulty: "normal",
    question: "世界で一番小さな国である「バチカン市国」の面積はおよそどれくらい？",
    options: ["皇居の約半分（東京ドーム約10個分）", "ディズニーランド約1個分（約0.44平方km）", "琵琶湖と同じくらい", "山手線の内側全部"],
    answer: 1,
    explanation: "バチカン市国は面積約0.44平方km（東京ディズニーランドと同程度）で、世界最小の独立国家です。"
  },
  {
    id: "tri_015",
    genre: "trivia",
    difficulty: "hard",
    question: "童話『シンデレラ』で、魔法使いがカボチャを変身させた乗り物は何？",
    options: ["空飛ぶじゅうたん", "カボチャの馬車", "白い船", "金の汽車"],
    answer: 1,
    explanation: "シンデレラが舞踏会に行くために魔法使いがカボチャを豪華な馬車に変え、ネズミを白馬に変身させました。"
  },
  {
    id: "boss_005",
    genre: "boss",
    difficulty: "boss",
    question: "【創造主の究極試練】生命の遺伝情報を担う「DNA」の4つの塩基（A, T, G, C）の「A」は何の略？",
    options: ["アデニン", "チミン", "グアニン", "シトシン"],
    answer: 0,
    explanation: "DNAの4塩基はアデニン（Adenine）、チミン（Thymine）、グアニン（Guanine）、シトシン（Cytosine）です。"
  },
  {
    id: "sci_017",
    genre: "science",
    difficulty: "easy",
    question: "虹の7色のうち、最も波長が長く一番外側に見える色は何色？",
    options: ["赤", "紫", "青", "黄"],
    answer: 0,
    explanation: "可視光線の中で最も波長が長い光は「赤」で、屈折率が小さいため虹の外側（一番上）に現れます。"
  },
  {
    id: "sci_018",
    genre: "science",
    difficulty: "normal",
    question: "人間の骨の数は、成人になると全身でおよそ何本あるでしょう？",
    options: ["約100本", "約200本（約206本）", "約350本", "約500本"],
    answer: 1,
    explanation: "人間の骨は生まれたときは約300本以上ありますが、成長とともに結合し、大人になると約206本になります。"
  },
  {
    id: "nat_016",
    genre: "nature",
    difficulty: "easy",
    question: "世界最大の哺乳類である「シロナガスクジラ」の全長はおよそどれくらい？",
    options: ["約10m", "約30m", "約60m", "約100m"],
    answer: 1,
    explanation: "シロナガスクジラは全長約25〜30メートル、体重100トン以上にも達する地球史上最大の動物です。"
  },
  {
    id: "nat_017",
    genre: "nature",
    difficulty: "normal",
    question: "フクロウが夜でも獲物を見つけられる優れた特徴として、首は何度くらい回る？",
    options: ["約90度", "約180度", "約270度", "360度（1回転）"],
    answer: 2,
    explanation: "フクロウは眼球を動かせない代わりに頸椎の構造が発達しており、首を約270度まで回すことができます。"
  },
  {
    id: "his_016",
    genre: "history",
    difficulty: "easy",
    question: "フランスの世界遺産「エッフェル塔」が建てられた目的は何の記念？",
    options: ["フランス革命100周年（パリ万国博覧会）", "ナポレオンの戴冠式", "第一次世界大戦の勝利", "新世紀カウントダウン"],
    answer: 0,
    explanation: "1889年に開催されたパリ万国博覧会（フランス革命100周年記念）のモニュメントとしてギュスターヴ・エッフェルによって建設されました。"
  },
  {
    id: "his_017",
    genre: "history",
    difficulty: "normal",
    question: "古代ギリシャで開かれた古代オリンピックで、優勝者に授与された冠は何の葉でできていた？",
    options: ["オリーブの冠", "ゲッケイジュ（月桂樹）の冠", "バラの冠", "ブドウの冠"],
    answer: 0,
    explanation: "古代オリンピック（オリュンピア祭）の勝者には聖木である「野生のオリーブの冠（オリーブ冠）」が授けられました。"
  },
  {
    id: "fan_016",
    genre: "fantasy",
    difficulty: "easy",
    question: "童話『ジャックと豆の木』で、雲の上まで伸びた豆の木を登ったジャックが見つけたのは誰の城？",
    options: ["巨人の城", "ドラゴンの城", "魔法使いの城", "エルフの城"],
    answer: 0,
    explanation: "ジャックは魔法の豆が天高く伸びた先で巨人の城にたどり着き、金の卵を産むガチョウなどを持ち帰りました。"
  },
  {
    id: "fan_017",
    genre: "fantasy",
    difficulty: "normal",
    question: "ギリシャ神話で、ゼウスの雷霆（いかずち）を鍛造した単眼の巨人族は何？",
    options: ["キュクロプス（サイクロプス）", "ヘカトンケイル", "ティターン", "ゴーレム"],
    answer: 0,
    explanation: "額にひとつの目を持つ巨人キュクロプスは優れた鍛冶技術を持ち、ゼウスに雷を、ポセイドンに三叉槍を授けました。"
  },
  {
    id: "rid_016",
    genre: "riddle",
    difficulty: "easy",
    question: "「朝起きて最初にする行動」はなーんだ？",
    options: ["歯をみがく", "目を開ける", "服を着替える", "おはようと言う"],
    answer: 1,
    explanation: "目が覚めたら、まず最初に「目を開ける」ことになりますね！"
  },
  {
    id: "rid_017",
    genre: "riddle",
    difficulty: "normal",
    question: "走れば走るほど、後ろに増えていく足跡以外のものってなーんだ？",
    options: ["時間", "息切れ", "汗", "影"],
    answer: 0,
    explanation: "走れば走るほど、過去の時間（経過した秒数・タイム）が増えていきます。"
  },
  {
    id: "tri_016",
    genre: "trivia",
    difficulty: "easy",
    question: "日本で最も北にある都道府県はどこでしょう？",
    options: ["青森県", "北海道", "秋田県", "岩手県"],
    answer: 1,
    explanation: "日本最北端の都道府県は「北海道」（択捉島や宗谷岬）です。"
  },
  {
    id: "tri_017",
    genre: "trivia",
    difficulty: "normal",
    question: "世界三大珍味といえば「キャビア」「トリュフ」と、あと一つは何？",
    options: ["フォアグラ", "フカヒレ", "松茸", "エスカルゴ"],
    answer: 0,
    explanation: "世界三大珍味はチョウザメの卵「キャビア」、高級キノコ「トリュフ」、ガチョウ等の肝臓「フォアグラ」です。"
  },
  {
    id: "tri_018",
    genre: "trivia",
    difficulty: "hard",
    question: "WebサイトのURLに使われる「https」の「s」は何の略？",
    options: ["Secure（安全・暗号化）", "Speed（高速）", "Server（サーバー）", "Standard（標準）"],
    answer: 0,
    explanation: "HTTPSの「S」は「Secure」の略で、通信内容をSSL/TLSで暗号化して安全に送受信することを示します。"
  }
];

// Helper functions for quiz queries
function getRandomQuestions(genre, difficulty, count = 3) {
  let pool = QUIZ_DATABASE;
  if (genre && genre !== 'all') {
    pool = pool.filter(q => q.genre === genre);
  }
  if (difficulty && difficulty !== 'all') {
    pool = pool.filter(q => q.difficulty === difficulty);
  }
  if (pool.length < count) {
    pool = QUIZ_DATABASE.filter(q => q.difficulty === difficulty || difficulty === 'all');
  }
  if (pool.length === 0) {
    pool = QUIZ_DATABASE;
  }
  // Shuffle pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getQuestionById(id) {
  return QUIZ_DATABASE.find(q => q.id === id);
}

window.QUIZ_DATABASE = QUIZ_DATABASE;
window.getRandomQuestions = getRandomQuestions;
window.getQuestionById = getQuestionById;
