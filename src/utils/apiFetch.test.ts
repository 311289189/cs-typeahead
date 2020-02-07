import apiFetch from "./apiFetch";

const { Headers } = jest.requireActual('node-fetch');

describe('apiFetch', () => {
  it('errors with an incorrect/unknown Content-Type', () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(),
      headers: new Headers({ 'Content-Type': 'application/octet-stream' })
    } as Response))
    expect(apiFetch('', {})).rejects.toThrowError(new Error('unsupported Content-Type: application/octet-stream'))
  })

  it('resolves with application/json Content-Type', () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ someData: '234' }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    } as Response))
    expect(apiFetch('', {})).resolves.toMatchObject({ json: { someData: '234' } })
  })
})
