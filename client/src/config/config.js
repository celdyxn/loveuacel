const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "Hiii bby!!",
        "I made this little thing just for you ",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "Ta-daa!",
      ],
      [
        "This isn’t your usual website",
        "Cuz I want you to have a lil fun with it",
      ],
      ["Let’s see how well you know me now", "Hope it makes you smile!"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#cf6b87",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "What's my all-time favorite food?",
        description: "kalau salah, aku unfriend roblox",
        correctAnswer: "fettuchini", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "fettuchini", label: "Fettucini" },
          { value: "ayamgeprek", label: "Ayam Geprek" },
          { value: "indomie", label: "Indomie Noodles" },
          { value: "bakso", label: "Bakso" },
        ],
  },
      {
        id: 2,
        title: "Which drink will I love forever?",
        description: "I buy this almost every aku pergi makan",
        correctAnswer: "tehtawar",
        options: [
          { value: "lecitea", label: "Lychee Tea" },
          { value: "cappucino", label: "Caramel Frappucino" },
          { value: "tehtawar", label: "Teh Tawar" },
          { value: "coke", label: "Cookies n Cream" },
        ],
      },
      {
        id: 3,
        title: "When's my birthday?",
        description: "One more mistake and you’re in trouble:)",
        correctAnswer: "mar-8",
        options: [
          { value: "sept-12", label: "February 17" },
          { value: "oct-16", label: "March 9th" },
          { value: "august-14", label: "March 18th" },
          { value: "mar-8", label: "March 8th" },
        ],
      },
  //     // You can add more questions here
  //     {
  //       id: 4,
  //       title: "Do you even know how much I love you?",
  //       description: "Careful, the wrong answer might break my heart 💔",
  //      correctAnswer: "infinite",
  //         options: [
  //           { value: "a-lot", label: "A lot" },
  //           { value: "so-much", label: "So much" },
  //           { value: "infinite", label: "More than infinite" },
  //           { value: "idk", label: "I don't know" },
  //         ],
  //     },
  //     {
  //   id: 5,
  //   title: "When’s the first time we met?",
  //   description: "If you forget, I might pretend we never met",
  //   correctAnswer: "march-29",
  //   options: [
  //     { value: "march-29", label: "March 29th" },
  //     { value: "march-25", label: "March 25th" },
  //     { value: "may-29", label: "May 29th" },
  //     { value: "march-19", label: "March 19th" },
  //   ],
  // },
  //  {
  //   id: 6,
  //   title: "If I’m mad, what should you do?",
  //   description: "Choose wisely, your life may depend on it 😈",
  //   correctAnswer: "hug",
  //   options: [
  //     { value: "apologize", label: "Apologize" },
  //     { value: "hug", label: "Give you a hug" },
  //     { value: "food", label: "Bring food" },
  //     { value: "run", label: "Run for my life" },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "What do I want right now?",
  //   description: "It changes every 5 minutes 🤭",
  //   correctAnswer: "all",
  //   options: [
  //     { value: "hug", label: "A hug" },
  //     { value: "food", label: "Food" },
  //     { value: "sleep", label: "A nap" },
  //     { value: "all", label: "All of the above" },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "What’s my dream vacation?",
  //   description: "Hint: …",
  //   correctAnswer: "anywhere",
  //   options: [
  //     { value: "raja", label: "Raja Ampat" },
  //     { value: "japan", label: "Japan" },
  //     { value: "riau", label: "Riau" },
  //     { value: "anywhere", label: "Anywhere with you" },
  //   ],
  // },
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 7, // If score is 3 or above, this GIF will be shown
        heading: "Wow!!!!!!! unbelievable",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 5, // If score is exactly 2, this GIF will be shown
        heading: "Ehhh, not bad! so I still love you",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 3, // If score is exactly 1, this GIF will be shown
        heading: "It's okay, I know you tried so hard",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "umm... wtf???",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "Can you draw me a flower?",
      "Maybe draw me another one?",
      "Alright… just one last flower, promise!",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "Submit",
      finalText: "Thank you baby ❤️",
      loading: "Sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
    // Placeholder text for the letter input
    placeholder: {
      default: `Now it's your turn to write me a little letter :) Once you hit "Send Message", I'll get to read it hehe`,
      emptyInput: "Hey... you gotta type something first!",
      success: "Got your message, my love! Thank you 💖",
      error: "Oops... message didn’t go through. Try again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `https://loveuacel-production.up.railway.app`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "Thank you Acel:) u’re my everything, and I hope u feel my love always.",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;
