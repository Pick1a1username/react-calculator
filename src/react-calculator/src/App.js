import React from 'react';
import DisplayContainer from './containers/DisplayContainer'
import NumberPadContainer from './containers/NumberPadContainer'

const App = () => (
  <div>
    <DisplayContainer value={0} />
    <NumberPadContainer />
  </div>
)
export default App