/**
 * Mock the fetch function because it is not in the scope of jest.
 */
export function mockFetch<T>(data: T) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    })
  })
}
