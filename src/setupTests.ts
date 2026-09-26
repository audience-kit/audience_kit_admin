import { vi } from 'vitest'

// relay-test-utils expects Jest's global mock API.
Object.assign(globalThis, { jest: vi })
