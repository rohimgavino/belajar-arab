/* ══════════════════════════════════
   BACA GUNDUL — app.js (Enhanced v2)
══════════════════════════════════ */

/* ════════════════════════════════
   DATA: MATERI PELAJARAN
════════════════════════════════ */
const lessons = [
  {
    title: "Isim, Fi'il, dan Huruf",
    description: "Kenali tiga kelompok kata sebagai langkah pertama memahami kalimat Arab.",
    example: "كتب الطالب",
    details: `
      <h3>Bab 1: Isim, Fi'il, dan Huruf</h3>
      <p>Langkah awal yang paling penting dalam membaca Arab gundul adalah mengenali jenis kata. Semua kata dalam bahasa Arab dikelompokkan menjadi tiga:</p>
      
      <div class="materi-section">
        <h4>1. Isim (اِسم) — Kata Benda / Nama</h4>
        <p>Isim adalah kata yang menunjukkan manusia, hewan, tumbuhan, benda mati, sifat, waktu, tempat, atau konsep abstrak.</p>
        <p><strong>Ciri utama isim yang mudah dikenali:</strong></p>
        <ul>
          <li>Menerima <strong>alif lam (ال)</strong> di awal. Contoh: <span class="ar-inline">الكِتَابُ</span> (Al-Kitaabu)</li>
          <li>Menerima harakat <strong>tanwin ( ً  ٍ  ٌ )</strong> di akhir. Contoh: <span class="ar-inline">كِتَابٌ</span> (Kitaabun)</li>
          <li>Didahului oleh <strong>huruf jar</strong> (kata depan). Contoh: <span class="ar-inline">فِي المَسْجِدِ</span> (Fil-masjidi)</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>2. Fi'il (فِعْل) — Kata Kerja</h4>
        <p>Fi'il adalah kata yang menunjukkan suatu pekerjaan/aktivitas yang terikat dengan waktu (lampau, sekarang, atau perintah).</p>
        <p>Contoh:</p>
        <ul>
          <li><span class="ar-inline">كَتَبَ</span> (Kataba — Telah menulis)</li>
          <li><span class="ar-inline">يَكْتُبُ</span> (Yaktubu — Sedang/akan menulis)</li>
          <li><span class="ar-inline">اُكْتُبْ</span> (Uktub — Tulislah!)</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>3. Huruf (حَرْف) — Kata Tugas</h4>
        <p>Huruf adalah kata tugas yang tidak memiliki makna yang jelas kecuali jika disambung dengan kata lain. Berfungsi sebagai penghubung atau pemberi pengaruh harakat.</p>
        <p>Contoh: <span class="ar-inline">فِي</span> (di/di dalam), <span class="ar-inline">مِنْ</span> (dari), <span class="ar-inline">إِلَى</span> (ke).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Kalimat Lengkap:</h5>
        <p class="ar-display">كَتَبَ الطَّالِبُ</p>
        <p><strong>Cara baca gundul:</strong> <em>Kataba ath-thaalibu</em> — Sang murid telah menulis.</p>
        <p><strong>Analisis kata:</strong></p>
        <ul>
          <li><strong>كَتَبَ</strong> (Kataba) adalah <strong>Fi'il</strong> (Telah menulis).</li>
          <li><strong>الطَّالِبُ</strong> (Ath-Thaalibu) adalah <strong>Isim</strong> (Murid — memakai Alif Lam, dibaca dhammah sebagai Fa'il).</li>
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
      <p>Kalimat nominal (<em>Jumlah Ismiyah</em>) adalah kalimat yang diawali dengan isim. Kalimat ini wajib memiliki dua bagian pokok:</p>
      
      <div class="materi-section">
        <h4>1. Mubtada (مُبتَدَأ) — Subjek</h4>
        <p>Isim marfu' (berharakat akhir dhammah pada pola dasar) yang terletak di awal kalimat dan menjadi pokok pembicaraan. Biasanya bersifat <strong>makrifah</strong> (tertentu — menggunakan ال atau nama diri).</p>
      </div>

      <div class="materi-section">
        <h4>2. Khabar (خَبَر) — Predikat</h4>
        <p>Bagian yang menyempurnakan makna mubtada sehingga menjadi kalimat yang utuh. Khabar juga berstatus marfu' (berharakat akhir dhammah). Biasanya bersifat <strong>nakirah</strong> (umum — menggunakan tanwin tanpa ال).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">الْعِلْمُ نُورٌ</p>
        <p><strong>Cara baca gundul:</strong> <em>Al-'ilmu nuurun</em> — Ilmu adalah cahaya.</p>
        <ul>
          <li><strong>الْعِلْمُ</strong> (Al-'ilmu) = Mubtada, dibaca dhammah karena statusnya marfu'.</li>
          <li><strong>نُورٌ</strong> (Nuurun) = Khabar, dibaca dhammah tanwin karena menerangkan mubtada dan berstatus nakirah.</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>Khabar dapat berupa:</h4>
        <ul>
          <li><strong>Isim mufrad:</strong> <span class="ar-inline">اللهُ أَحَدٌ</span> (Allah Maha Esa)</li>
          <li><strong>Syibhul jumlah (jar-majrur):</strong> <span class="ar-inline">الكِتَابُ فِي الحَقِيبَةِ</span> (Buku ada di dalam tas)</li>
          <li><strong>Jumlah fi'liyah:</strong> <span class="ar-inline">الطَّالِبُ يَكْتُبُ</span> (Murid itu sedang menulis)</li>
        </ul>
      </div>
    `
  },
  {
    title: "Fi'il, Fa'il, Maf'ul",
    description: "Temukan pelaku dan objek agar akhir kata dapat dibaca dengan tepat.",
    example: "قرأ زيد الكتاب",
    details: `
      <h3>Bab 3: Fi'il, Fa'il, dan Maf'ul</h3>
      <p>Kalimat verbal (<em>Jumlah Fi'liyah</em>) adalah kalimat yang diawali dengan kata kerja (fi'il). Kalimat aktif memerlukan pelaku dan seringkali objek:</p>
      
      <div class="materi-section">
        <h4>1. Fi'il (فِعْل) — Kata Kerja</h4>
        <p>Aktivitas yang ditaruh di awal kalimat. Contoh: <span class="ar-inline">قَرَأَ</span> (Qara'a — Telah membaca).</p>
      </div>

      <div class="materi-section">
        <h4>2. Fa'il (فَاعِل) — Pelaku (Subjek)</h4>
        <p>Isim yang melakukan pekerjaan. Statusnya wajib <strong>marfu'</strong> (tanda dasarnya berharakat akhir dhammah ـُ atau ـُنْ).</p>
      </div>

      <div class="materi-section">
        <h4>3. Maf'ul Bih (مَفْعُول بِهِ) — Objek</h4>
        <p>Isim yang dikenai pekerjaan. Statusnya wajib <strong>manshub</strong> (tanda dasarnya berharakat akhir fathah ـَ atau ـًا).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">قَرَأَ زَيْدٌ الْكِتَابَ</p>
        <p><strong>Cara baca gundul:</strong> <em>Qara'a Zaidun al-kitaaba</em> — Zaid telah membaca buku.</p>
        <ul>
          <li><strong>قَرَأَ</strong> (Qara'a) = Fi'il (Telah membaca).</li>
          <li><strong>زَيْدٌ</strong> (Zaidun) = Fa'il (Pelaku), dibaca dhammah tanwin karena marfu'.</li>
          <li><strong>الْكِتَابَ</strong> (Al-kitaaba) = Maf'ul bih (Objek), dibaca fathah karena manshub.</li>
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
      <p>Salah satu faktor penting yang mengubah harakat akhir kata dalam bahasa Arab adalah adanya kata depan, yang disebut dengan <strong>huruf jar</strong>.</p>
      
      <div class="materi-section">
        <h4>Huruf Jar yang Sering Digunakan:</h4>
        <div class="jar-grid">
          <div><span class="ar-inline">فِي</span> Di dalam</div>
          <div><span class="ar-inline">مِنْ</span> Dari</div>
          <div><span class="ar-inline">إِلَى</span> Ke</div>
          <div><span class="ar-inline">عَلَى</span> Di atas</div>
          <div><span class="ar-inline">بِـ</span> Dengan</div>
          <div><span class="ar-inline">لِـ</span> Untuk/Milik</div>
          <div><span class="ar-inline">عَنْ</span> Dari/Tentang</div>
          <div><span class="ar-inline">مَعَ</span> Bersama</div>
        </div>
      </div>

      <div class="materi-section">
        <h4>Isim Majrur (مَجْرُور)</h4>
        <p>Isim yang terletak langsung setelah huruf jar harus berstatus <strong>majrur</strong>. Tanda dasarnya adalah berharakat akhir <strong>kasrah (ـِ)</strong>. Jika isim nakirah (tanwin), maka kasrah tanwin (ـٍ).</p>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">فِي الْمَسْجِدِ</p>
        <p><strong>Cara baca gundul:</strong> <em>Fil-masjidi</em> — Di dalam masjid.</p>
        <ul>
          <li><strong>فِي</strong> (Fii) = Huruf Jar.</li>
          <li><strong>الْمَسْجِدِ</strong> (Al-masjidi) = Isim Majrur, wajib berharakat kasrah di akhir karena ada huruf jar <em>في</em>.</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>Contoh tambahan:</h4>
        <ul>
          <li><span class="ar-inline">مِنَ الْبَيْتِ</span> — <em>Minal-baiti</em> (dari rumah)</li>
          <li><span class="ar-inline">إِلَى الْمَدْرَسَةِ</span> — <em>Ilal-madrasati</em> (ke sekolah)</li>
          <li><span class="ar-inline">عَلَى الطَّاوِلَةِ</span> — <em>'Alath-thaawilatī</em> (di atas meja)</li>
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
      <p>Dalam bahasa Arab, kata sifat diletakkan <strong>setelah</strong> kata benda yang disifatinya — berbeda dengan bahasa Indonesia.</p>
      
      <div class="materi-section">
        <h4>1. Man'ut (مَنْعُوت) — Kata yang Disifati</h4>
        <p>Kata benda yang diterangkan sifatnya. Posisinya di depan.</p>
      </div>

      <div class="materi-section">
        <h4>2. Na'at (نَعْت) — Kata Sifat</h4>
        <p>Kata sifat yang menjelaskan man'ut. Posisinya di belakang man'ut.</p>
      </div>

      <div class="materi-section">
        <h4>Aturan Keselarasan (Na'at WAJIB mengikuti Man'ut dalam 4 hal):</h4>
        <div class="materi-table-wrapper">
          <table class="materi-table">
            <thead>
              <tr><th>Aspek</th><th>Contoh Man'ut</th><th>Contoh Na'at</th></tr>
            </thead>
            <tbody>
              <tr><td>I'rab (harakat akhir)</td><td class="ar">الْبَيْتُ (dhammah)</td><td class="ar">الْكَبِيرُ (dhammah)</td></tr>
              <tr><td>Makrifah/Nakirah</td><td class="ar">بَيْتٌ (tanwin)</td><td class="ar">كَبِيرٌ (tanwin)</td></tr>
              <tr><td>Jenis (Muzakkar/Muannats)</td><td class="ar">مَدْرَسَةٌ (muannats)</td><td class="ar">كَبِيرَةٌ (muannats)</td></tr>
              <tr><td>Jumlah (Mufrad/Mutsanna/Jamak)</td><td class="ar">الطُّلَّابُ (jamak)</td><td class="ar">الْمُجْتَهِدُونَ (jamak)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">الْبَيْتُ الْكَبِيرُ</p>
        <p><strong>Cara baca gundul:</strong> <em>Al-baitu al-kabiiru</em> — Rumah yang besar itu.</p>
        <ul>
          <li><strong>الْبَيْتُ</strong> (Al-baitu) = Man'ut, berposisi marfu' (dhammah) dan makrifah (memakai ال).</li>
          <li><strong>الْكَبِيرُ</strong> (Al-kabiiru) = Na'at, wajib mengikuti al-baitu: memakai ال dan berharakat dhammah di akhir.</li>
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
      <p>Idhafah adalah penggabungan dua isim untuk membentuk satu arti yang menunjukkan kepemilikan atau hubungan khusus. Setara dengan "…-nya" atau "milik…" dalam bahasa Indonesia.</p>
      
      <div class="materi-section">
        <h4>1. Mudhaf (مُضَاف) — Yang Dimiliki</h4>
        <p>Kata pertama dalam susunan idhafah. Aturannya:</p>
        <ul>
          <li><strong>TIDAK BOLEH</strong> memakai alif lam (ال).</li>
          <li><strong>TIDAK BOLEH</strong> berharakat tanwin.</li>
          <li>Harakat akhirnya menyesuaikan posisinya di dalam kalimat (bisa dhammah, fathah, atau kasrah).</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>2. Mudhaf Ilaih (مُضَاف إِلَيْهِ) — Pemilik</h4>
        <p>Kata kedua dalam susunan idhafah. Aturannya:</p>
        <ul>
          <li>Hukumnya <strong>selalu majrur</strong> (tanda dasarnya berharakat akhir <strong>kasrah</strong>).</li>
          <li>Boleh memakai ال (makrifah) atau tanwin (nakirah).</li>
        </ul>
      </div>

      <div class="interactive-box">
        <h5>💡 Contoh Analisis:</h5>
        <p class="ar-display">كِتَابُ زَيْدٍ</p>
        <p><strong>Cara baca gundul:</strong> <em>Kitaabu Zaidin</em> — Buku (milik) Zaid.</p>
        <ul>
          <li><strong>كِتَابُ</strong> (Kitaabu) = Mudhaf, marfu' (dhammah) tapi tidak boleh tanwin atau alif lam.</li>
          <li><strong>زَيْدٍ</strong> (Zaidin) = Mudhaf Ilaih, wajib majrur sehingga dibaca kasrah tanwin.</li>
        </ul>
      </div>

      <div class="materi-section">
        <h4>Contoh Idhafah Lain:</h4>
        <ul>
          <li><span class="ar-inline">بَابُ الْبَيْتِ</span> — <em>Baabu al-bayti</em> (pintu rumah)</li>
          <li><span class="ar-inline">كِتَابُ اللهِ</span> — <em>Kitaabullaahi</em> (kitab Allah)</li>
          <li><span class="ar-inline">طَلَبُ الْعِلْمِ</span> — <em>Thalabul-'ilmi</em> (menuntut ilmu)</li>
        </ul>
      </div>
    `
  }
];

