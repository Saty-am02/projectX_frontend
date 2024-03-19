import React, { useState } from 'react';

const Script = () => {
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
    <section>
      <div className='flex flex-col justify-center items-center relative top-48 gap-y-10'>

        <select
          name="exam"
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange placeholder:text-black placeholder:text-base text-base rounded-xl p-2 placeholder:text-center focus:outline-secondary-lightyellow w-64'
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

        <select
          name="subject"
          className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange placeholder:text-black placeholder:text-base text-base rounded-xl p-2 placeholder:text-center focus:outline-secondary-lightyellow w-64'
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

        {showSubmitButton && (
          <button
            className='border-secondary-darkEnglishblue border-2 bg-secondary-lightorange text-base rounded-3xl -mt-3 px-4 py-2 focus:outline-secondary-lightyellow w-64'
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </section>
  );
};

export default Script;
