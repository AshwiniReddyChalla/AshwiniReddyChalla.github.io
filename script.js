window.onload = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const transcription = document.getElementById('transcription');
    const startButton = document.getElementById('start-recognition');

    startButton.addEventListener('click', () => {
    recognition.start();
    });

    recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    transcription.value = transcript;
    });

    recognition.addEventListener('end', () => {
    const finalTranscript = transcription.value;
    console.log(`Recognition complete: ${finalTranscript}`);
    });

    recognition.addEventListener('error', (event) => {
    console.log(`Error occurred in recognition: ${event.error}`);
    });
}