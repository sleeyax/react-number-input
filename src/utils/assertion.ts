// Function assertions
export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
}

export const __DEV__ = process.env.NODE_ENV !== "production"

export const __TEST__ = process.env.NODE_ENV === "test"

export function isNull(value: any): value is null {
  return value == null
}

export function isNotNumber(value: any) {
  return (
    typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)
  )
}
