import { act, renderHook } from '@testing-library/react-hooks'
import useList from './useList';

describe('useList', () => {
    it('should return default ElPerPages as 10', () => {
        const {result} = renderHook(() => useList());
        expect(result.current.elPerPages).toBe(10);
    })

    it('should return ElPerPages = 20', () => {
        const {result} = renderHook(() => useList({elPerPages: 20}));
        expect(result.current.elPerPages).toBe(20);
    })

    it('should change elPerPages value', () => {
        const {result} = renderHook(() => useList());
        act(() => {
            result.current.setElPerPages(20);
        })
        expect(result.current.elPerPages).toBe(20);
    })

    it('should be on page 1', () => {
        const {result} = renderHook(() => useList());
        expect(result.current.page).toBe(1);
    })

    it('should be on page 2', () => {
        const {result} = renderHook(() => useList({page: 2}));
        expect(result.current.page).toBe(2);
    })

    it('should change the current page', () => {
        const {result} = renderHook(() => useList());
        act(() => {
            result.current.setPage(2);
        })
        expect(result.current.page).toBe(2);
    })
})
