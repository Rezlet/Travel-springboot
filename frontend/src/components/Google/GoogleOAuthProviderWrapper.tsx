import useGoogleOAuth from "./useGoogleOAuth.tsx";

import { GoogleOAuthProvider } from "@react-oauth/google";
function GoogleOAuthProviderWrapper({ children }) {
  const ready = useGoogleOAuth();

  if (!ready) {
    return null;
  }

  return (
    <GoogleOAuthProvider clientId="847485432179-k0sb7892qlrgv1hphf6vo4ms6r7lqlqo.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}

export default GoogleOAuthProviderWrapper;
