import { signOut } from 'firebase/auth'
import React from 'react'
import { MdOutlinePowerSettingsNew } from "react-icons/md"
import { firebaseAuth } from '../utils/firebaseConfig'
import { useAppDispatch } from '../app/hooks'
import { setToast, setUserStatus } from '../app/slices/AppSlice'
import { pokemonTabs } from '../utils/Constants'
import { Route, useLocation } from 'react-router-dom'

const Footer = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined))
    dispatch(setToast('Logged Out Successfully from firebase.'))
  }

  


const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];

  return (
    <footer>
      <div className="block"></div>
      <div className="data">
        { location.pathname.includes("/pokemon") &&
          <ul>
          {routes.map((route) =>{
              return <li key={route.name} onClick={() =>{}}>
                {route.value}
              </li>
          })}
        </ul>
        }
      </div>
      <div className="block">
        <MdOutlinePowerSettingsNew onClick={handleLogOut}/>
      </div>
    </footer>
  )
}

export default Footer
