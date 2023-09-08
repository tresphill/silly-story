const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//this is the body where the story is written
let storyText = 'It was 94 fahrenheit outside, why :insertx: went for a walk, is beyond me. Anyway, when they got to :inserty:, they hit their vape and paused, then :insertz:. Bob FREAKED, but played it cool — :insertx: is at LEAST 300 pounds, and that smells like oven-roasted turkey.'
let insertX = ['Barbara Streisand', 'Papa John', 'that guy from the My Pillow commercial'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['ran like Forrest Gump', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//i need it to randomly change the story when the button is pressed
let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
randomize.addEventListener('click', result);

//the new story generates from this string
newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertx:', xItem);

//the box that seperates input from output based on if's
function result() {
    let newStory = storyText;

    if (customName.value !== "") {
      let name = customName.value;
      newStory = newStory.replaceAll("Bob", name);
    }
    if (document.getElementById("uk").checked) {
      let weight = Math.round(300 / 14) + " stone";
      let temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
      newStory = newStory.replaceAll("94 fahrenheit", temperature);
      newStory = newStory.replaceAll("300 pounds", weight);
    }
  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);
  
    story.textContent = newStory;
    story.style.visibility = "visible";
}