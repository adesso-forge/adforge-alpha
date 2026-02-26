import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './textarea.js';

const meta: Meta = {
  title: 'Input/Textarea',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-textarea label="Message" placeholder="Type something..."></alpha-textarea>`,
};
