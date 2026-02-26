// alpha-qr-code — Pass-through registration (forge-qr-code → alpha-qr-code)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-qr-code', 'alpha-qr-code');
