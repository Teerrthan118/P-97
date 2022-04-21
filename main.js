function translate_text() {
    text = document.getElementById("txt_area").value;
    localStorage.setItem("text_trans", text);
    window.location = "translate.html";
}