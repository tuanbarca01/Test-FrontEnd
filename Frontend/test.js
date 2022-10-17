function cookie() {
   let now = new Date();

   let name = document.getElementById('name').value;
   if(name == "") {
      alert("Please enter your name...")
      return;
   }
   document.cookie = "name = " + name;
}

function showYourName() {
   let name = document.getElementById('name').value;
   // document.getElementById('showName').innerHTML = `<i>Handicrafted by</i> <br> ${name} `;
   document.getElementById('showName').innerHTML = `<span><i>Handicrafted by</i></span><br>
                                                      <span id="yourName">${name}</span>`;
   if(name == ""){
      alert("Please enter your name..")
   }else {
      document.getElementById('input-user').style.display = "none";
   }
} 

let listJoke = [
   {
      story: 1,
      joke: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
      status: "",
      likeCount: 0,
      dislikeCount: 0,
   },
   {
      story: 2,
      joke: 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
      status: "",
      likeCount: 0,
      dislikeCount: 0,
   },
   {
      story: 3,
      joke: 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!"',
      status: "",
      likeCount: 0,
      dislikeCount: 0,
   },
   {
      story: 4,
      joke: 'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think its either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
      status: "",
      likeCount: 0,
      dislikeCount: 0,
   },
];

let index = 0;
let joke = document.getElementById('joke-content');
joke.innerHTML = listJoke[index].joke;

function funnyStory() {
   listJoke[index].status = "This is funny!";
   listJoke[index].likeCount += 1;
   ++index;
   if (index == listJoke.length) {
      joke.innerHTML = "That's all the jokes for today! Come back another day!";
   } else {
      joke.innerHTML = listJoke[index].joke;
   }

   console.log(listJoke);
}
 
function notFunnyStory() {
   listJoke[index].status = "This is not funny!";
   listJoke[index].dislikeCount += 1;
   ++index;
   if (index == listJoke.length) {
      joke.innerHTML = "That's all the jokes for today! Come back another day!";
   } else {
      joke.innerHTML = listJoke[index].joke;
   }

   console.log(listJoke);
}
