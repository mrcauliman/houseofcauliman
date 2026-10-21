/* HOMEEZ claim UX helpers (CLAIMUX v1). Pure display logic only: no payment, mint or offer settlement here.
   Status is derived ONLY from backend order views (which reflect validated ledger results). URL params and Xaman redirects are never used as status. */
(function(root){'use strict';
  const LABEL={confirming:'Payment Confirming',minting:'Minting',ready:'Ready to Claim',delivered:'Delivered',awaiting:'Awaiting Payment',attention:'Needs Attention',refunded:'Refunded'};
  const HELP={confirming:'Payment received. Confirming on the XRPL.',minting:'Your HOMEEZ is being minted.',
    ready:'Your HOMEEZ is ready. Approve it in Xaman.',delivered:'Delivered to your wallet.',awaiting:'Approve the payment in Xaman.',
    attention:'Order saved. Contact support. Do not pay again.',refunded:'Refunded. No NFT minted.'};
  const COPY=['Open Xaman → Events → Requests. Approve the HOMEEZ 0 XRP NFT offer.','Viewing the offer in Xaman history is not the same as accepting it.','No request waiting? Return to the Capsule Machine.','Use Check My Order, then tap Claim NFT.'];
  function readyItems(o){return (o&&Array.isArray(o.items)?o.items:[]).filter(i=>i&&i.uiState==='ready_to_claim'&&typeof i.offer_id==='string'&&/^[A-F0-9]{64}$/i.test(i.offer_id))}
  function stage(o){if(!o||typeof o!=='object')return null;
    if(o.refund||o.uiState==='refunded')return 'refunded';
    if(o.state==='delivered'&&o.uiState==='delivered')return 'delivered';
    if(readyItems(o).length)return 'ready';
    if(o.uiState==='mint_pending')return 'minting';
    if(o.uiState==='payment_pending')return (o.paymentStatus==='submitted'||o.paymentStatus==='received')?'confirming':'awaiting';
    return 'attention'}
  // first ready offer that has not been auto-prompted yet; never for delivered/expired/refund orders
  function autoClaimCandidate(orders,seen){for(const o of (Array.isArray(orders)?orders:[])){
      if(!o||o.state==='delivered'||o.state==='expired'||o.state==='refund_review'||o.refund)continue;
      for(const it of readyItems(o)){const key='offer:'+it.offer_id.toUpperCase();if(!seen.has(key))return {orderId:o.orderId,idx:it.idx,item:it,key}}}
    return null}
  function seenStore(storage,KEY){KEY=KEY||'hz_autoclaim_v1';let s=new Set();try{const a=JSON.parse(storage.getItem(KEY)||'[]');if(Array.isArray(a))s=new Set(a.filter(x=>typeof x==='string').slice(-200))}catch(e){}
    return {has:k=>s.has(k),add:k=>{s.add(k);try{storage.setItem(KEY,JSON.stringify([...s].slice(-200)))}catch(e){}}}}
  // ?order=<id> is only a scroll/highlight hint, accepted only if it matches an order the backend returned for this wallet
  function orderHint(search,orders){let id=null;try{id=new URLSearchParams(search||'').get('order')}catch(e){}
    if(!id||!/^[A-Za-z0-9_-]{6,80}$/.test(id))return null;return (orders||[]).some(o=>o&&o.orderId===id)?id:null}
  // A claim request may be opened only if it is exactly the backend-issued payload: valid uuid, and any link is the
  // Xaman sign page for that same uuid (or its QR image). Never constructed or guessed here.
  const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function claimLinkOk(p){if(!p||typeof p.uuid!=='string'||!UUID.test(p.uuid))return false;
    const chk=(u,qr)=>{if(u==null||u==='')return true;let x;try{x=new URL(u)}catch(e){return false}
      if(x.protocol!=='https:'||!['xumm.app','xaman.app'].includes(x.hostname)||x.port||x.username||x.password)return false;
      return qr?x.pathname.indexOf(p.uuid)>=0:(x.pathname==='/sign/'+p.uuid||x.pathname==='/sign/'+p.uuid+'/')};
    return !!(p.deeplink||p.qr)&&chk(p.deeplink,false)&&chk(p.qr,true)}
  // Compact "How to claim?" modal: native <dialog> (Esc closes), backdrop click and × close, focus returns to the opener.
  function mountHowTo(doc,base){doc=doc||root.document;base=base||'';if(!doc||doc.getElementById('hzHowTo'))return;
    const st=doc.createElement('style');st.textContent='#hzHowTo{max-width:340px;width:calc(100% - 32px);border:1px solid rgba(255,216,110,.45);border-radius:16px;background:#15110b;color:#f6efe0;padding:18px 20px;font:14px/1.5 system-ui,Arial,sans-serif}#hzHowTo::backdrop{background:rgba(0,0,0,.6)}#hzHowTo h2{margin:0 0 8px;font-size:17px;color:#ffd86e}#hzHowTo ol{margin:0 0 10px;padding-left:1.2em}#hzHowTo a{color:#ffd86e}#hzHowToX{position:absolute;top:8px;right:10px;background:none;border:0;color:#f6efe0;font-size:22px;cursor:pointer}#hzHowTo a:focus-visible,#hzHowToX:focus-visible{outline:2px solid #ffd86e;outline-offset:2px}';doc.head.append(st);
    const d=doc.createElement('dialog');d.id='hzHowTo';d.setAttribute('aria-labelledby','hzHowToT');
    d.innerHTML='<button id="hzHowToX" type="button" aria-label="Close">×</button><h2 id="hzHowToT">How to claim</h2><ol>'+COPY.map(t=>'<li>'+t+'</li>').join('')+'</ol><p><a href="'+base+'my-homeez.html">Return to My HOMEEZ</a> · <a href="'+base+'support/#how-to-claim">More help</a></p>';
    doc.body.append(d);let opener=null;const close=()=>{if(d.open)d.close()};
    d.addEventListener('close',()=>{if(opener&&opener.focus)opener.focus()});d.querySelector('#hzHowToX').onclick=close;
    d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()}});
    doc.querySelectorAll('[data-howto]').forEach(a=>a.addEventListener('click',e=>{if(typeof d.showModal!=='function')return;e.preventDefault();opener=a;d.showModal();d.querySelector('#hzHowToX').focus()}))}
  if(root.document){if(root.document.readyState==='loading')root.document.addEventListener('DOMContentLoaded',()=>mountHowTo());else mountHowTo()}
  // Claim NFT is a fallback: shown only for a ready offer whose auto request already fired (now or on an earlier visit)
  // and is no longer the active, unexpired auto prompt (dismissed, failed, unverified, timed out, or a reload/return visit).
  function offerKey(it){return it&&typeof it.offer_id==='string'&&/^[A-F0-9]{64}$/i.test(it.offer_id)?'offer:'+it.offer_id.toUpperCase():null}
  function showClaimFallback(o,it,seen,activeKey){if(!o||o.state==='delivered'||o.state==='expired'||o.state==='refund_review'||o.refund||o.uiState==='refunded')return false;
    if(!it||it.uiState!=='ready_to_claim')return false;const k=offerKey(it);if(!k)return false;return !!seen&&seen.has(k)&&activeKey!==k}
  const FALLBACK_LINE="No HOMEEZ request in Xaman → Events → Requests? Tap Claim NFT to send a new one.";
  const api={LABEL,HELP,COPY,claimLinkOk,mountHowTo,offerKey,showClaimFallback,FALLBACK_LINE,stage,readyItems,autoClaimCandidate,seenStore,orderHint};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.HZClaimUX=api})(this);
