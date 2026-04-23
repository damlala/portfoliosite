function showPage(id, el) {
  const pages = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('nav button');

  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  buttons.forEach(btn => btn.classList.remove('active-btn'));
  el.classList.add('active-btn');
}
