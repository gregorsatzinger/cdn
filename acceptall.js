window.onload=()=>{let e=document.createElement("style");e.textContent=`#kwAcceptAllcookieBackground a,#kwAcceptAllcookieContent{position:absolute;color:#000;background-color:#fff;border-radius:1.7rem;font-family:sans-serif}#kwAcceptAllcookiePopup{z-index:999999;position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh}#kwAcceptAllcookieBackground{width:100vw;height:100vh;background-color:#000000C0;-webkit-transition:.6s ease-out;-moz-transition:.6s ease-out;transition:.6s ease-out}#kwAcceptAllcookieContent{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2.5rem;-webkit-transition:.8s ease-out;-moz-transition:.8s ease-out;transition:.8s ease-out;margin:0 1rem}#kwAcceptAllcookieContent h1{color:#000;font-size:32px;width:100%;font-family:sans-serif;font-weight:400}#kwAcceptAllcookieContent h1 span{color:#000;font-size:32px;width:100%;font-family:sans-serif;font-weight:800}#kwAcceptAllcookieContent p{color:#0a033CCC;font-size:17.6px;width:100%;font-family:sans-serif;font-weight:400;padding-bottom:1rem}#kwAcceptAllcookieContent button{background-image:url(https://uploads-ssl.webflow.com/646dd15077c65c7e28c5b3a1/646dd15077c65c7e28c5b3e9_rainbow.jpg);background-position:0 0;background-size:cover;display:flex;justify-content:center;align-items:center;color:#fff;font-weight:800;font-size:50px;width:100%;padding:0 0 6px;border-radius:10px;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;transition:.3s ease-in-out;text-shadow:0 0 10px #555}#kwAcceptAllcookieContent button:hover{opacity:.7}#kwAcceptAllcookieBackground img{position:absolute;top:auto;bottom:0;left:0;right:0}#kwAcceptAllcookieBackground a{top:auto;bottom:1%;left:auto;right:1%;font-size:20.6px;padding:.5rem 1.5rem;font-weight:400;-webkit-transition:background-image .3s ease-in-out;-moz-transition:background-image .3s ease-in-out;transition:background-image .3s ease-in-out}.kwAcceptAllscaleIn{transform:scale(0)!important}.kwAcceptAllscaleOut{transform-origin:bottom;transform:scale(3)!important}.kwAcceptAllhide{opacity:0}.kwAcceptAllshow{opacity:1}@media only screen and (max-width:45.5em){#kwAcceptAllcookieContent button{font-size:32px}#kwAcceptAllcookiePopup{width:100%}.kwAcceptAllhide{bottom:2em;right:0}.kwAcceptAllshow{right:0;bottom:0}}`;let t=document.getElementById("kwAcceptAll"),l="true"==t.dataset.showOnce;document.head.appendChild(e);let o=document.createElement("div");o.id="kwAcceptAllcookiePopup",o.classList.add("kwAcceptAllhide");let c=document.createElement("div");c.id="kwAcceptAllcookieBackground";let i=document.createElement("img");i.id="kwAcceptAllbgImage",i.src="https://uploads-ssl.webflow.com/646dd15077c65c7e28c5b3a1/646dd15077c65c7e28c5b406_rainbow.svg";let n=document.createElement("a");n.id="kwAcceptAlllink",n.textContent="Hier geht's zur Aktionsseite",n.href="https://accept-all-ed7144267dde0a351855c7ab3254.webflow.io/",c.classList.add("kwAcceptAllscaleOut"),c.appendChild(i),c.appendChild(n);let a=document.createElement("div");a.id="kwAcceptAllcookieContent",a.classList.add("kwAcceptAllscaleIn");let s=document.createElement("h1");s.textContent="Das sind ";let d=document.createElement("span");d.textContent="KEINE Cookie-Einstellungen.",s.appendChild(d);let p=document.createElement("p");p.textContent="Das ist unsere Einstellung zu Menschenrechten, Vielfalt und Respekt.";let r=document.createElement("button");r.id="kwAcceptAllacceptCookie",r.textContent="Alle akzeptieren.",a.appendChild(s),a.appendChild(p),a.appendChild(r),o.appendChild(c),o.appendChild(a),document.body.appendChild(o),r.addEventListener("click",()=>{let e=l?31536e3:1;document.cookie="kwAcceptAll=yes; max-age="+e+";",a.classList.add("kwAcceptAllscaleIn"),c.classList.add("kwAcceptAllscaleOut"),setTimeout(()=>{o.classList.add("kwAcceptAllhide"),o.classList.remove("kwAcceptAllshow")},200)});let k=()=>{let e=document.cookie.split("=");console.log(document.cookie),"kwAcceptAll"==e[0]?(o.classList.add("kwAcceptAllhide"),o.classList.remove("kwAcceptAllshow"),a.classList.remove("kwAcceptAllshow"),a.classList.add("kwAcceptAllhide")):(o.classList.add("kwAcceptAllshow"),o.classList.remove("kwAcceptAllhide"),a.classList.remove("kwAcceptAllscaleIn"),c.classList.remove("kwAcceptAllscaleOut"))};setTimeout(()=>{k()},100)};
