import { Meta, Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import SearchBar from ".";

export default {
  title: "Form/Search Bar",
  component: SearchBar,
  argTypes: {
    placeholder: {
      name: "Placeholder",
      description: "Define o conteúdo do placeholder."
    },
    hasIcon: {
      name: "Icon",
      description: "Opcional, define se o search icon será renderizado.",
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
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
