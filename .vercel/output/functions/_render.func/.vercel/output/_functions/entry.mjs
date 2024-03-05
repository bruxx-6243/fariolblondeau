import 'node:fs';
import 'node:http';
import { TLSSocket } from 'node:tls';
import { d as appendForwardSlash, j as joinPaths, t as trimSlashes, s as slash, p as prependForwardSlash, r as removeTrailingForwardSlash, e as collapseDuplicateSlashes } from './chunks/astro/assets-service_h2PXItAV.mjs';
import { serialize, parse } from 'cookie';
import { l as levels, g as getEventPrefix, L as Logger, A as AstroIntegrationLogger, manifest } from './manifest_hl9HIeT3.mjs';
import 'kleur/colors';
import { A as AstroError, R as ResponseSentError, t as MiddlewareNoDataOrNextCalled, v as MiddlewareNotAResponse, G as GetStaticPathsRequired, w as InvalidGetStaticPathsReturn, x as InvalidGetStaticPathsEntry, y as GetStaticPathsExpectedParams, z as GetStaticPathsInvalidRouteParam, P as PageNumberParamNotFound, N as NoMatchingStaticPathFound, B as PrerenderDynamicEndpointPathCollide, C as LocalsNotAnObject, D as ASTRO_VERSION, F as ClientAddressNotAvailable, S as StaticClientAddressNotAvailable, H as renderEndpoint, J as ReservedSlotName, K as renderSlotToString, O as renderJSX, Q as chunkToString, T as CantRenderPage, V as renderPage$1 } from './chunks/astro_d_d3RMdo.mjs';
import 'clsx';
import buffer from 'node:buffer';
import crypto from 'node:crypto';
import 'fast-glob';
import nodePath from 'node:path';
import 'node:url';
import 'node:fs/promises';
import 'node:module';
import { renderers } from './renderers.mjs';

function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function toCodes(locales) {
  const codes = [];
  for (const locale of locales) {
    if (typeof locale === "string") {
      codes.push(locale);
    } else {
      for (const code of locale.codes) {
        codes.push(code);
      }
    }
  }
  return codes;
}

const routeDataSymbol = Symbol.for("astro.routeData");
function pathnameHasLocale(pathname, locales) {
  const segments = pathname.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function createI18nMiddleware(i18n, base, trailingSlash) {
  if (!i18n) {
    return void 0;
  }
  return async (context, next) => {
    if (!i18n) {
      return await next();
    }
    const routeData = Reflect.get(context.request, routeDataSymbol);
    if (routeData) {
      if (routeData.type !== "page" && routeData.type !== "fallback") {
        return await next();
      }
    }
    const url = context.url;
    const { locales, defaultLocale, fallback, routing } = i18n;
    const response = await next();
    if (response instanceof Response) {
      const pathnameContainsDefaultLocale = url.pathname.includes(`/${defaultLocale}`);
      if (i18n.routing === "prefix-other-locales" && pathnameContainsDefaultLocale) {
        const newLocation = url.pathname.replace(`/${defaultLocale}`, "");
        response.headers.set("Location", newLocation);
        return new Response(null, {
          status: 404,
          headers: response.headers
        });
      } else if (i18n.routing === "prefix-always") {
        if (url.pathname === base + "/" || url.pathname === base) {
          if (trailingSlash === "always") {
            return context.redirect(`${appendForwardSlash(joinPaths(base, i18n.defaultLocale))}`);
          } else {
            return context.redirect(`${joinPaths(base, i18n.defaultLocale)}`);
          }
        } else if (!pathnameHasLocale(url.pathname, i18n.locales)) {
          return new Response(null, {
            status: 404,
            headers: response.headers
          });
        }
      }
      if (response.status >= 300 && fallback) {
        const fallbackKeys = i18n.fallback ? Object.keys(i18n.fallback) : [];
        const segments = url.pathname.split("/");
        const urlLocale = segments.find((segment) => {
          for (const locale of locales) {
            if (typeof locale === "string") {
              if (locale === segment) {
                return true;
              }
            } else if (locale.path === segment) {
              return true;
            }
          }
          return false;
        });
        if (urlLocale && fallbackKeys.includes(urlLocale)) {
          const fallbackLocale = fallback[urlLocale];
          const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
          let newPathname;
          if (pathFallbackLocale === defaultLocale && routing === "prefix-other-locales") {
            newPathname = url.pathname.replace(`/${urlLocale}`, ``);
          } else {
            newPathname = url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
          }
          return context.redirect(newPathname);
        }
      }
    }
    return response;
  };
}
const i18nPipelineHook = (ctx) => {
  Reflect.set(ctx.request, routeDataSymbol, ctx.route);
};

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol$2 = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options?.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options?.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol$2]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw);
  }
}

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function responseHasCookies(response) {
  return Reflect.has(response, astroCookiesSymbol);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
  return [];
}

