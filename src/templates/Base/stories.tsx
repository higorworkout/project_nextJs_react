import { Meta } from '@storybook/react';
import { Base } from '.';

import { mockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
} as Meta;

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
