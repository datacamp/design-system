// eslint-disable-next-line filenames/match-exported
import { PropMetadata } from '../types';

// For now it's pretty dirty, but in future we won't need it
function typeNameFromMetadata(prop: PropMetadata): string {
  // First try type from propTypes
  if (prop.type) {
    const { type } = prop;
    switch (type.name) {
      case 'enum': {
        const value = type.value as Array<{ value: string }>;
        return value.map((item) => item.value).join(' | ');
      }
      case 'union': {
        const value = type.value as Array<{ name: string }>;
        return value.map((item) => item.name).join(' | ');
      }
      case 'arrayOf': {
        const value = type.value as { name: string };
        return `arrayOf(${value.name})`;
      }
      case 'func':
        return 'function';
      default:
        return type.name;
    }
  }

  // Then try type from typescript
  if (prop.tsType) {
    const { tsType } = prop;

    if (tsType.elements) {
      return tsType.elements
        .map((element) => element.value || element.name)
        .join(' | ');
    }

    return tsType.type || tsType.name;
  }

  return '⚠️ Unknown type';
}

export default typeNameFromMetadata;
