/* =========================================================
   Wazko Express — interactions
   ========================================================= */
(function () {
  'use strict';

  // Año dinámico en el footer
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
  var revealEls = document.querySelectorAll(
    '.section__head, .card, .step, .feature, .price, .trust__item, .form, .dev__box'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Formulario -> Formspree (los envíos llegan SOLO a tu correo)
  var form = document.getElementById('leadForm');
  var status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      // Si aún no has configurado tu Form ID, avisa en vez de enviar a un endpoint falso
      if (form.action.indexOf('TU_FORM_ID') !== -1) {
        setStatus(
          'El formulario aún no está conectado. Configura tu Form ID de Formspree (ver README.md).',
          'err'
        );
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
              var msg =
                data && data.errors
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
