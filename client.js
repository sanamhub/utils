import { clone } from "@sanampakuwal/utils";

const arr = [1, 2, 3];
const newArr = clone(arr);
console.log(newArr);

// npm run parcel >> [ 1, 2, 3 ]
