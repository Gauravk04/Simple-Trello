import React from "react";
import "./styles.scss";
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseClient'

export default function Navbar(props) {

  const navigate = useNavigate()

  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <h1 onClick={() => navigate("/")} className="cursor-pointer text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-600 hover:drop-shadow">TaskHub</h1>
          </div>
          <div className="flex justify-end">
            <h2 className="font-bold">{supabase.auth.user() ? supabase.auth.user().user_metadata.name : ''}</h2>
          </div>
        </div>
      </nav>
    </div>
  );
}
