const lessons = [
  {
    title: "Isim, Fi'il, dan Huruf",
    description: "Kenali tiga kelompok kata sebagai langkah pertama memahami kalimat Arab.",
    example: "كتب الطالب",
    details: `
      <h3>Bab 1: Isim, Fi'il, dan Huruf</h3>
      <p>Langkah awal yang paling penting dalam membaca Arab gundul adalah mengenali jenis kata. Semua kata dalam bahasa Arab dikelompokkan menjadi tiga:</p>
      
      <div class="materi-section">
        <h4>1. Isim (اِسم) - Kata Benda / Nama</h4>
        <p>Isim adalah kata yang menunjukkan manusia, hewan, tumbuhan, benda mati, sifat, waktu, tempat, atau konsep abstrak.</p>
        <p><strong>Ciri utama isim yang mudah dikenali:</strong></p>
        <ul>
          <li>Menerima <strong>alif lam (ال)</strong> di awal. Contoh: <span class="ar-inline">الكِتَابُ</span> (Al-Kitaabu)</li>
          <li>Menerima harakat <strong>tanwin ( ً  ٍ  ٌ )</strong> di akhir. Contoh: <span class="ar-inline">كِتَابٌ</span> (Kitaabun)</li>
          <li>Didahului oleh <strong>huruf jar</strong> (kata depan). Contoh: <span class="ar-inline">فِي المَسْجِدِ</span> (Fil-masjidi)</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>2. Fi'il (فِعْل) - Kata Kerja</h4>
        <p>Fi'il adalah kata yang menunjukkan suatu pekerjaan/aktivitas yang terikat dengan waktu (lampau, sekarang, atau perintah).</p>
        <p>Contoh:</p>
        <ul>
          <li><span class="ar-inline">كَتَبَ</span> (Kataba - Telah menulis)</li>
          <li><span class="ar-inline">يَكْتُبُ</span> (Yaktubu - Sedang/akan menulis)</li>
          <li><span class="ar-inline">اُكْتُبْ</span> (Uktub - Tulislah!)</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>3. Huruf (حَرْف) - Kata Tugas</h4>
        <p>Huruf adalah kata tugas yang tidak memiliki makna yang jelas kecuali jika disambung dengan kata lain. Berfungsi sebagai penghubung atau pemberi pengaruh harakat.</p>
        <p>Contoh: <span class="ar-inline">فِي</span> (di/di dalam), <span class="ar-inline">مِنْ</span> (dari), <span class="ar-inline">إِلَى</span> (ke).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Kalimat Lengkap:</h5>
        <p class="ar-display">كتب الطالب</p>
        <p><strong>Cara baca gundul:</strong> <em>Kataba ath-thaalibu</em></p>
        <p><strong>Analisis kata:</strong></p>
        <ul>
          <li><strong>كتب</strong> (Kataba) adalah <strong>Fi'il</strong> (Telah menulis).</li>
          <li><strong>الطالب</strong> (Ath-Thaalibu) adalah <strong>Isim</strong> (Siswa - karena memakai Alif Lam).</li>
        </ul>
      </div>
    `
  },
  {
    title: "Mubtada dan Khabar",
    description: "Pahami kalimat nominal dan mengapa kedua unsur dasarnya biasanya berharakat dhammah.",
    example: "العلم نور",
    details: `
      <h3>Bab 2: Mubtada dan Khabar</h3>
      <p>Kalimat nominal (Jumlah Ismiyah) adalah kalimat yang diawali dengan isim. Kalimat ini wajib memiliki dua bagian pokok:</p>
      
      <div class="materi-section">
        <h4>1. Mubtada (مُبتَدَأ) - Subjek</h4>
        <p>Isim marfu' (berharakat akhir dhammah pada pola dasar) yang terletak di awal kalimat dan menjadi pokok pembicaraan.</p>
      </div>

      <div class="materi-section">
        <h4>2. Khabar (خَبَر) - Predikat</h4>
        <p>Bagian yang menyempurnakan makna mubtada sehingga menjadi kalimat yang utuh. Khabar juga berstatus marfu' (berharakat akhir dhammah).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">العلم نور</p>
        <p><strong>Cara baca gundul:</strong> <em>Al-'ilmu nuurun</em> (Ilmu adalah cahaya)</p>
        <ul>
          <li><strong>العلم</strong> (Al-'ilmu) = Mubtada, dibaca dhammah karena statusnya marfu'.</li>
          <li><strong>نور</strong> (Nuurun) = Khabar, dibaca dhammah tanwin karena menerangkan mubtada.</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>Aturan Penting:</h4>
        <p>Mubtada biasanya bersifat <strong>makrifah</strong> (tertentu, misal memakai ال), sedangkan khabar biasanya bersifat <strong>nakirah</strong> (umum, misal memakai tanwin tanpa ال).</p>
      </div>
    `
  },
  {
    title: "Fi'il, Fa'il, Maf'ul",
    description: "Temukan pelaku dan objek agar akhir kata dapat dibaca dengan tepat.",
    example: "قرأ زيد الكتاب",
    details: `
      <h3>Bab 3: Fi'il, Fa'il, dan Maf'ul</h3>
      <p>Kalimat verbal (Jumlah Fi'liyah) adalah kalimat yang diawali dengan kata kerja (fi'il). Kalimat aktif memerlukan pelaku dan seringkali objek:</p>
      
      <div class="materi-section">
        <h4>1. Fi'il (فِعْل) - Kata Kerja</h4>
        <p>Aktivitas yang ditaruh di awal kalimat. Contoh: <span class="ar-inline">قَرَأَ</span> (Qara'a - Telah membaca).</p>
      </div>

      <div class="materi-section">
        <h4>2. Fa'il (فَاعِل) - Pelaku (Subjek)</h4>
        <p>Isim yang melakukan pekerjaan. Statusnya wajib <strong>marfu'</strong> (tanda dasarnya berharakat akhir dhammah).</p>
      </div>

      <div class="materi-section">
        <h4>3. Maf'ul Bih (مَفْعُول بِهِ) - Objek</h4>
        <p>Isim yang dikenai pekerjaan. Statusnya wajib <strong>manshub</strong> (tanda dasarnya berharakat akhir fathah).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">قرأ زيد الكتاب</p>
        <p><strong>Cara baca gundul:</strong> <em>Qara'a Zaidun al-kitaaba</em> (Zaid membaca buku)</p>
        <ul>
          <li><strong>قرأ</strong> (Qara'a) = Fi'il (Telah membaca).</li>
          <li><strong>زيد</strong> (Zaidun) = Fa'il (Pelaku), dibaca dhammah karena marfu'.</li>
          <li><strong>الكتاب</strong> (Al-kitaaba) = Maf'ul bih (Objek), dibaca fathah karena manshub.</li>
        </ul>
      </div>
    `
  },
  {
    title: "Jar dan Majrur",
    description: "Kenali huruf jar dan perubahan kata sesudahnya menjadi berharakat kasrah.",
    example: "في المسجد",
    details: `
      <h3>Bab 4: Jar dan Majrur</h3>
      <p>Salah satu faktor penting yang mengubah harakat akhir kata dalam bahasa Arab adalah adanya kata depan, yang disebut dengan huruf jar.</p>
      
      <div class="materi-section">
        <h4>Huruf Jar yang Sering Digunakan:</h4>
        <div class="jar-grid">
          <div><span class="ar-inline">فِي</span> (Di dalam)</div>
          <div><span class="ar-inline">مِنْ</span> (Dari)</div>
          <div><span class="ar-inline">إِلَى</span> (Ke)</div>
          <div><span class="ar-inline">عَلَى</span> (Di atas)</div>
          <div><span class="ar-inline">بِـ</span> (Dengan)</div>
          <div><span class="ar-inline">لِـ</span> (Untuk/Milik)</div>
        </div>
      </div>

      <div class="materi-section">
        <h4>Isim Majrur (مَجْرُور)</h4>
        <p>Isim yang terletak langsung setelah huruf jar harus berstatus <strong>majrur</strong>. Tanda dasarnya adalah berharakat akhir <strong>kasrah</strong>.</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">في المسجد</p>
        <p><strong>Cara baca gundul:</strong> <em>Fil-masjidi</em> (Di dalam masjid)</p>
        <ul>
          <li><strong>في</strong> (Fii) = Huruf Jar.</li>
          <li><strong>المسjed</strong> (Al-masjidi) = Isim Majrur, wajib berharakat kasrah di akhir karena ada 'في'.</li>
        </ul>
      </div>
    `
  },
  {
    title: "Na'at dan Man'ut (Kata Sifat)",
    description: "Pahami keselarasan kata sifat dengan kata yang disifati dalam jenis dan harakat.",
    example: "البيت الكبير",
    details: `
      <h3>Bab 5: Na'at dan Man'ut (Kata Sifat)</h3>
      <p>Dalam bahasa Arab, kata sifat diletakkan <strong>setelah</strong> kata benda yang disifatinyanya.</p>
      
      <div class="materi-section">
        <h4>1. Man'ut (مَنْعُوت) - Kata yang Disifati</h4>
        <p>Kata benda yang diterangkan sifatnya.</p>
      </div>

      <div class="materi-section">
        <h4>2. Na'at (نَعْت) - Kata Sifat</h4>
        <p>Kata sifat yang menjelaskan man'ut.</p>
      </div>

      <div class="materi-section">
        <h4>Aturan Keselarasan (Wajib Sama):</h4>
        <p>Na'at harus mengikuti man'ut-nya dalam 4 hal:</p>
        <ol>
          <li><strong>Harakat Akhir (I'rab):</strong> Jika man'ut dhammah, na'at harus dhammah. Jika man'ut kasrah, na'at harus kasrah.</li>
          <li><strong>Kejelasan (Makrifah/Nakirah):</strong> Jika man'ut memakai ال, na'at wajib memakai ال. Jika man'ut tanwin, na'at juga tanwin.</li>
          <li><strong>Jenis Kelamin (Gender):</strong> Muzakkar (laki-laki) atau Muannats (perempuan).</li>
          <li><strong>Jumlah:</strong> Tunggal, ganda, atau jamak.</li>
        </ol>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">البيت الكبير</p>
        <p><strong>Cara baca gundul:</strong> <em>Al-baitu al-kabiiru</em> (Rumah yang besar itu)</p>
        <ul>
          <li><strong>البيت</strong> (Al-baitu) = Man'ut, berposisi marfu' (dhammah) dan makrifah (memakai ال).</li>
          <li><strong>الكبير</strong> (Al-kabiiru) = Na'at, wajib mengikuti 'البيت' dengan memakai ال dan berharakat dhammah di akhir.</li>
        </ul>
      </div>
    `
  },
  {
    title: "Idhafah (Kata Majemuk)",
    description: "Kuasai susunan kepemilikan dan cara menentukan harakat mudhaf ilaih yang selalu kasrah.",
    example: "كتاب زيد",
    details: `
      <h3>Bab 6: Idhafah (Kata Majemuk / Kepemilikan)</h3>
      <p>Idhafah adalah penggabungan dua isim untuk membentuk satu arti yang menunjukkan kepemilikan atau hubungan khusus.</p>
      
      <div class="materi-section">
        <h4>1. Mudhaf (مُضَاف) - Yang Dimiliki</h4>
        <p>Kata pertama dalam susunan idhafah. Aturannya:</p>
        <ul>
          <li><strong>TIDAK BOLEH</strong> memakai alif lam (ال).</li>
          <li><strong>TIDAK BOLEH</strong> berharakat tanwin.</li>
          <li>Harakat akhirnya menyesuaikan posisinya di dalam kalimat.</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>2. Mudhaf Ilaih (مُضَاف إِلَيْهِ) - Pemilik</h4>
        <p>Kata kedua dalam susunan idhafah. Aturannya:</p>
        <ul>
          <li>Hukumnya selalu <strong>majrur</strong> (tanda dasarnya berharakat akhir <strong>kasrah</strong>).</li>
          <li>Boleh memakai ال atau tanwin.</li>
        </ul>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">كتاب زيد</p>
        <p><strong>Cara baca gundul:</strong> <em>Kitaabu Zaidin</em> (Buku Zaid)</p>
        <ul>
          <li><strong>كتاب</strong> (Kitaabu) = Mudhaf, marfu' (dhammah) tapi tidak boleh tanwin atau alif lam.</li>
          <li><strong>زيد</strong> (Zaidin) = Mudhaf Ilaih, wajib majrur sehingga dibaca kasrah tanwin.</li>
        </ul>
      </div>
    `
  }
];

