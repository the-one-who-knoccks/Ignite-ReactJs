import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

 export function App() {
  return (
    <>
    <Header />


      <Post 
      author="Thiago Alves" 
      content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum" />

      <Post 
      author="Diego Fernandes"  
      content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
      <Post />
      
    </>
  );
}

