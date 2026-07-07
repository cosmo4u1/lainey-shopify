(function () {
  document.documentElement.classList.add('js');

  var items = Array.prototype.slice.call(document.querySelectorAll('.nav-item'));
  function closeAll() {
    items.forEach(function (i) {
      i.classList.remove('open');
      var b = i.querySelector('.nav-link');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  items.forEach(function (item) {
    var btn = item.querySelector('.nav-link');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var wasOpen = item.classList.contains('open');
      closeAll();
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
    // fail-safe: content must never stay hidden if the observer doesn't fire
    setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }, 2500);
  }
})();
