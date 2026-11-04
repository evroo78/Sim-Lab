/* ============================================================================
   Єдиний site.js для всіх курсів симуляторів (лежить у корені сайту).
   Редагуйте тут: курси, лабораторні, тексти «Про курс» / «Про автора».

   Підключення:
     корінь (портал курсів):        <script src="site.js"></script>
     сторінка курсу  /<курс>/:      <script src="../site.js"></script>
     лабораторна /<курс>/LabN/:     <script src="../../site.js"></script>

   Курс і номер ЛР визначаються з адреси сторінки (папки <курс>/LabN/).
   Щоб відкрити лабораторну студентам – поставте active: true.
   ============================================================================ */

window.COMMON = {
  university: 'КПІ ім. Ігоря Сікорського',
  faculty: 'Факультет електроніки',
  author: 'Шевлякова Ганна Вікторівна',
  credit: 'Виконано з використанням Claude (Anthropic)',
  year: '2026',
  about_author: '<p><b>Шевлякова Ганна Вікторівна</b></p><p>Факультет електроніки, КПІ ім. Ігоря Сікорського.</p><p>Контакти та коротка біографія – додайте тут.</p>'
};

window.COURSES = {
  sensors: {
    course: 'Електронні сенсори',
    department: 'Кафедра електронної інженерії, мікро- та наносистемної техніки',
    lead: 'У кожній роботі ви проходите технологічний маршрут виготовлення сенсора, приймаючи рішення на кожному кроці, а потім досліджуєте його характеристики. Прогрес зберігається автоматично.',
    how: ['Відкрийте потрібну лабораторну роботу і оберіть себе зі списку студентів.',
          'Пройдіть кроки по черзі; звіт про пройдені кроки накопичується праворуч.',
          'Збережіть результати вимірювань (CSV, графік) і опрацюйте їх самостійно.'],
    about_course: '<p>Онлайн-симулятори лабораторних робіт з дисципліни «Електронні сенсори». У кожній роботі студент проходить технологічний маршрут виготовлення сенсора, приймаючи рішення на кожному кроці, а потім досліджує його характеристики. Результати автоматично зберігаються в таблиці викладача.</p><p>Основа – лабораторний практикум «Електронні сенсори» (КПІ ім. Ігоря Сікорського, 2018).</p>',
    labs: [
      { n: 1, active: true,  title: 'Виготовлення та дослідження тонкоплівкових сенсорів температури',
        text: 'Ni, Pt, Cu або Au на Ti: напилення, фотолітографія, травлення, скрайбування. Вимірювання R(T) у термокамері.' },
      { n: 2, active: false, title: 'Виготовлення та дослідження ємнісних сенсорів вологості',
        text: 'Гребінчасті електроди на полікорі, полімерні та золь-гель шари. Сольовий генератор вологості, LC-метр.' },
      { n: 3, active: false, title: 'Виготовлення та дослідження властивостей кремнієвих ФЕП',
        text: 'Виготовлення та вимірювання кремнієвих сонячних елементів.' },
      { n: 4, active: false, title: 'Дослідження оптоволоконних сенсорів температури',
        text: 'Оптоволоконні датчики температури: принцип дії та вимірювання.' },
      { n: 5, active: false, title: 'Мікроелектронний амперометричний біосенсор',
        text: 'Мікроелектронний амперометричний біосенсор.' }
    ]
  },

  semimat: {
    course: 'Сучасні напівпровідникові матеріали',
    department: 'Кафедра мікроелектроніки',
    lead: 'Віртуальні стенди для виконання лабораторних робіт: ви керуєте приладом, знімаєте спектри і записуєте точки так само, як на реальній установці.',
    how: ['Відкрийте лабораторну роботу, оберіть групу і себе у списку – варіант призначається автоматично.',
          'Виконайте вимірювання за завданням; точки, що потрапили в допуск, зараховуються.',
          'Збережіть результати й опрацюйте їх самостійно.'],
    about_course: '<p>Онлайн-стенди лабораторних робіт з дисципліни «Сучасні напівпровідникові матеріали». Моделі приладів побудовані за даними реальних вимірювань, результати студентів автоматично записуються в таблицю викладача.</p>',
    labs: [
      { n: 1, active: true,  title: 'Оптична ширина забороненої зони органічних напівпровідників',
        text: 'Монохроматор УМ-2: спектри пропускання пустого скельця та плівок меланіну і фталоціанінів.' },
      { n: 2, active: false, title: 'Спектр фотовольтаїчного ефекту в α-Si:H та m-Si',
        text: 'Спектральна характеристика фотоЕРС p-n переходів на аморфному і монокристалічному кремнії.' }
    ]
  }
};

