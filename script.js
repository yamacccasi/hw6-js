let year = prompt("Введіть рік народження в числовому форматі");
let month = prompt("Введіть місяць народження в числовому форматі");
let day = prompt("Введіть день народження в числовому форматі");
let today = new Date().getFullYear();
let birthday = new Date(`${year}, ${month}, ${day}`);
function getAge() {
  return `${today - year}`;
}
console.log(birthday.toDateString());
console.log(getAge());

function createNewUser() {
  let newUser = {
    firstName: prompt("Введіть ваше ім'я"),
    lastName: prompt("Введіть ваше прізвище"),

    getLogin() {
      return (
        newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase()
      );
    },
    getPassword() {
      return newUser.firstName[0] + newUser.lastName.toLowerCase() + year;
    }
  };
  return newUser;
}

let result = createNewUser();
console.log(result.getLogin());
console.log(result.getPassword());
