import logo from "./assets/logo.svg";
import menu from "./assets/menu.svg";
import imdblogo from './assets/imdblogo.svg';
import tomato from './assets/tomato.svg';
import play from './assets/play.svg';


export default function Header() {
  return (
    <div className="text-white bg-[url('/src/assets/headerbg.svg')] py-10">
      <nav className="flex justify-between">
        <img src={logo} alt="app logo" className="w-25" />
        <input type="text" placeholder="What do you want to watch?" 
        className="md:basis-2/4 h-8 outline-0 bg-transparent"/>
       
        <div className="flex">
          <a href="#">Sign in</a>
          <img src={menu} alt="menu" />
        </div>
      </nav>

      <header className="sm:w-1/3">
        <h1 className="underline">
            John Wick 3: Parabellum
        </h1>

        <div className="flex justify-content">
            <img src={imdblogo} alt="imdb logo" />
            <p>86.0/100</p>
            <img src={tomato} alt="tomato" />
            <p>97%</p>
        </div>

        <p>
            John wick is on the run after killing a member of the 
            international assassins guild, nd with a $14 million price
            tag on his head, he is the target of hit men and women evrywhere.
        </p>

        <button className="flex"><img src={play} alt="play button"/>WATCH TRAILER</button>
      </header>
    </div>
  );
}