const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};

async function callMiddleware(onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return ensureCookiesAttached(apiContext, value);
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return ensureCookiesAttached(apiContext, value);
    }
  });
}
function ensureCookiesAttached(apiContext, response) {
  if (apiContext.cookies !== void 0 && !responseHasCookies(response)) {
    attachCookiesToResponse(response, apiContext.cookies);
  }
  return response;
}

function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
function redirectRouteGenerate(redirectRoute, data) {
  const routeData = redirectRoute.redirectRoute;
  const route = redirectRoute.redirect;
  if (typeof routeData !== "undefined") {
    return routeData?.generate(data) || routeData?.pathname || "/";
  } else if (typeof route === "string") {
    return route;
  } else if (typeof route === "undefined") {
    return "/";
  }
  return route.destination;
}
function redirectRouteStatus(redirectRoute, method = "GET") {
  const routeData = redirectRoute.redirectRoute;
  if (typeof routeData?.redirect === "object") {
    return routeData.redirect.status;
  } else if (method !== "GET") {
    return 308;
  }
  return 301;
}

const RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
const RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (_, next) => next(),
  renderers: []
};

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}

function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return JSON.stringify(route.generate(validatedParams));
}

function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = correctIndexRoute(routeMatch.generate({ ...params }));
      const next = pageNum === lastPage ? void 0 : correctIndexRoute(routeMatch.generate({ ...params, page: String(pageNum + 1) }));
      const prev = pageNum === 1 ? void 0 : correctIndexRoute(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        })
      );
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev }
          }
        }
      };
    });
    return result;
  };
}
function correctIndexRoute(route) {
  if (route === "") {
    return "/";
  }
  return route;
}

async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  logger,
  ssr
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route)
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
class RouteCache {
  logger;
  cache = {};
  mode;
  constructor(logger, mode = "production") {
    this.logger = logger;
    this.mode = mode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]?.staticPaths) {
      this.logger.warn(null, `Internal Warning: route cache overwritten. (${route.component})`);
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
}
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}

async function getParamsAndProps(opts) {
  const { logger, mod, route, routeCache, pathname, ssr } = opts;
  if (!route || route.pathname) {
    return [{}, {}];
  }
  const params = getRouteParams(route, pathname) ?? {};
  if (routeIsRedirect(route) || routeIsFallback(route)) {
    return [params, {}];
  }
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    logger,
    ssr
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (ssr ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return [params, props];
}
function getRouteParams(route, pathname) {
  if (route.params.length) {
    const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
    if (paramsMatch) {
      return getParams(route.params)(paramsMatch);
    }
  }
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}

const clientLocalsSymbol$2 = Symbol.for("astro.locals");
async function createRenderContext(options) {
  const request = options.request;
  const pathname = options.pathname ?? new URL(request.url).pathname;
  const [params, props] = await getParamsAndProps({
    mod: options.mod,
    route: options.route,
    routeCache: options.env.routeCache,
    pathname,
    logger: options.env.logger,
    ssr: options.env.ssr
  });
  const context = {
    ...options,
    pathname,
    params,
    props,
    locales: options.locales,
    routing: options.routing,
    defaultLocale: options.defaultLocale
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$2);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$2, val);
      }
    }
  });
  return context;
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = toCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      if (a.qualityValue > b.qualityValue) {
        return -1;
      } else if (a.qualityValue < b.qualityValue) {
        return 1;
      }
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale.path;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales.map((locale) => {
        if (typeof locale === "string") {
          return locale;
        } else {
          return locale.codes.at(0);
        }
      });
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(loopLocale.path);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(request, locales, routingStrategy, defaultLocale) {
  const requestUrl = new URL(request.url);
  for (const segment of requestUrl.pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        }
      }
    }
  }
  if (routingStrategy === "prefix-other-locales") {
    return defaultLocale;
  }
  return void 0;
}

