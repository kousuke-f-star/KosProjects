/**
 * Main Game Engine for Quiz Branching RPG
 * Handles state, quiz combat, branching story, inventory, modals, and WebAudio sounds.
 */

class QuizRPGGame {
  constructor() {
    this.player = {
      job: null,
      name: "勇者",
      level: 1,
      exp: 0,
      nextExp: 50,
      hp: 100,
      maxHp: 100,
      mp: 30,
      maxMp: 30,
      atk: 25,
      def: 10,
      gold: 50,
      timeLimit: 18,
      inventory: [],
      equips: [],
      hasBarrier: false,
      isTimerFrozen: false
    };

    this.stats = {
      totalQuestions: 0,
      correctAnswers: 0,
      currentCombo: 0,
      maxCombo: 0,
      visitedNodes: [],
      defeatedMonsters: [],
      unlockedEndings: []
    };

    this.currentNodeId = "start";
    this.currentEnemy = null;
    this.currentQuiz = null;
    this.quizList = [];
    this.quizIndex = 0;
    this.quizTimer = null;
    this.timeRemaining = 0;
    this.isAnswering = false;

    // Load saved collection
    this.loadCollection();
  }

  init() {
    this.bindEvents();
    this.initCanvas();
    this.showScreen("title-screen");
    this.updateAudioButtonState();
  }

