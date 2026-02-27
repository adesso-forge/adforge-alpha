import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './button-group.js';

const meta: Meta = {
  title: 'Action/Button Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-button-group
      ><alpha-button>Left</alpha-button><alpha-button>Center</alpha-button
      ><alpha-button>Right</alpha-button></alpha-button-group
    >`,
};
