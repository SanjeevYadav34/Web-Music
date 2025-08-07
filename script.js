const users = {
  Sanjeev: {
    password: "sanjeev789",
    redirect: "Sindex.html"
  },
  Rahul: {
    password: "rahul789",
    redirect: "rahul/index.html"
  },
  Vanita: {
    password: "vanita567",
    redirect: "Vanita/index.html"
  },
  Indrajit: {
    password: "indrajit2696",
    redirect: "Indrajit/index.html"
  },
  Sagar: {
    password: "sagar138",
    redirect: "Sagar/index.html"
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
