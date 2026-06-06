
    let r1;
    const output = document.getElementById("output");

  
    function startRecognition() 
    {
      if (!('webkitSpeechRecognition' in window)) 
      {
        alert("Your browser does not support Speech Recognition. Try Chrome!");
        return;
      }
      r1 = new webkitSpeechRecognition();
      r1.lang = "en-US";
      r1.continuous = false;
      r1.interimResults = false;

      r1.start(); //start recoding

      r1.onresult = function(event)
       {
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
      };

      r1.onerror = function(event)
       {
        console.error("Error occurred in recognition: " + event.error);
      };
    }

    
    function speakText() 
    {
      let text = output.textContent;

      if (text.trim() === "" || text === "Your speech will appear here...") 
      {
        text = "Hey friend Talk to me first";
      }
      const u1 = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(u1);  //start speaking
    }
