// alpha-format-bytes — Pass-through registration (forge-format-bytes → alpha-format-bytes)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-format-bytes', 'alpha-format-bytes');
