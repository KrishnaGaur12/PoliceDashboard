import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input, Button } from '../components/UI';
import { Shield, AlertCircle } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    emailOrGovId: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(credentials);
      navigate('/dashboard');
    } catch (err) {
      setError(err.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <Shield className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Police Admin Portal</h1>
          <p className="text-primary-100">Smart Tourist Safety System</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Input
              label="Government ID / Email"
              type="text"
              placeholder="Enter your Gov ID or Email"
              value={credentials.emailOrGovId}
              onChange={(e) =>
                setCredentials({ ...credentials, emailOrGovId: e.target.value })
              }
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <div className="text-xs text-blue-800 space-y-1">
              <p><strong>Admin:</strong> admin@police.gov.in / admin123</p>
              <p><strong>Inspector:</strong> inspector@police.gov.in / inspector123</p>
              <p><strong>Operator:</strong> operator@police.gov.in / operator123</p>
            </div>
          </div>
        </div>

        <p className="text-center text-primary-100 text-sm mt-6">
          © 2025 Police Department, Government of Assam
        </p>
      </div>
    </div>
  );
};

export default Login;
