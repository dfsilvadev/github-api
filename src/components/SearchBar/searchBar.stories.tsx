import { Meta, Story } from "@storybook/react/types-6-0";
import SearchBar from ".";
import { ComponentProps } from "react";

export default {
  title: "Form/Search Bar",
  component: SearchBar,
  argTypes: {},
  args: {
    placeholder: "Search",
    hasIcon: true
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof SearchBar>> = ({
  ...props
}) => <SearchBar {...props} />;
