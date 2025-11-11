const quotes = [
"A bug is just a misunderstood feature.",
"When you aim for the stars, you most definitely won’t reach them, but you will have a great time on your fall until you smack on the ground and DIE",
"Just push it to main and see what happens.",
"Why do we need comments when the code is self-explanatory?",
"I love pinterest.",
"I dont even understand my code sometimes.",
"I wont question where the code is from if it works",
"I love Animal Crossing",
"If theres a quizlet, theres an Excellence",
"The calculator said 2+2=5 so who am I to argue?",
"I want to cheese.",
"I dont sleep much thats crazy howd you know that",
"Push to prod, it works on my machine.",
"Figma is life.",
"Sometimes headache. Sometimes tired. Sometimes both. Always slitro.",
"I am not foxboy that is someone else.",
"This is why I use a mac",
"This code works because I believe in magic.",
"Why would I test it? I wrote it.",
"Hey chatGPT why is my arduino smoking",
"If you ask me to write this website in react, i will react violently.",
"somebody stole my car radio",
"somebody stole my code and put it on github.",
"who needs documentation when you have no documentation?",
"hey chatGPT why is my mac becoming a space heater",
"just because it works doesnt mean its right.",
"Im not procrastinating, Im doing side quests.",
"when in doubt, just remove some comments.",
// "Debugging: Being the detective in a crime movie where you
// "re also the"
"AAAAAAH JAVASCRIPT AAAAAAH",
"Code never lies, comments sometimes do.",
"To understand what recursion is, you must first understand recursion.",
"I will repeat myself again, i am not foxboy.",
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("clickMe").textContent = quotes[randomIndex];
}
