!function(){"use strict";var t;!function(t){t.jsonLd="application/ld+json",t.json="application/json"}(t||(t={}));const e="https://unpkg.com/vamtiger-facebook-icon-json-ld";var o=[{"@context":"http://schema.org","@type":"ImageObject",name:"VAMTIGER Facebook HTML/SVG Icon",description:"VAMTIGER Facebook HTML/SVG Icon",author:{"@type":"Person",givenName:"Vamtiger",familyName:"Immortalles",email:"vamtiger@vamtiger.com"},datePublished:"23 May 2018",contentUrl:"https://unpkg.com/vamtigerr-twitter-icon-json-ld/facebook.html"}],a={template:'<figure data-facebook> <svg x="0px" y="0px" viewBox="0 0 10.6 20.4" xml:space="preserve" > <path d="M3.1,20.4v-9.3H0V7.5h3.1V4.8C3.1,1.7,5,0,7.8,0c1.3,0,2.5,0.1,2.8,0.1v3.2l-1.9,0c-1.5,0-1.8,0.7-1.8,1.8v2.3h3.6L10,11.1H6.9v9.3H3.1z" /> </svg> </figure> <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>vamtiger-facebook-icon-json-ld</title> <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css"> <link rel="stylesheet" href="test.css"> <script src="https://unpkg.com/mocha/mocha.js"><\/script> <script src="https://unpkg.com/chai/chai.js"><\/script> <script src="https://unpkg.com/vamtiger-browser-support@latest/build/vamtiger-browser-support.js" src-local="http://127.0.0.1:9999/build/vamtiger-browser-support.js" data-es2015-support-primary data-element-query-support data-web-component-support data-fetch-support data-load="test/browser.js" ><\/script> </head> <body> <section id="mocha"> <header> <h1> vamtiger-facebook-icon-json-ld </h1> </header> </section> <vamtiger-facebook-icon-json-ld></vamtiger-facebook-icon-json-ld> </body> </html>'};const{stringify:s}=JSON;const c=o.map(o=>({url:e,type:t.jsonLd,data:o})),r={url:e,type:t.json,data:a};[...c,r].forEach(function({type:t,url:e,data:o}){const{head:a}=document,c=document.createElement("script"),r=Object.keys(o).length&&o;c.type=t,c.dataset.jsonLd=e,r&&(c.innerHTML=s(r).trim()),c.innerHTML&&a.appendChild(c)})}();
//# sourceMappingURL=vamtiger-facebook-icon-json-ld.js.map
