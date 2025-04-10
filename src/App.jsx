import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [message, setMessage] = useState("");
const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]);

// Define the handleAddFighter function
const handleAddFighter = (fighterToAdd) => {
  // Check available money
  if (money >= fighterToAdd.price) {
    // Add fighter to team
    setTeam([...team, fighterToAdd]);
    // Subtract cost from money
    setMoney(money - fighterToAdd.price);
    // Remove fighter from available list
    setZombieFighters(zombieFighters.filter((fighter) => fighter.id !== fighterToAdd.id));
    // Clear message on success
    setMessage("");
  } else {
    setMessage(`Not enough money to recruit ${fighterToAdd.name}`);
  }
};

// Define the handleRemoveFighter function
const handleRemoveFighter = (fighterToRemove) => {
  // Add fighter back to the available list
  setZombieFighters([...zombieFighters, fighterToRemove]);
  // Remove fighter from the team
  setTeam(team.filter((fighter) => fighter.id !== fighterToRemove.id));
  // Refund the price of the fighter  
  setMoney(money + fighterToRemove.price);
  // Clear message on success
  setMessage("");
};

// Calculate total strength
const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
// Calculate total agility
const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0);

  return (
    <>
      <h1>Zombie Fighter Team Builder</h1>

      {/* Display Money and Team Stats */}
      <div>
        <h2>Stats</h2>
        <p>Money: {money}</p>
        <p>Total Team Strength: {totalStrength}</p>
        {/* Add Total Team Agility */}
        <p>Total Team Agility: {totalAgility}</p>
      </div>

      {/* Display UI Messages */}
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {/* Display Current Team */}
      <div>
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some fighters!</p>
        ) : (
          <ul>
            {team.map((fighter) => (
              <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Available Fighters */}
      <div>
        <h2>Available Fighters</h2>
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default App
