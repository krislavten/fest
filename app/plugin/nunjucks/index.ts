import * as nunjucks from 'nunjucks';
import { join } from 'path';
import { root } from '../../utils/index';

function loadJs(key: string, ifAsync = false, ifDefer = false) {
  const keys = key.split('.');
  // const versionKey = keys.length > 1 ? keys[0] : 'version_js';
  const fileKey = keys.length > 1 ? keys[1] : keys[0];
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const jsMap = require(join(root, 'config/version_js.json'));
  const src = `./${jsMap[fileKey]}`;

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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const jsMap = require(join(root, 'config/version_css.json'));
  const src = `./${jsMap[fileKey]}`;

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
