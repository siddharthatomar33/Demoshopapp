import './App.css';
import Item from './components/item'
import ItemDate from './components/ItemDate';

function App() {
  const itemOneName="Nirma";
  const itemTwoName="surf excel";
  const itemThreeName="tide";
  return (
    <div>
    <Item name={itemOneName}></Item>
    <ItemDate  day="20" month="june" year="1998"></ItemDate>

    <Item name={itemTwoName} ></Item>
    <ItemDate day="22" month="aug" year="2002"></ItemDate>

    <Item name={itemThreeName}></Item>
    <ItemDate day="4" month="nov" year="2001"></ItemDate>

    <div className="App">Hello jee</div>
    </div>
  );
}

export default App;
