import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from './Counter.js'
function renderCounter(props) {
  let utils
  const children = jest.fn(stateAndHelpers => {
    utils = stateAndHelpers
    return null
  })
  return {
    ...render(<Counter {...props}>{children}</Counter>),
    children,
    // this will give us access to increment and count
    ...utils,
  }
}
test('counter increments the count', () => {
  const {children, increment} = renderCounter()
  expect(children).toHaveBeenCalledWith(expect.objectContaining({count: 0}))
  increment()
  expect(children).toHaveBeenCalledWith(expect.objectContaining({count: 1}))
})