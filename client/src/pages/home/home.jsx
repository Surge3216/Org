import { useContext } from 'react';
import { UserContext } from '../../context/auth';
import Navbar from '../../components/Hero/index'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';



export default function Home() {
  const { user } = useContext(UserContext)


  return (
        <div>
          <Navbar />
        </div>
    )
}