function createEnvironment(options) {
  return options;
}

const clientAddressSymbol$2 = Symbol.for("astro.clientAddress");
const clientLocalsSymbol$1 = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName,
  locales,
  routingStrategy,
  defaultLocale
}) {
  let preferredLocale = void 0;
  let preferredLocaleList = void 0;
  let currentLocale = void 0;
  const context = {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    get preferredLocale() {
      if (preferredLocale) {
        return preferredLocale;
      }
      if (locales) {
        preferredLocale = computePreferredLocale(request, locales);
        return preferredLocale;
      }
      return void 0;
    },
    get preferredLocaleList() {
      if (preferredLocaleList) {
        return preferredLocaleList;
      }
      if (locales) {
        preferredLocaleList = computePreferredLocaleList(request, locales);
        return preferredLocaleList;
      }
      return void 0;
    },
    get currentLocale() {
      if (currentLocale) {
        return currentLocale;
      }
      if (locales) {
        currentLocale = computeCurrentLocale(request, locales, routingStrategy, defaultLocale);
      }
      return currentLocale;
    },
    url: new URL(request.url),
    get clientAddress() {
      if (clientAddressSymbol$2 in request) {
        return Reflect.get(request, clientAddressSymbol$2);
      }
      if (adapterName) {
        throw new AstroError({
          ...ClientAddressNotAvailable,
          message: ClientAddressNotAvailable.message(adapterName)
        });
      } else {
        throw new AstroError(StaticClientAddressNotAvailable);
      }
    },
    get locals() {
      let locals = Reflect.get(request, clientLocalsSymbol$1);
      if (locals === void 0) {
        locals = {};
        Reflect.set(request, clientLocalsSymbol$1, locals);
      }
      if (typeof locals !== "object") {
        throw new AstroError(LocalsNotAnObject);
      }
      return locals;
    },
    // We define a custom property, so we can check the value passed to locals
    set locals(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$1, val);
      }
    }
  };
  return context;
}
async function callEndpoint(mod, env, ctx, onRequest) {
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName,
    routingStrategy: ctx.routing,
    defaultLocale: ctx.defaultLocale,
    locales: ctx.locales
  });
  let response;
  if (onRequest) {
    response = await callMiddleware(onRequest, context, async () => {
      return await renderEndpoint(mod, context, env.ssr, env.logger);
    });
  } else {
    response = await renderEndpoint(mod, context, env.ssr, env.logger);
  }
  attachCookiesToResponse(response, context.cookies);
  return response;
}

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    return joinPaths(assetsPrefix, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}

function matchRoute(pathname, manifest) {
  const decodedPathname = decodeURI(pathname);
  return manifest.routes.find((route) => {
    return route.pattern.test(decodedPathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(decodedPathname));
  });
}

const clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
const responseSentSymbol$1 = Symbol.for("astro.responseSent");
function getFunctionExpression(slot) {
  if (!slot)
    return;
  if (slot.expressions?.length !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  #result;
  #slots;
  #logger;
  constructor(result, slots, logger) {
    this.#result = result;
    this.#slots = slots;
    this.#logger = logger;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...ReservedSlotName,
            message: ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots)
      return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name))
      return;
    const result = this.#result;
    if (!Array.isArray(args)) {
      this.#logger.warn(
        null,
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = async () => typeof expression === "function" ? expression(...args) : expression;
        return await renderSlotToString(result, slot).then((res) => {
          return res != null ? String(res) : res;
        });
      }
      if (typeof component === "function") {
        return await renderJSX(result, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlotToString(result, this.#slots[name]);
    const outHTML = chunkToString(result, content);
    return outHTML;
  }
}
function createResult(args) {
  const { params, request, resolve, locals } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = args.cookies;
  let preferredLocale = void 0;
  let preferredLocaleList = void 0;
  let currentLocale = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    componentMetadata: args.componentMetadata ?? /* @__PURE__ */ new Map(),
    renderers: args.renderers,
    clientDirectives: args.clientDirectives,
    compressHTML: args.compressHTML,
    partial: args.partial,
    pathname: args.pathname,
    cookies,
    /** This function returns the `Astro` faux-global */
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logger);
      const Astro = {
        // @ts-expect-error
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$1 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...ClientAddressNotAvailable,
                message: ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$1);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        get preferredLocale() {
          if (preferredLocale) {
            return preferredLocale;
          }
          if (args.locales) {
            preferredLocale = computePreferredLocale(request, args.locales);
            return preferredLocale;
          }
          return void 0;
        },
        get preferredLocaleList() {
          if (preferredLocaleList) {
            return preferredLocaleList;
          }
          if (args.locales) {
            preferredLocaleList = computePreferredLocaleList(request, args.locales);
            return preferredLocaleList;
          }
          return void 0;
        },
        get currentLocale() {
          if (currentLocale) {
            return currentLocale;
          }
          if (args.locales) {
            currentLocale = computeCurrentLocale(
              request,
              args.locales,
              args.routingStrategy,
              args.defaultLocale
            );
            if (currentLocale) {
              return currentLocale;
            }
          }
          return void 0;
        },
        params,
        props,
        locals,
        request,
        url,
        redirect(path, status) {
          if (request[responseSentSymbol$1]) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        },
        response,
        slots: astroSlots
      };
      return Astro;
    },
    resolve,
    response,
    _metadata: {
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set(),
      headInTree: false,
      extraHead: [],
      propagators: /* @__PURE__ */ new Set()
    }
  };
  return result;
}

async function renderPage({ mod, renderContext, env, cookies }) {
  if (routeIsRedirect(renderContext.route)) {
    return new Response(null, {
      status: redirectRouteStatus(renderContext.route, renderContext.request.method),
      headers: {
        location: redirectRouteGenerate(renderContext.route, renderContext.params)
      }
    });
  } else if (routeIsFallback(renderContext.route)) {
    return new Response(null, {
      status: 404
    });
  } else if (!mod) {
    throw new AstroError(CantRenderPage);
  }
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: renderContext.links,
    styles: renderContext.styles,
    logger: env.logger,
    params: renderContext.params,
    pathname: renderContext.pathname,
    componentMetadata: renderContext.componentMetadata,
    resolve: env.resolve,
    renderers: env.renderers,
    clientDirectives: env.clientDirectives,
    compressHTML: env.compressHTML,
    request: renderContext.request,
    partial: !!mod.partial,
    site: env.site,
    scripts: renderContext.scripts,
    ssr: env.ssr,
    status: renderContext.status ?? 200,
    cookies,
    locals: renderContext.locals ?? {},
    locales: renderContext.locales,
    defaultLocale: renderContext.defaultLocale,
    routingStrategy: renderContext.routing
  });
  const response = await renderPage$1(
    result,
    Component,
    renderContext.props,
    {},
    env.streaming,
    renderContext.route
  );
  if (result.cookies) {
    attachCookiesToResponse(response, result.cookies);
  }
  return response;
}

