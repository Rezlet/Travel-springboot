import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";

function useGoogleOAuth() {
  const [ready, err] = useGoogleLogin({
    clientId:
      "847485432179-k0sb7892qlrgv1hphf6vo4ms6r7lqlqo.apps.googleusercontent.com",
    uxMode: "popup",
  });
  useEffect(() => {
    if (err) {
      console.error(err);
    }
  }, [err]);

  return ready;
}

export default useGoogleOAuth;
