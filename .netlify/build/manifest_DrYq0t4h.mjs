import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_5mRTQ9C9.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/","cacheDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/node_modules/.astro/","outDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/dist/","srcDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/","publicDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/public/","buildClientDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/dist/","buildServerDir":"file:///Users/mac/Desktop/miirshe/SiteProjects/movie-database/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"favorites/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/favorites","isIndex":false,"type":"page","pattern":"^\\/favorites\\/?$","segments":[[{"content":"favorites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/favorites.astro","pathname":"/favorites","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"movies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/movies","isIndex":false,"type":"page","pattern":"^\\/movies\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/movies.astro","pathname":"/movies","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/favorites.BuS3zrBB.css"},{"type":"external","src":"/_astro/_movieId_.K1p9a_Hi.css"}],"routeData":{"route":"/movies/[movieid]","isIndex":false,"type":"page","pattern":"^\\/movies\\/([^/]+?)\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}],[{"content":"movieId","dynamic":true,"spread":false}]],"params":["movieId"],"component":"src/pages/movies/[movieId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/favorites.astro",{"propagation":"none","containsHead":true}],["/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/movies.astro",{"propagation":"none","containsHead":true}],["/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/movies/[movieId].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/favorites@_@astro":"pages/favorites.astro.mjs","\u0000@astro-page:src/pages/movies/[movieId]@_@astro":"pages/movies/_movieid_.astro.mjs","\u0000@astro-page:src/pages/movies@_@astro":"pages/movies.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DrYq0t4h.mjs","/Users/mac/Desktop/miirshe/SiteProjects/movie-database/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/mac/Desktop/miirshe/SiteProjects/movie-database/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cs507DhS.mjs","/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BXpC0Sqq.js","/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/movies.astro?astro&type=script&index=0&lang.ts":"_astro/movies.astro_astro_type_script_index_0_lang.4xDWQ0Em.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/pages/index.astro?astro&type=script&index=0&lang.ts","const r=document.getElementById(\"searchInput\"),c=document.getElementById(\"searchButton\"),i=document.getElementById(\"searchResults\");async function l(t){if(t)try{const s=await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=undefined&language=en-US&query=${encodeURIComponent(t)}&page=1&include_adult=false`)).json();s.results&&s.results.length>0?h(s.results.slice(0,8)):i&&(i.innerHTML='<div class=\"col-12 text-center\"><p>No results found. Try a different search term.</p></div>')}catch(e){console.error(\"Error searching movies:\",e),i&&(i.innerHTML='<div class=\"col-12 text-center\"><p>An error occurred. Please try again later.</p></div>')}}function h(t){i&&(i.innerHTML=\"\",t.forEach(e=>{const s=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:\"/placeholder.svg\",a=document.createElement(\"div\");a.className=\"col\",a.innerHTML=`\n        <div class=\"card h-100 shadow-sm\">\n          <img src=\"${s}\" class=\"card-img-top\" alt=\"${e.title} poster\" style=\"height: 300px; object-fit: cover;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-truncate\">${e.title}</h5>\n            <div class=\"d-flex justify-content-between align-items-center mt-3\">\n              <a href=\"/movies/${e.id}\" class=\"btn btn-primary btn-sm\">Details</a>\n              <button class=\"btn btn-outline-danger btn-sm favorite-btn\" \n                data-movie-id=\"${e.id}\" \n                data-movie-title=\"${e.title}\" \n                data-movie-poster=\"${e.poster_path}\" \n                data-movie-rating=\"${e.vote_average}\">\n                <i class=\"bi bi-heart\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      `,i.appendChild(a)}),d())}c&&c.addEventListener(\"click\",()=>{r&&l(r.value.trim())});r&&r.addEventListener(\"keypress\",t=>{t.key===\"Enter\"&&l(r.value.trim())});function d(){document.querySelectorAll(\".favorite-btn\").forEach(t=>{t.addEventListener(\"click\",function(){const e=this.dataset.movieId,s=this.dataset.movieTitle,a=this.dataset.moviePoster,o=this.dataset.movieRating;if(e&&s&&o){u({id:e,title:s,poster_path:a||null,vote_average:parseFloat(o)});const n=this.querySelector(\"i\");n&&n.classList.contains(\"bi-heart\")?(n.classList.replace(\"bi-heart\",\"bi-heart-fill\"),this.classList.replace(\"btn-outline-danger\",\"btn-danger\")):n&&(n.classList.replace(\"bi-heart-fill\",\"bi-heart\"),this.classList.replace(\"btn-danger\",\"btn-outline-danger\"))}})})}function u(t){let e=JSON.parse(localStorage.getItem(\"favorites\")||\"[]\");const s=e.findIndex(a=>a.id===t.id);s===-1?(e.push(t),console.log(`Added ${t.title} to favorites`)):(e.splice(s,1),console.log(`Removed ${t.title} from favorites`)),localStorage.setItem(\"favorites\",JSON.stringify(e))}document.addEventListener(\"DOMContentLoaded\",d);"]],"assets":["/_astro/bootstrap-icons.mSm7cUeB.woff2","/_astro/bootstrap-icons.BeopsB42.woff","/_astro/_movieId_.K1p9a_Hi.css","/_astro/favorites.BuS3zrBB.css","/favicon.svg","/placeholder-person.jpg","/placeholder-person.svg","/placeholder.jpg","/placeholder.svg","/_astro/movies.astro_astro_type_script_index_0_lang.4xDWQ0Em.js","/favorites/index.html","/movies/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"r/vobANhkSe6asextovO1sgL4EXAnvhOpYXlICOF6vc=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/mac/Desktop/miirshe/SiteProjects/movie-database/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
