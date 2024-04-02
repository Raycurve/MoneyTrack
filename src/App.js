import './App.css';

function App() {
  
  return (
    <main>
      <h1>$600<span>.00</span></h1>

      {/* <h4>{dat.date}</h4> */}
      <form>
        <div className="info">
          <input type="text" placeholder={"Price"}/>
          <input type="datetime-local" placeholder={"tdays time and date by fetch"}/>
        </div>
        <div className="description">
          <input type="text" placeholder="Description"/>
        </div>
        <button type="submit"> Add new transaction</button>
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
