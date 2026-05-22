
    // ── CURSOR (desktop only) ──
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx=0,my=0,rx=0,ry=0;
    if (!isTouch) {
      document.addEventListener('mousemove', e => {
        mx=e.clientX; my=e.clientY;
        cur.style.left=mx+'px'; cur.style.top=my+'px';
      });
      (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
      document.querySelectorAll('a,button,.proj-card,.edu-card,.ach-card,.stat-hero,.stat-mini,.beyond-card').forEach(el=>{
        el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));
        el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'));
      });
    }

    // ── SCROLL PROGRESS BAR ──
    const progressBar = document.getElementById('scrollProgress');
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });

    // ── NAV SCROLL STATE ──
    const navbar = document.getElementById('navbar');
    function updateNav() {
      if (window.scrollY > 60) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    // ── DIALOG DATA (stats + beyond) ──
    const dialogData = {
      olympiad: {
        icon: 'OL', tag: 'CR Rao International Statistics Olympiad',
        title: '11th Rank — International Statistics Olympiad',
        body: `Secured <strong>11th place globally</strong> at the prestigious <em>CR Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS) International Statistics Olympiad</em> — one of India's most competitive statistics competitions open to students across the country.<br><br>
<strong>What the competition tests:</strong> The olympiad covers advanced probability theory, statistical inference, regression analysis, hypothesis testing, multivariate analysis, and applied data interpretation — far beyond standard undergraduate curriculum.<br><br>
<strong>Why it matters:</strong> Competing against thousands of students from top institutions, finishing 11th nationally is a direct reflection of depth in statistical reasoning, mathematical rigour, and applied problem-solving. This result was a key signal that led to being selected for the sponsored R&D project on genetic allele data at Chella Software.`,
        pills: ['11th Rank', 'Statistics Olympiad', 'CR Rao AIMSCS', 'Probability', 'Statistical Inference', 'National Competition']
      },
      ml: {
        icon: 'ML', tag: 'Sponsored R&D · Chella Software Internship',
        title: '89% Accuracy — Allele Classification ML Model',
        body: `During the internship at <strong>Chella Software Pvt. Ltd.</strong>, contributed to a <em>sponsored R&D project on genetic data analysis</em> — building machine learning models to classify allele data and identify patterns linked to evolutionary origin.<br><br>
<strong>The problem:</strong> Allele classification from raw genetic data is a non-trivial task — class imbalances, high-dimensional feature spaces, and noisy biological measurements make it challenging to build models that generalise well.<br><br>
<strong>Approach:</strong> Implemented a <strong>Random Forest Classifier</strong> as the primary model, alongside clustering techniques to group similar allele profiles. Applied feature engineering to extract biologically meaningful signals, performed hyperparameter tuning, and validated on a held-out test set — achieving <strong>89% accuracy on unseen data</strong>.<br><br>
<strong>Outcome:</strong> The model and findings contributed to a <em>published research paper</em> — a tangible academic output from the internship work.`,
        pills: ['89% Accuracy', 'Random Forest', 'Clustering', 'Genetic Data', 'Feature Engineering', 'Published Research', 'Python', 'Scikit-learn']
      },
      fulltime: {
        icon: 'JD', tag: 'Jun 2024 — Present · Full-time',
        title: 'Junior Developer — Chella Software Pvt. Ltd.',
        body: `<strong>Chella Software</strong> builds mission-critical infrastructure for India's financial markets — working here means every line of code runs under real market pressure.<br><br>
<strong>Full SDLC ownership:</strong> Involved end-to-end across multiple deliverables — from requirement analysis and system design through implementation, testing, deployment, and production support.<br><br>
<strong>Performance-critical C optimisation:</strong> Worked on high-throughput C modules powering a trading platform that serves India's leading stock exchange. Delivered measurable gains in execution speed and memory efficiency under peak market loads, while cutting operational overhead.<br><br>
<strong>Trade-flow architecture:</strong> Designed and enhanced the core trade-flow — gaining deep expertise in end-to-end trading system workflows and mission-critical transaction processing pipelines.<br><br>
<strong>Multithreading &amp; systems:</strong> Leveraged multithreading, MPI messaging, data structures, and space-time complexity analysis to push performance ceilings further.<br><br>
<strong>Build automation:</strong> Built and maintained Makefile and shell-script based build pipelines across multi-node compilation environments — significantly reducing manual release effort.`,
        pills: ['C', 'Multithreading', 'MPI', 'Trading Systems', 'Low-latency', 'Makefiles', 'Shell Scripting', 'SDLC', 'Production Support']
      },
      intern: {
        icon: 'IN', tag: 'May 2023 — Apr 2024 · Internship',
        title: 'SDE Intern — Chella Software Pvt. Ltd.',
        body: `A full-year internship that went far beyond the usual intern scope — contributing to live systems, leading R&D work, and producing a published research output.<br><br>
<strong>REST API testing:</strong> Conducted comprehensive API testing using Postman and built session handling mechanisms wired into live application workflows.<br><br>
<strong>Power BI R&D:</strong> Led independent R&D into integrating Microsoft Power BI with existing live systems — scoping feasibility, mapping integration pathways, and producing a technical evaluation report.<br><br>
<strong>Allele Classification (Published Research):</strong> Contributed to a sponsored genetic data analysis project — built ML classification and clustering models for allele data using Python and Scikit-learn. Achieved <strong>89% accuracy on held-out test data</strong>. The work contributed to a <em>published research paper</em>.`,
        pills: ['REST APIs', 'Postman', 'Session Handling', 'Power BI', 'R&D', 'ML Modelling', 'Python', '89% Accuracy', 'Published Paper']
      }
    };

    function openDialog(key) {
      const d = dialogData[key];
      if (!d) return;
      const overlayEl = document.getElementById('modalOverlay');
      document.getElementById('mIcon').textContent  = d.icon;
      document.getElementById('mTag').textContent   = d.tag;
      document.getElementById('mTitle').textContent = d.title;
      document.getElementById('mBody').innerHTML    = d.body;
      const pillsEl = document.getElementById('mPills');
      pillsEl.innerHTML = d.pills.map(p => `<span class="modal-pill">${p}</span>`).join('');
      document.body.dataset.scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      overlayEl.classList.add('open');
      overlayEl.scrollTop = 0;
    }

    // ── EXPERIENCE CARD DIALOGS ──
    document.querySelectorAll('[data-expdialog]').forEach(el => {
      el.addEventListener('click', () => openDialog(el.dataset.expdialog));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openDialog(el.dataset.expdialog); });
    });

    function closeDialog(){
      const overlayEl = document.getElementById('modalOverlay');
      overlayEl.classList.remove('open');
      document.body.style.overflow = '';
      window.scrollTo({ top: parseInt(document.body.dataset.scrollY || '0'), behavior: 'instant' });
    }

    // ── BEYOND DIALOGS ──
    const beyondData = {
      cult: {
        icon: '✦', tag: 'Cultural Secretary · IIITDM',
        title: 'Samgatha — The Cultural Legacy',
        body: `As <strong>Cultural Secretary of IIITDM Kancheepuram</strong>, the centrepiece was organising <strong>Samgatha</strong> — the institute's annual inter-college cultural fest. Over <strong>800+ attendees</strong> turned up from colleges across the country, with a landmark pro show featuring <strong>DJ Julia Bliss</strong> and live band <strong>Mysore Express</strong>.<br><br>Beyond the main fest, the role involved overseeing all cultural activities, clubs, and events across the academic year — from budgeting and permissions to artist coordination and logistics.`,
        pills: ['Cultural Secretary', '800+ Attendees', 'DJ Julia Bliss', 'Mysore Express', 'Inter-College', 'Event Management']
      },
      ngo: {
        icon: '◈', tag: 'NGO Vidhai · SDG 4 & SDG 6',
        title: 'From Member to President — NGO Vidhai',
        body: `<strong>NGO Vidhai</strong> is a student-led organisation working towards two UN Sustainable Development Goals: <em>SDG 4 (Quality Education for All)</em> and <em>SDG 6 (Clean Water & Sanitation)</em>.<br><br>
<strong>What we did on the ground:</strong> Collaborated with nearby government schools to work with underprivileged and underserved students — teaching, mentoring, and preparing them for competitive exams including <strong>NMMS</strong> (National Means-cum-Merit Scholarship) and <strong>NTSE</strong> (National Talent Search Examination). The goal was to open doors for students who otherwise wouldn't have access to structured exam preparation.<br><br>
On the SDG 6 front, Vidhai took up a <strong>water purification project</strong> — working towards ensuring access to clean drinking water for communities in need.<br><br>
<strong>My journey:</strong> Started as a <strong>Content Creation & Video Editing</strong> member — producing outreach videos, social media campaigns, and awareness content. Took on increasing responsibility over time, and eventually became <strong>President of NGO Vidhai</strong> — leading the team, coordinating all initiatives, and driving the mission forward. Also represented Vidhai at <strong>Vashisht '23</strong> as part of the organising committee.`,
        pills: ['President', 'Content Creation', 'Video Editing', 'SDG 4 · Education', 'SDG 6 · Clean Water', 'NMMS Prep', 'NTSE Prep', 'Water Purification', 'Govt. School Outreach']
      },
      ncc: {
        icon: '◇', tag: 'National Cadet Corps',
        title: "NCC 'A' Grade — 'C' Certificate",
        body: `Completed full NCC training and earned the <strong>'C' Certificate with 'A' Grade</strong> — the highest distinction available in the National Cadet Corps programme.<br><br>The 'A' Grade reflects exceptional performance across drills, leadership exercises, field training, and written examinations — demonstrating discipline, commitment, and national service ethos.`,
        pills: ["'C' Certificate", "'A' Grade", 'NCC', 'Leadership', 'Discipline'],
        photo: 'ncc.jpg'
      },
      medal: {
        icon: '◉', tag: 'Inter-IIIT Fest · Basketball',
        title: 'Gold Medal — Inter-IIIT',
        body: `Won the <strong>Gold Medal</strong> at the inter-IIIT sports & cultural fest, representing IIITDM Kancheepuram in the basketball competition — competing against teams from IIITs across India and coming out on top.`,
        pills: ['Gold Medal', 'Basketball', 'Inter-IIIT', 'Sports'],
        photo: 'medal.jpg'
      },
      fests: {
        icon: '▣', tag: 'Samgatha & Vashisht',
        title: 'Fest Roles — Full Breakdown',
        body: ``,
        pills: [],
        fests: [
          { name: 'Samgatha \'24 (Annual Cultural Fest)', roles: ['Cultural Secretary', 'Pro Show Lead', 'Event Head'] },
          { name: 'Samgatha \'23 (Annual Cultural Fest)', roles: ['Cultural Core', 'Publicity Co-Lead'] },
          { name: 'Samgatha \'22 (Annual Cultural Fest)', roles: ['Cultural Coordinator', 'Decor Coordinator', 'Publicity Coordinator'] },
          { name: "Vashisht '23 (Technical Fest)", roles: ['Vidhai President Representative', 'GDSC Core', 'Organising Committee'] },
          { name: "Vashisht '23 (Technical Fest)", roles: ['CS Club Coordinator', 'Organising Committee'] },
        ]
      }
    };

    document.querySelectorAll('[data-bdialog]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.dataset.bdialog;
        const d = beyondData[key];
        if (!d) return;
        const overlay = document.getElementById('modalOverlay');
        document.getElementById('mIcon').textContent  = d.icon;
        document.getElementById('mTag').textContent   = d.tag;
        document.getElementById('mTitle').textContent = d.title;

        // body
        const bodyEl = document.getElementById('mBody');
        if (d.fests) {
          let html = '<div style="display:flex;flex-direction:column;gap:0;">';
          d.fests.forEach(f => {
            html += `<div class="bdialog-fest-item">
              <div class="bdialog-fest-name">${f.name}</div>
              <div class="bdialog-fest-roles">${f.roles.map(r=>`<span class="proj-tag">${r}</span>`).join('')}</div>
            </div>`;
          });
          html += '</div>';
          bodyEl.innerHTML = html;
        } else {
          bodyEl.innerHTML = d.body;
        }

        // photo
        const pillsEl = document.getElementById('mPills');
        let pillsHTML = '';
        if (d.photo) {
          pillsHTML += `<div class="bdialog-photo-placeholder" id="photoWrap">
            <img src="${d.photo}" alt="${d.title}" onerror="this.parentElement.classList.remove('has-photo');this.parentElement.innerHTML='<svg width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'></rect><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'></circle><path d=\\'M21 15l-5-5L5 21\\'></path></svg><span>${d.photo}</span><span style=\\'opacity:.5;font-size:.68rem\\'>Upload this file to your repo</span>'" class="has-photo" style="width:100%;height:100%;object-fit:cover;border-radius:8px;display:block;" />
          </div>`;
          pillsHTML += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;">';
          d.pills.forEach(p => pillsHTML += `<span class="proj-tag">${p}</span>`);
          pillsHTML += '</div>';
        } else {
          d.pills.forEach(p => pillsHTML += `<span class="proj-tag">${p}</span>`);
        }
        pillsEl.innerHTML = pillsHTML;
        document.body.dataset.scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        const overlayEl = document.getElementById('modalOverlay');
        overlayEl.classList.add('open');
        overlayEl.scrollTop = 0;
      });
    });
    document.querySelectorAll('[data-dialog]').forEach(el => {
      el.addEventListener('click', () => openDialog(el.dataset.dialog));
    });

    // ── MOBILE DRAWER ──
    const menuBtn      = document.getElementById('menuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose  = document.getElementById('drawerClose');
    function openDrawer()  { mobileDrawer.classList.add('open');    document.body.style.overflow = 'hidden'; }
    function closeDrawer() { mobileDrawer.classList.remove('open'); document.body.style.overflow = ''; }
    if (menuBtn)     menuBtn.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    document.querySelectorAll('.mobile-drawer a').forEach(a => a.addEventListener('click', closeDrawer));

    // ── REVEAL ON SCROLL ──
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
    }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    // ── DARK MODE ──
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon   = document.getElementById('themeIcon');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDark();
    function setDark()  { document.body.classList.add('dark');    const s=document.getElementById('iconSun');const m=document.getElementById('iconMoon');if(s)s.style.display='none';if(m)m.style.display=''; }
    function setLight() { document.body.classList.remove('dark'); const s=document.getElementById('iconSun');const m=document.getElementById('iconMoon');if(s)s.style.display='';if(m)m.style.display='none'; }
    if (themeToggle) themeToggle.addEventListener('click', () =>
      document.body.classList.contains('dark') ? setLight() : setDark()
    );

    // ── SPARKLE TRAIL (desktop only) ──
    if (!isTouch) {
      let lastSpark = 0;
      document.addEventListener('mousemove', e => {
        const now = Date.now(); if (now - lastSpark < 60) return; lastSpark = now;
        const s = document.createElement('div'); s.className = 'sparkle';
        const size = 4 + Math.random() * 5; const hue = 200 + Math.random() * 40;
        s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:${size}px;height:${size}px;background:hsl(${hue},80%,65%);`;
        document.body.appendChild(s); setTimeout(() => s.remove(), 700);
      });
    }

    // ── FLOATING SHAPES (desktop only) ──
    const shapesEl = document.getElementById('heroShapes');
    if (shapesEl && !isTouch) {
      function spawnShape() {
        const el = document.createElement('div'); el.className = 'shape';
        const types = ['circle','line','sq'];
        const t = types[Math.floor(Math.random() * types.length)];
        const size = 8 + Math.random() * 18;
        const x = 5 + Math.random() * 90; const y = 20 + Math.random() * 70;
        const dur = 4 + Math.random() * 4;
        if (t === 'circle') el.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;border-radius:50%;border:1.5px solid rgba(59,130,246,.3);animation-duration:${dur}s;`;
        else if (t === 'line') el.style.cssText = `left:${x}%;top:${y}%;width:${40+Math.random()*60}px;height:1px;background:linear-gradient(to right,transparent,rgba(59,130,246,.4),transparent);animation-duration:${dur}s;`;
        else el.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;border:1px solid rgba(59,130,246,.2);animation-duration:${dur}s;`;
        shapesEl.appendChild(el); setTimeout(() => el.remove(), dur * 1000);
      }
      setInterval(spawnShape, 800);
      for (let i = 0; i < 4; i++) setTimeout(spawnShape, i * 200);
    }

    // ── ZEN QR TAP (touch only) ──
    const zenCard = document.querySelector('.zen-card');
    if (zenCard && isTouch) {
      zenCard.addEventListener('click', e => {
        const ov = zenCard.querySelector('.zen-overlay');
        if (ov && ov.contains(e.target)) zenCard.classList.remove('qr-active');
        else zenCard.classList.toggle('qr-active');
      });
    }

    // ── MODAL CLOSE ──
    const mClose = document.getElementById('modalClose');
    const overlay = document.getElementById('modalOverlay');
    if (mClose) mClose.addEventListener('click', closeDialog);
    if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeDialog(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDialog(); });

  