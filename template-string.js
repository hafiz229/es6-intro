const first = "Sun Moon";
const second = "How are you?";
const third = `Hello, how are you?`;
const multiLine = `This is my first line
this is my second line
this is my third line`;

const friends = ["abul", "babul", "kabul", "sabul"];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + "</h3>";
const new1 = `<h3 class = "friend-name">Friend-${friends.length}</h3>`;
console.log(new1);

const firstName = "Mamun";
const lastName = "Chowdhury";
const fullOld = firstName + " " + lastName;
const fullNew = `This persons name is: ${firstName} ${lastName}`;
console.log(fullNew);
