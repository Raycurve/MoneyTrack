import { useState } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState('');
  const [datee, setdatee] = useState('');
  const [descrii, setdescrii] = useState('');
  function addTrans(e){
    // console.log(name,datee,descrii);
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/trans';
    console.log(url);
    fetch(url,{
        method:'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({name,datee,descrii})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    }); 
  }



  // fetch(url,{
  //   method:'POST',
  //   headers: {'Content-type':'application/json'},
  //   body: JSON.stringify({name,datee,descrii})
  // }) 
  // .then((response)=>{
  //   response.json().then(()=>{
  //     console.log("yay");
  // })
  // });
  



  return (
    <main>
      <h1>$600<span>.00</span></h1>

      {/* <h4>{dat.date}</h4> */}
      <form onSubmit={addTrans}>
        <div className="info">
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="Price"/>
          <input type="datetime-local" value={datee} onChange={ev => setdatee(ev.target.value)}/>
        </div>
        <div className="description">
          <input type="text" value={descrii} onChange={e=>setdescrii(e.target.value)} placeholder="Description"/>
        </div>
        <button type="submit" > Add new transaction</button>
      </form>

{/*--------------------------------------------------------- */}
      <div className="transactions">
        <div className="trans">
          <div className="left">
            <div className="name">Samsung TV</div>
            <div className="descript">56 inch ka tv</div>
          </div>
          <div className="right">
            <div className="price red">-56000Rs</div>
            <div className="timedate">20-09-23 12:23</div>
          </div>
        </div>
  
        <div className="trans">
          <div className="left">
            <div className="name">Job salary</div>
            <div className="descript">Advanced</div>
          </div>
          <div className="right">
            <div className="price green">+40000Rs</div>
            <div className="timedate">20-09-23 12:23</div>
          </div>
        </div>
     
        <div className="trans">
          <div className="left">
            <div className="name">Nokia Phone</div>
            <div className="descript">phonee</div>
          </div>
          <div className="right">
            <div className="price red">-26000Rs</div>
            <div className="timedate">20-09-23 12:23</div>
          </div>
        </div>
      </div>
      

    </main>
  );
}

export default App;
