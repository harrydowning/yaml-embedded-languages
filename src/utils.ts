export function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function _hasKey<K extends string>(
  obj: object,
  key: K,
): obj is { [P in K]: unknown } {
  return key in obj;
}

export function hasKey<K extends string, T>(
  obj: object,
  key: K,
  isType: (value: unknown) => value is T,
): obj is { [P in K]: T } {
  return _hasKey(obj, key) && isType(obj[key]);
}