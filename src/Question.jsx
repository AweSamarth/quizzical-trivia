import React from "react";

export default function Question(props) {
  const all_answers = props.incorrect_answers;
  //   console.log(all_answers);

  if (all_answers.length < 4) {
    all_answers.splice(Math.floor(Math.random() * 4), 0, props.correct_answer);
  }
  //   const temparr=all_answers.map((e)=>{something:"ok", somethingelse="e"})
  //   console.log(temparr)
  // className={e==props.correct_answer ? "blue" : "red"}
  const something = all_answers.map((ele) => {
    // console.log(props.question)
    return {
      value: ele,
      isCorrect: ele == props.correct_answer ? true : false,
      que: props.question,
    };
  });

  //   console.log(something[0])
  //   console.log(something)
  //   setDice(oldDice => oldDice.map(die => {
  //     return die.id === id ?
  //         {...die, isHeld: !die.isHeld} :
  //         die
  // }))

  const arraymapper = something.map((e) => {
    // console.log(e);

    return (
      <div className="containers-container" key={e.value}>
        <input id={e.value} name={e.que} type="radio" value={e.value} />

        <label
        //   id={e.value}
          name={e.que}
          className={e.value+" options"}
          onClick={(event) => {
            props.checker(e);
          }}
          value={e.value}
          htmlFor={e.value}
        //   style={{backgroundColor:""}}
        >
          {e.value}
        </label>
      </div>
    );
  });

  //   console.log(props);
  return (
    <div className="questiontop">
      <div className="main-question">
        <div className="onequestion" id="question">{props.question}</div>
        <div className="container">{arraymapper}</div>
        
      </div>
      
    </div>
  );
}
