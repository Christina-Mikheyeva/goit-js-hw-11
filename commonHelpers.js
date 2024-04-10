import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=document.querySelector(".loader");function u(){n.classList.add("active")}function f(){n.classList.remove("active")}function d(s){const o=s.map(t=>`
    <div class="gallery-item">
      <a href="${t.largeImageURL}" class="lightbox">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>
          <i class="fa fa-heart"></i> ${t.likes}
        </p>
        <p>
          <i class="fa fa-eye"></i> ${t.views}
        </p>
        <p>
          <i class="fa fa-comment"></i> ${t.comments}
        </p>
        <p>
          <i class="fa fa-download"></i> ${t.downloads}
        </p>
      </div>
    </div>
  `).join("");document.querySelector(".gallery").innerHTML=o,new c(".lightbox").refresh()}function p(s){l.show({title:"Пошук зображень",message:s,position:"topRight"})}async function h(s){const i=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(i)).json()).hits}const m=document.querySelector(".search-form"),y=document.querySelector(".search-input");m.addEventListener("submit",async s=>{s.preventDefault();const o=y.value.trim();if(o==="")return;u();const i=await h(o);if(f(),i.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}document.querySelector(".gallery").innerHTML="",d(i)});
//# sourceMappingURL=commonHelpers.js.map
