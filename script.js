const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.price-panel').forEach(p=>p.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById(tab.dataset.target).classList.add('active');
}));

document.getElementById('serviceForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const msg=`Hello Subiraways Cyber, my name is ${data.get('name')}. I need assistance with: ${data.get('service')}. ${data.get('message')||''}`;
  window.open(`https://wa.me/254717846364?text=${encodeURIComponent(msg)}`,'_blank');
});
