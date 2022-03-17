// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import 'vitest'

// eslint-disable-next-line no-duplicate-imports
import { vi } from 'vitest'

// To avoid navigation not implemented error
const mockResponse = vi.fn()
Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
    reload: vi.fn(),
  },
  writable: true,
})

Object.defineProperty(window, '_env_', {
  value: {
    REACT_APP_FEDID_AUTHORITY: 'REACT_APP_FEDID_AUTHORITY',
    REACT_APP_FEDID_CLIENT_ID: 'REACT_APP_FEDID_CLIENT_ID',
  },
  writable: true,
})
