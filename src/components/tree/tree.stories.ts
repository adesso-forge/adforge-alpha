import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tree.js';

const meta: Meta = {
  title: 'Navigation/Tree',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-tree><alpha-tree-item>Item 1<alpha-tree-item>Nested 1</alpha-tree-item></alpha-tree-item><alpha-tree-item>Item 2</alpha-tree-item></alpha-tree>`,
};
