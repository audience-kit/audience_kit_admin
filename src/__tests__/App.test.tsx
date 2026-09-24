import { act, render, screen } from '@testing-library/react'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the current user once the query resolves', async () => {
    const environment = createMockEnvironment()
    render(<App environment={environment} />)

    expect(screen.getByText('Vite + React')).toBeTruthy()

    await act(async () => {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, {
          User: () => ({ name: 'Ada Admin' }),
        }),
      )
    })

    expect(await screen.findByText('Username: Ada Admin')).toBeTruthy()
  })
})
