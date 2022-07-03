import React, {useState, useEffect} from 'react';
import App from './App';
import Loading from './components/loading/Loading';

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    <div>
        {isLoading ===true ? <Loading /> : <App/>}
    </div>
  )
}

export default Root