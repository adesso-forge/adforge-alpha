// alpha-qr-code — Pass-through registration (forge-qr-code → alpha-qr-code)
import '@adesso-forge/adforge-core';
import { registerPassThrough } from '@adesso-forge/adforge-shared/components/register';

registerPassThrough('forge-qr-code', 'alpha-qr-code');
