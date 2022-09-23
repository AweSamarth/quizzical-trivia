import "./App.css";
import Question from "./Question";
import React from "react";
import Landing from "./Landing";

export default function App() {
  var count=0
  
  console.log("State changed")
  const [questions, setQuestions] = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [choices, setChoices] = React.useState([]);

  let qarray = [];
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  let correctarray=[];
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        data.results.map((a) => {
          // console.log(a)
          qarray.push(a);
          // console.log(decodeHtml(a.question))
        });
        setQuestions(qarray);
        // console.log(qarray);
      });
  }, []);
  function setter() {
    setStarted(!started);
  }

    function questionChecker(){
      for(let i=0;i<choices.length; i++){
        console.log(choices[i].value)
        let element = document.getElementsByClassName(choices[i].value)[0]
        if (choices[i].isCorrect){
          element.className+=" correct"
          console.log(choices[i])
          console.log("this works")
          count++
          
          
        }
        else(
          element.className+=" incorrect"
        )

        
        
      }
      for (let i=0;i<correctarray.length;i++){
        let element = document.getElementsByClassName(correctarray[i])[0]
        element.className+=" correct"
  
      }

      
      console.log(count)
      document.getElementById("counter").textContent="You scored"+count+"/5"
      
    }
  const thequestions = questions.map((q) => {
    const temparr = q.incorrect_answers
    const incorrect_answers= temparr.map(e=>decodeHtml(e))
    correctarray.push(q.correct_answer)
    console.log(correctarray)
    function checker(e){

      let temporarr = choices
      temporarr.push(e)
      for (let i of temporarr){
        if (i.que ==e.que && i!=e){
          temporarr.splice(temporarr.indexOf(i), 1)
          
        }
        setChoices[temporarr]
      }
      if (e.isCorrect){
        console.log("tru hai bosh")
      }


    }

    return (
      <Question
        category={q.category}
        question={decodeHtml(q.question)}
        correct_answer={q.correct_answer}
        incorrect_answers={incorrect_answers}
        checker={checker}
        key={q.question}
        setChoices={setChoices}
      />
    );
  });



  return (
    <div id="mainer">
      {!started ? (
        <Landing setter={setter} />
      ) : (

        <div className="toplevel">
          <div id="top-right-styler-1"></div>
          <div id="bottom-left-styler-1"></div>
          <div className="questions">

          {thequestions}
          </div>
          <div className="anydiv">
          <button id ="deezbutton"onClick={questionChecker}>
            Check crow 
          </button>
          <div id="counter"></div>
          </div>
        </div>
      )}
    </div>
  );
}
