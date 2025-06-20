import { useState, useEffect } from "react";
//Functions
import { readProfile } from "@/functions/user";
//Components
import LoadingtoRedirect from "./LoadingtoRedirect";

function ProtectRoute({ layout, setAdmin }: any) {
  const [member, setMember] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      readProfile(token)
        .then((res) => {
          setMember(true);

          if (res.data.role == "Admin") {
            setAdmin(true);
          }
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
