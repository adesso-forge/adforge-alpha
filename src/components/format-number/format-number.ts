// alpha-format-number — Pass-through registration (forge-format-number → alpha-format-number)
import '@adesso-forge/adforge-core';
import { registerPassThrough } from '@adesso-forge/adforge-shared/components/register';

registerPassThrough('forge-format-number', 'alpha-format-number');
