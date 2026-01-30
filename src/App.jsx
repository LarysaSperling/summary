// import "./App.css";
// import Form from "./components/form";
// function App() {
//   return (
//     <div>
//       <Form titleColor={"blue"} formTitle={"Register"} />
//       <Form titleColor={"green"} formTitle={"Login"} />
//     </div>
//   );
// }
// export default App;


// import Menu from "./components/menu";

// export default function App() {
//   const dishes = [
//     { id: 1, name: "Garlic Bread", description: "Classic garlic bread, with a hint of herbs.", price: 5 },
//     { id: 2, name: "Soup of the Day", description: "A delicious way to start your meal.", price: 7 },
//     { id: 3, name: "Grilled Salmon", description: "Fresh salmon that's grilled to perfection.", price: 15 },
//     { id: 4, name: "Steak", description: "High-quality beef with our special sauce.", price: 18 },
//     { id: 5, name: "Cheesecake", description: "Creamy cheesecake with a crispy base.", price: 6 },
//     { id: 6, name: "Ice Cream", description: "Choose from our variety of flavors.", price: 4 },
//   ];

//   return (
//     <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
//       <h1>Menu</h1>
//       <Menu dishes={dishes} />
//     </div>
//   );
// }



// import BookShelf from "./components/bookShelf";

// export default function App() {
//   const books = [
//     { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008, isAvailable: true, genre: "Programming" },
//     { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011, isAvailable: false, genre: "Programming" },
//     { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", year: 2015, isAvailable: true, genre: "Programming" },
//     { id: 4, title: "Clean Code", author: "Robert C. Martin", year: 2008, isAvailable: true, genre: "Software Engineering" },
//     { id: 5, title: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas", year: 1999, isAvailable: false, genre: "Software Engineering" },
//   ];

//   const availableBooks = books.filter((b) => b.isAvailable);
//   const borrowedBooks = books.filter((b) => !b.isAvailable);

//   return (
//     <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial, sans-serif", padding: 16 }}>
//       <h1 style={{ marginBottom: 20 }}>Library</h1>

//       <BookShelf title="Доступные книги" booksData={availableBooks} />
//       <div style={{ height: 20 }} />
//       <BookShelf title="Книги на руках" booksData={borrowedBooks} />
//     </div>
//   );
// }


import UserProfile from "./components/userProfile";

const user = {
  name: "Анна Смирнова",
  bio: "Фронтенд-разработчик, увлекаюсь React и современным JS.",
  contacts: {
    email: "anna@example.com",
    phone: "346564786580",
    website: "https://portfolio.annasmirnova.com",
  },
  skills: ["HTML/CSS", "JavaScript", "React", "Figma"],
  isLookingForJob: true,
};

function App() {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
}

export default App;

