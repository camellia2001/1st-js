//object

const ob={
    name:"camellia",
    roll:28,
    result:"pass"
}
ob.name="cam";
// console.log(ob);
console.log(ob.name);
// console.log(ob["name"]);
Object.freeze(ob);
ob.name="camie";
// console.log(ob);
console.log(ob.name);