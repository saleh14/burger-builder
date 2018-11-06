import React from 'react'
import { render } from 'react-testing-library'
import Layer from './../Layers/Layer'
import Cheese from './../Layers/Cheese'

test('should render layers wrapped inside Layer components', () => {
  const { debug, getByText, container } = render(<Layer><Cheese /></Layer>)
  expect(getByText(/cheese/i)).not.toBe(null)
  debug(container)
})
