const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeString('hello'))
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";
