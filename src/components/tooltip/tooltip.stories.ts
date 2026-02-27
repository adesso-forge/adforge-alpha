import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tooltip.js';

const meta: Meta = {
  title: 'Feedback/Tooltip',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-tooltip content="Tooltip text"
      ><alpha-button slot="content">Hover me</alpha-button></alpha-tooltip
    >`,
};
