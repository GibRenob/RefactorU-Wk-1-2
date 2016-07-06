var phone = prompt("Enter your phone number: (000-000-0000)");

alert(phone.charAt(3, 7) === '-' || phone.length === 12);

var birth = prompt("Enter your birth date: (xx/xx/xx)");

alert(birth.charAt(3, 5) === '/' || birth.length === 8);

var postal = prompt("Enter your postal code: (xxxxx or xxxxx-xxxx)");

alert((postal.charAt(5) === '-' || postal.length === 10) || postal.length === 5);

var state = prompt("Enter your state: (AA)");

alert(state.toUpperCase() === state || state.length === 2);

var married = prompt("Are you married? (yes or no)");

alert(married.toUpperCase() === "YES" || married.toUpperCase() === "NO");
