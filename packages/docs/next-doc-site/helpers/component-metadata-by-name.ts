import { Metadata, SingleComponentMetadata } from '../types';

function componentMetadataByName(
  metadata: Metadata,
  name: string,
): SingleComponentMetadata | undefined {
  const data = Object.values(metadata).find(
    (item) => item[0].displayName === name,
  );
  return data && data[0];
}

export default componentMetadataByName;
