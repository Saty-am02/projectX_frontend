import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Question = () => {
  const answerScriptInputRef = useRef(null);
  const expectedAnswerInputRef = useRef(null);
  const [answerScriptFileName, setAnswerScriptFileName] = useState('');
  const [expectedAnswerFileName, setExpectedAnswerFileName] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false); // Track if both files are uploaded

  const handleAnswerScriptUpload = () => {
    answerScriptInputRef.current.click();
  };

  const handleExpectedAnswerUpload = () => {
    expectedAnswerInputRef.current.click();
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'AnswerScript') {
      setAnswerScriptFileName(file.name);
    } else if (type === 'ExpectedAnswer') {
      setExpectedAnswerFileName(file.name);
    }

    console.log(`Uploaded ${type} file:`, file);
  };

  useEffect(() => {
    // Check if both files are uploaded
    setShowSubmitButton(answerScriptFileName && expectedAnswerFileName);
  }, [answerScriptFileName, expectedAnswerFileName]);

  return (
    <section className=''>
      <div className='flex flex-col justify-center items-center relative top-48 gap-y-10'>
        <input
          type="text"
          name=""
          placeholder="Enter the Question"
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange placeholder:text-black placeholder:text-base text-base rounded-xl p-2 placeholder:text-center focus:outline-secondary-lightyellow w-64'
        />

        <input
          type="number"
          name=""
          accept='numeric'
          inputMode="numeric"
          pattern="[0-9]{1,3}"
          placeholder="Enter the Max Marks"
          className="border-secondary-darkEnglishblue border-2 text-center bg-secondary-lightorange placeholder:text-black placeholder:text-base text-base rounded-xl p-2 placeholder:text-center focus:outline-secondary-lightyellow w-64"
          min="0"
          max="100"
        />

        <button
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange  text-base rounded-3xl p-2 focus:outline-secondary-lightyellow w-64'
          onClick={handleAnswerScriptUpload}
        >
          {answerScriptFileName ? 'AnswerScript Uploaded' : 'Upload AnswerScript'}
        </button>
        <label className='text-secondary-lightenglishblue -mt-9'>{answerScriptFileName}</label>
        <input
          type="file"
          ref={answerScriptInputRef}
          style={{ display: 'none' }}
          onChange={(event) => handleFileChange(event, 'AnswerScript')}
          accept='.pdf'
        />

        <button
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange  text-base rounded-3xl -mt-3 px-4 py-2 focus:outline-secondary-lightyellow w-64'
          onClick={handleExpectedAnswerUpload}
        >
          {expectedAnswerFileName ? 'ExpectedAnswer Uploaded' : 'Upload ExpectedAnswer'}
        </button>
        <label className='text-secondary-lightenglishblue -mt-9'>{expectedAnswerFileName}</label>

        <input
          type="file"
          ref={expectedAnswerInputRef}
          style={{ display: 'none' }}
          onChange={(event) => handleFileChange(event, 'ExpectedAnswer')}
          accept='.pdf'
        />

        {showSubmitButton && <button className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange  text-base rounded-3xl -mt-3 px-4 py-2 focus:outline-secondary-lightyellow w-64'>Submit</button>}
      </div>

      <Canvas className='w-full bg-transparent relative top-40' camera={{ near: 0.1, far: 1000 }}>
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Question;
