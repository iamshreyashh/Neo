import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Profile from './Profile';

const LoginPage = ({ onConnect,setAccount,account }) => {
  
  const [network, setNetwork] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.listAccounts();

      if (accounts.length > 0) {
        setAccount(accounts[0].address);
        setIsConnected(true);
        onConnect(accounts[0].address);

        // Fetch network details
        const networkData = await provider.getNetwork();
        setNetwork(networkData.name || `Chain ID: ${networkData.chainId}`);
      }
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const handleConnect = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        onConnect(accounts[0]);

        // Fetch network details
        const networkData = await provider.getNetwork();
        setNetwork(networkData.name || `Chain ID: ${networkData.chainId}`);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <>
    {isConnected ?<Profile acc={account} net={network}/> : <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
            <Typography variant="h4" gutterBottom>
              Connect Your Wallet
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConnect}
              sx={{ mt: 2 }}
            >
              Connect Wallet
            </Button>
      </Box>
    </Box>}
    </>
  );
};

export default LoginPage;