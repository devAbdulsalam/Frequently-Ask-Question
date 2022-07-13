const questions = document.querySelectorAll(".question");

// const questionBtn = document.querySelectorAll(".question_btn");

// questionBtn.forEach(function (button){
//      //console.log(questionBtn)
//     button.addEventListener('click', function(e){
//         const  openAnswer = e.currentTarget.parentElement.parentElement;
//          //console.log(openAnswer)
//         questions.forEach(function(question){
//                 question.classList.remove("open_answer")
//         })
//         openAnswer.classList.toggle("open_answer");
//         console.log(openAnswer)
//     });
// });


// // or using each question selectors
// questions.forEach(function(question){
//             //console.log(question)
//         const btn = question.querySelector(".question_btn")
//             // console.log(btn);
//             btn.addEventListener('click', function () {
//                     questions.forEach( function (eachquestion) {
//                             if ( eachquestion !== question) {
//                     eachquestion.classList.remove("open_answer");
//                 }
//             });
//             question.classList.toggle("open_answer");
//         });
// });



// or using each question_tittle
questions.forEach(function(question){
        question.addEventListener('click', function () {
            questions.forEach( function (eachquestion) {
                if ( eachquestion !== question) {
                    eachquestion.classList.remove("open_answer");
                }
            });
            question.classList.toggle("open_answer");
        });
});