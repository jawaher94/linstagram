document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // الحصول على القيم المدخلة
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // التحقق من أن الحقول غير فارغة
    if (username && password) {
        // عرض البيانات المدخلة
        alert(`Username: ${username}\nPassword: ${password}`);
        console.log(`Username: ${username}, Password: ${password}`);
    } else {
        alert('Please enter both username and password.');
    }
});