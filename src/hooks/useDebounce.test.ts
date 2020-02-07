import { renderHook } from '@testing-library/react-hooks'
import useDebounce from "./useDebounce";

test('when called, waits for the debounce limit before calling the function', async () => {
  let initialValue = '';
  const { result, rerender, waitForNextUpdate } = renderHook(() => useDebounce<string>(initialValue, 500))
  initialValue = 'hello'
  rerender()
  await waitForNextUpdate()
  expect(result.current).toBe('hello')
})
