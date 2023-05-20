import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    return (
        <div className='container mt-3'>
            <div className="card text-white bg-info mb-3">
                <div className='card-header'> Speech Recording
                    <div className='card-body text-warning'>
                        <p >Microphone: {listening ? 'on' : 'off'}</p>
                        <button className="btn btn-primary" onClick={startListening}>Start</button>
                        <button className="btn btn-danger ml-2" onClick={SpeechRecognition.stopListening}>Stop</button>
                        <button className="btn btn-success ml-2" onClick={resetTranscript}>Reset</button>
                        <p>{transcript}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;