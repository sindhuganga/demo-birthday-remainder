import List from "./List";
import person from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(person);
  const size = people.length;

  const handleClick = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3 className="person">{size} birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn" onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
