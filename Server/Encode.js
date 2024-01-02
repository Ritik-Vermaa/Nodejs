//encode base64 
// A - Z (26)
// a - z (26)
//0-9 (10)
// + (1)
// - (1)
const str = "Hello My Name is Ritik Verma";

const encode = btoa(str);
console.log(encode);

const decode = atob(encode);
console.log(decode);
