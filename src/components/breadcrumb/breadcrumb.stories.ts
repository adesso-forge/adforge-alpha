import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './breadcrumb.js';

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-breadcrumb
      ><alpha-breadcrumb-item>Home</alpha-breadcrumb-item
      ><alpha-breadcrumb-item>Products</alpha-breadcrumb-item
      ><alpha-breadcrumb-item>Shoes</alpha-breadcrumb-item></alpha-breadcrumb
    >`,
};
