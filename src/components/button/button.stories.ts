import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './button.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'alpha-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'success', 'neutral', 'warning', 'danger', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    tier: {
      control: 'select',
      options: ['standard', 'premium'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <alpha-button
      variant=${args.variant ?? 'default'}
      size=${args.size ?? 'medium'}
      tier=${args.tier ?? 'standard'}
      ?disabled=${args.disabled}
    >
      Alpha Button
    </alpha-button>
  `,
};

export const Premium: Story = {
  render: () => html`<alpha-button tier="premium">Premium Action</alpha-button>`,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <alpha-button variant="default">Default</alpha-button>
      <alpha-button variant="brand">Brand</alpha-button>
      <alpha-button variant="success">Success</alpha-button>
      <alpha-button variant="neutral">Neutral</alpha-button>
      <alpha-button variant="warning">Warning</alpha-button>
      <alpha-button variant="danger">Danger</alpha-button>
      <alpha-button variant="text">Text</alpha-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <alpha-button size="small">Small</alpha-button>
      <alpha-button size="medium">Medium</alpha-button>
      <alpha-button size="large">Large</alpha-button>
    </div>
  `,
};
