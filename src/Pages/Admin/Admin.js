import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersData } from "../../redux/GetAccountHolder/action";
export default function Admin() {
  const userData = useSelector((state) => state.UsersData.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userData.length == 0) {
      dispatch(UsersData());
    }
  }, []);

  return <div>Name:{userData.firstName}</div>;
}
