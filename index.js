$(_=>{

  Survey.StylesManager.applyTheme('bootstrap')

  var surveyJSON = {
    pages: [{
        name: "page1",
        elements: [{
            type: "text",
            name: "question1",
            title: "Name",
            isRequired: true
        }, {
            type: "dropdown",
            name: "question2",
            title: "Age",
            isRequired: true,
            choices: [{
                value: "0",
                text: "Below 13"
            }, {
                value: "1",
                text: "13-18"
            }, {
                value: "2",
                text: "18-25"
            }, {
                value: "3",
                text: "25-35"
            }, {
                value: "4",
                text: "35-45"
            }, {
                value: "5",
                text: "45-55"
            }, {
                value: "6",
                text: "55-65"
            }, {
                value: "7",
                text: "Above 65"
            }]
        }, {
            type: "dropdown",
            name: "question3",
            title: "What part of the world do you come from?",
            isRequired: true,
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
            title: "Do you support GMOs?",
            isRequired: true,
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
            isRequired: true,
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
            title: "Which of these items in the pictures could be a GMO product?",
            isRequired: true,
            multiSelect: true,
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
            isRequired: true,
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
            isRequired: true,
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
            isRequired: true,
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
    $("#surveyContainer").removeClass('show').remove()
    $("#resultHeader").text(survey.data.question1 + ", thank you for your participation in our survey.")
    if(survey.data.question4 == "item1"){
      $("#resultBody").text("Since you strongly disagree with the use of GMOs, we would like to show you some facts and try to show you our point of view on GMOs")
      $("#resultBody").append("<img src='images/impact-of-biotech_0.png' class='img-fluid' /><br /> ")
      $("#resultBody").append("Watch this video that weighs in on whether GMOs are good or bad:<br /><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/7TmcXYp8xu4?controls=0&rel=0' allowfullscreen></iframe></div><br/>");
    }
    if(survey.data.question4 == "item2") {
      $("#resultBody").text("Well that's a smart position to be in, let's look at some statistics of GMO's to see if we can convince you that GMOs are indeed good for us. ")
      $("#resultBody").append("<img src='images/impact-of-biotech_0.png' class='img-fluid' /><br /><br />")
      $("#resultBody").append("Watch this video that weighs in on whether GMOs are good or bad:<br /><br /><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/7TmcXYp8xu4?controls=0&rel=0' allowfullscreen></iframe></div><br/><br />");
   
    }
    if(survey.data.question4 == "item3"){
      $("#resultBody").text("Great! You support GMO's too, here's a cookie for you: ")
      $("#resultBody").append("<img src='images/cookie.png' width='100px' class='img-fluid' /><br />")
    }
    $('#result').addClass('show')
  }

  var survey = new Survey.Model(surveyJSON)
  $("#surveyContainer").Survey({
    model: survey,
    showProgressBar:'top',
    css:{
      navigation:{
        next:'btn btn-lg btn-primary',
        prev:'btn btn-lg btn-warning',
        complete:'btn btn-lg btn-success'
      }
    },
    onComplete: surveyResult
  }).addClass('show')
})
