function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-300px"; // 닫기
    } else {
        menu.style.left = "0px"; // 열기
    }
}
