import Book from "../book";

export default function BookShelf({ title, booksData }) {
  return (
    <section>
      <h2 style={{ margin: "10px 0 12px" }}>{title}</h2>

      {booksData.length === 0 ? (
        <p style={{ color: "#666" }}>Нет книг в этом разделе.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {booksData.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </div>
      )}
    </section>
  );
}
