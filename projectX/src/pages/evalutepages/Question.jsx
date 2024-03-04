import React, { useRef } from 'react';

const Question = () => {
  const answerScriptInputRef = useRef(null);
  const expectedAnswerInputRef = useRef(null);

  const handleAnswerScriptUpload = () => {
    answerScriptInputRef.current.click();
  };

  const handleExpectedAnswerUpload = () => {
    expectedAnswerInputRef.current.click();
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    // Do something with the file, like uploading it or storing it in state
    console.log(`Uploaded ${type} file:`, file);
  };

  return (
    <section className=''>
      <div className='flex flex-col justify-center items-center relative top-48 gap-y-10'>
        <input
          type="text"
          name=""
          placeholder="Question"
          id=""
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange placeholder:text-black font-medium placeholder:text-base text-base rounded-3xl p-2 placeholder:text-center'
        />

        <input
          type="text"
          name=""
          placeholder='Max Marks'
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange placeholder:text-black font-medium placeholder:text-base text-base rounded-3xl p-2 placeholder:text-center'
        />

        <button
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange font-medium text-base rounded-3xl p-2'
          onClick={handleAnswerScriptUpload}
        >
          Upload AnswerScript
        </button>
        <input
          type="file"
          ref={answerScriptInputRef}
          style={{ display: 'none' }}
          onChange={(event) => handleFileChange(event, 'AnswerScript')}
          accept='.pdf'
        />

        <button
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange font-medium text-base rounded-3xl p-2'
          onClick={handleExpectedAnswerUpload}
        >
          Upload ExpectedAnswer
        </button>
        <input
          type="file"
          ref={expectedAnswerInputRef}
          style={{ display: 'none' }}
          onChange={(event) => handleFileChange(event, 'ExpectedAnswer')}
          accept='.pdf'
        />
      </div>
    </section>
  );
};

export default Question;