/* ════════════════════════════════
   DATA: KUIS
════════════════════════════════ */
const quiz = [
  {
    arabic: "الْعِلْمُ نُورٌ",
    question: "Bacaan dan arti yang paling tepat adalah...",
    options: ["Al-'ilmu nuurun — Ilmu adalah cahaya", "Al-'ilma nuran — Carilah cahaya", "Al-'ilmi nurin — Di dalam cahaya"],
    answer: 0,
    note: "الْعِلْمُ adalah mubtada dan نُورٌ adalah khabar. Keduanya dibaca rafa' (marfu') dengan harakat dhammah."
  },
  {
    arabic: "قَرَأَ مُحَمَّدٌ الْكِتَابَ",
    question: "Kata manakah yang menjadi pelaku (fa'il)?",
    options: ["قَرَأَ (kata kerja membaca)", "مُحَمَّدٌ (nama Muhammad)", "الْكِتَابَ (buku)"],
    answer: 1,
    note: "Muhammad melakukan pekerjaan membaca, sehingga مُحَمَّدٌ adalah fa'il dan dibaca dhammah tanwin (marfu')."
  },
  {
    arabic: "فِي الْبَيْتِ",
    question: "Mengapa kata الْبَيْتِ dibaca al-bayti (kasrah)?",
    options: ["Karena menjadi pelaku (fa'il)", "Karena didahului huruf jar فِي", "Karena menjadi mubtada"],
    answer: 1,
    note: "فِي adalah huruf jar. Isim setelah huruf jar menjadi majrur, tanda dasarnya kasrah."
  },
  {
    arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
    question: "Mana yang merupakan objek (maf'ul bih) dalam kalimat di atas?",
    options: ["كَتَبَ (kata kerja)", "الطَّالِبُ (murid)", "الدَّرْسَ (pelajaran)"],
    answer: 2,
    note: "الدَّرْسَ (ad-darsa) adalah maf'ul bih (objek) yang dikenai pekerjaan menulis. Dibaca manshub, tanda akhirnya fathah."
  },
  {
    arabic: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ",
    question: "Tentukan jenis kata 'إِلَى' dan status kata 'الْمَدْرَسَةِ' setelahnya!",
    options: [
      "إِلَى adalah fi'il, dan الْمَدْرَسَةِ adalah fa'il",
      "إِلَى adalah huruf jar, dan الْمَدْرَسَةِ adalah isim majrur",
      "إِلَى adalah isim, dan الْمَدْرَسَةِ adalah khabar"
    ],
    answer: 1,
    note: "إِلَى adalah huruf jar (kata depan), dan kata setelahnya الْمَدْرَسَةِ menjadi majrur (kasrah: al-madrasati)."
  },
  {
    arabic: "الْمُعَلِّمُ فِي الْفَصْلِ",
    question: "Di mana letak khabar pada kalimat di atas?",
    options: ["الْمُعَلِّمُ (guru)", "فِي الْفَصْلِ (di dalam kelas)", "Tidak ada khabar"],
    answer: 1,
    note: "الْمُعَلِّمُ adalah mubtada (subjek), sedangkan فِي الْفَصْلِ (di dalam kelas) berkedudukan sebagai khabar (khabar syibhul jumlah)."
  },
  {
    arabic: "جَلَسَ زَيْدٌ عَلَى الْكُرْسِيِّ",
    question: "Bagaimana harakat akhir dari kata الْكُرْسِيِّ?",
    options: ["الْكُرْسِيَّ (fathah — manshub)", "الْكُرْسِيُّ (dhammah — marfu')", "الْكُرْسِيِّ (kasrah — majrur)"],
    answer: 2,
    note: "Karena didahului huruf jar عَلَى, maka kata الْكُرْسِيِّ menjadi majrur dengan tanda kasrah di akhirnya."
  },
  {
    arabic: "الْبَيْتُ الْكَبِيرُ جَمِيلٌ",
    question: "Kata 'الْكَبِيرُ' (yang besar) adalah kata sifat (na'at). Mengapa ia dibaca al-kabiiru (dhammah)?",
    options: [
      "Karena man'ut-nya (الْبَيْتُ) dibaca dhammah (marfu')",
      "Karena didahului huruf jar",
      "Karena merupakan objek kalimat"
    ],
    answer: 0,
    note: "Na'at (kata sifat) harus mengikuti man'ut (kata yang disifati) dalam hal i'rab. Karena الْبَيْتُ marfu' (dhammah), maka الْكَبِيرُ juga marfu' (dhammah)."
  },
  {
    arabic: "كِتَابُ زَيْدٍ",
    question: "Dalam susunan idhafah di atas, mengapa kata زَيْدٍ dibaca zaidin (kasrah tanwin)?",
    options: [
      "Karena زَيْدٍ berposisi sebagai mudhaf ilaih (pemilik), hukumnya selalu majrur",
      "Karena didahului huruf jar yang tersembunyi",
      "Karena merupakan subjek kalimat (fa'il)"
    ],
    answer: 0,
    note: "Dalam susunan idhafah, kata kedua adalah mudhaf ilaih dan hukumnya selalu majrur (berharakat akhir kasrah atau kasrah tanwin)."
  },
  {
    arabic: "سَيَّارَةُ الْمُعَلِّمِ",
    question: "Manakah aturan mudhaf (kata pertama/yang dimiliki) pada susunan idhafah di atas?",
    options: [
      "Harus memakai alif lam (ال)",
      "Tidak boleh memakai alif lam (ال) dan tidak boleh berharakat tanwin",
      "Boleh dibaca apa saja tanpa aturan khusus"
    ],
    answer: 1,
    note: "Mudhaf (kata pertama) dalam idhafah memiliki aturan khusus: tidak boleh diawali alif lam (ال) dan tidak boleh diakhiri tanwin."
  }
];