/* ============================================================================
   Далі – механіка. Зазвичай редагувати не потрібно.
   ============================================================================ */
(function () {
  'use strict';
  var me = document.currentScript;
  var ROOT = me ? me.src.replace(/site\.js(\?.*)?$/, '') : './';

  // --- де ми: курс і номер ЛР з адреси ---
  var parts = decodeURIComponent(location.pathname).split('/');
  var key = null, labN = null;
  for (var i = 0; i < parts.length; i++) {
    if (COURSES.hasOwnProperty(parts[i])) {
      key = parts[i];
      var m = /^Lab(\d+)$/i.exec(parts[i + 1] || '');
      if (m) labN = +m[1];
    }
  }
  var C = key ? COURSES[key] : null;

  // --- window.SITE: дані поточного курсу (сумісно зі старими лабораторними) ---
  function labUrl(k, n) { return ROOT + k + '/Lab' + n + '/index.html'; }
  if (C) {
    window.SITE = Object.assign({}, COMMON, C, {
      key: key,
      labs: C.labs.map(function (l) {
        return Object.assign({}, l, { href: l.active ? labUrl(key, l.n) : '' });
      })
    });
  }

  var hasOwnHeader = !!document.querySelector('body > header');
  if (hasOwnHeader) return;          // сторінка малює шапку сама (ЛР «Сенсорів») – їй потрібні лише дані

  // --- спільний вигляд: шапка, меню, футер, вікно «Про…» ---
  var css = '' +
    ':root{--bg:#eef1f5;--card:#fff;--ink:#1c2733;--mut:#5d6b7a;--muted:#5d6b7a;--line:#d5dbe3;--acc:#1f6fb2;--acc2:#0f4c81}' +
    '*{box-sizing:border-box}' +
    'body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,"Segoe UI",Roboto,sans-serif;min-height:100vh;display:flex;flex-direction:column}' +
    'body>main{flex:1;width:100%}' +
    '.sx-head{background:#14263a;color:#fff;padding:12px 20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}' +
    '.sx-hl{flex:1;min-width:240px}' +
    '.sx-hl a{color:inherit;text-decoration:none}' +
    '.sx-course{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#9fb6cc;margin-bottom:2px}' +
    '.sx-title{font-size:18px;margin:0;font-weight:600;line-height:1.3}' +
    '.sx-nav{display:flex;gap:4px;flex-wrap:wrap;align-items:center}' +
    '.sx-nb{background:transparent;color:#d6e2ee;font:inherit;font-weight:500;font-size:14px;padding:6px 10px;border-radius:6px;border:0;cursor:pointer;text-decoration:none}' +
    '.sx-nb:hover{background:#24405e;color:#fff}' +
    '.sx-dd{position:relative}' +
    '.sx-ddm{position:absolute;right:0;top:100%;margin-top:4px;background:#fff;color:var(--ink);border:1px solid var(--line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.18);min-width:320px;z-index:20;padding:6px}' +
    '.sx-ddm a,.sx-ddm span{display:block;padding:7px 10px;border-radius:6px;color:var(--ink);text-decoration:none;font-size:14px}' +
    '.sx-ddm a:hover,.sx-ddm .cur{background:#eaf3fb}.sx-ddm .cur{font-weight:700}.sx-ddm span{color:#9aa6b2}.sx-ddm small{color:var(--mut)}' +
    '.sx-hide{display:none!important}' +
    '.sx-foot{max-width:1180px;width:100%;margin:10px auto 0;padding:16px 16px 24px;border-top:1px solid var(--line);color:var(--mut);font-size:13px;display:flex;flex-wrap:wrap;gap:6px 24px;justify-content:space-between}' +
    '.sx-foot b{color:var(--ink);font-weight:600}' +
    '#sx-info{position:fixed;inset:0;background:rgba(10,20,30,.55);display:flex;align-items:center;justify-content:center;z-index:30;padding:16px}' +
    '#sx-info .box{background:#fff;border-radius:12px;padding:22px 24px;max-width:560px;position:relative;max-height:85vh;overflow:auto}' +
    '#sx-info h3{margin:0 0 10px}' +
    '#sx-info .x{position:absolute;right:10px;top:8px;background:transparent;color:var(--mut);font-size:22px;border:0;cursor:pointer;padding:2px 8px}' +
    /* сторінки порталу і курсу */
    '.sx-main{max-width:1100px;margin:0 auto;padding:22px 16px}' +
    '.sx-hero{padding:6px 2px 18px}.sx-hero h2{font-size:26px;margin:0 0 6px}.sx-hero p{margin:0;color:var(--mut);max-width:760px}' +
    '.sx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:14px}' +
    '.sx-card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;display:flex;flex-direction:column;gap:8px;text-decoration:none;color:inherit;transition:border-color .15s,box-shadow .15s,transform .15s}' +
    'a.sx-card:hover{border-color:var(--acc);box-shadow:0 4px 14px rgba(20,38,58,.12);transform:translateY(-2px)}' +
    '.sx-num{display:flex;align-items:center;gap:10px}' +
    '.sx-n{width:38px;height:38px;border-radius:50%;background:var(--acc);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;flex:none}' +
    '.sx-card h3{margin:0;font-size:16px;line-height:1.3}.sx-card p{margin:0;color:var(--mut);font-size:14px;flex:1}' +
    '.sx-st{font-size:12.5px;font-weight:700;color:var(--acc2)}' +
    '.sx-card.soon{opacity:.62;background:#f6f8fa}.sx-card.soon .sx-n{background:#9aa6b2}.sx-card.soon .sx-st{color:var(--mut);font-weight:600}' +
    '.sx-how{margin-top:22px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 18px}' +
    '.sx-how h3{margin:0 0 6px;font-size:15px}.sx-how ol{margin:0;padding-left:20px;color:var(--mut);font-size:14px}' +
    '@media(max-width:600px){.sx-hero h2{font-size:21px}.sx-foot div{text-align:left!important}}';
  var st = document.createElement('style'); st.textContent = css;
  document.head.insertBefore(st, document.head.firstChild);   // першим – щоб власні стилі сторінки мали пріоритет

  function esc(s) { return String(s == null ? '' : s); }
  var S = C ? window.SITE : Object.assign({}, COMMON);
  var page = document.body.getAttribute('data-page') || (labN ? 'lab' : (C ? 'course' : 'portal'));
  var lab = C && labN ? S.labs.filter(function (l) { return l.n === labN; })[0] : null;

  // шапка
  var title = page === 'portal' ? 'Онлайн-симулятори лабораторних робіт'
            : lab ? 'Лабораторна робота №' + lab.n + '. ' + lab.title
            : 'Онлайн-симулятори лабораторних робіт';
  var courseLbl = C ? S.course : S.university + ' · ' + S.faculty;
  var nav = '';
  if (C) {
    nav += '<div class="sx-dd"><button class="sx-nb" id="sxLabs" type="button">Лабораторні роботи ▾</button><div class="sx-ddm sx-hide" id="sxLabsM">' +
      S.labs.map(function (l) {
        var t = '№' + l.n + '. ' + l.title;
        if (l.n === labN) return '<a class="cur" href="#">' + t + '</a>';
        return l.href ? '<a href="' + l.href + '">' + t + '</a>' : '<span>' + t + ' <small>(у розробці)</small></span>';
      }).join('') + '</div></div>';
    nav += '<button class="sx-nb" id="sxCourse" type="button">Про курс</button>';
  }
  nav += '<button class="sx-nb" id="sxAuthor" type="button">Про автора</button>';
  if (page !== 'portal') nav += '<a class="sx-nb" href="' + ROOT + 'index.html">Усі курси</a>';

  var head = document.createElement('header'); head.className = 'sx-head';
  head.innerHTML = '<div class="sx-hl"><a href="' + (C ? ROOT + key + '/index.html' : ROOT + 'index.html') + '">' +
    '<div class="sx-course">' + courseLbl + '</div><div class="sx-title">' + title + '</div></a></div>' +
    '<nav class="sx-nav">' + nav + '</nav>';
  document.body.insertBefore(head, document.body.firstChild);

  // вміст порталу / сторінки курсу
  function card(href, n, h, p, stTxt) {
    var inner = '<div class="sx-num"><span class="sx-n">' + n + '</span><h3>' + h + '</h3></div><p>' + esc(p) + '</p><span class="sx-st">' + stTxt + '</span>';
    return href ? '<a class="sx-card" href="' + href + '">' + inner + '</a>' : '<div class="sx-card soon">' + inner + '</div>';
  }
  if (page === 'portal' || page === 'course') {
    var main = document.querySelector('main') || document.body.insertBefore(document.createElement('main'), head.nextSibling);
    main.className = 'sx-main';
    if (page === 'portal') {
      var keys = Object.keys(COURSES);
      main.innerHTML = '<div class="sx-hero"><h2>Оберіть курс</h2><p>Онлайн-симулятори лабораторних робіт: технологічні маршрути і вимірювальні стенди, результати автоматично зберігаються в таблиці викладача.</p></div>' +
        '<div class="sx-grid">' + keys.map(function (k, i) {
          var c = COURSES[k], act = c.labs.filter(function (l) { return l.active; }).length;
          return card(ROOT + k + '/index.html', i + 1, c.course, c.department + '. Доступно робіт: ' + act + ' з ' + c.labs.length + '.', 'Відкрити →');
        }).join('') + '</div>';
    } else {
      main.innerHTML = '<div class="sx-hero"><h2>Оберіть лабораторну роботу</h2><p>' + esc(S.lead) + '</p></div>' +
        '<div class="sx-grid">' + S.labs.map(function (l) {
          return card(l.href, l.n, l.title, l.text, l.href ? 'Відкрити →' : 'У розробці');
        }).join('') + '</div>' +
        (S.how ? '<div class="sx-how"><h3>Як працювати</h3><ol><li>' + S.how.join('</li><li>') + '</li></ol></div>' : '');
    }
  }

  // футер
  var foot = document.createElement('footer'); foot.className = 'sx-foot';
  foot.innerHTML = '<div><b>' + (C ? S.course : 'Онлайн-симулятори лабораторних робіт') + '</b>' + (C ? ' · онлайн-симулятор лабораторних робіт' : '') +
    '<br>' + (C ? S.department : S.faculty) + '<br>' + S.university + '</div>' +
    '<div style="text-align:right">Автор: <b>' + S.author + '</b><br>' + S.credit + '<br>© ' + S.year + '</div>';
  document.body.appendChild(foot);

  // вікно «Про…»
  var box = document.createElement('div'); box.id = 'sx-info'; box.className = 'sx-hide';
  box.innerHTML = '<div class="box"><button class="x" type="button" aria-label="Закрити">×</button><h3></h3><div></div></div>';
  document.body.appendChild(box);
  function info(t, b) { box.querySelector('h3').textContent = t; box.querySelector('h3+div').innerHTML = b || '<p>Текст буде додано.</p>'; box.classList.remove('sx-hide'); }
  box.onclick = function (e) { if (e.target === box || e.target.className === 'x') box.classList.add('sx-hide'); };
  var b;
  if ((b = document.getElementById('sxCourse'))) b.onclick = function () { info('Про курс «' + S.course + '»', S.about_course); };
  if ((b = document.getElementById('sxAuthor'))) b.onclick = function () { info('Про автора', S.about_author); };
  if ((b = document.getElementById('sxLabs'))) {
    var mm = document.getElementById('sxLabsM');
    b.onclick = function (e) { e.stopPropagation(); mm.classList.toggle('sx-hide'); };
    document.addEventListener('click', function () { mm.classList.add('sx-hide'); });
  }
})();
