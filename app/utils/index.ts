import * as fs from 'fs-extra';
import * as minimist from 'minimist';
import { sep, join, dirname, isAbsolute } from 'path';

// 当前工作路径
// process.cwd 会指向 symlink 原始路径，因此优先使用 pwd
export const cwd = process.env.PWD || process.cwd();

export function resolveClosestFile(currentDir: string, filename: string) {
  if (isAbsolute(filename)) {
    return filename;
  }

  const traverseUp = (dir: string, filename: string): string | null => {
    const path = join(dir, filename);

    if (dir === sep || !dir) {
      return null;
    }

    if (fs.existsSync(path)) {
      return path;
    }

    return traverseUp(dirname(dir), filename);
  };

  return traverseUp(currentDir, filename);
}

function getRoot() {
  const argv = minimist(process.argv.slice(2));
  const configName = argv.config || 'nest-cli';
  const configPath = resolveClosestFile(cwd, configName);

  if (configPath) {
    return dirname(configPath);
  }

  return cwd;
}

export const root = getRoot();