  // ================= Event Listeners =================
  bindEvents() {
    // Sound & BGM toggles
    document.getElementById("btn-toggle-sound")?.addEventListener("click", () => {
      const isMuted = window.soundEngine.toggleMute();
      this.updateAudioButtonState();
    });

    // Title buttons
    document.getElementById("btn-new-game")?.addEventListener("click", () => {
      window.soundEngine.playClick();
      this.openJobSelection();
    });

    document.getElementById("btn-continue")?.addEventListener("click", () => {
      window.soundEngine.playClick();
      this.loadGame();
    });

    document.getElementById("btn-open-dict")?.addEventListener("click", () => {
      window.soundEngine.playClick();
      this.openDictionaryModal();
    });

    document.getElementById("btn-open-tree")?.addEventListener("click", () => {
      window.soundEngine.playClick();
      this.openTreeMapModal();
    });

    // Close Modals
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".modal-overlay");
        if (modal) modal.classList.remove("active");
      });
    });

    // Return to Title from Ending
    document.getElementById("btn-ending-title")?.addEventListener("click", () => {
      window.soundEngine.playClick();
      this.showScreen("title-screen");
      window.soundEngine.playBgm("title");
    });
  }

  updateAudioButtonState() {
    const btn = document.getElementById("btn-toggle-sound");
    if (!btn) return;
    if (window.soundEngine.isMuted) {
      btn.innerHTML = `🔇 <span style="font-size:0.75rem">消音中</span>`;
    } else {
      btn.innerHTML = `🔊 <span style="font-size:0.75rem">音ON</span>`;
    }
  }

  // ================= Screen Management =================
  showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
    }

    // Toggle header stats and persistent bars visibility
    const headerStats = document.getElementById("header-player-stats");
    const persistentBars = document.getElementById("persistent-player-bars");
    if (screenId === "title-screen" || screenId === "ending-screen") {
      if (headerStats) headerStats.style.display = "none";
      if (persistentBars) persistentBars.style.display = "none";
    } else {
      if (headerStats) headerStats.style.display = "flex";
      if (persistentBars) persistentBars.style.display = "block";
    }
  }

  // ================= Job Selection & Start Game =================
  openJobSelection() {
    const modal = document.getElementById("modal-job-select");
    const container = document.getElementById("job-list-container");
    if (!container) return;

    container.innerHTML = "";
    Object.values(window.JOBS).forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <div class="job-icon">${job.icon}</div>
        <div class="job-name">${job.name}</div>
        <div class="job-desc">${job.desc}</div>
        <div class="job-stat-mini">HP:${job.hp} / MP:${job.mp} / 攻:${job.atk}</div>
        <div class="job-stat-mini" style="margin-top:4px; color:#fbbf24;">特性: ${job.passive}</div>
      `;
      card.addEventListener("click", () => {
        window.soundEngine.playSelect();
        this.startNewGame(job.id);
        modal.classList.remove("active");
      });
      container.appendChild(card);
    });

    modal.classList.add("active");
  }

  startNewGame(jobId) {
    const jobData = window.JOBS[jobId];
    this.player = {
      job: jobId,
      name: jobData.name,
      level: 1,
      exp: 0,
      nextExp: 50,
      hp: jobData.hp,
      maxHp: jobData.hp,
      mp: jobData.mp,
      maxMp: jobData.mp,
      atk: jobData.atk,
      def: jobData.def,
      gold: 50,
      timeLimit: jobData.timeLimit,
      inventory: ["potion", "scroll_5050"],
      equips: [],
      hasBarrier: false,
      isTimerFrozen: false
    };

    this.stats = {
      totalQuestions: 0,
      correctAnswers: 0,
      currentCombo: 0,
      maxCombo: 0,
      visitedNodes: [],
      defeatedMonsters: [],
      unlockedEndings: this.stats.unlockedEndings || []
    };

    this.currentNodeId = "start";
    this.updateStatusBars();
    this.goToNode("start");
    window.soundEngine.playBgm("field");
  }

  // ================= Navigation & Node Handling =================
  goToNode(nodeId) {
    this.currentNodeId = nodeId;
    if (!this.stats.visitedNodes.includes(nodeId)) {
      this.stats.visitedNodes.push(nodeId);
    }
    this.saveGame();

    const node = window.STORY_TREE[nodeId];
    if (!node) {
      console.error("Unknown node:", nodeId);
      return;
    }

    if (node.type === "choice") {
      this.renderChoiceNode(node);
    } else if (node.type === "battle" || node.type === "boss") {
      this.startBattle(node);
    } else if (node.type === "shop") {
      this.renderShopNode(node);
    }
  }

  // 1. Choice / Story Node
  renderChoiceNode(node) {
    this.showScreen("story-screen");
    window.soundEngine.playBgm("field");

    document.getElementById("story-chapter-tag").textContent = node.chapter;
    document.getElementById("story-node-title").textContent = node.title;
    document.getElementById("story-text").textContent = node.story;

    const banner = document.getElementById("story-scene-banner");
    banner.className = "story-scene-banner " + (node.bgClass || "env-temple");
    banner.textContent = node.icon || "🗺️";

    const grid = document.getElementById("branch-choices-grid");
    grid.innerHTML = "";

    node.choices.forEach(ch => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = `
        <span>${ch.text}</span>
        <span class="choice-preview">（${ch.preview}）</span>
      `;
      btn.addEventListener("click", () => {
        window.soundEngine.playClick();
        this.goToNode(ch.target);
      });
      grid.appendChild(btn);
    });
  }

  // 2. Shop / Rest Node
  renderShopNode(node) {
    this.showScreen("shop-screen");
    window.soundEngine.playBgm("field");

    document.getElementById("shop-title").textContent = node.title;
    document.getElementById("shop-story").textContent = node.story;

    // Heal player
    if (node.healAmount) {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + node.healAmount);
      this.player.mp = this.player.maxMp;
      this.updateStatusBars();
    }

    const grid = document.getElementById("shop-items-grid");
    grid.innerHTML = "";

    window.ITEMS.forEach(item => {
      const card = document.createElement("div");
      card.className = "shop-item-card";
      card.innerHTML = `
        <div class="item-info-top">
          <div class="item-icon">${item.icon}</div>
          <div>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
          </div>
        </div>
        <div class="item-buy-row">
          <span class="item-price">🪙 ${item.price} G</span>
          <button class="icon-btn buy-btn" data-id="${item.id}">購入</button>
        </div>
      `;

      card.querySelector(".buy-btn").addEventListener("click", () => {
        this.buyItem(item);
      });

      grid.appendChild(card);
    });

    const nextBtn = document.getElementById("btn-shop-depart");
    nextBtn.onclick = () => {
      window.soundEngine.playClick();
      this.goToNode(node.next);
    };
  }

  buyItem(item) {
    if (this.player.gold < item.price) {
      window.soundEngine.playWrong();
      this.showDamagePopup("ゴールド不足！", false, "status-gold");
      return;
    }

    this.player.gold -= item.price;
    window.soundEngine.playChest();

    if (item.type === "equip") {
      this.player.equips.push(item.id);
      if (item.atk) this.player.atk += item.atk;
      if (item.hp) {
        this.player.maxHp += item.hp;
        this.player.hp += item.hp;
      }
      if (item.mp) {
        this.player.maxMp += item.mp;
        this.player.mp += item.mp;
      }
      if (item.def) this.player.def += item.def;
      this.showDamagePopup("装備しました！", false, "status-gold");
    } else {
      this.player.inventory.push(item.id);
      this.showDamagePopup("購入しました！", false, "status-gold");
    }

    this.updateStatusBars();
  }

  // 3. Battle Node
  startBattle(node) {
    this.showScreen("battle-screen");
    this.currentEnemy = { ...node.enemy, maxHp: node.enemy.hp };
    
    // Pick questions
    this.quizList = window.getRandomQuestions(node.genre, node.enemy.difficulty, node.enemy.quizCount || 3);
    this.quizIndex = 0;

    // Track monster dictionary
    if (!this.stats.defeatedMonsters.includes(this.currentEnemy.name)) {
      this.stats.defeatedMonsters.push(this.currentEnemy.name);
      this.saveCollection();
    }

    // Play Battle / Boss BGM
    window.soundEngine.playBgm(node.enemy.isBoss ? "boss" : "battle");

    // Render enemy
    document.getElementById("enemy-name").textContent = this.currentEnemy.name;
    document.getElementById("enemy-sprite").textContent = this.currentEnemy.icon;
    this.updateEnemyHp();

    // Render skills bar
    this.renderBattleSkills();

    // Next question
    this.nextQuestion();
  }

  updateEnemyHp() {
    const hpBar = document.getElementById("enemy-hp-fill");
    const hpText = document.getElementById("enemy-hp-text");
    const pct = Math.max(0, (this.currentEnemy.hp / this.currentEnemy.maxHp) * 100);
    hpBar.style.width = `${pct}%`;
    hpText.textContent = `${this.currentEnemy.hp} / ${this.currentEnemy.maxHp} HP`;
  }

  renderBattleSkills() {
    const bar = document.getElementById("battle-skills-bar");
    bar.innerHTML = "";

    const jobData = window.JOBS[this.player.job];

    // Job Skill Button
    const skillBtn = document.createElement("button");
    skillBtn.className = "skill-btn";
    skillBtn.innerHTML = `
      <span>⚡ ${jobData.skill.name}</span>
      <span style="font-size:0.75rem; color:#60a5fa;">MP ${jobData.skill.cost}</span>
    `;
    skillBtn.disabled = this.player.mp < jobData.skill.cost;
    skillBtn.addEventListener("click", () => {
      this.useJobSkill(jobData.skill);
    });
    bar.appendChild(skillBtn);

    // Inventory Items buttons
    const itemCounts = {};
    this.player.inventory.forEach(id => {
      itemCounts[id] = (itemCounts[id] || 0) + 1;
    });

    Object.keys(itemCounts).forEach(itemId => {
      const item = window.ITEMS.find(i => i.id === itemId);
      if (!item) return;

      const itemBtn = document.createElement("button");
      itemBtn.className = "skill-btn";
      itemBtn.innerHTML = `
        <span>${item.icon} ${item.name} (${itemCounts[itemId]})</span>
        <span style="font-size:0.75rem; color:#4ade80;">消費アイテム</span>
      `;
      itemBtn.addEventListener("click", () => {
        this.useItem(item);
      });
      bar.appendChild(itemBtn);
    });
  }

  useJobSkill(skill) {
    if (this.player.mp < skill.cost) return;
    this.player.mp -= skill.cost;
    window.soundEngine.playSkill();
    this.updateStatusBars();

    if (skill.action === "eliminate_options") {
      this.eliminateWrongOptions();
    } else if (skill.action === "freeze_timer") {
      this.player.isTimerFrozen = true;
      this.showDamagePopup("時間停止発動！", false, "quiz-timer-text");
    } else if (skill.action === "heal") {
      const healVal = Math.floor(this.player.maxHp * 0.5);
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + healVal);
      window.soundEngine.playHeal();
      this.showDamagePopup(`+${healVal} HP`, true, "status-hp");
      this.updateStatusBars();
    } else if (skill.action === "attack_heavy") {
      const dmg = this.player.atk * 2;
      this.damageEnemy(dmg, true);
    }

    this.renderBattleSkills();
  }

  useItem(item) {
    const idx = this.player.inventory.indexOf(item.id);
    if (idx === -1) return;
    this.player.inventory.splice(idx, 1);

    if (item.effect === "heal_hp_50") {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 50);
      window.soundEngine.playHeal();
      this.showDamagePopup("+50 HP", true, "status-hp");
    } else if (item.effect === "heal_mp_30") {
      this.player.mp = Math.min(this.player.maxMp, this.player.mp + 30);
      window.soundEngine.playHeal();
      this.showDamagePopup("+30 MP", true, "status-mp");
    } else if (item.effect === "eliminate_options") {
      window.soundEngine.playSkill();
      this.eliminateWrongOptions();
    } else if (item.effect === "add_time_10") {
      window.soundEngine.playSkill();
      this.timeRemaining += 10;
      this.showDamagePopup("+10秒！", false, "quiz-timer-text");
    } else if (item.effect === "barrier_one_miss") {
      window.soundEngine.playSkill();
      this.player.hasBarrier = true;
      this.showDamagePopup("身代わりバリア展開！", false, "status-hp");
    }

    this.updateStatusBars();
    this.renderBattleSkills();
  }

  eliminateWrongOptions() {
    if (!this.currentQuiz) return;
    const btns = Array.from(document.querySelectorAll(".quiz-opt-btn"));
    const wrongBtns = btns.filter((b, idx) => idx !== this.currentQuiz.answer && !b.classList.contains("eliminated"));
    
    // Eliminate 2 wrong options
    const toEliminate = wrongBtns.sort(() => 0.5 - Math.random()).slice(0, 2);
    toEliminate.forEach(b => b.classList.add("eliminated"));
  }

  // ================= Quiz Loop =================
  nextQuestion() {
    if (this.quizIndex >= this.quizList.length) {
      // Pick additional question if enemy still alive
      const extra = window.getRandomQuestions(this.currentEnemy.genre, this.currentEnemy.difficulty, 1);
      this.quizList.push(extra[0]);
    }

    this.currentQuiz = this.quizList[this.quizIndex];
    this.isAnswering = false;
    this.player.isTimerFrozen = false;

    // Reset UI
    const explBox = document.getElementById("quiz-explanation-box");
    explBox.classList.remove("active");
    explBox.textContent = "";

    document.getElementById("quiz-genre-badge").textContent = `ジャンル: ${this.currentQuiz.genre.toUpperCase()}`;
    document.getElementById("quiz-combo-badge").textContent = this.stats.currentCombo > 1 ? `🔥 ${this.stats.currentCombo} COMBO!` : "";
    document.getElementById("quiz-question-text").textContent = this.currentQuiz.question;

    const optGrid = document.getElementById("quiz-options-grid");
    optGrid.innerHTML = "";

    this.currentQuiz.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `<span style="color:#fbbf24; font-weight:900;">${['A', 'B', 'C', 'D'][idx]}.</span> ${opt}`;
      btn.addEventListener("click", () => this.handleAnswer(idx, btn));
      optGrid.appendChild(btn);
    });

    // Start Timer
    this.startQuizTimer();
  }

  startQuizTimer() {
    if (this.quizTimer) clearInterval(this.quizTimer);
    this.timeRemaining = this.player.timeLimit;
    const timerFill = document.getElementById("quiz-timer-fill");
    const timerText = document.getElementById("quiz-timer-text");

    const updateTimer = () => {
      if (!this.player.isTimerFrozen) {
        this.timeRemaining -= 0.1;
      }
      const pct = Math.max(0, (this.timeRemaining / this.player.timeLimit) * 100);
      timerFill.style.width = `${pct}%`;
      timerText.textContent = `${Math.max(0, Math.ceil(this.timeRemaining))}s`;

      if (this.timeRemaining <= 0) {
        clearInterval(this.quizTimer);
        this.handleTimeOut();
      }
    };

    updateTimer();
    this.quizTimer = setInterval(updateTimer, 100);
  }

  handleAnswer(selectedIdx, btnElement) {
    if (this.isAnswering) return;
    this.isAnswering = true;
    clearInterval(this.quizTimer);

    this.stats.totalQuestions++;
    const isCorrect = (selectedIdx === this.currentQuiz.answer);

    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === this.currentQuiz.answer) {
        b.classList.add("correct");
      }
    });

    // Show educational explanation
    const explBox = document.getElementById("quiz-explanation-box");
    explBox.innerHTML = `<strong>💡 解説：</strong> ${this.currentQuiz.explanation}`;
    explBox.classList.add("active");

    if (isCorrect) {
      this.stats.correctAnswers++;
      this.stats.currentCombo++;
      if (this.stats.currentCombo > this.stats.maxCombo) {
        this.stats.maxCombo = this.stats.currentCombo;
      }

      window.soundEngine.playCorrect();

      // Damage enemy
      const isCritical = (this.stats.currentCombo >= 3 || Math.random() < 0.2);
      const damage = Math.floor(this.player.atk * (isCritical ? 1.8 : 1.0) * (1 + this.stats.currentCombo * 0.1));
      
      setTimeout(() => {
        this.damageEnemy(damage, isCritical);
      }, 500);

    } else {
      btnElement.classList.add("wrong");
      this.stats.currentCombo = 0;
      window.soundEngine.playWrong();

      // Enemy retaliates
      setTimeout(() => {
        this.damagePlayer(this.currentEnemy.atk);
      }, 700);
    }
  }

  handleTimeOut() {
    if (this.isAnswering) return;
    this.isAnswering = true;
    this.stats.totalQuestions++;
    this.stats.currentCombo = 0;
    window.soundEngine.playWrong();

    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === this.currentQuiz.answer) {
        b.classList.add("correct");
      }
    });

    const explBox = document.getElementById("quiz-explanation-box");
    explBox.innerHTML = `<strong>⏰ 時間切れ！ 正解は【${this.currentQuiz.options[this.currentQuiz.answer]}】でした。</strong><br>💡 ${this.currentQuiz.explanation}`;
    explBox.classList.add("active");

    setTimeout(() => {
      this.damagePlayer(this.currentEnemy.atk);
    }, 700);
  }

  damageEnemy(damage, isCritical = false) {
    this.currentEnemy.hp = Math.max(0, this.currentEnemy.hp - damage);
    this.updateEnemyHp();

    // Sprite shake
    const sprite = document.getElementById("enemy-sprite");
    sprite.classList.add("hit");
    setTimeout(() => sprite.classList.remove("hit"), 300);

    if (isCritical) {
      window.soundEngine.playCritical();
      this.showDamagePopup(`💥 CRITICAL! -${damage}`, false, "enemy-sprite", true);
    } else {
      window.soundEngine.playAttack();
      this.showDamagePopup(`-${damage}`, false, "enemy-sprite");
    }

    if (this.currentEnemy.hp <= 0) {
      setTimeout(() => this.winBattle(), 1000);
    } else {
      this.quizIndex++;
      setTimeout(() => this.nextQuestion(), 1800);
    }
  }

  damagePlayer(enemyAtk) {
    if (this.player.hasBarrier) {
      this.player.hasBarrier = false;
      window.soundEngine.playSkill();
      this.showDamagePopup("🛡️ バリアで無効化！", false, "status-hp");
      this.quizIndex++;
      setTimeout(() => this.nextQuestion(), 1800);
      return;
    }

    const job = window.JOBS[this.player.job];
    let dmg = Math.max(5, enemyAtk - Math.floor(this.player.def * 0.5));
    if (job && job.id === "paladin") {
      dmg = Math.floor(dmg * 0.8); // Paladin passive
    }

    this.player.hp = Math.max(0, this.player.hp - dmg);
    window.soundEngine.playDamage();
    this.updateStatusBars();
    this.showDamagePopup(`-${dmg} HP`, false, "status-hp");

    if (this.player.hp <= 0) {
      setTimeout(() => this.loseBattle(), 1000);
    } else {
      this.quizIndex++;
      setTimeout(() => this.nextQuestion(), 1800);
    }
  }

  winBattle() {
    window.soundEngine.playFanfare();
    const expGain = this.currentEnemy.exp;
    const goldMultiplier = (this.player.job === "rogue") ? 1.5 : 1.0;
    const goldGain = Math.floor(this.currentEnemy.gold * goldMultiplier);

    this.player.exp += expGain;
    this.player.gold += goldGain;
    this.showDamagePopup(`+${expGain} EXP / +${goldGain} G`, false, "enemy-display-zone");

    this.checkLevelUp();
    this.updateStatusBars();

    const node = window.STORY_TREE[this.currentNodeId];

    setTimeout(() => {
      if (node.type === "boss") {
        this.triggerEnding(node.ending);
      } else if (node.next) {
        this.goToNode(node.next);
      }
    }, 2000);
  }

  loseBattle() {
    window.soundEngine.playGameOver();
    this.triggerEnding("ending_defeat");
  }

  checkLevelUp() {
    if (this.player.exp >= this.player.nextExp) {
      this.player.level++;
      this.player.exp -= this.player.nextExp;
      this.player.nextExp = Math.floor(this.player.nextExp * 1.5);
      
      this.player.maxHp += 20;
      this.player.hp = this.player.maxHp;
      this.player.maxMp += 10;
      this.player.mp = this.player.maxMp;
      this.player.atk += 6;
      this.player.def += 3;

      window.soundEngine.playLevelUp();
      this.showDamagePopup(`🎉 LEVEL UP! Lv.${this.player.level}`, true, "status-level");
    }
  }

  // ================= Endings =================
  triggerEnding(endingId) {
    // Check True End condition: 100% correct answers and not defeat
    if (endingId !== "ending_defeat" && this.stats.totalQuestions >= 6 && this.stats.correctAnswers === this.stats.totalQuestions) {
      endingId = "ending_true";
    }

    const ending = window.ENDINGS[endingId];
    if (!ending) return;

    if (!this.stats.unlockedEndings.includes(endingId)) {
      this.stats.unlockedEndings.push(endingId);
      this.saveCollection();
    }

    this.showScreen("ending-screen");
    window.soundEngine.playBgm("ending");

    document.getElementById("ending-icon").textContent = ending.icon;
    document.getElementById("ending-title").textContent = ending.title;
    document.getElementById("ending-title").style.color = ending.color;
    document.getElementById("ending-story").textContent = ending.story;

    const summary = document.getElementById("ending-stats-summary");
    const acc = this.stats.totalQuestions > 0 ? Math.round((this.stats.correctAnswers / this.stats.totalQuestions) * 100) : 0;
    summary.innerHTML = `
      <div><strong>最終Lv:</strong> ${this.player.level}</div>
      <div><strong>正解数:</strong> ${this.stats.correctAnswers} / ${this.stats.totalQuestions}</div>
      <div><strong>正解率:</strong> ${acc}%</div>
      <div><strong>最大コンボ:</strong> ${this.stats.maxCombo}</div>
    `;
  }

  // ================= Modals: Map Tree & Dictionary =================
  openTreeMapModal() {
    const modal = document.getElementById("modal-tree-map");
    const container = document.getElementById("tree-map-content");
    if (!container) return;

    container.innerHTML = "";

    const nodes = Object.values(window.STORY_TREE);
    nodes.forEach(n => {
      const isVisited = this.stats.visitedNodes.includes(n.id);
      const isCurrent = this.currentNodeId === n.id;

      const item = document.createElement("div");
      item.className = `tree-node-item ${isVisited ? 'visited' : ''} ${isCurrent ? 'current' : ''}`;
      item.innerHTML = `
        <span style="font-size:1.8rem;">${n.icon || '📍'}</span>
        <div style="flex:1;">
          <div style="font-weight:800; color:${isCurrent ? '#fbbf24' : '#fff'};">${n.title}</div>
          <div style="font-size:0.75rem; color:#94a3b8;">${n.chapter} - タイプ: ${n.type.toUpperCase()}</div>
        </div>
        <div>${isCurrent ? '👉 【現在地】' : isVisited ? '✅ 踏破済' : '🔒 未到達'}</div>
      `;
      container.appendChild(item);
    });

    modal.classList.add("active");
  }

  openDictionaryModal() {
    const modal = document.getElementById("modal-dictionary");
    const container = document.getElementById("dict-content");
    if (!container) return;

    const totalQuestions = window.QUIZ_DATABASE.length;
    const endingsUnlocked = this.stats.unlockedEndings.length;
    const totalEndings = Object.keys(window.ENDINGS).length;

    container.innerHTML = `
      <div style="margin-bottom:16px; font-weight:800; color:#fbbf24;">
        🏆 エンディング達成率: ${endingsUnlocked} / ${totalEndings} (${Math.round((endingsUnlocked/totalEndings)*100)}%)<br>
        📖 クイズ収録総数: ${totalQuestions}問
      </div>

      <h3 style="color:#60a5fa; margin-bottom:8px;">👾 撃破したモンスター一覧 (${this.stats.defeatedMonsters.length}体)</h3>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px;">
        ${this.stats.defeatedMonsters.map(m => `<span class="stat-badge">${m}</span>`).join('') || '<span style="color:#94a3b8;">まだモンスターを倒していません</span>'}
      </div>

      <h3 style="color:#a855f7; margin-bottom:8px;">📜 解放したエンディング一覧</h3>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${Object.values(window.ENDINGS).map(e => {
          const unlocked = this.stats.unlockedEndings.includes(e.id);
          return `
            <div style="background:rgba(30,41,59,0.7); padding:10px; border-radius:8px; border:1px solid ${unlocked ? e.color : '#334155'}; opacity:${unlocked ? 1 : 0.4};">
              <div style="font-weight:700; color:${unlocked ? e.color : '#94a3b8'};">${unlocked ? e.title : '🔒 未解放エンディング'}</div>
              ${unlocked ? `<div style="font-size:0.8rem; color:#cbd5e1; margin-top:4px;">${e.story.substring(0, 80)}...</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    modal.classList.add("active");
  }

  // ================= UI Helpers & Visuals =================
  updateStatusBars() {
    const hpBar = document.getElementById("bar-hp-fill");
    const hpText = document.getElementById("status-hp-text");
    const mpBar = document.getElementById("bar-mp-fill");
    const mpText = document.getElementById("status-mp-text");
    const expBar = document.getElementById("bar-exp-fill");
    const expText = document.getElementById("status-exp-text");

    if (hpBar) hpBar.style.width = `${Math.max(0, (this.player.hp / this.player.maxHp) * 100)}%`;
    if (hpText) hpText.textContent = `${this.player.hp} / ${this.player.maxHp}`;

    if (mpBar) mpBar.style.width = `${Math.max(0, (this.player.mp / this.player.maxMp) * 100)}%`;
    if (mpText) mpText.textContent = `${this.player.mp} / ${this.player.maxMp}`;

    if (expBar) expBar.style.width = `${Math.max(0, (this.player.exp / this.player.nextExp) * 100)}%`;
    if (expText) expText.textContent = `${this.player.exp} / ${this.player.nextExp}`;

    const goldElem = document.getElementById("status-gold-val");
    if (goldElem) goldElem.textContent = this.player.gold;

    const jobElem = document.getElementById("status-job-name");
    if (jobElem) jobElem.textContent = `Lv.${this.player.level} ${this.player.name}`;
  }

  showDamagePopup(text, isHeal = false, targetId = "enemy-sprite", isCritical = false) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const popup = document.createElement("div");
    popup.className = `floating-damage ${isHeal ? 'heal' : ''} ${isCritical ? 'critical' : ''}`;
    popup.textContent = text;

    const rect = target.getBoundingClientRect();
    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top}px`;

    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 850);
  }

  // ================= Persistence =================
  saveGame() {
    const data = {
      player: this.player,
      stats: this.stats,
      currentNodeId: this.currentNodeId
    };
    localStorage.setItem("quiz_rpg_save", JSON.stringify(data));
    this.saveCollection();
  }

  loadGame() {
    const raw = localStorage.getItem("quiz_rpg_save");
    if (!raw) {
      alert("セーブデータが見つかりません。はじめからプレイしてください。");
      return;
    }
    try {
      const data = JSON.parse(raw);
      this.player = data.player;
      this.stats = data.stats;
      this.currentNodeId = data.currentNodeId;
      this.updateStatusBars();
      this.goToNode(this.currentNodeId);
      window.soundEngine.playBgm("field");
    } catch (e) {
      console.error("Load failed", e);
    }
  }

  saveCollection() {
    const col = {
      unlockedEndings: this.stats.unlockedEndings,
      defeatedMonsters: this.stats.defeatedMonsters
    };
    localStorage.setItem("quiz_rpg_collection", JSON.stringify(col));
  }

  loadCollection() {
    const raw = localStorage.getItem("quiz_rpg_collection");
    if (raw) {
      try {
        const col = JSON.parse(raw);
        this.stats.unlockedEndings = col.unlockedEndings || [];
        this.stats.defeatedMonsters = col.defeatedMonsters || [];
      } catch (e) {}
    }
  }

  // ================= Canvas Background Starfield =================
  initCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
      alpha: Math.random()
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(s => {
        s.y -= s.speed;
        if (s.y < 0) s.y = height;
        ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + 0.5 * Math.sin(Date.now() * 0.002 + s.alpha * 10)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }
}

// Instantiate and attach
window.addEventListener("DOMContentLoaded", () => {
  window.game = new QuizRPGGame();
  window.game.init();
});
