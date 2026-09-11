(() => {
  const parts = ["game.p0.txt","game.p1.txt","game.p2.txt","game.p3.txt"];
  Promise.all(parts.map(p => fetch(p + "?v=hb11").then(r => {
    if (!r.ok) throw new Error(p);
    return r.text();
  }))).then(bits => { (0, eval)(bits.join("")); })
  .catch(err => { console.error(err); });
})();
