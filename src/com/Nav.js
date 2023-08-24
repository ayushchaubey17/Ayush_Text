import React, { useState } from "react";

export default function Nav(props) {
  const [text, settext] = useState("");

  

  function myFunction() {
    // Get the text field
    var copyText = document.getElementById("p1");
  
    // Select the text field
    copyText.select();
    // copyText.setSelectionRange(0, 9999999999999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }

  
  //logic for uppercase
  function upperhandle() {
    settext(text.toUpperCase());
    // converted to uppercase
  }

  //for changing the value in textarea
  function changing(event) {
    settext(event.target.value);
  }

   //logic for lowercase
   function lowerhandle() {
    settext(text.toLowerCase());
    // converted to lowercase
  }

   //logic for clear
   function clear()
   {
    settext('');
   }

  //  logic for capital
  function capital() {
  

//split the above string into an array of strings 
const arr = text.split(" ");

//loop through each element of the array and capitalize the first letter.

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
settext(str2)
    
  }

  //logic for capitaleng
  function capital2() {
  

    //split the above string into an array of strings 
    const arr = text.split(".");
    
    //loop through each element of the array and capitalize the first letter.
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    
    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const str2 = arr.join(".");
    settext(str2)
        
      }

    //logic for extra
    function extra() {
      let newText = text.split(/[ ]+/);
      settext(newText.join(" "));


    }

    function extra2() {
    settext(text.replace("  "," "));  
    }

    // Get the text area and speak button elements
let textArea = document.getElementById("p1");
let speakButton = document.getElementById("p2");


function play() {
  

  // Create a new SpeechSynthesisUtterance object
  const speech = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  speech.text = text;
  speech.voice = window.speechSynthesis.getVoices()[0];

  // Speak the speech
  window.speechSynthesis.speak(speech);

  // return speech;
}





  

   return (
    <>
      <section  className="bg-gray-200 w-full" >
        <div className="">
          <div className="flex flex-row justify-between px-4 py-2  bg-slate-300 ">
            <div className="">
              <i class="fa-solid fa-bars"></i>{" "}
            </div>
            <div className="lgo">AyushText</div>
            <div className="about space-x-5">
           <button ><i class="fa-solid fa-lightbulb text-amber-950"></i></button> 
              <i class="fa-solid fa-circle-info"></i>
            </div>
          </div>
        </div>


          <div className="flex flex-row justify-center ">
        <div className="font-bold text-2xl ">Enter your text</div>
      
        </div>
        <div className="flex flex-row justify-end space-x-6 mr-10 md:mr-36"> 
          <button onClick={clear}><i class="fa-solid fa-trash-arrow-up text-gray-800 active:text-sky-700 text-2xl"></i></button>
          <button className="" onClick={myFunction}><i class="fa-solid fa-copy text-gray-600 text-2xl active:text-gray-900"></i></button>
       <button onClick={play} id="p2"><i class="fa-solid fa-headphones"></i></button>
       
        </div>
        <div className="text-center">
          <textarea placeholder="write the text here....."
            onChange={changing}
            value={text}
            name="ak"

            id="p1"
            cols="30"
            rows="10"
            className="text-2xl w-10/12 pl-3 mt-3 bg-gray-200  rounded-xl outline-2 outline-blue-700 border-2 border-blue-900"
          ></textarea>
        </div>

        <div>
          <nav>
            <div
              
              className="btn mt-2 flex flex-col space-y-4 md:space-y-0  md:flex-row justify-center sm:space-x-0 md:space-x-1"
            >
              <div className="flex flex-row  md:space-x-1  ">
                <button onClick={upperhandle} className="button1 text-xl font-semibold mx-5 text-gray-100   p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl">
                  {props.first}
                </button>
                <button onClick={lowerhandle} className="button2 text-xl font-semibold mr-5 text-gray-100 mx-auto p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl ">
                  {props.second}
                </button>
              </div>
              <div className="flex flex-row  md:space-x-1  ">
                <button onClick={capital} className="button1 text-xl font-semibold mx-5 text-gray-100  p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl">
                  CapitalAll
                </button>
                <button onClick={capital2} className="button2 text-xl font-semibold mr-5 text-gray-100 mx-auto p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl ">
                  CapitalFirst
                </button>
              </div>
              <div className="flex flex-row  md:space-x-1  ">
                <button onClick={extra} className="button1 text-xl font-semibold mx-5 text-gray-100  p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl">
                  ExtraSpace
                </button>
                <button onClick={extra2} className="button2 text-xl font-semibold mr-5 text-gray-100 mx-auto p-2  w-1/2 bg-gray-600 hover:bg-gray-700 rounded-2xl ">
                  extra
                </button>
              </div>
            </div>
          </nav>
        </div>
      
      
      <nav className="mx-5 md:mx-32">
<h2 className="text-2xl md:text-4xl font-bold  mt-3 ">your text summary::</h2>
<p className="">{text.split(" ").length-1} words and {text.length} characters </p>
<p>{0.008* (text.split(" ").length-1)} minutes required to read this</p>

<div className="text-2xl font-bold">preview</div>
<p>{text}</p>
      </nav>
      
      
      
      
      
      
      
      
      
      </section>
    </>
  );
}
