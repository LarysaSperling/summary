// export default function Book({ title, author, year, isAvailable, genre }) {
//   const badgeStyle = {
//     display: "inline-block",
//     padding: "4px 10px",
//     borderRadius: 999,
//     fontSize: 12,
//     fontWeight: 700,
//     backgroundColor: isAvailable ? "#d1fae5" : "#fee2e2",
//     color: isAvailable ? "#065f46" : "#991b1b",
//   };

//   return (
//     <article style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 14, background: "#fff" }}>
//       <h3 style={{ margin: "0 0 6px" }}>{title}</h3>

//       <p style={{ margin: "0 0 6px", color: "#374151" }}>
//         <b>Автор:</b> {author}
//       </p>

//       <p style={{ margin: "0 0 6px", color: "#374151" }}>
//         <b>Год:</b> {year}
//       </p>

//       <p style={{ margin: "0 0 10px", color: "#374151" }}>
//         <b>Жанр:</b> {genre}
//       </p>

//       <span style={badgeStyle}>{isAvailable ? "Доступна" : "На руках"}</span>
//     </article>
//   );
// }
