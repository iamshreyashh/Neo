import { useState } from 'react';
import LoginPage from './LoginPage';
import Profile from './Profile';
import Navbar from './Navbar';
import './App.css';


function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [account, setAccount] = useState('');

  const handleWalletConnect = (address) => {
    setWalletAddress(address);
    // You can add additional logic here
    console.log('Connected address:', address);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-gray-900 to-black ">
      <Navbar account={account}/>
      <LoginPage onConnect={handleWalletConnect} setAccount={setAccount} account={account}/>
    </div>
  );
}

export default App;