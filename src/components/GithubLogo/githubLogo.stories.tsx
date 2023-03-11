import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import GithubLogo from ".";

export default {
  title: "Brandi/Logo",
  component: GithubLogo,
  argTypes: {
    size: {
      name: "Logo size",
      type: { name: "string" },
      description: "Opções de tamanho para o logo",
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "md"
        },
        type: {
          summary: "Mostrar opções de tamanho para o logo",
          detail: "sm (small), md (medium), lg (large)"
        }
      }
    },
    color: {
      name: "Logo color",
      type: { name: "string" },
      description: "Opções de cores para o logo",
      options: ["text", "primary", "panel", "cover"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "md"
        },
        type: {
          summary: "Mostrar opções de cores para o logo",
          detail: "text, primary, panel, cover"
        }
      }
    }
  },
  args: {
    size: "md",
    color: "text"
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof GithubLogo>> = ({
  ...props
}) => <GithubLogo {...props} />;