const quiz = [
  {
    arabic: "العلم نور",
    question: "Bacaan dan arti yang paling tepat adalah...",
    options: ["Al-'ilmu nurun - Ilmu adalah cahaya", "Al-'ilma nuran - Carilah cahaya", "Al-'ilmi nurin - Di dalam cahaya"],
    answer: 0,
    note: "العلم adalah mubtada dan نور adalah khabar. Keduanya dibaca rafa' dengan dhammah."
  },
  {
    arabic: "قرأ محمد الكتاب",
    question: "Kata manakah yang menjadi pelaku (fa'il)?",
    options: ["قرأ", "محمد", "الكتاب"],
    answer: 1,
    note: "Muhammad melakukan pekerjaan membaca, sehingga محمد adalah fa'il dan dibaca marfu'."
  },
  {
    arabic: "في البيت",
    question: "Mengapa kata البيت dibaca al-baiti?",
    options: ["Karena menjadi pelaku", "Karena didahului huruf jar في", "Karena menjadi mubtada"],
    answer: 1,
    note: "في adalah huruf jar. Isim setelah huruf jar menjadi majrur, tanda dasarnya kasrah."
  },
  {
    arabic: "كتب الطالب الدرس",
    question: "Mana yang merupakan objek (maf'ul bih) dalam kalimat di atas?",
    options: ["كتب", "الطالب", "الدرس"],
    answer: 2,
    note: "الدرس (ad-darsa) adalah maf'ul bih (objek) yang dikenai pekerjaan menulis, dibaca manshub (tanda akhirnya fathah)."
  },
  {
    arabic: "ذهب الطالب إلى المدرسة",
    question: "Tentukan jenis kata untuk kata 'إلى' dan status kata 'المدرسة' setelahnya!",
    options: [
      "إلى adalah fi'il, dan المدرسة adalah fa'il",
      "إلى adalah huruf jar, dan المدرسة adalah isim majrur",
      "إلى adalah isim, dan المدرسة adalah khabar"
    ],
    answer: 1,
    note: "إلى adalah huruf jar (kata depan), dan kata setelahnya (المدرسة) menjadi majrur (berharakat kasrah: al-madrasati)."
  },
  {
    arabic: "المعلم في الفصل",
    question: "Di mana letak khabar pada kalimat di atas?",
    options: ["المعلم", "في الفصل", "Tidak ada khabar"],
    answer: 1,
    note: "المعلم adalah mubtada (subjek), sedangkan keterangan tempat 'في الفصل' (di dalam kelas) berkedudukan sebagai khabar (khabar syibhul jumlah)."
  },
  {
    arabic: "جلس زيد على الكrسي",
    question: "Bagaimana harakat akhir dari kata الكرسي?",
    options: ["الكرسيَّ (al-kursiyya - fathah)", "الكرسيُّ (al-kursiyyu - dhammah)", "الكرسيِّ (al-kursiyi - kasrah)"],
    answer: 2,
    note: "Karena didahului huruf jar 'على', maka kata 'الكرسي' menjadi majrur dengan tanda kasrah di akhirnya."
  },
  {
    arabic: "البيت الكبير جميل",
    question: "Kata 'الكبير' (yang besar) berposisi sebagai kata sifat (na'at). Mengapa ia dibaca al-kabiru?",
    options: [
      "Karena man'ut-nya (البيت) dibaca dhammah (marfu')",
      "Karena didahului huruf jar",
      "Karena merupakan objek kalimat"
    ],
    answer: 0,
    note: "Na'at (kata sifat) harus mengikuti man'ut (kata yang disifati) dalam hal i'rab (harakat akhir). Karena 'البيت' marfu' (dhammah), maka 'الكبير' juga marfu' (dhammah)."
  },
  {
    arabic: "كتاب زيد",
    question: "Dalam susunan kepemilikan (idhafah) di atas, mengapa kata 'زيد' dibaca zaidin (kasrah)?",
    options: [
      "Karena kata 'زيد' berposisi sebagai mudhaf ilaih (pemilik)",
      "Karena didahului huruf jar",
      "Karena merupakan subjek kalimat"
    ],
    answer: 0,
    note: "Dalam susunan idhafah, kata kedua adalah mudhaf ilaih dan hukumnya selalu majrur (berharakat akhir kasrah/tanwin)."
  },
  {
    arabic: "سيارة المعلم",
    question: "Manakah aturan mudhaf (kata pertama/yang dimiliki) pada susunan idhafah di atas?",
    options: [
      "Harus memakai alif lam (ال)",
      "Tidak boleh memakai alif lam (ال) dan tidak boleh tanwin",
      "Boleh dibaca apa saja tanpa aturan"
    ],
    answer: 1,
    note: "Mudhaf (kata pertama) dalam idhafah memiliki aturan khusus: tidak boleh diawali alif lam (ال) dan tidak boleh diakhiri tanwin."
  }
];

