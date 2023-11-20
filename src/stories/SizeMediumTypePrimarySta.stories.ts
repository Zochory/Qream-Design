import type { Meta, StoryObj } from "@storybook/vue3";
import SizeMediumTypePrimarySta from "../../SizeMediumTypePrimarySta.vue";

const meta: Meta<typeof SizeMediumTypePrimarySta> = {
  title: "/SizeMediumTypePrimarySta",
  component: SizeMediumTypePrimarySta,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SizeMediumTypePrimarySta>;

export const SizeMediumTypePrimaryStaStory: Story = {
  render: (args) => ({
    components: { SizeMediumTypePrimarySta },
    setup() {
      return { args };
    },
    template: '<SizeMediumTypePrimarySta v-bind="args" />',
  }),
  args: {
    label: "Button",
  },
};
