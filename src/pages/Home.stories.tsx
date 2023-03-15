import { Meta } from "@storybook/react/types-6-0";

import { HomePage } from ".";

export default {
  title: "Pages/Home",
  component: HomePage,
  argTypes: {},
  args: {}
} as Meta;

export const Base = ({ ...props }) => <HomePage {...props} />;
