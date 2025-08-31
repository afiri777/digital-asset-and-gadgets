// 許可外の外部リンクを無効化（Ledger/Amazon以外へ飛ばない安全弁）
document.addEventListener('DOMContentLoaded',()=>{
  const allow = [/amazon\.co\.jp/, /shop\.ledger\.com/];
  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    const href=a.getAttribute('href');
    const ok = allow.some(rx=>rx.test(href));
    if(!ok && !href.includes(location.host)){
      const span=document.createElement('span');
      span.textContent=a.textContent; // 文字だけ残す
      a.replaceWith(span);
    }else{
      a.target="_blank"; a.rel="nofollow noopener";
    }
  });
});
