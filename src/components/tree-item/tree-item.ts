// alpha-tree-item — Pass-through registration (forge-tree-item → alpha-tree-item)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-tree-item', 'alpha-tree-item');
