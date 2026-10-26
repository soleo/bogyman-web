// Release-notes form. There is no mailing-list backend yet, so the form
// points people at GitHub instead of pretending to store the address.
(function () {
  var form = document.getElementById('notes');
  var msg = document.getElementById('notes-msg');
  if (!form || !msg) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    msg.innerHTML = 'No mailing list yet. <a href="https://github.com/soleo" style="text-decoration: underline;">Watch the repo on GitHub</a> and the bogyman will find you when v0.1 ships.';
  });
})();
