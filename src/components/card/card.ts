// alpha-card — Pass-through registration (forge-card → alpha-card)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-card', 'alpha-card');
