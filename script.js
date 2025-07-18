const users = {
  sanjeev: {
    password: "sanjeev789",
    redirect: "Sindex.html"
  }
};

function checkPassword(name) {
  const user = users[name];
  if (!user) {
    alert("User not found!");
    return;
  }
  const entered = prompt("Enter password for " + name + ":");
  if (entered === null) return;
  if (entered === user.password) {
    window.location.href = user.redirect;
  } else {
    alert("Incorrect password!");
  }
}
