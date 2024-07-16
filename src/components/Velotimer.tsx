import * as React from "react";

export const Velotimer: React.FC = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => setSeconds(seconds + 1), 1000);
  });

  return <div>Прошло {seconds} секунд.</div>;
};
