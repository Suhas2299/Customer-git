import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerAction, updateRenderAction } from "../redux/store";
import { AppNav } from "./AppNav";
import { useHistory } from "react-router-dom";

export const CustomerList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCustomerAction());
  }, []);

  // const updateRecord = (item) => {
  //   console.log("Update Record", item);

  //   // 3 :: updating the store
  //   dispatch(updateRenderAction(item));

  //   // navigateing to the page
  //   history.push("/customer-upsert");
  // };

  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary mb-0">
        <h3>Customer List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">addharNumber</th>
            <th scope="col">firstName</th>
            <th scope="col">middleName</th>
            <th scope="col">lastName</th>
            <th scope="col">mobileNumber</th>
            <th scope="col">email</th>
            <th scope="col">gender</th>
            <th scope="col"> action</th>
          </tr>
        </thead>
        <tbody>
          {state.customerList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.customerId}</th>
              <td>{item.addharNumber}</td>
              <td>{item.firstName}</td>
              <td>{item.middleName}</td>
              <td>{item.lastName}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-success btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  // onClick={() => updateRecord(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
