export type PlaygroundConfig = {
  initialCode: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: { [key: string]: any };
};

export type Metadata = {
  [key: string]: SingleComponentMetadata[];
};

export type SingleComponentMetadata = {
  description?: string;
  displayName: string;
  props?: {
    [key: string]: PropMetadata;
  };
};

export type PropMetadata = {
  defaultValue?: {
    value: string;
  };
  description: string;
  required: boolean;
  tsType?: {
    elements?: Array<{
      name: string;
      value?: string;
    }>;
    name: string;
    type?: string;
  };
  type?: {
    name: string;
    value:
      | Array<{ value: string }>
      | Array<{ name: string }>
      | { name: string };
  };
};
