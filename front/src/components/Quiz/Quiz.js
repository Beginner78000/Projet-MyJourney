// Generation du questionnaire grace a Survey-react
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";
import "./quiz.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Quiz = ({ setDestination }) => {
  const [dataQuiz, setDataQuiz] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/quiz").then((res) => {
      setDataQuiz(res.data[0]);
    });
  }, []);

  StylesManager.applyTheme("modern");

  console.log(dataQuiz);

  const quiz = () => {
    return dataQuiz.map((oneQuiz) => {
      return {
        // name: `page${oneQuiz.id}`,

        elements: [
          {
            type: "radiogroup",
            name: `${oneQuiz.id}`,
            // minWidth: "400px",
            // maxWidth: "400px",
            title: oneQuiz.question,
            isRequired: true,
            choices: oneQuiz.response.map((oneResponse) => {
              return {
                value: oneResponse,
                text: oneResponse,
              };
            }),
            // choicesOrder: "random",
          },
        ],
        title: `Question ${oneQuiz.id}`,
      };
    });
  };

  const data = {
    locale: "fr",
    title: "Dites nous en plus...",
    logoPosition: "right",
    focusOnFirstError: false,
    focusFirstQuestionAutomatic: false,
    pages: quiz(),

    showCompletedPage: false,
    goNextPageAutomatic: true,
    showQuestionNumbers: "off",
    // showPageNumbers: true,
    showProgressBar: "bottom",
    progressBarType: "questions",
  };

  const survey = new Model(data);

  const navigate = useNavigate();

  async function sendDataToServer(data) {
    //send Axios request to your server
    const dataToSend = [];
    for (const e in data.data) {
      dataToSend.push(
        data.data[e]
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    }
    console.log(dataToSend);
    try {
      const res = await axios.post(
        "http://localhost:3002/api/quiz/results",
        dataToSend
      );
      setDestination(res.data);
      navigate("/quiz-results");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    // console.log("The results are: " + JSON.stringify(data.data));
  }

  return (
    <div className="quiz">
      <Survey model={survey} onComplete={sendDataToServer} />
    </div>
  );
};