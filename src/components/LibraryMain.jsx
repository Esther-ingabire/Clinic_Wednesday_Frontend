import { useState } from 'react';
// import DataTable from './DataTable';
import LibraryButton from './LibraryButton'

function LibraryMain() {

  const buttonLabel = "Increment";

  const [count, setCount] = useState(0);

  function incrementNumber() {
    const next = count + 1;
    setCount(next);
    console.log("This is the incremented number:" + next);
  }

  return (
    <div>
      <main>
        <h2>Welcome page</h2>
        <LibraryButton buttonLabel={buttonLabel} buttonAction={incrementNumber} />
        <div>Incremented value is {count}</div>
      </main>
    </div>
  )
}

export default LibraryMain
