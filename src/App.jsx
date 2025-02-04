import "./App.css";
import Card from "./components/Card";

function App() {
  const users = [
    {
      name: "Tycoon",
      surname: "Kabuzi",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum architecto aliquid quod necessitatibus ea dolore, ad laborum natus itaque officiis suscipit, nobis quos, vitae eveniet obcaecati deserunt repellat! Excepturi, molestias. ",
      isHighlighted: true,
    },
    {
      name: "Reed",
      surname: "Johns",
      description:
        "   Sit amet consectetur adipisicing elit. Dolorum architecto aliquid quod necessitatibus ea dolore, ad laborum natus itaque officiis suscipit, nobis quos, vitae eveniet obcaecati deserunt repellat! Excepturi, molestias. ",
      isHighlighted: false,
    },

    {
      name: "Paul",
      surname: "Kagame",
      description:
        " Laborum natus itaque officiis suscipi Loctetur adipisicing elit. Dolorum architecto aliquid quod necessitatibus ea dolore, ad laborum natus itaque officiis suscipit, nobis quos, vitae eveniet obcaecati deserunt repellat! Excepturi, molestias. ",
      isHighlighted: true,
    },
  ];
  return (
    <>
      <Card users={users} />
    </>
  );
}

export default App;
