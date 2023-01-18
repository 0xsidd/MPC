const Shamir = require("./shamir");

// let secret = 'shamirSecretTest';
// let hexSecret = Buffer.from(secret).toString('hex');
let hexSecret = 'ABC'
let shares = Shamir.generateShares(hexSecret, 3, 2);

console.log(shares);
// let secretDataHex = Shamir.deriveSecret([
//   '02e7a8d7223c667c38e20ee304c17e78d615bbadf6443a182160b9e9beeb0255d1f767fc28f8f8a8cdc3a0656597e52df5',
//   '031afc32332255422493091c062f4144335b4beca37dcdd2dd18a1441642dc3d2fec40dd30c15aabbbee920f3d34a65190'
//   ]);
  
// // //   let secret = Buffer.from(secretDataHex, 'hex').toString('utf-8');
//   console.log(secretDataHex);
  
  // shamirSecretTest


//9e03778296d3fa8cd4ee9b2aa41cdf3ff7cb4f154e0ddb2aab9e29a61db70c6c