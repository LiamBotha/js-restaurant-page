(()=>{"use strict";function e(){const e=document.querySelector("#content");let t=document.createElement("div"),n=document.createElement("h1"),l=document.createElement("div"),o=document.createElement("p");n.textContent="Food Factory",n.style.margin="2rem",n.style.textAlign="center",n.style.fontSize="4rem",l.style.background="url(/src/img.jpg",l.style.width="100%",l.style.height="100%",l.style.backgroundSize="cover",l.style.display="flex",l.style.alignItems="center",l.style.justifyContent="center",l.style.flexDirection="column",o.textContent="Food so good you can eat it. its edible we promise!",o.style.margin="2rem",o.style.textAlign="center",o.style.fontSize="2rem",t.style.height="90vh",t.style.margin="0 auto",t.style.background="#1f1f1f",t.style.color="white",t.style.fontFamily="sans-serif",t.style.fontWeight="bold",l.appendChild(n),l.appendChild(o),t.appendChild(l),e.appendChild(t)}const t=document.querySelector("#content"),n=document.querySelector("body");let l=document.createElement("div"),o=document.createElement("button"),d=document.createElement("button"),r=document.createElement("button");o.textContent="HOME",d.textContent="MENU",r.textContent="CONTACT",l.style.width="max-content",l.style.margin="auto",l.style.display="flex",l.style.alignItems="center",l.style.height="6vh",t.style.height="90vh",n.style.margin="0",n.style.padding="0",o.style="background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;",d.style="background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;",r.style="background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;",o.addEventListener("click",(()=>{t.removeChild(t.childNodes[2]),e()})),d.addEventListener("click",(()=>{t.removeChild(t.childNodes[2]),function(){const e=document.querySelector("#content");let t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h2"),o=document.createElement("h3"),d=document.createElement("h3"),r=document.createElement("h3"),i=document.createElement("h3");n.style.background="url(/src/img.jpg",n.style.width="100%",n.style.height="100%",n.style.backgroundSize="cover",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.flexDirection="column",l.textContent="MENU",o.textContent="Basic Toasted Cheese - $100",d.textContent="Well Cooked Steak - $200",r.textContent="Microwave Lasagna  - $70",i.textContent="Pizza?  - $155",t.style.height="90vh",t.style.margin="0 auto",t.style.background="#1f1f1f",t.style.color="white",t.style.fontFamily="sans-serif",t.style.fontWeight="bold",n.appendChild(l),n.appendChild(o),n.appendChild(d),n.appendChild(r),n.appendChild(i),t.appendChild(n),e.appendChild(t)}()})),r.addEventListener("click",(()=>{t.removeChild(t.childNodes[2]),function(){const e=document.querySelector("#content");let t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h3"),o=document.createElement("h3"),d=document.createElement("h3");n.style.background="url(/src/img.jpg",n.style.width="100%",n.style.height="100%",n.style.backgroundSize="cover",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.flexDirection="column",l.textContent="Phone-Number: 000-101337",o.textContent="Address: 333 Nowhere Street, Fakeville, USR",d.textContent="Contact Hours: None, please don't call us",t.style.height="90vh",t.style.margin="0 auto",t.style.background="#1f1f1f",t.style.color="white",t.style.fontFamily="sans-serif",t.style.fontWeight="bold",n.appendChild(l),n.appendChild(o),n.appendChild(d),t.appendChild(n),e.appendChild(t)}()}));let i=(e,t)=>e.target.style.textDecoration="underline",s=(e,t)=>e.target.style.textDecoration="none";o.addEventListener("mouseenter",i),o.addEventListener("mouseleave",s),d.addEventListener("mouseenter",i),d.addEventListener("mouseleave",s),r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",s),l.appendChild(o),l.appendChild(d),l.appendChild(r),t.appendChild(l),e()})();