import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home.jsx';
import Explores from './explore/Explores.jsx';
import Signup from './components/Signup.jsx';
import Buys from './Buy/Buys.jsx'; // Import Buys component
import { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth(); // Get authUser from context
  console.log(authUser);

  return (
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={authUser ? <Explores /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          {/* Pass authUser to Buys.jsx */}
          <Route
            path="/buy"
            element={authUser ? <Buys authUser={authUser} /> : <Navigate to="/signup" />}
          />
        </Routes>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