const lessonGrid = document.querySelector("#lessonGrid");
let completed = JSON.parse(localStorage.getItem("arabLessons") || "[]");
let quizIndex = 0;
let score = 0;

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson, index) => {
    const done = completed.includes(index);
    return `
      <article class="lesson-card ${done ? "done" : ""}" data-lesson-card="${index}">
        <span class="lesson-index">BAB ${String(index + 1).padStart(2, "0")}</span>
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        <div class="lesson-example" lang="ar" dir="rtl">${lesson.example}</div>
        <div class="card-footer">
          <span class="read-more-link">Pelajari &rarr;</span>
          <button class="complete-button" data-lesson="${index}" type="button">
            ${done ? "✓ Selesai" : "Tandai selesai"}
          </button>
        </div>
      </article>`;
  }).join("");
  updateProgress();
}

function updateProgress() {
  const total = lessons.length;
  document.querySelector("#progressLabel").textContent = `${completed.length} dari ${total} pelajaran selesai`;
  document.querySelector("#progressBar").style.width = `${(completed.length / total) * 100}%`;
}

lessonGrid.addEventListener("click", (event) => {
  const completeBtn = event.target.closest("[data-lesson]");
  if (completeBtn) {
    event.stopPropagation();
    const lesson = Number(completeBtn.dataset.lesson);
    completed = completed.includes(lesson)
      ? completed.filter((item) => item !== lesson)
      : [...completed, lesson];
    localStorage.setItem("arabLessons", JSON.stringify(completed));
    renderLessons();
    return;
  }

  const card = event.target.closest("[data-lesson-card]");
  if (card) {
    const index = Number(card.dataset.lessonCard);
    openMateriModal(index);
  }
});

