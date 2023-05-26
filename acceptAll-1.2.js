// Create the style element
const style = document.createElement("style");

// Set the CSS rules
style.textContent = `
#kwAcceptAllcookiePopup {
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  -webkit-transition: all 600ms ease-out;
  -moz-transition: all 600ms ease-out;
  transition: all 600ms ease-out;
}


#kwAcceptAllcookieBackground {
  width: 100vw;
  height: 100vh;
  background-color: #000000C0;

  -webkit-transition: all 600ms ease-out;
  -moz-transition: all 600ms ease-out;
  transition: all 600ms ease-out;
}

#kwAcceptAllcookieContent {
  display: flex;
  background-color: white;
  color: black;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2.5rem;
  border-radius: 1.7rem;
  -webkit-transition: all 800ms ease-out;
  -moz-transition: all 800ms ease-out;
  transition: all 800ms ease-out;
  font-family: sans-serif;
  margin: 0rem 1rem;
}

#kwAcceptAllcookieContent h1 {
  color: black;
  font-size: 32px;
  width: 100%;
  font-family: sans-serif;
  font-weight: normal;
  line-height: initial;
}

#kwAcceptAllcookieContent h1 span {
font-weight: bold;
color: black;
font-size: 32px;
width: 100%;
font-family: sans-serif;
font-weight: 800;
line-height: initial;
}

#kwAcceptAllcookieContent p {
color: #0A033CCC;
font-size: 17.6px;
width: 100%;
font-family: sans-serif;
font-weight: normal;
padding-bottom: 1rem;
line-height: initial;
}

#kwAcceptAllcookieContent button {
  background-image: url(https://uploads-ssl.webflow.com/646dd15077c65c7e28c5b3a1/646dd15077c65c7e28c5b3e9_rainbow.jpg);
  background-position: 0 0;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 800;
  font-size: 50px;
  width: 100%;
  padding: 8px 0px 14px 0px;
  border-radius: 10px;
  line-height: initial;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-shadow: 0px 0px 10px #555;
}
#kwAcceptAllcookieContent button:hover {
opacity: 0.7;
}

#kwAcceptAllcookieBackground img {
position: absolute;
top: auto;
bottom: 0%;
left: 0%;
right: 0%;
}

#kwAcceptAllcookieBackground a {
position: absolute;
top: auto;
bottom: 1%;
left: auto;
right: 1%;
color: black;
font-size: 20.6px;
background-color: white;
padding: .5rem 1.5rem;
border-radius: 1.7rem;
line-height: initial;
font-family: sans-serif;
font-weight: normal;
-webkit-transition: background-image 0.3s ease-in-out;
-moz-transition: background-image 0.3s ease-in-out;
transition: background-image 0.3s ease-in-out;
}

.kwAcceptAllscaleIn {
transform: scale(0)!important;
}

.kwAcceptAllscaleOut {
transform-origin: bottom;
transform: scale(3)!important;
}

.kwAcceptAllhide {
  opacity: 0;
  visibility: hidden;
}

.kwAcceptAllshow {
  opacity: 1;
  visibility: visible;
}

@media only screen and (max-width: 45.5em) {
#kwAcceptAllcookieContent button {
  font-size: 32px;
}

#kwAcceptAllcookieBackground img {
}

#kwAcceptAllcookiePopup {
    width: 100%;
}

.kwAcceptAllhide {
    bottom: 2em;
    right: 0;
}

.kwAcceptAllshow {
    right: 0;
    bottom: 0;
}
}
`;

const myScript = document.getElementById("kwAcceptAll");
const showOnlyOnce = myScript.dataset.showOnce == "true";

// Append the style element to the head section of the document
document.head.appendChild(style);
// Create the parent element
const cookiePopup = document.createElement("div");
cookiePopup.id = "kwAcceptAllcookiePopup";
cookiePopup.classList.add("kwAcceptAllhide");

// Create the cookieBackground div
const cookieBackground = document.createElement("div");
cookieBackground.id = "kwAcceptAllcookieBackground";

const bgImage = document.createElement("img");
bgImage.id="kwAcceptAllbgImage";
bgImage.src="https://uploads-ssl.webflow.com/646dd15077c65c7e28c5b3a1/646dd15077c65c7e28c5b406_rainbow.svg";

const link = document.createElement("a");
link.id="kwAcceptAlllink";
link.textContent="Hier geht's zur Aktionsseite";
link.href="https://accept-all-ed7144267dde0a351855c7ab3254.webflow.io/";

cookieBackground.classList.add("kwAcceptAllscaleOut");
cookieBackground.appendChild(bgImage);
cookieBackground.appendChild(link);

// Create the cookieContent div
const cookieContent = document.createElement("div");
cookieContent.id = "kwAcceptAllcookieContent";
cookieContent.classList.add("kwAcceptAllscaleIn");

// Create the h1 element
const h1 = document.createElement("h1");
h1.textContent = "Das sind ";

const span = document.createElement("span");
span.textContent = "KEINE Cookie-Einstellungen.";

h1.appendChild(span);

// Create the p element
const p = document.createElement("p");
p.textContent = "Das ist unsere Einstellung zu Menschenrechten, Vielfalt und Respekt.";

// Create the button element
const button = document.createElement("button");
button.id = "kwAcceptAllacceptCookie";
button.textContent = "Alle akzeptieren.";

// Append the elements to the cookieContent div
cookieContent.appendChild(h1);
cookieContent.appendChild(p);
cookieContent.appendChild(button);

// Append the cookieBackground and cookieContent to the cookiePopup
cookiePopup.appendChild(cookieBackground);
cookiePopup.appendChild(cookieContent);

// Append the cookiePopup to the body element
document.body.appendChild(cookiePopup);

//When user clicks the accept button
button.addEventListener("click", () => {
  const maxAge = showOnlyOnce ? 60*60*24*365 : 1;
  document.cookie = "kwAcceptAll=yes; max-age=" + maxAge + ";";
  //Hide the popup
  cookieContent.classList.add("kwAcceptAllscaleIn");
  cookieBackground.classList.add("kwAcceptAllscaleOut");
  
  setTimeout(() => {
    cookiePopup.classList.add("kwAcceptAllhide");
    cookiePopup.classList.remove("kwAcceptAllshow");
  }, 200);
});

//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  console.log(document.cookie);
  if (input[0] == "kwAcceptAll") {
    //Hide the popup
    cookiePopup.classList.add("kwAcceptAllhide");
    cookiePopup.classList.remove("kwAcceptAllshow");

    cookieContent.classList.remove("kwAcceptAllshow");
    cookieContent.classList.add("kwAcceptAllhide");
  } else {
    //Show the popup
    cookiePopup.classList.add("kwAcceptAllshow");
    cookiePopup.classList.remove("kwAcceptAllhide");
    
    cookieContent.classList.remove("kwAcceptAllscaleIn");
    cookieBackground.classList.remove("kwAcceptAllscaleOut");
  }
};

setTimeout(() => {
  checkCookie();
}, 100);
