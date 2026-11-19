/* =========================================================
   Wazko Express — interactions (3D futuristic theme)
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Año dinámico
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  var burger = document.getElementById('burger');
  var links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Parallax de orbes del fondo + grid
  if (!reduceMotion) {
    var orbs = document.querySelectorAll('.bg__orb');
    var grid = document.querySelector('.bg__grid');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        orbs.forEach(function (o, i) {
          o.style.transform = 'translateY(' + (y * (0.04 + i * 0.03)) + 'px)';
        });
        if (grid) grid.style.transform = 'perspective(600px) rotateX(1deg) translateY(' + (y * 0.05) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }

  // Tilt 3D en tarjetas y botones
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      var max = 8;
      el.addEventListener('mousemove', function (ev) {
        var r = el.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - 0.5;
        var py = (ev.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(800px) rotateY(' + (px * max) + 'deg) rotateX(' + (-py * max) + 'deg) translateZ(6px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });

    // Escena 3D del hero: reacciona al mouse
    var scene = document.querySelector('[data-tilt-scene]');
    if (scene) {
      var hero = scene.closest('.hero');
      hero.addEventListener('mousemove', function (ev) {
        var r = hero.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - 0.5;
        var py = (ev.clientY - r.top) / r.height - 0.5;
        scene.style.transform = 'rotateY(' + (px * 10) + 'deg) rotateX(' + (-py * 8) + 'deg)';
      });
      hero.addEventListener('mouseleave', function () { scene.style.transform = ''; });
    }
  }

  // Contador animado de métricas
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var counters = document.querySelectorAll('.metric__num[data-count]');
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var prefix = el.getAttribute('data-prefix') || '';
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null, dur = 1200;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var val = Math.round(target * (1 - Math.pow(1 - p, 3)));
          el.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cObs.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cObs.observe(c); });
  }

  // Formulario -> Formspree (los envíos llegan SOLO a tu correo)
  var form = document.getElementById('leadForm');
  var status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      if (form.action.indexOf('TU_FORM_ID') !== -1) {
        setStatus('El formulario aún no está conectado. Configura tu Form ID de Formspree (ver README.md).', 'err');
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
      setStatus('', '');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            setStatus('¡Gracias! Recibimos tus datos. Te contactaremos muy pronto. 🚀', 'ok');
          } else {
            return res.json().then(function (data) {
              var msg = data && data.errors
                ? data.errors.map(function (e) { return e.message; }).join(', ')
                : 'No pudimos enviar el formulario. Intenta de nuevo.';
              setStatus(msg, 'err');
            });
          }
        })
        .catch(function () {
          setStatus('Error de conexión. Revisa tu internet e intenta de nuevo.', 'err');
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = original; }
        });
    });
  }

  function setStatus(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form__status' + (kind ? ' ' + kind : '');
  }
})();
