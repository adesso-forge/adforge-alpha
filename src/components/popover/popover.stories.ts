import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './popover.js';

const meta: Meta = {
  title: 'Utility/Popover',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-popover><alpha-button slot="anchor">Hover me</alpha-button><div>Popover content</div></alpha-popover>`,
};
