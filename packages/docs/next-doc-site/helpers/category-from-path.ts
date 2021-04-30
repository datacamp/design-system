// eslint-disable-next-line filenames/match-exported
function categoryFromPath(path: string): string {
  return path.split('/')[1];
}

export default categoryFromPath;
