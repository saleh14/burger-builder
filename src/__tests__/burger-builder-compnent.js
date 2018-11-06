import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import BurgerBuilder from './../BurgerBuilder'

test('should render layers wrapped inside Layer components', () => {
  const { queryByText, debug, getByText, getByTestId, container } = render(
    <BurgerBuilder />
  )
  expect(queryByText(/cheese/i)).toBeNull()
  fireEvent.click(getByTestId('plusIcon'))

  expect(getByText(/cheese/i)).not.toBeNull()

  fireEvent.click(getByText(/cheese/i))
  expect(getByText(/cheese layer/i)).not.toBeNull()

  debug(container)
})
