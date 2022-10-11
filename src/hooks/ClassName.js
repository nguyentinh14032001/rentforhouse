export default function ClassName(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        console.log(acc);
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}
export function ClassName1(...args) {
  console.log(args);
}
