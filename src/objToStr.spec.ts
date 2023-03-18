import objToStr from './objToStr'

describe('objToStr', () => {
  it('string', () => {
    expect(objToStr('')).toBe('[object String]')
  })

  it('boolean', () => {
    expect(objToStr(false)).toBe('[object Boolean]')
  })

  it('number', () => {
    expect(objToStr(1)).toBe('[object Number]')
  })

  it('null', () => {
    expect(objToStr(null)).toBe('[object Null]')
  })

  it('RegExp', () => {
    expect(objToStr(new RegExp(''))).toBe('[object RegExp]')
  })

  it('Object', () => {
    expect(objToStr({})).toBe('[object Object]')
  })

  it('Array', () => {
    expect(objToStr([])).toBe('[object Array]')
  })

  it('Map', () => {
    expect(objToStr(new Map())).toBe('[object Map]')
  })

  it('WeakMap', () => {
    expect(objToStr(new WeakMap())).toBe('[object WeakMap]')
  })

  it('Set', () => {
    expect(objToStr(new Set())).toBe('[object Set]')
  })

  it('WeakSet', () => {
    expect(objToStr(new WeakSet())).toBe('[object WeakSet]')
  })
})
