import React, { useRef, useState, useEffect } from 'react';
import DonutChart from '../../componetnts/DonutChart';
import '../../assets/css/evaluatecss.css';

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
      <div className='flex flex-col col-span-2 justify-center items-center relative top-24 gap-y-10'>
        <div class="inputcon rounded-md">
          <div class="search-container rounded-md">
            <textarea
              type="text"
              name="question"
              placeholder="Enter the Question"
              className='input-question rounded-md text-center'
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>

        <div class="inputcon rounded-md">
          <div class="search-container rounded-md">
            <input
              type="number"
              name="marks"
              accept='numeric'
              inputMode="numeric"
              pattern="[0-9]{1,3}"
              placeholder='Max Marks'
              className='input-number rounded-md text-center'
              min="0"
              max="100"
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
        </div>

        {/* --------------------------------------------upload file ----------------------------------- */}

        <div className='flex gap-x-5'>
          <div className='text-center'>
            <label class="custum-file-upload" for="file"
              onClick={handleAnswerScriptUpload}
            >
              {answerScriptFileName ? 'AnswerScript Uploaded' : 'Upload AnswerScript'}
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
              </div>
              <div class="text">
                <span>Click to upload</span>
              </div>
              <input type="file"
                ref={answerScriptInputRef}
                name='ansc'
                style={{ display: 'none' }}
                onChange={(event) => handleFileChange(event, 'AnswerScript')}
                accept='.pdf'
              />

            </label>
            <label className='text-secondary-lightenglishblue -mt-9'>{answerScriptFileName}</label>
          </div>


          <div class="text-center">
            <label class="custum-file-upload" for="file"
              onClick={handleExpectedAnswerUpload}
            >
              {expectedAnswerFileName ? 'ExpectedAnswer Uploaded' : 'Upload ExpectedAnswer'}
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
              </div>
              <div class="text">
                <span>Click to upload</span>
              </div>
              <input type="file"
                ref={expectedAnswerInputRef}
                name='expec'
                style={{ display: 'none' }}
                onChange={(event) => handleFileChange(event, 'ExpectedAnswer')}
                accept='.pdf'
              />
            </label>
            <label className='text-secondary-lightenglishblue -mt-9'>{expectedAnswerFileName}</label>
          </div>
        </div>
        <div className='absolute top-96 mt-28'>
          {showSubmitButton && <button
            className='buttons'
            onClick={(event) => handleSubmit(event)}>Submit</button>}
        </div>
      
        <div class="cards mb-10 translate-y-52">
          <div class="tools flex flex-row">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
          </div>
          <div class="-mt-16 p-5">
          <DonutChart />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>

      </div>
    </section>
  );
};

export default Question;
