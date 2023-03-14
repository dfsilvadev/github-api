import { Meta, Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Container from ".";

const children = (
  <div
    style={{
      backgroundColor: "#FE5873",
      padding: "1rem 0.5rem"
    }}
  >
    Container
  </div>
);

export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    children: {
      name: "Container children",
      description: "O children define o conteúdo do button."
    },
    size: {
      name: "Container size",
      description: "Referente ao tamanho do container.",
      options: ["fixed", "fluid"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "fluid"
        },
        type: {
          summary: "Mostrar opções de tamanho para o container.",
          detail: "fixed, fluid"
        }
      }
    },
    contentCenter: {
      name: "Content center",
      description: "Opcional, centraliza o conteúdo do container."
    }
  },
  args: {
    children,
    size: "fluid",
    contentCenter: false
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof Container>> = ({
  ...props
}) => (
  <div
    style={{
      width: "100%"
    }}
  >
    <Container {...props} />
  </div>
);
