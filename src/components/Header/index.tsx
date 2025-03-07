import logo from "./logo.svg";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>

      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
