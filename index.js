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
                value: "0",
                text: "Asia"
            }, {
                value: "1",
                text: "Africa"
            }, {
                value: "2",
                text: "Australia"
            }, {
                value: "3",
                text: "North America"
            }, {
                value: "4",
                text: "South America"
            }, {
                value: "5",
                text: "Europe"
            }, {
                value: "6",
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
  let space = survey=>{$("#resultBody").append("<br/><br/>");}
  let surveyResult = survey=>{
    $("#surveyContainer").removeClass('show').remove()
    $("#resultHeader").text(survey.data.question1 + ", thank you for your participation in our survey.")
    if(survey.data.question4 == "item1"){
      $("#resultBody").text("Since you strongly disagree with the use of GMOs, we would like to show you some facts and try to show you our point of view on GMOs")
      space();
      $("#resultBody").append("<img src='images/impact-of-biotech_0.png' class='img-fluid' /><br /><br />")
      $("#resultBody").append("Watch this video that weighs in on whether GMOs are good or bad:<br /><br /><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/7TmcXYp8xu4?controls=0&rel=0' allowfullscreen></iframe></div>");
   }
    if(survey.data.question4 == "item2") {
      $("#resultBody").text("Well that's a smart position to be in, let's look at some statistics of GMO's to see if we can convince you that GMOs are indeed good for us. ")
      space();
      $("#resultBody").append("<img src='images/impact-of-biotech_0.png' class='img-fluid' /><br /><br />")
      $("#resultBody").append("Watch this video that weighs in on whether GMOs are good or bad:<br /><br /><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/7TmcXYp8xu4?controls=0&rel=0' allowfullscreen></iframe></div>");
    }
    if(survey.data.question4 == "item3"){
      $("#resultBody").text("Great! You support GMO's too, here's a cookie for you: ")  
      $("#resultBody").append("<img src='images/cookie.png' width='100px' class='img-fluid' /><br />")
      if(survey.data.question2<=2) {
         $("#resultBody").append("Watch this video that may give you an even better insight on why GMOs aren't bad:<br /><br /><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/7TmcXYp8xu4?controls=0&rel=0' allowfullscreen></iframe></div>");
      }
    }
    if(survey.data.question3=="0") {
      space();
      $("#resultBody").append("According to <a href='https://en.wikipedia.org/wiki/Genetically_modified_food_in_Asia'>Wikipedia</a>,  \"India and China are the two largest producers of genetically modified products in Asia. India currently only grows GM cotton, while China produces GM varieties of cotton, poplar, petunia, tomato, papaya and sweet pepper. Cost of enforcement of regulations in India are generally higher, possibly due to the greater influence farmers and small seed firms have on policy makers, while the enforcement of regulations was more effective in China. Other Asian countries that grew GM crops in 2011 were Pakistan, the Philippines and Myanmar. GM crops were approved for commercialisation in Bangladesh in 2013 and in Vietnam and Indonesia in 2014. \"");
    }
    if(survey.data.question3=="1") {
      space();
      $("#resultBody").append("According to <a href='https://en.wikipedia.org/wiki/Genetically_modified_food_in_Africa'>Wikipedia</a>,  \"Genetically modified (GM) crops have been commercially cultivated in four African countries; South Africa, Burkina Faso, Egypt and Sudan. Beginning in 1998, South Africa is the major grower of GM crops, with Burkina Faso and Egypt starting in 2008. Sudan grew GM cotton in 2012. Other countries, with the aid of international governments and foundation, are conducting trials and research on crops important for Africa.Crops under research for use in Africa include cotton, maize, cassava, cowpea, sorgum, potato, banana, sweet potato, sugar cane, coconut, squash and grape. As well as disease, insect and virus resistance some of the research projects focus on traits particularly crucial for Africa like drought resistance and biofortification. \"");
    }
    if(survey.data.question3=="2") {
      space();
      $("#resultBody").append("According to <a href='https://www.choice.com.au/food-and-drink/food-warnings-and-safety/food-safety/articles/are-you-eating-gm-food#2%20what%20GM%20foods%20are%20grown%20in%20australia?'>Choice</a>,  \"There are only two commercial GM broad-acre crops grown in Australia – GM cotton and GM canola. These are both found in many margarines and frying oils. More than 99% of planted cotton in Australia is GM. There are three types of GM cotton in use and all are owned by Bayer or Monsanto, which are on the brink of merging. Two of these cottons are herbicide-tolerant to help the control of weeds, and the other has an inbuilt resistance to a pest, reducing the need for insecticides. There are six types of GM canola licenced for use in Australia. All have been developed to be resistant to the herbicides used to control weeds. Five of these are owned by Bayer or Monsanto. Other GM crops being developed and trialled around the country (but not yet commercially available) include sugarcane, safflower, banana, wheat, barley and white clover. There are no GM animals or fish being grown or raised for food in Australia; however, meat, dairy and eggs from animals fed imported GM feedstock are available to consumers in Australia. \"");
    }
    if(survey.data.question3=="3") {
      space();
      $("#resultBody").append("According to <a href='https://en.wikipedia.org/wiki/Genetically_modified_food_in_North_America'>Wikipedia</a>,  \"As of 2002 the United States, Canada, and Mexico do not require labeling of genetically modified foods. \"");
    }
    if(survey.data.question3=="4") {
      space();
      $("#resultBody").append("According to <a href='https://en.wikipedia.org/wiki/Genetically_modified_food_in_South_America'>Wikipedia</a>, \"Brazil and Argentina are the 2nd and 3rd largest producers of genetically modified food behind the United States. The Argentine government was one of the first to accept genetically modified food. Assessment of genetically modified products for release is provided by the National Agricultural Biotechnology Advisory Committee (environmental impact), the National Service of Health and Agrifood Quality (food safety) and the National Agribusiness Direction (effect on trade), with the final decision made by the Secretariat of Agriculture, Livestock, Fishery and Food. The government is looking to tighten the current law which allows farmers to keep seed without paying royalties in a bid to encourage more private investment. In Brazil the National Biosafety Technical Commission is responsible for assessing environmental and food safety and prepares guidelines for transport, importation and field experiments involving GM products. The Council of Ministers evaluates the commercial and economical issues with release. The National Biosafety Technical Commission has 27 members and includes 12 scientists, 9 ministerial representatives and 6 other specialists. Honduras, Costa Rica, Colombia, Bolivia, Paraguay, Chile, and Uruguay also allow GM crops to be grown.\"");
    }
    if(survey.data.question3=="5") {
      space();
      $("#resultBody").append("According to <a href='https://en.wikipedia.org/wiki/Europe'>Wikipedia</a>, \"As of 2014 Spain has been the largest producer of GM crops in Europe with 137,000 hectares (340,000 acres) of GM maize planted in 2013 equaling 20% of Spain's maize production. Smaller amounts were produced in the Czech Republic, Slovakia, Portugal, Romania and Poland. France and Germany are the major opponents of genetically modified food in Europe, although Germany has approved Amflora a potato modified with higher levels of starch for industrial purposes. In addition to France and Germany, other European countries that placed bans on the cultivation and sale of GMOs include Austria, Hungary, Greece, and Luxembourg. Poland has also tried to institute a ban, with backlash from the European Commission. Bulgaria effectively banned cultivation of genetically modified organisms on 18 March 2010.\"");
    }
    if(survey.data.question3=="6") {
      space();
      $("#resultBody").append("Pretty much the only place in the world where GM crops aren't grown is where you are, but don't forget the GM produced products. Must be pretty cold there!");
    }
    var fontSize = parseInt($("#resultBody").css("font-size"));
    fontSize = fontSize + survey.data.question2*2 + "px";
    $("#resultBody").css({'font-size':fontSize});
    if(survey.data.question2==0) {
      //<img src="..." class="img-fluid" alt="Responsive image">
      //alert("kid");
      $(".bg-primary").attr('class', 'bg-warning');
      space();
      $("#resultBody").append("<img src='images/snacks.jpg' class='img-fluid' /><br />")
    }
    if(survey.data.question5=="item1") {
      space();
      $("#resultBody").append("You're right, your doritos are GMO produced and according to USNews, \"Soda isn't exactly the first product people think of when they are trying to avoid GMOs. But these sugary drinks are very likely to include GMOs since they contain high fructose corn syrup, which includes corn as an ingredient. Most corn is genetically engineered, with genetically modified corn accounting for 88 percent of the corn planted in 2012, the FDA said. Other products containing high fructose corn syrup include juice drinks, certain breads and crackers. \"");
    }
    if(survey.data.question5=="item2") {
      space();
      $("#resultBody").append("Everyone at one point has had a GMO produced product. Your doritos are GMO produced and according to USNews, \"Soda isn't exactly the first product people think of when they are trying to avoid GMOs. But these sugary drinks are very likely to include GMOs since they contain high fructose corn syrup, which includes corn as an ingredient. Most corn is genetically engineered, with genetically modified corn accounting for 88 percent of the corn planted in 2012, the FDA said. Other products containing high fructose corn syrup include juice drinks, certain breads and crackers. \"");
    }
    if(survey.data.question6.length!=4) {
      space();
      $("#resultBody").append("All of the images we asked you to select from could have been GMO produced.");
    }
    if(survey.data.question2==0) {
      space();
      $("#resultBody").append("<img src='images/golden.jpg' class='img-fluid' /><br />")
    }
    if(survey.data.question7=="item1") {
      space();
      $("#resultBody").append("You're right, some GMO produced foods have been made to have greater nutritional value. There are products that would provide real health benefits, for example one is Golden Rice, a rice that is fortified with vitamin A, and SDA oil. SDA is an oil that will allow plant-based omega-3 fatty acids in the oil to be available to the body for use more efficiently.");
    }
     if(survey.data.question7=="item2") {
      space();
      $("#resultBody").append("There are products that would provide real health benefits, for example one is Golden Rice, a rice that is fortified with vitamin A, and SDA oil. SDA is an oil that will allow plant-based omega-3 fatty acids in the oil to be available to the body for use more efficiently.");
    }
    if(survey.data.question8=="item1") {
      space();
      $("#resultBody").append("One could say that the regulations in place for GMO products are satisfactory however there is always room for improvement. The products need immense research and trials before they come out to the market and this needs good policy makers and systems in place.");
    }
    if(survey.data.question8=="item2") {
      space();
      $("#resultBody").append("You're right, regulations on GMOs have to be improved. We feel that consumers deserve the right to know if their products are GMO produced. The products need immense research and trials before they come out to the market and this needs good policy makers and systems in place.");
    }
    if(survey.data.question9=="item1") {
      space();
      $("#resultBody").append("Farmers indeed have advantages through GMO's. \n Some GMOs help farmers reduce the carbon footprint of crops. Every time farmers have to go back into the field, such as to plow or apply pesticides, we are burning fossil fuels. Round-Up Ready GMO crops make weed control much easier and reduces the number of time farmers have to spray herbicides. Those crops also allow farmers to adopt practices to sequester carbon, such as no-till and cover crops. On our farm, we have not sprayed insecticide even once since adopting the Bt trait into our corn. All of that lowers the carbon footprint of crops and is better for our planet.");
    }
    if(survey.data.question9=="item2") {
      space();
      $("#resultBody").append("Although you can argue that Farmer's have disputes with cooperations due to issues like terminator seeds and them requiring to keep buying seeds annually, Farmers indeed have advantages through GMO's. \n Some GMOs help farmers reduce the carbon footprint of crops. Every time farmers have to go back into the field, such as to plow or apply pesticides, we are burning fossil fuels. Round-Up Ready GMO crops make weed control much easier and reduces the number of time farmers have to spray herbicides. Those crops also allow farmers to adopt practices to sequester carbon, such as no-till and cover crops. On our farm, we have not sprayed insecticide even once since adopting the Bt trait into our corn. All of that lowers the carbon footprint of crops and is better for our planet.");
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
