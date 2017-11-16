console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

let user = os.userInfo();
/* console.log(user);
{ uid: 501,
  gid: 20,
  username: 'ricardolara',
  homedir: '/Users/ricardolara',
  shell: '/bin/bash' 
} */

let res = notes.add(5,7);
console.log('node.add(5,7): ', res);

let filteredArr = _.uniq(['Lara', 1,1,2,3,4, 'Lara']);
console.log('filteredArr: ', filteredArr);


// fs.appendFile('greetings.txt', 'Hello World!');
// fs.appendFile('greetings.txt', 'Hello World!\n', function(err){
//     if(err){ console.log('Unable to write to file'); }
// });
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
