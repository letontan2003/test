import './App.css';

function App() {
  let arr = [];
  let i = 0;

  while(i < 10) {
    arr = arr.concat(i);
    i++;
  }

  return (
    <div>
      {arr.map(i => <p key={i}>{i}</p>)}
    </div>
  );
}

export default App;
