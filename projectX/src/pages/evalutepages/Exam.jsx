import React, { useState, useEffect } from "react";
import TableExam from "../../componetnts/TableExam";
// ------------------------Answer script-------------------------

const Exam = () => {
  console.log("Answer script");
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [regNo,setRegNo]=useState("");
  const [exams, setExams] = useState([]);

  const onSelectedBoth = () => {
    if (subject !== "" || exam !== "") {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  };

  const getExams = async () => {
    const url = "http://127.0.0.1:8000/examIDs";

    try {
      let response = await fetch(url, {
        method: "GET",
      });

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
      let response = await fetch(url, {
        method: "GET",
      });

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

  const handleSubmit = (event) => {
    // Your submit logic here
  };

  useEffect(() => {
    getExams();
    getSubjects();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center relative top-24 gap-y-10">
        <div className="flex flex-row">


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
                {exams.map((exam, index) => (
                  <option key={index} value={exam}>
                    {exam}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div class="inputcon">
            <div class="search-container">
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
                  <option key={index} value={index + 2}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="inputcon">
            <div class="search-container">
              <select
                name="regNo"
                className="input"
                value={regNo}
                onChange={(e) => {
                  setRegNo(e.target.value);
                  onSelectedBoth();
                }}
              >
                <option value="">Student Id</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={index + 2}>
                    {regNo}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <TableExam/>
        </div>

        <div className="relative -mt-10">
          {/* {showSubmitButton && ( */}
          <button
            className="buttons"
            onClick={(event) => handleSubmit(event)}
          >
            Evaluate
          </button>
          {/* )} */}
        </div>
      </div>

    </section>
  );
};

export default Exam;
