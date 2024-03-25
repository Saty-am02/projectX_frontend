import React, { useRef, useState, useEffect } from 'react';


const Question = () => {
  const [question, setQuestion] = useState('');
  const [marks, setMarks] = useState('');
  const answerScriptInputRef = useRef(null);
  const expectedAnswerInputRef = useRef(null);
  const [answerScriptFileName, setAnswerScriptFileName] = useState("");
  const [expectedAnswerFileName, setExpectedAnswerFileName] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false); // Track if both files are uploaded
  const [answerScript, setAnswerScript] = useState(null);
  const [expectedAnswer, setExpectedAnswer] = useState(null);


  const handleAnswerScriptUpload = () => {
    answerScriptInputRef.current.click();
  };

  const handleExpectedAnswerUpload = () => {
    expectedAnswerInputRef.current.click();
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'AnswerScript') {
      setAnswerScript(file);
      setAnswerScriptFileName(file.name);
    } else if (type === 'ExpectedAnswer') {
      setExpectedAnswer(file);
      setExpectedAnswerFileName(file.name);
    }

    console.log(`Uploaded ${type} file:`, file);
  };

  const handleSubmit = async (event) => {
    const queryParams = new URLSearchParams();
    queryParams.append('question', question);
    queryParams.append('mark', marks);

    const url = 'http://127.0.0.1:8000/evaluate/one?' + queryParams.toString();

    const formData = new FormData();
    formData.append('ES', expectedAnswer);
    formData.append('AS', answerScript);

    const response = await fetch(url, {
      method: 'POST',
      // headers: headers,
      body: formData
    })
    if (response.ok) {
      // Read the response body as JSON
      const responseData = await response.json();
      console.log(JSON.parse(responseData));
    } else {
      // Handle error response
      console.error('Error:', response.statusText);
    }
  };

  useEffect(() => {
    // Check if both files are uploaded
    setShowSubmitButton(answerScriptFileName && expectedAnswerFileName);
  }, [answerScriptFileName, expectedAnswerFileName]);

  return (
    <section className=''>
      <div className='flex flex-row justify-center items-center relative top-48 gap-y-10'>


        <div class="inputcon">
          <div class="search-container">
            <input
              type="text"
              name="question"
              placeholder="Enter the Question"
              className='input'
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>

        <div class="inputcon">
          <div class="search-container">
            <input
              type="number"
              name="marks"
              accept='numeric'
              inputMode="numeric"
              pattern="[0-9]{1,3}"
              placeholder="Enter the Max Marks"
              className='input'
              min="0"
              max="100"
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
        </div>


        <div class="inputcon">
          <div class="search-container">
            <button
              className='input'
              onClick={handleAnswerScriptUpload}
            >
              {answerScriptFileName ? 'AnswerScript Uploaded' : 'Upload AnswerScript'}
            </button>
            <label className='text-secondary-lightenglishblue -mt-9'>{answerScriptFileName}</label>
            <input
              type="file"
              ref={answerScriptInputRef}
              name='ansc'
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, 'AnswerScript')}
              accept='.pdf'
            />
          </div>
        </div>


        <div class="inputcon">
          <div class="search-container">
            <button
              className='input'
              onClick={handleExpectedAnswerUpload}
            >
              {expectedAnswerFileName ? 'ExpectedAnswer Uploaded' : 'Upload ExpectedAnswer'}
            </button>
            <label className='text-secondary-lightenglishblue -mt-9'>{expectedAnswerFileName}</label>

            
          </div>
        </div>
        <input
              type="file"
              ref={expectedAnswerInputRef}
              name='expec'
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, 'ExpectedAnswer')}
              accept='.pdf'
            />

        <div className='absolute top-48'>
          {showSubmitButton && <button className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange  text-base rounded-3xl -mt-3 px-4 py-2 focus:outline-secondary-lightyellow w-64'
            onClick={(event) => handleSubmit(event)}>Submit</button>}
        </div>
      </div>

    </section>
  );
};

export default Question;
