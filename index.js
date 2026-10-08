import{a as m,S as d,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"57941114-822f0913fcffde60ac0282970",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return m.get(t).then(a=>a.data)}const y=new d(".gallery a",{captionsData:"alt",captionDelay:250}),n={loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};function g(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:f,downloads:u})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${a}">
                        <img
                            class="gallery-image"
                            src="${t}"
                            alt="${e}"
                        />
                    </a>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b> ${r}
                        </p>
                        <p class="info-item">
                            <b>Views</b> ${i}
                        </p>
                        <p class="info-item">
                            <b>Comments</b> ${f}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b> ${u}
                        </p>
                    </div>
                </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){n.gallery.innerHTML=""}function b(){n.loader.classList.add("show")}function L(){n.loader.classList.remove("show")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){l.error({title:"Error",message:"Please enter a search query"});return}h(),b(),p(o).then(({hits:t})=>{t.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(t)}).catch(t=>{l.error({title:"Error",message:t.message||"An error occurred while fetching images"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
