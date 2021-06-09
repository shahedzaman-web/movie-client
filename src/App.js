import './App.css';
import Photo1 from "./Images/Ellipse.png";
import Photo4 from "./Images/Ellipse11.png";
import Photo2 from "./Images/Vector.png";
import Photo3 from "./Images/Vector1.png";



function App() {
  const data=[{
    img: Photo4,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, omnis?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sed pariatur eius unde modi ex, quae culpa quas tempora?"
  },
  {
    img: Photo4,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, omnis?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sed pariatur eius unde modi ex, quae culpa quas tempora?"
  },{
    img: Photo4,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, omnis?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sed pariatur eius unde modi ex, quae culpa quas tempora?"
  },
  {
    img: Photo4,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, omnis?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sed pariatur eius unde modi ex, quae culpa quas tempora?"
  }
  ]
  return (
    <div className="container h-screen w-screen flex flex-row bg-gray-100"> 
  <div className="bg-gray-200 shadow-xl box-border h-full w-4/12 rounded-3xl">

  <div className=" flex flex-col">
    <div className="bg-white px-8 pt-6  m-12 h-24 w-72 rounded flex flex-row ">
    <div>
    <img className="chat-notification-logo pr-2" src={Photo1} alt="" />
    </div>
   <div>
   <h3 className="text-xl font-bold">Hi Reader,</h3>
      <h6>Here's your News!</h6>
   </div>
    </div>
    <div className="bg-white p-6  m-8 h-28 w-72 rounded flex flex-col items-center">
      <h1 className="text-xl font-bold">View Toggle</h1>
      <div className="flex flex-row p-1">
        <img className="w-6 rounded-l-lg p-3 box-content bg-green-300" src={Photo2} alt="" />
        <img className="w-6 rounded-r-lg p-3 box-content bg-gray-100" src={Photo3} alt="" />
      </div>

    </div>
    <div className="bg-white p-6  m-8 h-32 w-72 rounded flex flex-col items-center">
      <h1 className="text-xl font-bold">Have a Feedback?</h1>
      <div className="bg-green-200 p-2 mt-2 h-12 w-36 rounded">
        <h4 className="font-bold">We're Listening!</h4>
      </div>
    </div>

  </div>
  </div>
  <div className="bg-gray-100 box-border h-full w-8/12 rounded-3xl ">
{data.map((list,index) =>(<div className="bg-white rounded-2xl p-6 mx-12 my-6 h-32 w-4/5 flex flex-row"
 key={list.index} >
   <img className="pr-4" src={Photo4} alt="" />
   <div>
   <h1 className="font-bold"> {list.title}</h1>
   <p>{list.description}</p>
   </div>
   </div>
   
   ))}
  </div>
    </div>
  );
}

export default App;
