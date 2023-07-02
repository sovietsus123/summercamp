// document.getElementById("login").addEventListener("click", () => {
//   let user = JSON.parse(localStorage.users);
//   let email = document.getElementById("email").value.trim();
//   let pass = document.getElementById("password").value.trim();
//   console.log(user, email, pass);

//   let check = user.filter((item) => item.email == email && item.pass == pass);
//   console.log(check);
//   if (check.length > 0) {
//     alert("Đăng nhập thành công");
//     location.replace("../logout.html");
//   } else alert("Đăng nhập không thành công");
// });

document.getElementById("login").addEventListener("click", () => {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("password").value;

  let listUser = JSON.parse(localStorage.getItem("users"));
  let check = listUser.filter(
    (item) => item.username == user && item.password == pass
  );

  if (check.length > 0) {
    alert("Đăng nhập thành công");
    location.replace("../logout.html");
  } else alert("Sai tài khoản hoặc chưa đăng ký");
});
