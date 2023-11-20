import Button from '../Button.vue';
import Button from '@/components/Button.vue';


const meta: Meta<typeof Button> = {
    title: "/Button",
    component: Button,
    tags: ["autodocs"],
};

export default meta;

export const ButtonStory: Story = {
    render: (args: any) => ({
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
