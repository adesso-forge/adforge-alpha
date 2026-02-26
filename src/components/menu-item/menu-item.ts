// alpha-menu-item — Pass-through registration (forge-menu-item → alpha-menu-item)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-menu-item', 'alpha-menu-item');
