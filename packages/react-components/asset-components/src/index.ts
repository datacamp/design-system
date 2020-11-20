import * as ALPALogos from './generated/alpa';
import * as Datacamp from './generated/logos/datacamp';
import * as Waffles from './generated/logos/waffles';
import * as TechnologiesLogos from './generated/technologies';
import * as TopicsLogos from './generated/topics';

export { default as ALPALoop } from './custom/ALPALoop';
export { default as TechLogo } from './custom/TechLogo';
export { default as DatacampLogo } from './custom/DatacampLogo';
export const Logos = { Datacamp, Waffles };

export const Technologies = TechnologiesLogos;
export const Topics = TopicsLogos;
export const ALPA = ALPALogos;
