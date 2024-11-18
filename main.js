import { Hashmap } from "./hashmap.js";

const hashmap = new Hashmap();

hashmap.set("raaynbo", "rayan");
hashmap.set("akira", "alexis");
hashmap.set("tahia", "alizee");

let ans = hashmap.get("akira");

console.log(ans);

ans = hashmap.remove("akira");
console.log(ans);
hashmap.set('akira', 'alexis')
ans = hashmap.has("mobu");
console.log(ans);
ans = hashmap.get("mobu");
console.log(ans);
ans = hashmap.has("raaynbo");
console.log(ans);


ans = hashmap.entries();

console.log(ans);


