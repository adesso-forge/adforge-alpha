// alpha-number-input — Pass-through registration (forge-number-input → alpha-number-input)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-number-input', 'alpha-number-input');
