// flatpickr("#dob", {
//     dateFormat: "d/m/Y",
//     maxDate: "today"
// });

const fp = flatpickr("#dob", {
    dateFormat: "d/m/Y",
    maxDate: "today"
});

document.querySelector(".input-icon").addEventListener("click", () => {
    fp.open();
});

