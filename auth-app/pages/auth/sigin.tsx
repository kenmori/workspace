import { NextPage } from "next"
import JSXStyle from "styled-jsx/style"
type Props = {}

const SignIn: NextPage = (props) => {
  return <div className="sign-in-form">
    <h1>login</h1>
    <form>
      <input type="email" placeholder="john@email.com"/>
      <input type="password" placeholder="*****"/>
      <input type="submit" placeholder="******"/>
    </form>
  </div>
}

.sign-in-form {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in-form h1 {
  font-size: 18px;
  text-align: center;
}

.sign-in-form input {
  display: block;
  padding: 5px;
  border 1px gray solid;
  border-radius: 3px;
  margin-top: 15px;
}

.sign-in-form form {
  padding: 50px 15px;
  border: 2px gray solid;
  border-radius: 3px;
}
