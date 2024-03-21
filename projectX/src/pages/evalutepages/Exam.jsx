import React, { useState } from 'react';

const Exam = () => {

  const [exam, setExam] = useState('');
  const [subject, setSubject] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const onSelectedBoth = () => {
    if (subject !== '' || exam !== '') {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  };

  const handleSubmit = (event) => {
    // Your submit logic here
  };
  return (
    <section >
    <div className='flex flex-row justify-center items-center relative top-36 gap-y-10'>
      
      <div class="inputcon">
        <div class="search-container">
          <select
        name="exam"
        class="input"
        value={exam}
        onChange={(e) => {
          setExam(e.target.value);
          onSelectedBoth();
        }}
      >
        <option value="">Select Exam</option>
        <option value="2">Exam 2</option>
        <option value="3">Exam 3</option>
        <option value="4">Exam 4</option>
        <option value="5">Exam 5</option>
      </select>
        </div>
      </div>


      <div class="inputcon">
        <div class="search-container">
        <select
        name="subject"
        className='input'
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
          onSelectedBoth();
        }}
      >
        <option value="">Select Subject</option>
        <option value="2">Subject 2</option>
        <option value="3">Subject 3</option>
        <option value="4">Subject 4</option>
        <option value="5">Subject 5</option>
      </select>
        </div>
      </div>
      <div className='absolute top-28'>
      {showSubmitButton && (
        <button
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange text-base rounded-3xl -mt-3 px-4 py-2 focus:outline-secondary-lightyellow w-64'
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      </div>
      
    </div>
  </section>
  )
}

export default Exam
