(function(){
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(menu && nav){
    menu.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
  }
  const tabs = document.querySelectorAll('.tool-tabs button');
  const cards = document.querySelectorAll('.tool-card');
  tabs.forEach(btn=>btn.addEventListener('click',()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card=>{
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  }));
  const items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    },{threshold:.12});
    items.forEach(i=>io.observe(i));
  } else {
    items.forEach(i=>i.classList.add('is-visible'));
  }
})();