/* ════════════════════════════════
   DATA: QUOTE BERPUTAR
════════════════════════════════ */
const quotes = [
  { arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ", latin: "Menuntut ilmu adalah kewajiban." },
  { arabic: "الصَّبْرُ مِفْتَاحُ الْفَرَجِ", latin: "Sabar adalah kunci kelapangan." },
  { arabic: "مَنْ جَدَّ وَجَدَ", latin: "Barang siapa bersungguh-sungguh, ia akan mendapatkan." },
  { arabic: "الْعِلْمُ نُورٌ", latin: "Ilmu adalah cahaya." },
  { arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", latin: "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain." },
];

/* ════════════════════════════════
   STATE
════════════════════════════════ */
const lessonGrid = document.querySelector("#lessonGrid");
let completed = JSON.parse(localStorage.getItem("arabLessons") || "[]");
let quizIndex = 0;
let score = 0;
let currentFilter = "all";

/* ════════════════════════════════
   DARK MODE
════════════════════════════════ */
const htmlEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");

function applyTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("arabTheme", theme);
  if (theme === "dark") {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  } else {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  }
}

const savedTheme = localStorage.getItem("arabTheme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ════════════════════════════════
   HAMBURGER / MOBILE NAV
════════════════════════════════ */
const hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobileNavDrawer");

if (!mobileNav) {
  mobileNav = document.createElement("nav");
  mobileNav.id = "mobileNavDrawer";
  mobileNav.className = "mobile-nav";
  mobileNav.innerHTML = `
    <a href="#beranda">Beranda</a>
    <a href="#materi">Materi</a>
    <a href="#latihan">Latihan</a>
    <a href="ebook.html">Ebook</a>
  `;
  document.body.appendChild(mobileNav);
}

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  mobileNav.style.display = "flex";
});

mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* ════════════════════════════════
   SCROLL EFFECTS
════════════════════════════════ */
const topbar = document.getElementById("topbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    topbar.classList.add("scrolled");
    backToTop.hidden = false;
  } else {
    topbar.classList.remove("scrolled");
    backToTop.hidden = true;
  }
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ════════════════════════════════
   SEARCH
════════════════════════════════ */
const searchToggle = document.getElementById("searchToggle");
const searchBarWrap = document.getElementById("searchBarWrap");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchClose = document.getElementById("searchClose");

searchToggle.addEventListener("click", () => {
  searchBarWrap.hidden = false;
  searchInput.focus();
});

function closeSearch() {
  searchBarWrap.hidden = true;
  searchInput.value = "";
  searchResults.innerHTML = "";
}

searchClose.addEventListener("click", closeSearch);

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ""; return; }
  const filtered = lessons.filter(l =>
    l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
  );
  if (filtered.length === 0) {
    searchResults.innerHTML = `<div style="padding:10px 14px;color:var(--muted);font-size:14px;">Tidak ditemukan hasil untuk "<em>${q}</em>"</div>`;
    return;
  }
  searchResults.innerHTML = filtered.map(l => {
    const idx = lessons.indexOf(l);
    return `<div class="search-result-item" data-search-lesson="${idx}">
      <span class="search-result-num">BAB ${String(idx + 1).padStart(2, "0")}</span>
      <span>${l.title}</span>
    </div>`;
  }).join("");
});

