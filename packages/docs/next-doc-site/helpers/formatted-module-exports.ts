import { Module } from '../types';

function formattedModuleExports(
  defaultExportName: string,
  module: Module,
  path: string,
): string {
  const moduleExports = Object.keys(module);
  const numberOfExports = moduleExports.length;

  // Check if there is default export
  const defaultExportIndex = moduleExports.findIndex(
    (moduleExport) => moduleExport === 'default',
  );

  const hasDefaultExport = defaultExportIndex >= 0;

  if (hasDefaultExport) {
    // If there is only default export quickly bail out
    if (numberOfExports === 1) {
      return `import ${defaultExportName} from '${path}';`;
    }

    // Otherwise remove it from array of exports
    moduleExports.splice(defaultExportIndex, 1);
  }

  const formattedDeafulExport = hasDefaultExport
    ? `${defaultExportName}, `
    : '';

  // Depending on number of exports fit everything into single line or format into multiline code sample
  const formattedExports =
    numberOfExports > 3
      ? `{\n  ${moduleExports.join(',\n  ')},\n}`
      : `{ ${moduleExports.join(', ')} }`;

  return `import ${formattedDeafulExport}${formattedExports} from '${path}';`;
}

export default formattedModuleExports;
