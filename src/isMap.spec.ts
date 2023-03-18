import isMap from './isMap'

describe('isMap', () => {
  it('test map', () => {
    expect(isMap(new Map())).toBe(true)
  })

  it('test WeakMap', () => {
    expect(isMap(new WeakMap())).toBe(false)
  })

  it('test empty object', () => {
    expect(isMap({})).toBe(false)
  })
})
