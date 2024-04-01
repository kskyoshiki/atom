import { useState } from 'react';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PrimaryButton>テスト</PrimaryButton>
      </div>
    </>
  );
}

export default App;
