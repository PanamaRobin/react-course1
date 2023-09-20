import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
  const title = 'Este es un componente!';
  const married = true;
  if (married) {
    return (
      <div>
        <h1>{title}</h1>
        <p>123 lorem</p>
      </div>
    );
  }
}

function UserCard() {
  const user = {
    firstName: 'Robin',
    lastName: 'Herrera',
  };

  return (
    <div>
      Mi nombre es {user.firstName} {user.lastName}.
    </div>
  );
}

function SumFunction() {
  function add(x, y) {
    return x + y;
  }

  return <div>{add(9, 8)}</div>;
}

rootElement.render(
  <div>
    <Greeting />
    <UserCard />
    <SumFunction />
  </div>
);