searchResults.addEventListener("click", e => {
  const item = e.target.closest("[data-search-lesson]");
  if (item) {
    const idx = Number(item.dataset.searchLesson);
    closeSearch();
    setTimeout(() => openMateriModal(idx), 100);
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSearch();
});

/* ════════════════════════════════
   ROTATING QUOTES
════════════════════════════════ */
const quoteAr = document.querySelector(".quote-arabic");
const quoteLat = document.querySelector(".quote-latin");
let quoteIdx = 0;

function showQuote(idx) {
  const q = quotes[idx % quotes.length];
  const wrap = document.querySelector(".rotating-quote");
  wrap.style.opacity = "0";
  setTimeout(() => {
    quoteAr.textContent = q.arabic;
    quoteLat.textContent = q.latin;
    wrap.style.opacity = "1";
  }, 400);
}
showQuote(0);
setInterval(() => showQuote(++quoteIdx), 5000);

/* ════════════════════════════════
   STUDY TIMER
════════════════════════════════ */
const timerDisplay = document.getElementById("timerDisplay");
let timerSeconds = Number(localStorage.getItem("arabTimer") || 0);

function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
  return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function tickTimer() {
  timerSeconds++;
  timerDisplay.textContent = formatTime(timerSeconds);
  if (timerSeconds % 10 === 0) localStorage.setItem("arabTimer", timerSeconds);
}

setInterval(tickTimer, 1000);
timerDisplay.textContent = formatTime(timerSeconds);

/* ════════════════════════════════
   FOOTER YEAR
════════════════════════════════ */
document.getElementById("footerYear").textContent = new Date().getFullYear();

/* ════════════════════════════════
   LESSONS RENDER
════════════════════════════════ */
function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson, index) => {
    const done = completed.includes(index);
    const hidden = (currentFilter === "done" && !done) || (currentFilter === "undone" && done);
    return `
      <article class="lesson-card ${done ? "done" : ""} ${hidden ? "hidden-card" : ""}"
               data-lesson-card="${index}"
               style="animation-delay:${index * 0.06}s">
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
  const count = completed.length;
  document.querySelector("#progressLabel").textContent = `${count} dari ${total} pelajaran selesai`;
  document.querySelector("#progressBar").style.width = `${(count / total) * 100}%`;

  // Show/hide completion banner
  const banner = document.getElementById("completionBanner");
  if (count === total) {
    banner.hidden = false;
    triggerConfetti();
  } else {
    banner.hidden = true;
  }
}

/* ════════════════════════════════
   FILTER BUTTONS
════════════════════════════════ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderLessons();
  });
});

/* ════════════════════════════════
   LESSON CARD EVENTS
════════════════════════════════ */
lessonGrid.addEventListener("click", event => {
  const completeBtn = event.target.closest("[data-lesson]");
  if (completeBtn) {
    event.stopPropagation();
    const lesson = Number(completeBtn.dataset.lesson);
    completed = completed.includes(lesson)
      ? completed.filter(item => item !== lesson)
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

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
const modalOverlay = document.querySelector("#materiModal");
const modalContent = document.querySelector("#modalContent");
const closeModalBtn = document.querySelector("#closeModal");

function openMateriModal(index) {
  const lesson = lessons[index];
  const done = completed.includes(index);
  modalContent.innerHTML = `
    ${lesson.details}
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:30px; padding-top:20px; border-top:1px solid var(--line); gap:12px; flex-wrap:wrap;">
      <button class="primary-button" onclick="closeMateriModal()" type="button" style="padding:10px 22px;">Tutup</button>
      <button class="outline-button" id="modalCompleteBtn" data-modal-lesson="${index}" type="button" style="padding:10px 22px; font-weight:700;">
        ${done ? "✓ Sudah dipelajari" : "Tandai Selesai ✓"}
      </button>
    </div>
  `;
  modalOverlay.removeAttribute("hidden");
  setTimeout(() => modalOverlay.classList.add("active"), 10);
  document.body.style.overflow = "hidden";

  document.querySelector("#modalCompleteBtn").addEventListener("click", () => {
    const btn = document.querySelector("#modalCompleteBtn");
    const idx = Number(btn.dataset.modalLesson);
    completed = completed.includes(idx)
      ? completed.filter(item => item !== idx)
      : [...completed, idx];
    localStorage.setItem("arabLessons", JSON.stringify(completed));
    renderLessons();
    btn.textContent = completed.includes(idx) ? "✓ Sudah dipelajari" : "Tandai Selesai ✓";
  });
}

function closeMateriModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!modalOverlay.classList.contains("active")) {
      modalOverlay.setAttribute("hidden", "");
    }
  }, 320);
}

closeModalBtn.addEventListener("click", closeMateriModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeMateriModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modalOverlay.hasAttribute("hidden")) closeMateriModal();
});
window.closeMateriModal = closeMateriModal;

/* ════════════════════════════════
   REVEAL BUTTON (hero)
════════════════════════════════ */
document.querySelectorAll("[data-reveal]").forEach(button => {
  button.addEventListener("click", () => {
    const answer = document.querySelector(`#${button.dataset.reveal}`);
    answer.hidden = !answer.hidden;
    button.textContent = answer.hidden ? "Tampilkan harakat & arti" : "Sembunyikan jawaban";
  });
});

