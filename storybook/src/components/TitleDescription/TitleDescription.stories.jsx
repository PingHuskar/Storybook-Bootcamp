import React from 'react';

import { TitleDescription } from './TitleDescription';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from "@storybook/addon-docs/blocks"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TitleDescription',
  component: TitleDescription,
  parameters: {
    docs: {
      page: () => (
        <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
        <PRIMARY_STORY />
        </>
      )
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TitleDescription {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const WithValues = Template.bind({});
WithValues.args = {
  title: "Hey I'm learning storybook",
  description: "I Love it!"
};
