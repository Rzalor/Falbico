let users = [];

function register() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  if (username && password) {
    users.push({ username, password });
    alert('ثبت‌نام با موفقیت انجام شد!');
    console.log(users);
  } else {
    alert('لطفاً همه فیلدها را پر کنید.');
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const userExists = users.find(user => user.username === username && user.password === password);

  if (userExists) {
    alert('ورود موفقیت‌آمیز!');
  } else {
    alert('نام کاربری یا رمز عبور اشتباه است.');
  }
}function register() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  if (username && password) {
    // ذخیره اطلاعات کاربر در LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('ثبت‌نام با موفقیت انجام شد!');
  } else {
    alert('لطفاً همه فیلدها را پر کنید.');
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find(user => user.username === username && user.password === password);

  if (userExists) {
    alert('ورود موفقیت‌آمیز!');
    // انتقال به صفحه اصلی یا پروفایل (اگر داشتی)
  } else {
    alert('نام کاربری یا رمز عبور اشتباه است.');
  }
}