/* ════════════════════════════════
   QUIZ
════════════════════════════════ */
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

  // Update quiz progress bar
  const pct = (quizIndex / quiz.length) * 100;
  document.getElementById("quizProgressBar").style.width = `${pct}%`;
}

document.querySelector("#quizOptions").addEventListener("click", event => {
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
  const isCorrect = selected === item.answer;
  feedback.innerHTML = `<strong>${isCorrect ? "✅ Benar!" : "❌ Belum tepat."}</strong> ${item.note}`;
  feedback.style.borderLeftColor = isCorrect ? "var(--success)" : "var(--danger)";
  feedback.hidden = false;
  const next = document.querySelector("#nextQuestion");
  next.textContent = quizIndex === quiz.length - 1 ? "🔄 Ulangi kuis" : "Soal berikutnya →";
  next.hidden = false;
});

document.querySelector("#nextQuestion").addEventListener("click", () => {
  if (quizIndex === quiz.length - 1) {
    quizIndex = 0;
    score = 0;
    document.querySelector("#scoreValue").textContent = score;
    document.getElementById("quizProgressBar").style.width = "0%";
  } else {
    quizIndex += 1;
  }
  renderQuiz();
});

/* ════════════════════════════════
   RESET PROGRESS
════════════════════════════════ */
document.querySelector("#resetProgress").addEventListener("click", () => {
  if (!confirm("Yakin ingin mengulang semua progres belajar?")) return;
  completed = [];
  localStorage.removeItem("arabLessons");
  renderLessons();
});

/* ════════════════════════════════
   CONFETTI
════════════════════════════════ */
let confettiFired = false;
function triggerConfetti() {
  if (confettiFired) return;
  confettiFired = true;
  const canvas = document.getElementById("confettiCanvas");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 7 + 4,
    d: Math.random() * 120 + 60,
    color: ["#d8a84d", "#173f35", "#4f745f", "#f6f0e2", "#9c3d32"][Math.floor(Math.random() * 5)],
    tilt: Math.random() * 12 - 6,
    tiltAngle: 0,
    tiltSpeed: Math.random() * 0.07 + 0.05,
  }));

  let frame = 0;
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
      p.tiltAngle += p.tiltSpeed;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      p.y += (Math.cos(0.01 * p.d) + 2 + p.r / 10) * 1.1;
      p.x += Math.sin(0.01 * frame);
      if (p.y > canvas.height + 20) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    frame++;
    if (frame < 280) requestAnimationFrame(drawConfetti);
    else canvas.style.display = "none";
  }
  drawConfetti();
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
renderLessons();
renderQuiz();
