import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PKSButton from '../components/atoms/button'
import { ButtonColorTypes, ThemeManagerActionType } from '../constants/types'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'
import ThemeManager from '../managers/themeManager'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'POIKUS/Button',
  component: PKSButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: Object.values(ButtonColorTypes).filter((x) => typeof x === 'string'),
      mapping: ButtonColorTypes,
      control: {
        type: 'select'
      }
    }
  },
  decorators: [
    (storyFn) => (
      <RecoilRoot>
        <RecoilNexus />
        {storyFn()}
      </RecoilRoot>
    )
  ]
} as ComponentMeta<typeof PKSButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PKSButton> = (args) => (
  <PKSButton
    {...args}
    onClick={() => {
      ThemeManager(ThemeManagerActionType.SWITCH)
    }}
  >
    {args.children}
  </PKSButton>
)

export const Color = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Color.args = {
  color: ButtonColorTypes.PRIMARY,
  children: ''
}
