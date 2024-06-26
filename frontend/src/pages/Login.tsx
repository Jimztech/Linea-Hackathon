import { useAuth } from "@arcana/auth-react";

function Login() {
  const { loading, isLoggedIn, loginWithSocial } = useAuth()

  // custom login UI
  const onConnectClick = async () => {
    try {
      await loginWithSocial('twitter'); 
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return (
      <button onClick={onConnectClick}>
        Connect with Twitter
      </button>
    );
  }
}



export default Login;