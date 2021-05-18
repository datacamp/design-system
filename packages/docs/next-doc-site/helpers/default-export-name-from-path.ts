function defaultExportNameFromPath(path: string): string {
  const nameKebabCase = path.split('waffles-')[1];
  // Convert name to pascal case
  return nameKebabCase
    .split('-')
    .map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join('');
}

export default defaultExportNameFromPath;
