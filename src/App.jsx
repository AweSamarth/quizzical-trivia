import "./App.css";
import Question from "./Question";
import React from "react";
import Landing from "./Landing";

export default function App() {
  const [questions, setQuestions] = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [choices, setChoices] = React.useState([]);
  const [correctCount, setCorrectCount]=React.useState(0)

  let qarray = [];
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

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

  // const qlist=questions.map(q=>(<Question category={q.category} />))
  const thequestions = questions.map((q) => {
    // all_answers.splice(Math.floor(Math.random()*4),0,q.correct_answer)
    // console.log(all_answers)
    const temparr = q.incorrect_answers
    const incorrect_answers= temparr.map(e=>decodeHtml(e))
    // console.log(q.incorrect_answers)
    // function checker(e) {
    //   if (choices.includes(e.target.value)){
    //    const temparr = choices.filter((x)=>x!=e.target.value) 
    //    console.log(temparr)
    //   }
    //   else{
    //     setChoices(prev=>[...prev, e.target.value])
    //     console.log(choices)
    //   }
    // }
    function checker(e){
      // console.log((e.target.textContent))
      // console.log(q.correct_answer)
      console.log(e.target)
      if (e.target.textContent==q.correct_answer.toString()){
        console.log("yay")
        
      }
      // console.log(e.target.textContent)
      // console.log(q.correct_answer)

        // e.target.style.background ="red"
      
    }

    function therealchecker(){
      
    }
    return (
      <Question
        category={q.category}
        question={decodeHtml(q.question)}
        correct_answer={q.correct_answer}
        incorrect_answers={incorrect_answers}
        checker={checker}
        key={q.question}
      />
    );
  });
  function therealchecker(){

  }

  function counter(){
    return(
      <div>count</div>
    )
  }
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
          <button onClick={counter}>
            Click this button to see the magic happen
          </button>
        </div>
      )}
    </div>
  );
}
