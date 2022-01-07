import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let username = (event.currentTarget[0] as HTMLInputElement).value;
    let password = (event.currentTarget[1] as HTMLInputElement).value;
    let loginParams = { username, password };
    fetch(`${apiUrl}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginParams),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  return (
    <form onSubmit={onLogin}>
      <label htmlFor="username">用户名</label>
      <input
        type="text"
        id="username"
        placeholder="请输入用户名"
        name="username"
      />
      <br />
      <label htmlFor="password">秘密</label>
      <input
        type="text"
        id="password"
        placeholder="请输入密码"
        name="password"
      />
      <br />
      <button type="submit">注册</button>
    </form>
  );
};