class Pipeline {
  env;
  #onRequest;
  #hooks = {
    before: []
  };
  /**
   * The handler accepts the *original* `Request` and result returned by the endpoint.
   * It must return a `Response`.
   */
  #endpointHandler;
  /**
   * When creating a pipeline, an environment is mandatory.
   * The environment won't change for the whole lifetime of the pipeline.
   */
  constructor(env) {
    this.env = env;
  }
  setEnvironment() {
  }
  /**
   * When rendering a route, an "endpoint" will a type that needs to be handled and transformed into a `Response`.
   *
   * Each consumer might have different needs; use this function to set up the handler.
   */
  setEndpointHandler(handler) {
    this.#endpointHandler = handler;
  }
  /**
   * A middleware function that will be called before each request.
   */
  setMiddlewareFunction(onRequest) {
    this.#onRequest = onRequest;
  }
  /**
   * Removes the current middleware function. Subsequent requests won't trigger any middleware.
   */
  unsetMiddlewareFunction() {
    this.#onRequest = void 0;
  }
  /**
   * Returns the current environment
   */
  getEnvironment() {
    return this.env;
  }
  /**
   * The main function of the pipeline. Use this function to render any route known to Astro;
   */
  async renderRoute(renderContext, componentInstance) {
    for (const hook of this.#hooks.before) {
      hook(renderContext, componentInstance);
    }
    const result = await this.#tryRenderRoute(
      renderContext,
      this.env,
      componentInstance,
      this.#onRequest
    );
    if (renderContext.route.type === "endpoint") {
      if (!this.#endpointHandler) {
        throw new Error(
          "You created a pipeline that does not know how to handle the result coming from an endpoint."
        );
      }
      return this.#endpointHandler(renderContext.request, result);
    } else {
      return result;
    }
  }
  /**
   * It attempts to render a route. A route can be a:
   * - page
   * - redirect
   * - endpoint
   *
   * ## Errors
   *
   * It throws an error if the page can't be rendered.
   */
  async #tryRenderRoute(renderContext, env, mod, onRequest) {
    const apiContext = createAPIContext({
      request: renderContext.request,
      params: renderContext.params,
      props: renderContext.props,
      site: env.site,
      adapterName: env.adapterName,
      locales: renderContext.locales,
      routingStrategy: renderContext.routing,
      defaultLocale: renderContext.defaultLocale
    });
    switch (renderContext.route.type) {
      case "page":
      case "fallback":
      case "redirect": {
        if (onRequest) {
          return await callMiddleware(onRequest, apiContext, () => {
            return renderPage({
              mod,
              renderContext,
              env,
              cookies: apiContext.cookies
            });
          });
        } else {
          return await renderPage({
            mod,
            renderContext,
            env,
            cookies: apiContext.cookies
          });
        }
      }
      case "endpoint": {
        return await callEndpoint(mod, env, renderContext, onRequest);
      }
      default:
        throw new Error(`Couldn't find route of type [${renderContext.route.type}]`);
    }
  }
  /**
   * Store a function that will be called before starting the rendering phase.
   * @param fn
   */
  onBeforeRenderRoute(fn) {
    this.#hooks.before.push(fn);
  }
}

class EndpointNotFoundError extends Error {
  originalResponse;
  constructor(originalResponse) {
    super();
    this.originalResponse = originalResponse;
  }
}
class SSRRoutePipeline extends Pipeline {
  constructor(env) {
    super(env);
    this.setEndpointHandler(this.#ssrEndpointHandler);
  }
  // This function is responsible for handling the result coming from an endpoint.
  async #ssrEndpointHandler(request, response) {
    if (response.headers.get("X-Astro-Response") === "Not-Found") {
      throw new EndpointNotFoundError(response);
    }
    return response;
  }
}

