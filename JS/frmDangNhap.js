
function laEmailHopLe(email) {
    const quyTac = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return quyTac.test(email);
}

const formDangNhap = document.getElementById('formDangNhap');

if (formDangNhap) {
    formDangNhap.addEventListener('submit', function (suKien) {
        suKien.preventDefault();

        const email = document.getElementById('dnEmail').value.trim();
        const matKhau = document.getElementById('dnMatKhau').value.trim();

        if (email === '') {
            alert("Vui lòng nhập email !");
            return;
        } else if (!laEmailHopLe(email)) {
            alert("Sai định dạng email , vui lòng nhập lại ! ");
            return;
        }

        if (matKhau === '') {
            alert("Vui lòng nhập mật khẩu ! ");
            return;
        }

        alert("Đăng nhập thành công !");
    });
}