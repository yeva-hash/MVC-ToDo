export class Resources {
  getList() {
    return ["url1", "url2", "url3"];
  }
}

export function logResource() {
  console.log("logResource");
}

const a;
const b;

export { a, b };
export default a;