const clientLocalsSymbol = Symbol.for("astro.locals");
const responseSentSymbol = Symbol.for("astro.responseSent");
const STATUS_CODES = /* @__PURE__ */ new Set([404, 500]);
class App {
  /**
   * The current environment of the application
   */
  #manifest;
  #manifestData;
  #routeDataToRouteInfo;
  #logger = new Logger({
    dest: consoleLogDestination,
    level: "info"
  });
  #baseWithoutTrailingSlash;
  #pipeline;
  #adapterLogger;
  #renderOptionsDeprecationWarningShown = false;
  constructor(manifest, streaming = true) {
    this.#manifest = manifest;
    this.#manifestData = {
      routes: manifest.routes.map((route) => route.routeData)
    };
    this.#routeDataToRouteInfo = new Map(manifest.routes.map((route) => [route.routeData, route]));
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#pipeline = new SSRRoutePipeline(this.#createEnvironment(streaming));
    this.#adapterLogger = new AstroIntegrationLogger(
      this.#logger.options,
      this.#manifest.adapterName
    );
  }
  getAdapterLogger() {
    return this.#adapterLogger;
  }
  /**
   * Creates an environment by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createEnvironment(streaming = false) {
    return createEnvironment({
      adapterName: this.#manifest.adapterName,
      logger: this.#logger,
      mode: "production",
      compressHTML: this.#manifest.compressHTML,
      renderers: this.#manifest.renderers,
      clientDirectives: this.#manifest.clientDirectives,
      resolve: async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
          }
        }
      },
      routeCache: new RouteCache(this.#logger),
      site: this.#manifest.site,
      ssr: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  #getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    return pathname;
  }
  match(request) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname))
      return void 0;
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    const routeData = matchRoute(pathname, this.#manifestData);
    if (!routeData || routeData.prerender)
      return void 0;
    return routeData;
  }
  async render(request, routeDataOrOptions, maybeLocals) {
    let routeData;
    let locals;
    if (routeDataOrOptions && ("routeData" in routeDataOrOptions || "locals" in routeDataOrOptions)) {
      if ("routeData" in routeDataOrOptions) {
        routeData = routeDataOrOptions.routeData;
      }
      if ("locals" in routeDataOrOptions) {
        locals = routeDataOrOptions.locals;
      }
    } else {
      routeData = routeDataOrOptions;
      locals = maybeLocals;
      if (routeDataOrOptions || locals) {
        this.#logRenderOptionsDeprecationWarning();
      }
    }
    if (request.url !== collapseDuplicateSlashes(request.url)) {
      request = new Request(collapseDuplicateSlashes(request.url), request);
    }
    if (!routeData) {
      routeData = this.match(request);
    }
    if (!routeData) {
      return this.#renderError(request, { status: 404 });
    }
    Reflect.set(request, clientLocalsSymbol, locals ?? {});
    const pathname = this.#getPathnameFromRequest(request);
    const defaultStatus = this.#getDefaultStatusCode(routeData, pathname);
    const mod = await this.#getModuleForRoute(routeData);
    const pageModule = await mod.page();
    const url = new URL(request.url);
    const renderContext = await this.#createRenderContext(
      url,
      request,
      routeData,
      mod,
      defaultStatus
    );
    let response;
    try {
      let i18nMiddleware = createI18nMiddleware(
        this.#manifest.i18n,
        this.#manifest.base,
        this.#manifest.trailingSlash
      );
      if (i18nMiddleware) {
        if (mod.onRequest) {
          this.#pipeline.setMiddlewareFunction(sequence(i18nMiddleware, mod.onRequest));
        } else {
          this.#pipeline.setMiddlewareFunction(i18nMiddleware);
        }
        this.#pipeline.onBeforeRenderRoute(i18nPipelineHook);
      } else {
        if (mod.onRequest) {
          this.#pipeline.setMiddlewareFunction(mod.onRequest);
        }
      }
      response = await this.#pipeline.renderRoute(renderContext, pageModule);
    } catch (err) {
      if (err instanceof EndpointNotFoundError) {
        return this.#renderError(request, { status: 404, response: err.originalResponse });
      } else {
        this.#logger.error(null, err.stack || err.message || String(err));
        return this.#renderError(request, { status: 500 });
      }
    }
    if (routeData.type === "page" || routeData.type === "redirect") {
      if (STATUS_CODES.has(response.status)) {
        return this.#renderError(request, {
          response,
          status: response.status
        });
      }
      Reflect.set(response, responseSentSymbol, true);
      return response;
    }
    return response;
  }
  #logRenderOptionsDeprecationWarning() {
    if (this.#renderOptionsDeprecationWarningShown)
      return;
    this.#logger.warn(
      "deprecated",
      `The adapter ${this.#manifest.adapterName} is using a deprecated signature of the 'app.render()' method. From Astro 4.0, locals and routeData are provided as properties on an optional object to this method. Using the old signature will cause an error in Astro 5.0. See https://github.com/withastro/astro/pull/9199 for more information.`
    );
    this.#renderOptionsDeprecationWarningShown = true;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Creates the render context of the current route
   */
  async #createRenderContext(url, request, routeData, page, status = 200) {
    if (routeData.type === "endpoint") {
      const pathname = "/" + this.removeBase(url.pathname);
      const mod = await page.page();
      const handler = mod;
      return await createRenderContext({
        request,
        pathname,
        route: routeData,
        status,
        env: this.#pipeline.env,
        mod: handler,
        locales: this.#manifest.i18n?.locales,
        routing: this.#manifest.i18n?.routing,
        defaultLocale: this.#manifest.i18n?.defaultLocale
      });
    } else {
      const pathname = prependForwardSlash(this.removeBase(url.pathname));
      const info = this.#routeDataToRouteInfo.get(routeData);
      const links = /* @__PURE__ */ new Set();
      const styles = createStylesheetElementSet(info.styles);
      let scripts = /* @__PURE__ */ new Set();
      for (const script of info.scripts) {
        if ("stage" in script) {
          if (script.stage === "head-inline") {
            scripts.add({
              props: {},
              children: script.children
            });
          }
        } else {
          scripts.add(createModuleScriptElement(script));
        }
      }
      const mod = await page.page();
      return await createRenderContext({
        request,
        pathname,
        componentMetadata: this.#manifest.componentMetadata,
        scripts,
        styles,
        links,
        route: routeData,
        status,
        mod,
        env: this.#pipeline.env,
        locales: this.#manifest.i18n?.locales,
        routing: this.#manifest.i18n?.routing,
        defaultLocale: this.#manifest.i18n?.defaultLocale
      });
    }
  }
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, { status, response: originalResponse, skipMiddleware = false }) {
    const errorRouteData = matchRoute("/" + status, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        const response2 = await fetch(statusURL.toString());
        const override = { status };
        return this.#mergeResponses(response2, originalResponse, override);
      }
      const mod = await this.#getModuleForRoute(errorRouteData);
      try {
        const newRenderContext = await this.#createRenderContext(
          url,
          request,
          errorRouteData,
          mod,
          status
        );
        const page = await mod.page();
        if (skipMiddleware === false && mod.onRequest) {
          this.#pipeline.setMiddlewareFunction(mod.onRequest);
        }
        if (skipMiddleware) {
          this.#pipeline.unsetMiddlewareFunction();
        }
        const response2 = await this.#pipeline.renderRoute(newRenderContext, page);
        return this.#mergeResponses(response2, originalResponse);
      } catch {
        if (skipMiddleware === false && mod.onRequest) {
          return this.#renderError(request, {
            status,
            response: originalResponse,
            skipMiddleware: true
          });
        }
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, oldResponse, override) {
    if (!oldResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const { statusText, headers } = oldResponse;
    const status = override?.status ? override.status : oldResponse.status === 200 ? newResponse.status : oldResponse.status;
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : statusText,
      headers: new Headers(Array.from(headers))
    });
  }
  #getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.exec(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404"))
      return 404;
    if (route.endsWith("/500"))
      return 500;
    return 200;
  }
  async #getModuleForRoute(route) {
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.#manifest.pageMap) {
        const importComponentInstance = this.#manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        const pageModule = await importComponentInstance();
        return pageModule;
      } else if (this.#manifest.pageModule) {
        const importComponentInstance = this.#manifest.pageModule;
        return importComponentInstance;
      } else {
        throw new Error(
          "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
        );
      }
    }
  }
}

