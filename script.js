const users = {
  Sanjeev: {
    password: "sanjeev789",
    redirect: "Sindex.html"
  },
  rahul: {
    password: "sanjeev789",
    redirect: "rahul/index.html"
  }
};

function checkPassword(name) {
  const user = users[name];
  if (!user) {
    alert("User not found!");
    return;
  }
  const entered = prompt("Hey " + name + " Enter Your Password" + ":");
  if (entered === null) return;
  if (entered === user.password) {
    window.location.href = user.redirect;
  } else {
    alert("Incorrect password!");
  }
}
