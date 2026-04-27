import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders toolbar and the default table variant', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /regenerate data/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /antdvirtualtable/i })).toBeInTheDocument()
  })
})
