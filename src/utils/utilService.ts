const utilService = {
  isEmpty,
};

export function isEmpty(
  value: string | number | boolean | Array<any> | object
): boolean {
  return (
    value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    Number.isNaN(value) ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export default utilService;
