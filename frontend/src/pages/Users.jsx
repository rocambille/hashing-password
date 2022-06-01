import { useRef } from "react";

import UserList from "@components/UserList";

export default function Users() {
  const loginRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const user = {
            login: loginRef.current.value,
            password: passwordRef.current.value,
          };

          fetch("http://localhost:5000/users", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((response) => {
            alert(response.status);
          });
        }}
      >
        <input ref={loginRef} type="text" name="login" />
        <input ref={passwordRef} type="password" name="password" />
        <button type="submit">envoyer</button>
      </form>
      <UserList />
    </>
  );
}
