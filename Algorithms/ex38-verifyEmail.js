// give an string, verify is a a valid email

function emailVerification(email) {
  return /^\w+@\w+\.\w+$/gi.test(email);
}

console.log(emailVerification("alberturo@gmail.com"));
