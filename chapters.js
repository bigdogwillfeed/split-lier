var chapters = [
  {
    passphrase: "introduction",
    text: "The bell rings.  That's it.  The 8th grade is over, and once you leave, you're leaving for good.  You would be excited, except that your best friend, Jonas, is going to a different high school and you won't even be able to hang out with him this summer because you've got to work at your mom's cooking supplies store.  You shuffle out the front door.  You see Jonas across the schoolyard and wave.  Maybe you can get one last slice of pizza together.  Suddenly, the ground shakes and a chasm opens across the schoolyard.  You see Jonas tumble in.",
    prompt: "Should you run for help or jump in after him?",
    choices: ["Run For Help", "Jump In"]
  },
  {
    passphrase: "Run For Help",
    text: "You run as quickly as you can back into the school.  You know that Ms. Womperswift will be able to help.  This isn't the first time things have gotten wierd at I.S. 51, and she always seems to know more than she lets on.  \"Ms. Womperswift!\" She turns toward you, calmly.  \"There's a ravine in the schoolyard, and Jonas fell in!\"  She looks at ou for a moment longer and says, \"sounds like an adventure to me.\"  You can't believe it!  Then she says, \"Let me offer you something to help.\"  \"Would you prefer this poncho or this knapsack?\"",
    prompt: "Which item do you take?",
    choices: ["Poncho", "Knapsack"]
  },
  {
    passphrase: "Jump In",
    text: "You plunge into the ravine.  Enveloped by darkness, you feel the air get cooler as you thrash your arms through the ampty space.  You come to a sudden stop mide air and then ease gently to the cool, wet ground.  How did that happen?!  You still can't see a thing, so you bein to crawl around.  \"Jonas?\" you cry, first in a whisper and then more and more loudly.  A light comes from around a corner.  It's Ms. Womperswift.  She always seems to be around when things like this happen.  \"Choose,\" she says, and holds out a poncho and a knapsack.",
    prompt: "Which item do you choose?",
    choices: ["Poncho", "Knapsack"]
  },
  {
    passphrase: "Poncho",
    text: "Deep at the bottom of the ravine, you begin to feel drops of water on your skin.  Your eyes ahave adjusted to the darkness, and you start to creep forward.  The wetness on your skin begins to feel sticky, then it begins to burn.  Thinking quickly, you pull the poncho on to protect yourself.  You hear someone call your name.  It's Jonas!!  \"Come here,\" he says.  \"Look at this!\"  You see a portal to a world that looks much like your own, but darker.  The schoolyard is there with the ravine looking twice as wide and stretching as far as they eye can see.  Across it, there is a dilapidated bridge.",
    prompt: "Should you cross it, or turn around?",
    choices: ["Cross the Bridge", "Turn Around"]
  },
  {
    passphrase: "Cross the Bridge",
    text: "You take a deep breath before you take your first step onto the rickety bridge. The wooden board creaks under your weight. \"I don't know about this,\" whimpers Jonas. You close your eyes, count to three, and start running as fast as you can. You hear Jonas cry \"Wait up!\" and then you hear his footsteps behind you. Suddenly, you hear a crack. One of the boards has snapped under your weight, and your foot has gone through it. You stop, catch your breath, and slow down. Jonas catches up behind you. \"I thought you were a gonner,\" he whispers. You finally make it to the far side of the ravine, and see a sign. An arrow pointing left is labeled \"Dragon's Den\". An arrow pointing right is labeled \"Sorceror's Swamp\".",
    prompt: "Which path would you like to take?",
    choices: ["Dragon's Den", "Sorcerer's Swamp"]
  },
  {
    passphrase: "Knapsack",
    text: "Deep at the bottom of the ravine, you feel cold and wet.  It is still too dark to see.  You reach inside the knapsack and feel something glassy.  Inside that, you find a waxy cylinder.  It's a candle!  You fumble through the bag, find a new set of matches, and light the candle.  By the glow of the flame, you see Jonas cowering in the corner.  You run to him, get him to his feet, and guide him as you explore.  You see a portal to a world that looks much like your own, but darker.  The schoolyard is there with the ravine looking twice as wide and stretching as far as they eye can see.  Across it, there is a dilapidated bridge.",
    prompt: "Do you cross it, or turn around?",
    choices: ["Cross the Bridge", "Turn Around"]
  },
  {
    passphrase: "Turn Around",
    text: "You turn around. There's no way to climb out of the ravine. You sigh and head back to the bridge.",
    prompt: "Do you cross the bridge or turn around again?",
    choices: ["Cross the Bridge", "Turn Around"]
  },
  {
    passphrase: "Dragon's Den",
    text: "Huh. Eaten by dragons. Who would have thought?",
    prompt: "",
    choices: [] // If the chapter is an end of the adventure, you don't need any choices
  },
  {
    passphrase: "Sorcerer's Swamp",
    text: "The Sorcerers are scary, so you turn back. Eventually, you return to the sign. An arrow pointing left is labeled \"Dragon's Den\". An arrow pointing right is labeled \"Sorceror's Swamp\".",
    prompt: "Which path do you take this time?",
    choices: ["Dragon's Den", "Sorcerer's Swamp"]
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  },
  {
    passphrase: "",
    text: "",
    prompt: "What would you like to do?",
    choices: []
  }
];

module.exports = processAndValidate(chapters);

// chapters object is designed for easy editing... validate assumptions and return as a map for speedy responses
// validation: every chapter must have a unique passphrase and one or more choices (each choice must refer to a chapter)
function processAndValidate(allChapters) {
  // ignore empty chapters
  var chapters = allChapters.filter(function (chapter) { return chapter.passphrase.length > 0 });
  var chapterMap = { __isValid: true };
  
  // make sure each chapter has a unique passphrase
  chapters.forEach(function (chapter) {
    if (chapterMap[chapter.passphrase]) {
      console.error(`There is more than one chapter with the passphrase "${chapter.passphrase}".
Each chapter needs a unique passphrase`);
      chapterMap.__isValid = false;
    }
    chapterMap[chapter.passphrase] = chapter;
  });
  
  // make sure each chapter has two or more choices, and each choice is an existing passphrase
  chapters.forEach(function (chapter) {
    if (!(chapter.choices && chapter.choices.constructor === Array)) {
      console.error(`Chapter "${chapter.passphrase}" has a syntax error with it's choices`);
      chapterMap.__isValid = false;
    } else {
      if (chapter.choices.length === 1) {
        console.warn(`Chapter "${chapter.passphrase}" has only one choice... are you sure?`);
      }
      chapter.choices.forEach(function (choice) {
        if (!chapterMap[choice]) {
          console.error(`Chapter "${chapter.passphrase}" offers an unknown choice of "${choice}"
Each choice needs to be a chapter passphrase`);
          chapterMap.__isValid = false;
        }
      });
    }
  });
  
  console.log(`This adventure has ${chapters.length} chapters and ${chapterMap.__isValid ? "passes" : "FAILS"} validation`);
  
  return chapterMap;
}