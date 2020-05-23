import React from 'react'
import StreamerName from '../ui/molecules/StreamerName'
import Colors from '../ui/particles/Colors'
import Fonts from '../ui/particles/Fonts';

export default {
  title: 'StreamerName',
  parameters: {
    backgrounds: [
      { name: 'default', value: '#000000', default: true },
      { name: 'lightMode', value: '#FFFFFF' },
    ]
  },
  component: StreamerName
}

export const Default = () => (
  <StreamerName name="Ponce" color={Colors.purple}></StreamerName>
)

export const Green = () => (
  <StreamerName name="Ponce" color={Colors.green}></StreamerName>
)

export const LightMode = () => (
  <StreamerName name="Ponce" color={Colors.purple} nameColor={Colors.dark}></StreamerName>
)

LightMode.story = {
  parameters: {
    backgrounds: [
      { name: 'lightMode', value: '#FFFFFF' },
    ],
  },
};