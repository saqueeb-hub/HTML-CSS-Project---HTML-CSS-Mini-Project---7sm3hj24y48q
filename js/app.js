document.getElementById('nav-btn').addEventListener('click', ()=>{
  document.getElementById('nav-links').classList.toggle('show-links');
})

document.getElementById('date').textContent = new Date().getFullYear();