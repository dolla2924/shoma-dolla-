// غير القيم دي للبيانات الصح
const correctName = "دولا";
const correctDate = "2024-02-29";
const correctLoveText = "قد البحر وسمكاتو";

function start() {
    document.getElementById("welcomeCard").classList.add("hidden");
    document.getElementById("formCard").classList.remove("hidden");
}

function checkData() {
    const name = document.getElementById("nickname").value.trim();
    const date = document.getElementById("date").value;
    const loveText = document.getElementById("loveText").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (!name || !date || !loveText) {
        errorMsg.textContent = "ايه يا حبيبتي نسيتي تكتبي حاجة 😢";
        return;
    }

    if (name === correctName && date === correctDate && loveText === correctLoveText) {
        document.getElementById("formCard").classList.add("hidden");
        document.getElementById("successCard").classList.remove("hidden");
    } else {
        errorMsg.textContent = "غلط 😢 حاولي تاني";
    }
}
