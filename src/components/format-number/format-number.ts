// alpha-format-number — Pass-through registration (forge-format-number → alpha-format-number)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-format-number', 'alpha-format-number');
