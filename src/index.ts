// @adesso-forge/adforge-alpha — Main entry point
// Registers all alpha-* components and exports theme CSS paths

// Register all components
import './components/index.js';

// Re-export the Alpha Button Tier 3 extension class
export { AlphaButton } from './components/button/button.js';
