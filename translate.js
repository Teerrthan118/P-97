text = localStorage.getItem("text_trans");
document.getElementById("translated_txt").innerHTML = text;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 
    'google_translate_element'
    );
}
function back() {
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en'
        }, 
        'google_translate_element'
        );
    }
    window.location = "index.html";
}