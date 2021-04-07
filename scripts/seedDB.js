const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,  
  useUnifiedTopology: true  
})

const bookSeed = [
  {
    title: "The Hunger Games",
    subtitle: "",
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
    },
  {
    title: "Lord of the Flies",
    subtitle: "(Penguin Classics Deluxe Edition)",
    authors: ["William Golding"],
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "http://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=r6eoCwAAQBAJ&source=gbs_api"
    },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    subtitle: "",
    authors: ["J.K. Rowling"],
    description:
      "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches.",
    image: "http://books.google.com/books/content?id=3YUrtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=3YUrtAEACAAJ&dq=Harry+Potter+and+the+Sorcerer&hl=&source=gbs_api"
    },
  {
    title: "Astrophysics for People in a Hurry",
    subtitle: "",
    authors: ["Neil deGrasse Tyson"],
    description:
      "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in digestible chapters consumable anytime and anywhere in your busy day. While waiting for your morning coffee to brew, or while waiting for the bus, the train, or the plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.",
    image: "http://books.google.com/books/content?id=hx5DDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=hx5DDQAAQBAJ&source=gbs_api"
   }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(() => {
   // console.log(data.result.n + " records inserted!"); // For Testing
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
