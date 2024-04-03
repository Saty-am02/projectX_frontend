import React, { useEffect, useState } from "react";
import "../../assets/css/cards.css";
import TableScript from "../../componetnts/TableScript";
// --------------------------------Evaluate scheme--------------------------------
const Script = () => {
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState("");
  const [marks, setMarks] = useState([]);
  const [questionIds, setQuestionIds] = useState([]);
  const [files, setFiles] = useState([]);

  const getExams = async () => {
    const url = "http://127.0.0.1:8000/examIDs";
    try {
      let response = await fetch(url, { method: "GET" });
      if (response.ok) {
        let jsonData = await response.json();
        setExams(jsonData["Exams"]);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSubjects = async () => {
    const url = "http://127.0.0.1:8000/get_subjects";
    try {
      let response = await fetch(url, { method: "GET" });
      if (response.ok) {
        let jsonData = await response.json();
        const subjectKeys = Object.keys(jsonData);
        setSubjects(subjectKeys);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSelectedBoth = () => {
    if (subject !== "" || exam !== "") {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  };

  const send_data = async(examid, sub, marks, qid, ques, file) => {
    const queryParams = new URLSearchParams();
    queryParams.append('exam_id', examid);
    queryParams.append('subject_id', sub);
    queryParams.append('mark', marks);
    queryParams.append('question_id', qid);
    queryParams.append('question_str', ques);

    const url = 'http://127.0.0.1:8000/evaluate/esupload?' + queryParams.toString();
    
    console.log("Sending data: ");
    console.log("Exam_id: ", examid);
    console.log("subject_id: ", sub);
    console.log("mark: ", marks);
    console.log(qid, ques)
    console.log("ES: ", files);

    try {
      const response = await fetch(url,{
        method: "POST",
        body: file
      })

      if(response.ok) {
        console.log(response)
      } 
    } catch(e) {
      console.log("Error submitting data: ", e);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    for (let i = 0; i < totalQuestions; i++) {
      const formData = new FormData();
      formData.append("ES", files[i]);
      send_data(exam, subject, marks[i], i+1, questionIds[i], formData);
    }
  };

  useEffect(() => {
    getExams();
    getSubjects();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center relative top-24 gap-y-10">
        <div className="flex">
          <div className="inputcon">
            <div className="search-container">
              <select
                name="exam"
                className="input"
                value={exam}
                onChange={(e) => {
                  setExam(e.target.value);
                  onSelectedBoth();
                }}
              >
                <option value="">Select Exam</option>
                {exams.map((exam, index) => (
                  <option key={index} value={exam}>
                    {exam}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="inputcon">
            <div className="search-container">
              <select
                name="subject"
                className="input"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  onSelectedBoth();
                }}
              >
                <option value="">Select Subject</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="inputcon rounded-md">
          <div className="search-container rounded-md">
            <input
              className="input-number rounded-md text-center"
              type="text"
              placeholder="Total Questions"
              value={totalQuestions}
              onChange={(e) => {
                setTotalQuestions(e.target.value);
                setMarks(Array(parseInt(e.target.value)).fill(""));
                setQuestionIds(Array(parseInt(e.target.value)).fill(""));
                setFiles(Array(parseInt(e.target.value)).fill(null));
              }}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <TableScript
            noquestion={totalQuestions}
            marks={marks}
            setMarks={setMarks}
            questionIds={questionIds}
            setQuestionIds={setQuestionIds}
            files={files}
            setFiles={setFiles}
          />
        </div>

        <div className="">
          {showSubmitButton && (
            <button className="buttons" onClick={(event) => handleSubmit(event)}>
              Submit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Script;
