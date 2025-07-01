document.addEventListener('DOMContentLoaded', function() {
    let translateBtn = document.getElementById('translate-btn');
    let inputText = document.getElementById('input-text');
    let outputText = document.getElementById('output-text');
    
    
    translateBtn.addEventListener('click', clickHandler);
    
    function clickHandler() {
       
        let textToTranslate = inputText.value.trim();
        
        
        if (!textToTranslate) {
            outputText.value = 'Please enter some text to translate!';
            return;
        }
        
        
        translateBtn.disabled = true;
        translateBtn.textContent = 'Translating...';
        
        
        let apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${encodeURIComponent(textToTranslate)}`;
        
        
        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
               
                outputText.value = data.contents.translated;
            })
            .catch(error => {
               
                outputText.value = `Error: ${error.message}`;
                
            })
            .finally(() => {
                translateBtn.disabled = false;
                translateBtn.textContent = 'Translate';
            });
    }
});