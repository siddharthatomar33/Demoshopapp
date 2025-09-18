import './App.css';
import Item from './components/item'
import ItemDate from './components/ItemDate';
//__
function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"1998"
    },
    {
      itemName:"surf-excel",
      itemDate:"08",
      itemMonth:"dec",
      itemYear:"2000"
    },
    {
      itemName:"nirma3",
      itemDate:"203",
      itemMonth:"june3",
      itemYear:"19983"
    }

  ];
  return (
    <div>
    <Item name={response[0].itemName}></Item>
    <ItemDate  day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate  day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate  day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div className="App">Hello jee</div>
    </div>
  );
}

export default App;
