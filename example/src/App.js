import React from 'react'

import { PrimaryButton, SecondaryButton, TertiaryButton, BluesButton } from 'steelui'
import 'steelui/dist/index.css'

const App = () => {
  return (
    <div className='wrapper'>
      <PrimaryButton text="Button Primary" />
      <SecondaryButton text="Button Secondary" />
      <TertiaryButton text="Button Tertiary" />
      <BluesButton text="Button Blues" />
    </div>
  )
}

export default App
