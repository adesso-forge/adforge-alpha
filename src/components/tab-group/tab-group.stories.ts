import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tab-group.js';

const meta: Meta = {
  title: 'Containment/Tab Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-tab-group
      ><alpha-tab slot="nav" panel="general">General</alpha-tab
      ><alpha-tab slot="nav" panel="details">Details</alpha-tab
      ><alpha-tab-panel name="general">General content</alpha-tab-panel
      ><alpha-tab-panel name="details">Details content</alpha-tab-panel></alpha-tab-group
    >`,
};
