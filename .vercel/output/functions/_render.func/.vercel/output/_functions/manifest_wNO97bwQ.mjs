import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DSJ4lqBS.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_wXYITJSf.mjs';
import 'clsx';

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/blond/Documents/fariol-blondeau-resume/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DjcLJ1vk.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.kGBHG96I.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DjcLJ1vk.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.kGBHG96I.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DjcLJ1vk.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.kGBHG96I.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DjcLJ1vk.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.kGBHG96I.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DjcLJ1vk.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.kGBHG96I.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://fariolblondeau.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/fariol-blondeau-resume/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/blog/hello-world.md?astroContentCollectionEntry=true":"chunks/hello-world_CEfpXIxg.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/fashion.yaml?astroDataCollectionEntry=true":"chunks/fashion_zzjtTqxh.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hashcode-crud-app.yaml?astroDataCollectionEntry=true":"chunks/hashcode-crud-app_CpVSKQSO.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hoobank.yaml?astroDataCollectionEntry=true":"chunks/hoobank_CBU3fwbg.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/marico.yaml?astroDataCollectionEntry=true":"chunks/marico_c0-cY0AT.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/react-ponebook.yaml?astroDataCollectionEntry=true":"chunks/react-ponebook_NctHoUzZ.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/robbie-lens.yaml?astroDataCollectionEntry=true":"chunks/robbie-lens_DJ53kNTl.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/youmeal.yaml?astroDataCollectionEntry=true":"chunks/youmeal_DTGzALle.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/blog/hello-world.md?astroPropagatedAssets":"chunks/hello-world_B0N54el6.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/blond/Documents/fariol-blondeau-resume/src/content/blog/hello-world.md":"chunks/hello-world_CXvZDx5f.mjs","\u0000@astrojs-manifest":"manifest_wNO97bwQ.mjs","@/components/MoblieNav":"_astro/MoblieNav.38d8tUom.js","@astrojs/react/client.js":"_astro/client.jx_RFsxH.js","/astro/hoisted.js?q=0":"_astro/hoisted.DjcLJ1vk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/author.CmQgs5ft.jpg","/_astro/Akieni.Qn2PfapK.png","/_astro/frontend-master.BZYCn_h0.png","/_astro/poppins-latin-ext-400-normal.CIpeJEZw.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-400-normal.Ce_uWq1Z.woff","/_astro/hashcode-logo.BSY7U9ff.png","/_astro/hashcode-crud-app.CV49ipY-.png","/_astro/react-phonebook.GFCAaS19.png","/_astro/marico.BHidPWXG.png","/_astro/robbie-lens.V-YsoGVL.png","/_astro/fashion.BS-ao_rG.png","/_astro/hoobank.D15HzXuM.png","/_astro/youmeal.DRsNOlPG.png","/_astro/_slug_.kGBHG96I.css","/favicon.svg","/static/CV_Fariol_Blondeau_Web_Developer.pdf","/static/og-image.png","/static/screenshot.png","/_astro/client.jx_RFsxH.js","/_astro/hoisted.DjcLJ1vk.js","/_astro/index.xr3bhGRC.js","/_astro/MoblieNav.38d8tUom.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"BUQgs4sdRQUp9PU4ttHAi+lErHNLM04w3Krw2hi+Faw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
