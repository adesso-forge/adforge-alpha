// alpha-mutation-observer — Pass-through registration (forge-mutation-observer → alpha-mutation-observer)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-mutation-observer', 'alpha-mutation-observer');
