import { useContext } from 'react';
import { Appcontext } from '../ThemecontextProvider/ThemContextProvider';

const Button = () => {
  const [theme] = useContext(Appcontext);

  return (
    <div>
     
    </div>
  );
};

export default Button;
