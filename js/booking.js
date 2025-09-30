(function () {
    emailjs.init({
        publicKey: "qZRo3MDK1RFTNBLS0"
    });
})();

const modal = document.getElementById("bookingModal");
const openBtn = document.getElementById("openBooking");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("bookingForm");

openBtn.onclick = () => modal.style.display = "flex";

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_6zjn1sk", "template_zjnt27e", this)
        .then(() => {
            alert("Đặt phòng thành công! Thông tin đã gửi về email.");
            modal.style.display = "none";
            form.reset();
        }, (error) => {
            alert("Có lỗi xảy ra, vui lòng thử lại.");
            console.error(error);
        });
});