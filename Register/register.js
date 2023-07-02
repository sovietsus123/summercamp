// let register = document.getElementById("register");

// register.addEventListener("click", () => {
//   let email = document.getElementById("email").value.trim();
//   let pass = document.getElementById("password").value.trim();

//   if (email.length == 0 && pass.length == 0)
//     alert("Vui lòng nhậP email và password");
//   else if (email.length == 0) alert("Vui lòng nhậP email");
//   else if (pass.length == 0) alert("Vui lòng nhậP password");
//   else if (pass.length < 8) alert("Độ dài tối thiểu của password là 8");
//   else {
//     if (localStorage.users) {
//       let u = JSON.parse(localStorage.users);
//       u.push({
//         email: email,
//         pass: pass,
//       });
//       localStorage.setItem("users", JSON.stringify(u));
//     } else {
//       localStorage.setItem(
//         "users",
//         JSON.stringify([
//           {
//             email: email,
//             pass: pass,
//           },
//         ])
//       );
//     }

//     window.location.replace("../Login/login.html");
//     // window.location.href = "../index.html";
//   }
// });

// localStorage.setItem()

// {
//   username: user,
//   password: pass
// }

// localStorage.getItem();

document.getElementById("register").addEventListener("click", () => {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("password").value;

  if (user === "" && pass == "") alert("Enter your username and password");
  else if (user === "") alert("Enter your username");
  else if (pass === "") alert("Enter your password");
  else {
    if (localStorage.users) {
      // ocalStorage.getItem -> lấy dữ liệu trong local
      let listUser = JSON.parse(localStorage.getItem("users"));
      // Dữ liệu cũ trong local
      listUser.push({
        username: user,
        password: pass,
      });
      // Thêm tài khoản mới vừa đăng ký vào danh sách cũ -> danh sách ng dùng mới
      localStorage.setItem("users", JSON.stringify(listUser));
      // JSON.stringify -> chuyển dữ liệu về dạng string trước khi đưa vào local
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            username: user,
            password: pass,
          },
        ])
      );
    }

    location.replace("../Login/login.html");
  }
});
