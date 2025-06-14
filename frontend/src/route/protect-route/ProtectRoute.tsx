import { useState, useEffect } from "react";
//Functions
import { readProfile } from "@/functions/user";
//Components
import LoadingtoRedirect from "./LoadingtoRedirect";

function ProtectRoute({ layout }: any) {
  
  const [member, setMember] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      readProfile(token)
        .then((res) => {
          setMember(true);
        })
        .catch((err) => {
          console.log("Access denied", err);
          setMember(false);
        });
    }
  }, [token]);

  return member ? layout : <LoadingtoRedirect />;
}

export default ProtectRoute;
