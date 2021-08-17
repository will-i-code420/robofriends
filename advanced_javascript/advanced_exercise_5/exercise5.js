// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
  let {username} = user;
  username += '!';
  newArray.push(username);
})
console.log(newArray)

//Create an array using map that has all the usernames with a "? to each of the usernames
let newArray = array.map(user => `${user.username}?`)
console.log(newArray)

//Filter the array to only include users who are on team: red
const list = array.filter(user => user.team === 'red')

//Find out the total score of all users using reduce
const totalScore = array.reduce((a, b) => a + b)

// (1), what is the value of i? it is the current index of the arrayNum newArray is on during the map
// (2), Make this map function pure: const newArray = arrayNum.map((num, i) => num * 2)
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const allUsers = array.map(user => {
  user.items = user.items.map(item => `${item}!`)
  return user
})