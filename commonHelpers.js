import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelector(".loader");function u(){a.classList.add("active")}function d(){a.classList.remove("active")}function f(s){const o=s.map(t=>`
    <div class="gallery-item">
      <a href="${t.largeImageURL}" class="lightbox">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${t.likes}
        </p>
        <p>
        <b>Views</b>
       ${t.views}
        </p>
        <p>
        <b>Comments</b>
        ${t.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${t.downloads}
        </p>
      </div>
    </div>
  `).join("");document.querySelector(".gallery").innerHTML=o,new c(".lightbox").refresh()}function p(s){l.show({title:"Пошук зображень",message:s,position:"topRight"})}async function m(s){const n=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(n)).json()).hits}const h=document.querySelector(".search-form"),y=document.querySelector(".search-input");h.addEventListener("submit",async s=>{s.preventDefault();const o=y.value.trim();if(o==="")return;u();const n=await m(o);if(d(),n.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}document.querySelector(".gallery").innerHTML="",f(n)});
//# sourceMappingURL=commonHelpers.js.map
