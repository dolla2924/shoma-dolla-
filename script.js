function showForm() {
    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('formCard').classList.remove('hidden');
}

function checkData() {
    const nickname = document.getElementById('nickname').value.trim();
    const date = document.getElementById('date').value;
    const loveText = document.getElementById('loveText').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    // شرط بسيط لقبول الإجابات
    if (nickname === "" || date === "" || loveText === "") {
        errorMsg.textContent = "يا بنتي اكتبي البيانات متتعبنيش! 😒";
        return;
    }

    // الانتقال للرسالة
    document.getElementById('formCard').classList.add('hidden');
    document.getElementById('successCard').classList.remove('hidden');
}

function showDiary() {
    document.getElementById('successCard').classList.add('hidden');
    document.getElementById('diaryCard').classList.remove('hidden');
    
    // الصعود لأعلى الصفحة لقراءة المذكرات من البداية
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restart() {
    location.reload();
}