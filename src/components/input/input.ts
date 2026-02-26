// alpha-input — Pass-through registration (forge-input → alpha-input)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-input', 'alpha-input');