function apply() {
  if (!globalThis.crypto) {
    Object.defineProperty(globalThis, "crypto", {
      value: crypto.webcrypto
    });
  }
  if (!globalThis.File) {
    Object.defineProperty(globalThis, "File", {
      value: buffer.File
    });
  }
}

const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createRequestFromNodeRequest(req, options) {
  const protocol = req.socket instanceof TLSSocket || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
  const hostname = req.headers.host || req.headers[":authority"];
  const url = `${protocol}://${hostname}${req.url}`;
  const headers = makeRequestHeaders(req);
  const method = req.method || "GET";
  let bodyProps = {};
  const bodyAllowed = method !== "HEAD" && method !== "GET" && !options?.emptyBody;
  if (bodyAllowed) {
    bodyProps = makeRequestBody(req);
  }
  const request = new Request(url, {
    method,
    headers,
    ...bodyProps
  });
  if (req.socket?.remoteAddress) {
    Reflect.set(request, clientAddressSymbol, req.socket.remoteAddress);
  }
  return request;
}
function makeRequestHeaders(req) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(req.headers)) {
    if (value === void 0) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else {
      headers.append(name, value);
    }
  }
  return headers;
}
function makeRequestBody(req) {
  if (req.body !== void 0) {
    if (typeof req.body === "string" && req.body.length > 0) {
      return { body: Buffer.from(req.body) };
    }
    if (typeof req.body === "object" && req.body !== null && Object.keys(req.body).length > 0) {
      return { body: Buffer.from(JSON.stringify(req.body)) };
    }
    if (typeof req.body === "object" && req.body !== null && typeof req.body[Symbol.asyncIterator] !== "undefined") {
      return asyncIterableToBodyProps(req.body);
    }
  }
  return asyncIterableToBodyProps(req);
}
function asyncIterableToBodyProps(iterable) {
  return {
    // Node uses undici for the Request implementation. Undici accepts
    // a non-standard async iterable for the body.
    // @ts-expect-error
    body: iterable,
    // The duplex property is required when using a ReadableStream or async
    // iterable for the body. The type definitions do not include the duplex
    // property because they are not up-to-date.
    // @ts-expect-error
    duplex: "half"
  };
}
class NodeApp extends App {
  match(req) {
    if (!(req instanceof Request)) {
      req = createRequestFromNodeRequest(req, {
        emptyBody: true
      });
    }
    return super.match(req);
  }
  render(req, routeDataOrOptions, maybeLocals) {
    if (!(req instanceof Request)) {
      req = createRequestFromNodeRequest(req);
    }
    return super.render(req, routeDataOrOptions, maybeLocals);
  }
}

