class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number

   this.input = createInput("").attribute("placeholder", "Enter your name");
   this.button = createButton('Submit');
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    //Create elements for One question (h3) and 4 options (h4)
    setElementsPosition() 
      this.titleImg.position(120,50);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    
  
    setElementsStyle() 
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    hide() 
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

    


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      handlemousePressed() {
        this.playButton.mousePressed(()=>{
          this.input.hide()
          this.playButton.hide()
          var message=`Hello ${this.input.value()}
      </br> wait for another player to join......`
      this.greeting.html(message)
     
    })
    }
}
