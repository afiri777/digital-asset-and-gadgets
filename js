// Amazonリンクに自動でアソシエイトタグを付与
document.addEventListener('DOMContentLoaded',()=>{
  const tag="afiri777-22";
  document.querySelectorAll('a[href*="amazon.co.jp"]').forEach(a=>{
    try{
      const u=new URL(a.href);
      u.searchParams.set('tag',tag);
      a.href=u.toString();
      a.rel="nofollow noopener";
      a.target="_blank";
    }catch(_e){}
  });
});

