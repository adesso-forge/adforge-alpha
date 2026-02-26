// alpha-card — Pass-through registration (forge-card → alpha-card)
import '@adesso-forge/adforge-core';
import { registerPassThrough } from '@adesso-forge/adforge-shared/components/register';

registerPassThrough('forge-card', 'alpha-card');
