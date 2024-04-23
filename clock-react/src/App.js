import style from './style.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
      <div className = {style.wrapper}>
        <div className={style.line}></div>
        <div className={style.clock}>
          <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
          <h3>{time.getDate()}.{time.getMonth()}.{time.getFullYear()}</h3>
        </div>
      </div>
  );
}

export default App;