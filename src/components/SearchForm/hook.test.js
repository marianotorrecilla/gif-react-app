import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    act(() => {
        result.current.updateKeyword('jurassic park')
    })
    
    expect(result.current.keyword).toBe('jurassic park')
})

test('should use initial values', () => {
    const { result } = setup({initialKeyword: 'star wars'})

    expect(result.current.keyword).toBe('star wars')
})