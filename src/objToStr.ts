const ObjToStr = Object.prototype.toString

export default function (val: unknown): string {
  return ObjToStr.call(val)
}
