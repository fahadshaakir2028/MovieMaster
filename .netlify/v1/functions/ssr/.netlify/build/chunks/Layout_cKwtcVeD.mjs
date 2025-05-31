import { e as createComponent, f as createAstro, r as renderTemplate, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_5mRTQ9C9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Movie Database" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head> <body> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <div class="container"> <a class="navbar-brand" href="/">Movie Database</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav ms-auto"> <li class="nav-item"> <a class="nav-link" href="/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="/movies">Movies</a> </li> <li class="nav-item"> <a class="nav-link" href="/favorites">Favorites</a> </li> </ul> </div> </div> </nav> <main class="container py-4"> ', ' </main> <footer class="bg-dark text-white py-4 mt-5"> <div class="container text-center"> <p>\xA9 ', ' Movie Database. Powered by TMDb API.</p> </div> </footer> <!-- Bootstrap JS Bundle with Popper --> <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "/Users/mac/Desktop/miirshe/SiteProjects/movie-database/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
