import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ReactWhatsappButton } from "../components/Button";

export default {
  title: "Whatsapp Button",
  component: ReactWhatsappButton,
  args: {
    countryCode: "51",
    phoneNumber: "987654321",
  },
};

const Template = (args) => <ReactWhatsappButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  countryCode: "51",
  phoneNumber: "987654321",
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  countryCode: "51",
  phoneNumber: "987654321",
  message: "Hola 👋",
};

export const WithDiferentStyle = Template.bind({});
WithDiferentStyle.args = {
  countryCode: "51",
  phoneNumber: "987654321",
  style: {
    backgroundColor: "#00a4f5",
    right: "unset",
    left: "10px",
  },
};

export const WithCallback = Template.bind({});
WithCallback.args = {
  countryCode: "51",
  phoneNumber: "987654321",
  callback: () => {
    alert("Click!");
  },
};

export const Animated = Template.bind({});
Animated.args = {
  countryCode: "51",
  phoneNumber: "987654321",
  animated: true,
};
