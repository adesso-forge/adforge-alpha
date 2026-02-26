// alpha-rating — Pass-through registration (forge-rating → alpha-rating)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-rating', 'alpha-rating');
