import objToStr from './objToStr'

export default function (val: unknown) {
  return objToStr(val) === '[object Map]'
}
