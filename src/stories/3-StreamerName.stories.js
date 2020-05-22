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
  <StreamerName name="Ponce"></StreamerName>
)

export const LightMode = () => (
  <StreamerName name="Ponce"></StreamerName>
)

LightMode.story = {
  parameters: {
    backgrounds: [
      { name: 'lightMode', value: '#FFFFFF' },
    ],
  },
};