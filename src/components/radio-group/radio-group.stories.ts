import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './radio-group.js';

const meta: Meta = {
  title: 'Input/Radio Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-radio-group label="Select an option" value="1"
      ><alpha-radio value="1">Option 1</alpha-radio><alpha-radio value="2">Option 2</alpha-radio
      ><alpha-radio value="3">Option 3</alpha-radio></alpha-radio-group
    >`,
};
