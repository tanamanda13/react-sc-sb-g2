import React from 'react'
import StreamerName from '../ui/molecules/StreamerName'
import Colors from '../ui/particles/Colors'
import Fonts from '../ui/particles/Fonts';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'StreamerName',
  parameters: {
    componentSubtitle: "Streamer's name displayed in streamer profil",
    backgrounds: [
      { name: 'default', value: '#000000', default: true },
      { name: 'lightMode', value: '#FFFFFF' },
    ]
  },
  component: StreamerName,
  decorators: [withKnobs]
}

export const Default = () => (
  <StreamerName name={text("Text", "Ponce")} color={Colors.purple}></StreamerName>
)

export const Green = () => (
  <StreamerName name={text("Text", "Ponce")} color={Colors.green}></StreamerName>
)

export const LightMode = () => (
  <StreamerName name={text("Text", "Ponce")} color={Colors.purple} nameColor={Colors.dark}></StreamerName>
)

Green.story = {
  parameters: { 
    docs: {
      storyDescription: `Other color test for icon.`,
    },
  },
};

LightMode.story = {
  parameters: {
    backgrounds: [
      { name: 'lightMode', value: '#FFFFFF' },
    ],
    docs: {
      storyDescription: `Streamer's name in light mode context.`,
    },
  },
};