// Modal Logic
const modalOverlay = document.querySelector("#materiModal");
const modalContent = document.querySelector("#modalContent");
const closeModalBtn = document.querySelector("#closeModal");

function openMateriModal(index) {
  const lesson = lessons[index];
  const done = completed.includes(index);
  modalContent.innerHTML = `
    ${lesson.details}
    <div class="modal-footer" style="display:flex; justify-content:space-between; align-items:center; margin-top:30px; padding-top:20px; border-top:1px solid var(--line); gap:12px;">
      <button class="primary-button" onclick="closeMateriModal()" type="button" style="padding: 10px 20px;">Tutup</button>
      <button class="outline-button" id="modalCompleteBtn" data-modal-lesson="${index}" type="button" style="padding: 10px 20px; font-weight: 700; border-color: var(--ink); color: var(--ink);">
        ${done ? "✓ Sudah dipelajari" : "Tandai Selesai"}
      </button>
    </div>
  `;
  modalOverlay.removeAttribute("hidden");
  setTimeout(() => {
    modalOverlay.classList.add("active");
  }, 10);
  document.body.style.overflow = "hidden";

  const modalCompBtn = document.querySelector("#modalCompleteBtn");
  modalCompBtn.addEventListener("click", () => {
    completed = completed.includes(index)
      ? completed.filter((item) => item !== index)
      : [...completed, index];
    localStorage.setItem("arabLessons", JSON.stringify(completed));
    renderLessons();
    const isDone = completed.includes(index);
    modalCompBtn.textContent = isDone ? "✓ Sudah dipelajari" : "Tandai Selesai";
  });
}

function closeMateriModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!modalOverlay.classList.contains("active")) {
      modalOverlay.setAttribute("hidden", "");
    }
  }, 300);
}

closeModalBtn.addEventListener("click", closeMateriModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeMateriModal();
});

window.closeMateriModal = closeMateriModal;

document.querySelectorAll("[data-reveal]").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.querySelector(`#${button.dataset.reveal}`);
    answer.hidden = !answer.hidden;
    button.textContent = answer.hidden ? "Tampilkan harakat & arti" : "Sembunyikan jawaban";
  });
});

function renderQuiz() {
  const item = quiz[quizIndex];
  document.querySelector("#quizStep").textContent = `Soal ${quizIndex + 1} dari ${quiz.length}`;
  document.querySelector("#quizArabic").textContent = item.arabic;
  document.querySelector("#quizQuestion").textContent = item.question;
  document.querySelector("#quizFeedback").hidden = true;
  document.querySelector("#nextQuestion").hidden = true;
  document.querySelector("#quizOptions").innerHTML = item.options.map((option, index) =>
    `<button class="option" type="button" data-option="${index}">${option}</button>`
  ).join("");
}

document.querySelector("#quizOptions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button || button.disabled) return;
  const selected = Number(button.dataset.option);
  const item = quiz[quizIndex];
  document.querySelectorAll(".option").forEach((option, index) => {
    option.disabled = true;
    if (index === item.answer) option.classList.add("correct");
    if (index === selected && selected !== item.answer) option.classList.add("wrong");
  });
  if (selected === item.answer) {
    score += 1;
    document.querySelector("#scoreValue").textContent = score;
  }
  const feedback = document.querySelector("#quizFeedback");
  feedback.innerHTML = `<strong>${selected === item.answer ? "Benar." : "Belum tepat."}</strong> ${item.note}`;
  feedback.hidden = false;
  const next = document.querySelector("#nextQuestion");
  next.textContent = quizIndex === quiz.length - 1 ? "Ulangi kuis" : "Soal berikutnya";
  next.hidden = false;
});

document.querySelector("#nextQuestion").addEventListener("click", () => {
  if (quizIndex === quiz.length - 1) {
    quizIndex = 0;
    score = 0;
    document.querySelector("#scoreValue").textContent = score;
  } else {
    quizIndex += 1;
  }
  renderQuiz();
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  completed = [];
  localStorage.removeItem("arabLessons");
  renderLessons();
});

renderLessons();
renderQuiz();
