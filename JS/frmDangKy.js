
function laEmailHopLe(email) {
    const quyTac = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return quyTac.test(email);
}

const formDangKy = document.getElementById('formDangKy');

if (formDangKy) {
    formDangKy.addEventListener('submit', function (suKien) {
        suKien.preventDefault();
        const hoTen = document.getElementById('dkHoTen').value.trim();
        const email = document.getElementById('dkEmail').value.trim();
        const matKhau = document.getElementById('dkMatKhau').value.trim();
        const xacNhan = document.getElementById('dkXacNhan').value.trim();

        // KIỂM TRA HỌ TÊN
        if (hoTen === '') {
            alert("Vui lòng nhập họ tên !");
            return;
        }
        if (hoTen.length < 2) {
            alert("Tên không hợp lệ !");
            return;
        }
        // Kiểm tra chữ cái đầu viết hoa 
        if (!/^[A-ZÀ-Ỹ]/.test(hoTen)) {
            alert("Chữ cái đầu tiên của họ tên phải viết hoa!");
            return;
        }
        // Kiểm tra không có kí tự đặc biệt và số 
        if (!/^[a-zA-ZÀ-Ỹa-zá-ỹ\s]+$/.test(hoTen)) {
            alert("Họ tên chỉ được chứa chữ cái, không được có số hay kí tự đặc biệt!");
            return;
        }

        // EMAIL
        if (email === '') {
            alert("Vui lòng nhập địa chỉ email!");
            return;
        } else if (!laEmailHopLe(email)) {
            alert("Email chưa đúng định dạng (VD: xxxx@gmail.com) , vui lòng kiểm tra lại!");
            return;
        }

        // KIỂM TRA MẬT KHẨU 
        if (matKhau === '') {
            alert("Chưa nhập mật khẩu !");
            return;
        }
        if (matKhau.length < 8) {
            alert("Mật khẩu yếu , phải dài ít nhất 8 kí tự!");
            return;
        }
        if (!/[A-Z]/.test(matKhau)) {
            alert("Mật khẩu phải chứa ít nhất 1 chữ cái IN HOA!");
            return;
        }
        if (!/[a-z]/.test(matKhau)) {
            alert("Mật khẩu phải chứa ít nhất 1 chữ cái viết thường!");
            return;
        }
        if (!/[0-9]/.test(matKhau)) {
            alert("Mật khẩu phải có ít nhất 1 chữ số!");
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(matKhau)) {
            alert("Mật khẩu phải có ít nhất 1 kí tự đặc biệt (Ví dụ: @, #, $,...)!");
            return;
        }

        // KIỂM TRA XÁC NHẬN MẬT KHẨU
        if (xacNhan === '') {
            alert("Nhập lại mật khẩu để xác nhận ");
            return;
        } else if (matKhau !== xacNhan) {
            alert("Mật khẩu không khớp");
            return;
        }
        alert('Đăng ký thành công !');
    });
}