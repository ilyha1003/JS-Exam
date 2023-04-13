const wordList = document.querySelector('.word__list');

const fillListElement = (apiData) => {
    apiData.forEach((el) => {
        const listElement = document.createElement('li');
        listElement.classList.add('list__element');
        listElement.classList.add('list-group-item');

        const wordSection = document.createElement('section');
        wordSection.classList.add('word-section');
        wordSection.innerText = el.word;

        const meaningsSection = document.createElement('section');
        meaningsSection.classList.add('meaning-section');

        const phoneticsSection = document.createElement('section');
        phoneticsSection.classList.add('phonetics-section');


        el.meanings.forEach((el) => {
            const meaningsWrapper = document.createElement('div');
            meaningsWrapper.classList.add('meanings-wrapper');

            const partOfSpeechWrapper = document.createElement('div');
            partOfSpeechWrapper.classList.add('speechpart-wrapper');

            const partOfSpeech = el.partOfSpeech;

            const definitionsWrapper = document.createElement('div');
            definitionsWrapper.classList.add('definitions-wrapper');
            definitionsWrapper.innerText = 'Definitions:';

            const showDefinitionsButton = document.createElement('i');
            showDefinitionsButton.value = 0;
            showDefinitionsButton.classList.add('show-button');
            showDefinitionsButton.classList.add('fa-solid');
            showDefinitionsButton.classList.add('fa-plus');
            definitionsWrapper.append(showDefinitionsButton);
            
            const wordDefinitions = document.createElement('div');
            wordDefinitions.classList.add('definitions');
            wordDefinitions.classList.add('hidden');
            
            el.definitions.forEach((el) => {
                const definitionSpan = document.createElement('span');
                definitionSpan.classList.add('definition');
                const definition = el.definition;
                definitionSpan.innerText = definition;
                wordDefinitions.append(definitionSpan);
            });

            definitionsWrapper.append(wordDefinitions);

            partOfSpeechWrapper.innerText = 'Part of speech: ' + partOfSpeech;

            meaningsWrapper.append(partOfSpeechWrapper, definitionsWrapper);
            meaningsSection.append(meaningsWrapper);

            showDefinitionsButton.addEventListener('click', () => {
                wordDefinitions.classList.toggle('hidden');
                if(showDefinitionsButton.value === 0) {
                    showDefinitionsButton.classList.remove('fa-plus');
                    showDefinitionsButton.classList.add('fa-minus');
                    showDefinitionsButton.value = 1;
                } else {
                    showDefinitionsButton.classList.remove('fa-minus');
                    showDefinitionsButton.classList.add('fa-plus');
                    showDefinitionsButton.value = 0;
                }
            });
        });

        el.phonetics.forEach((el) => {
            if(el.text && el.audio) {
                const phoneticField = document.createElement('div');
                phoneticField.classList.add('phonetic-field');
                phoneticField.innerText = 'Transcription: '
                const transcriptionField = document.createElement('div');
                transcriptionField.classList.add('transcription-field');
                transcriptionField.innerText = el.text;
                const audioField = document.createElement('div');
                
                const audio = document.createElement('i');
                audio.classList.add('audio');
                audio.classList.add('fa-solid');
                audio.classList.add('fa-volume-high');
                audioField.append(audio);
                audio.addEventListener('click', () => {
                    const audioFile = new Audio();
                    audioFile.src = el.audio;
                    audioFile.play();
                });

                phoneticField.append(transcriptionField, audioField);
                phoneticsSection.append(phoneticField);
            }
            
        });
        
        listElement.append(wordSection, meaningsSection, phoneticsSection);
        wordList.append(listElement);
    });
}

export default fillListElement;