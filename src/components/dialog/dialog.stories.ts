import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './dialog.js';

const meta: Meta = {
  title: 'Containment/Dialog',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<alpha-dialog label="Dialog Title" open>Dialog content goes here.</alpha-dialog>`,
};
