import debounce from "./debounce";

describe('debounce function', () => {
  it('when called, waits for the debounce limit before calling the function', async () => {
    jest.useFakeTimers()
    const mockFn = jest.fn();
    const timer = 100
    const debouncedFn = debounce(mockFn, timer, false);
    debouncedFn();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), timer);
  })

  it('when called, waits for the debounce limit before calling the function', async () => {
    const mockFn = jest.fn();
    const timer = 100
    const hits = 10
    const debouncedFn = debounce(mockFn, timer, false);
    for (let i = 0; i < hits; i++) { debouncedFn() } // call 10 times
    expect(mockFn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(timer)
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(hits + 1);
  })
})
