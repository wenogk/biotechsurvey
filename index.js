$(_=>{

  Survey.StylesManager.applyTheme('bootstrap')
  var surveyJSON = {
    pages: [{
        name: "page1",
        elements: [{
            type: "text",
            name: "question1",
            title: "Name"
        }, {
            type: "dropdown",
            name: "question2",
            title: "Age",
            choices: [{
                value: "item1",
                text: "5-13"
            }, {
                value: "item2",
                text: "13-18"
            }, {
                value: "item3",
                text: "18-25"
            }, {
                value: "item4",
                text: "25-35"
            }, {
                value: "item5",
                text: "35-45"
            }, {
                value: "item6",
                text: "45-55"
            }, {
                value: "item7",
                text: "55-65"
            }, {
                value: "item8",
                text: "65+"
            }, "item9"]
        }, {
            type: "dropdown",
            name: "question3",
            title: "What part of the world do you come from",
            choices: [{
                value: "item1",
                text: "Asia"
            }, {
                value: "item2",
                text: "Africa"
            }, {
                value: "item3",
                text: "Australia"
            }, {
                value: "item4",
                text: "North America"
            }, {
                value: "item5",
                text: "South America"
            }, {
                value: "item6",
                text: "Europe"
            }, {
                value: "item7",
                text: "Antarctica"
            }]
        }]
    }, {
        name: "page2",
        elements: [{
            type: "radiogroup",
            name: "question4",
            title: "Do you support GMO's",
            choices: [{
                value: "item1",
                text: "Not at all"
            }, {
                value: "item2",
                text: "Maybe"
            }, {
                value: "item3",
                text: "Strongly"
            }]
        }, {
            type: "radiogroup",
            name: "question5",
            title: "Have you ever had a GMO produced product?",
            choices: [{
                value: "item1",
                text: "Yes"
            }, {
                value: "item2",
                text: "No"
            }]
        }]
    }, {
        name: "page3",
        elements: [{
            type: "imagepicker",
            name: "question6",
            choices: [{
                value: "1",
                imageLink: "images/g1.jpg"
            }, {
                value: "2",
                imageLink: "images/g2.jpg"
            }, {
                value: "3",
                imageLink: "images/g3.jpg"
            }, {
                value: "4",
                imageLink: "images/g4.jpg"
            }]
        }]
    }, {
        name: "page4",
        elements: [{
            type: "radiogroup",
            name: "question7",
            title: "Do you think there are health benefits associated with GMOs?",
            choices: [{
                value: "item1",
                text: "Yes"
            }, {
                value: "item2",
                text: "No"
            }]
        }, {
            type: "radiogroup",
            name: "question8",
            title: "Do you think the regulations in place for GMOs are satisfactory?",
            choices: [{
                value: "item1",
                text: "Yes"
            }, {
                value: "item2",
                text: "No"
            }]
        }, {
            type: "radiogroup",
            name: "question9",
            title: "Do you think GMOs and the companies that produce it support farmers?",
            choices: [{
                value: "item1",
                text: "Yes"
            }, {
                value: "item2",
                text: "No"
            }]
        }]
    }]
}

  let surveyResult = survey=>{
    $("#surveyContainer").remove()
    $("#resultContainer1").text(survey.data.question1 + ", thank you for your participation in our survey.")
    if(survey.data.question4 == "item1")
      $("#resultContainer2").text("Well I'm sure you would be supportive of the GMO's when you look at these facts: *facts*")
    if(survey.data.question4 == "item2")
      $("#resultContainer2").text("Well that's a smart position to be in, let's look at some statistics of GMO's to see if we can convince you that ____")
    if(survey.data.question4 == "item3")
      $("#resultContainer2").text("Well I'm sure you wouldn't be as supportive of the GMO's when you look at these facts: *facts*")
  }

  var survey = new Survey.Model(surveyJSON)
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: surveyResult
  })
})
