window.onload=()=>{let e=document.createElement("style");e.textContent=`
  .hide {
    opacity: 0;
  }

  .show {
    opacity: 1;
  }

  @media only screen and (max-width: 37.5em) {
    #cookiePopup {
      width: 100%;
    }

    .hide {
      bottom: 2em;
      right: 0;
    }

    .show {
      right: 0;
      bottom: 0;
    }
  }
`,document.head.appendChild(e);let t=document.createElement("div");t.id="cookiePopup",t.classList.add("hide"),t.style.zIndex="999",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.width="100vw",t.style.height="100vh";let l=document.createElement("div");l.id="cookieBackground",l.style.width="100vw";let s=document.createElement("script");s.src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";let o=document.createElement("lottie-player");o.id="player",o.src="https://assets10.lottiefiles.com/packages/lf20_lodmufpp.json",o.background="transparent",o.speed="1",o.mode="PlayMode.Normal",o.style.cssText="width: 200vw; margin-left: -50vw;",l.appendChild(s),l.appendChild(o);let i=document.createElement("div");i.id="cookieContent",i.style.backdropFilter="blur(2rem)",i.style.display="flex",i.style.position="absolute",i.style.flexDirection="column",i.style.justifyContent="center",i.style.alignItems="center",i.style.padding="4rem 5rem",i.style.borderRadius="2rem",i.style.transition="opacity 200ms linear";let n=document.createElement("h1");n.textContent="This is not a cookie banner",n.style.color="white",n.style.fontSize="2rem",n.style.fontWeight="bold";let d=document.createElement("p");d.textContent="We use tolerance.",d.style.color="white",d.style.fontSize="1.3rem",d.style.paddingBottom="1rem";let a=document.createElement("button");a.id="acceptCookie",a.textContent="ACCEPT ALL",a.style.backgroundColor="black",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.color="#ffffff",a.style.fontWeight="bold",a.style.fontSize="1.2em",a.style.padding="1em 4em",a.style.borderRadius="5rem",i.appendChild(n),i.appendChild(d),i.appendChild(a),t.appendChild(l),t.appendChild(i),document.body.appendChild(t);let c=document.getElementById("cookiePopup"),r=document.querySelector("lottie-player");document.getElementById("acceptCookie").addEventListener("click",()=>{let e=new Date;e.setSeconds(10+e.getSeconds()),document.cookie="kwAcceptAll=yes; expires = "+e+";",r.play(),setTimeout(()=>{c.classList.add("hide"),c.classList.remove("show")},600)});let p=()=>{let e=document.cookie.split("=");console.log(document.cookie),"kwAcceptAll"==e[0]?(c.classList.add("hide"),c.classList.remove("show")):(r.play(),setTimeout(()=>{r.pause()},800),c.classList.add("show"),c.classList.remove("hide"))};setTimeout(()=>{p()},1e3)};
