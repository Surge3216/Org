import { useContext } from "react";
import { UserContext } from "../../context/auth";
import Confessional from "../confessional/index";
import Vl from "../viewersLounge/index";

export default function Home() {
    const { user } = useContext(UserContext)
    console.log(user,  "cat")
        return (
            <div>
                 {user.role === "player" && <Confessional />}
                 {user.role === "viewer" && <Vl />}                  
            </div>
        )
    
   
}