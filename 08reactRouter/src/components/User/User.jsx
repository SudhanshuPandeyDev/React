import React from "react";
import { useParams } from "react-router-dom";

function User() {
  // In React Router, useParams is a hook used to access parameters in the URL
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      User: {userid}
    </div>
  );
}

export default User;
