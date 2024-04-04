import React, { useState, useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';

const TableExam = ({ noquestion, examId, subjectId, studentId, onUpload }) => {
  const [files, setFiles] = useState(Array(noquestion).fill(null));

  // Function to handle file upload
  const handleFileUpload = (event, index) => {
    const uploadedFile = event.target.files[0];
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = uploadedFile;
      return newFiles;
    });
  };

  const handleIconClick = (index) => {
    document.getElementById(`file-${index}`).click();
  };

  const handleUpload = (index) => {
    const file = files[index];
    if (file) {
      const formData = new FormData();
      formData.append('exam_id', examId);
      formData.append('subject_id', subjectId);
      formData.append('student_id', studentId);
      formData.append('question_id', index + 1); // Assuming question IDs start from 1
      formData.append('file', file);

      console.log("Sending data: ", {
        "Exam ID": examId,
        "Subject ID": subjectId,
        "Student": studentId,
        "Question": index + 1,
        "File": file
      });
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName',
        header: 'Question Id',
        Cell: ({ row }) => <span className='text-center flex justify-center items-center'>{row.index+1}</span>
      },
      
      {
        accessorKey: 'answerFile',
        header: 'Answer File',
        Cell: ({ row }) => (
          <label htmlFor={`file-${row.id}`} className='flex justify-center items-center'>
            {files[row.id] && <span>{files[row.id].name}</span>}
            <input type="file" id={`file-${row.id}`} style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, row.id)} />
            <button className='flex justify-center items-center' onClick={() => handleIconClick(row.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#fffffff" strokeWidth="2"></path>
                <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#fffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            {files[row.id] && (
              <button className='bg-blue-500 text-white text-center px-3 py-1 rounded-lg ml-2' onClick={() => handleUpload(row.id)}>Upload</button>
            )}
          </label>
        ),
      },
    ],
    [files]
  );

  const tableData = useMemo(() => {
    const rows = [];
    for (let i = 0; i < noquestion; i++) {
      rows.push({ id: i });
    }
    return rows;
  }, [noquestion]);

  const table = useMantineReactTable({
    columns,
    data: tableData,
  });

  return <MantineReactTable table={table} />;
};

export default TableExam;