nodePath.posix.join;

const ASTRO_PATH_HEADER = "x-astro-path";
const ASTRO_PATH_PARAM = "x_astro_path";
const ASTRO_LOCALS_HEADER = "x-astro-locals";
const ASTRO_MIDDLEWARE_SECRET_HEADER = "x-astro-middleware-secret";

apply();
const createExports = (manifest, { middlewareSecret }) => {
  const app = new NodeApp(manifest);
  const handler = async (req, res) => {
    const url = new URL(`https://example.com${req.url}`);
    const clientAddress = req.headers["x-forwarded-for"];
    const localsHeader = req.headers[ASTRO_LOCALS_HEADER];
    const middlewareSecretHeader = req.headers[ASTRO_MIDDLEWARE_SECRET_HEADER];
    const realPath = req.headers[ASTRO_PATH_HEADER] ?? url.searchParams.get(ASTRO_PATH_PARAM);
    if (typeof realPath === "string") {
      req.url = realPath;
    }
    let locals = {};
    if (localsHeader) {
      if (middlewareSecretHeader !== middlewareSecret) {
        res.statusCode = 403;
        res.end("Forbidden");
        return;
      }
      locals = typeof localsHeader === "string" ? JSON.parse(localsHeader) : JSON.parse(localsHeader[0]);
    }
    delete req.headers[ASTRO_MIDDLEWARE_SECRET_HEADER];
    const webResponse = await app.render(req, { addCookieHeader: true, clientAddress, locals });
    await NodeApp.writeResponse(webResponse, res);
  };
  return { default: handler };
};

const _page0  = () => import('./chunks/generic_L1NcO7Tf.mjs');
const _page1  = () => import('./chunks/index_3WrQHBNO.mjs');
const _page2  = () => import('./chunks/projects_Jqpl1qXZ.mjs');
const _page3  = () => import('./chunks/404_t9PlwuzE.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/404.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"c3520109-c9e3-45e9-a7bd-e35b35ac8585"};

const _exports = createExports(_manifest, _args);
const _default = _exports['default'];

export { _default as default, pageMap };
