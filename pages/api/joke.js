export default (req, res) => {
  const jokes = [
    "What do you get when you cross a snowman and a shark? Frostbite!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "What do you call a fake noodle? An impasta!"
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.status(200).json({ joke });
};
