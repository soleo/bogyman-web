// Release-notes form. There is no mailing-list backend yet, so the form
// points people at GitHub instead of pretending to store the address.
(function () {
  var form = document.getElementById('notes');
  var msg = document.getElementById('notes-msg');
  if (!form || !msg) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    msg.innerHTML = 'No mailing list yet. <a href="https://github.com/soleo/bogyman-cli" style="text-decoration: underline;">Watch the repo on GitHub</a> and the bogyman will find you when v0.1 ships.';
  });
})();

// Copy buttons: copy the text of the element named in data-copy.
(function () {
  var buttons = document.querySelectorAll('button[data-copy]');
  Array.prototype.forEach.call(buttons, function (btn) {
    var target = document.getElementById(btn.getAttribute('data-copy'));
    if (!target) return;
    var label = btn.textContent;
    btn.addEventListener('click', function () {
      var text = target.textContent.trim();
      var done = function () {
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = label; btn.classList.remove('copied'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(target); });
      } else {
        selectText(target);
      }
    });
  });
  function selectText(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
})();
