import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../../Button.vue";

const meta: Meta<typeof Button> = {
  title: "/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    label: "Button",
  },
};
