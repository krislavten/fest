import * as nunjucks from 'nunjucks';
import * as JS_CONFIG from 'config/version_js.json';
import * as CSS_CONFIG from 'config/version_css.json';

function loadJs(key: string, ifAsync = false, ifDefer = false) {
  const keys = key.split('.');
  // const versionKey = keys.length > 1 ? keys[0] : 'version_js';
  const fileKey = keys.length > 1 ? keys[1] : keys[0];
  const src = `./${JS_CONFIG[fileKey]}`;

  let scriptStr = `<script src="${src}" charset="utf-8"`;
  scriptStr += ifAsync ? ' async ' : '';
  scriptStr += ifDefer ? ' defer ' : '';
  scriptStr += '></script>';

  return scriptStr;
}

function loadCss(key: string, media = 'screen') {
  const keys = key.split('.');
  // const versionKey = keys.length > 1 ? keys[0] : 'version_js';
  const fileKey = keys.length > 1 ? keys[1] : keys[0];
  const src = `./${CSS_CONFIG[fileKey]}`;

  const linkStr = `<link rel="stylesheet" href="${src}" media="${media}" >`;

  return linkStr;
}

export function initView(app, viewPath) {
  app.setBaseViewsDir(viewPath);
  app.setViewEngine('njk');
  const nunjucksEnv = nunjucks.configure(viewPath, {
    noCache: false,
    autoescape: true,
    express: app,
  });
  nunjucksEnv.addGlobal('loadJs', loadJs.bind(nunjucksEnv));
  nunjucksEnv.addGlobal('loadCss', loadCss.bind(nunjucksEnv));
}
