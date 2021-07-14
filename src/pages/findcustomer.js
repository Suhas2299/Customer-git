import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../redux/store";
import { AppNav } from "./AppNav";

// import { useHistory } from "react-router-dom";

export function Filter(props) {
  const [selectedFilter, setSelectedFilter] = useState("filterByPhone");
  const [filter, setFilter] = useState("none");

  const dispatch = useDispatch();

  function onFilterOptionChange(value) {
    setSelectedFilter(value);
  }

  function onFilterChange(value) {
    console.log(`value change ${value}`);
    setFilter(value);
  }

  function onSearch() {
    dispatch(
      getCustomer({
        filterType: selectedFilter,
        filter: filter,
      })
    );
  }

  let filterElement;
  console.log(`filter option : ${selectedFilter}`);
  if (selectedFilter === "filterByMobileNumber") {
    filterElement = (
      <MobileNumberFilter filter={filter} onFilterChange={onFilterChange} />
    );
  }
  //else if (selectedFilter === "filterByPhone") {
  //   filterElement = (
  //     <PhoneNumberFilter filter={filter} onFilterChange={onFilterChange} />
  //   );
  // } else if (selectedFilter === "filterByConsumerNumber") {
  //   filterElement = (
  //     <ConsumerNumberFilter filter={filter} onFilterChange={onFilterChange} />
  //   );
  // }
  return (
    <div>
      <FilterOptions
        selectedFilter={selectedFilter}
        onFilterOptionChange={onFilterOptionChange}
      />
      {filterElement}
      <button className="btn btn-md btn-success w-10 m-3" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export const FilterOptions = (props) => {
  function handleSelectionChanged(e) {
    console.log(` option change ${e.target.value}`);
    props.onFilterOptionChange(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        id="filterByMobileNumber"
        name="filterOptions"
        value="filterByMobileNumber"
        checked={props.selectedFilter === "filterByMobileNumber"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByMobileNumber" className="mr-4">
        View By Mobile Number
      </label>

      {/* <input
        type="radio"
        id="filterByPhone"
        name="filterOptions"
        value="filterByPhone"
        checked={props.selectedFilter === "filterByPhone"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByPhone" className="mr-4">
        View By Phonenumber
      </label> */}

      {/* <input
        type="radio"
        id="filterByConsumerNumber"
        name="filterOptions"
        value="filterByConsumerNumber"
        checked={props.selectedFilter === "filterByConsumerNumber"}
        onChange={handleSelectionChanged}
      />

      <label for="filterByConsumerNumber" className="mr-4">
        View By ConsumerNumber
      </label> */}
    </div>
  );
};
export const MobileNumberFilter = (props) => {
  function onMobileNumberChange(e) {
    console.log("update phone");
    props.onFilterChange({ mobileNumber: e.target.value });
  }
  return (
    <div>
      <label className="mr-3 mb-2"></label>
      <input
        type="text"
        placeholder="Enter mobile number"
        required="true"
        onChange={onMobileNumberChange}
      ></input>
    </div>
  );
};

// export const PhoneNumberFilter = (props) => {
//   function onPhoneNumberChange(e) {
//     console.log("update phone");
//     props.onFilterChange({ phoneNumber: e.target.value });
//   }
//   return (
//     <div>
//       <label className="mr-3">Phone number </label>
//       <input
//         type="text"
//         placeholder="Enter phone number"
//         required="true"
//         onChange={onPhoneNumberChange}
//       ></input>
//     </div>
//   );
// };

// export const ConsumerNumberFilter = (props) => {
//   function onConsumerNumberChange(e) {
//     console.log("update phone");
//     props.onFilterChange({ consumerNumber: e.target.value });
//   }
//   return (
//     <div>
//       <label className="mr-3">Consumer Number </label>
//       <input
//         type="text"
//         placeholder="Enter Consumer Number"
//         required="true"
//         onChange={onConsumerNumberChange}
//       ></input>
//     </div>
//   );
// };

export const ViewCustomer = () => {
  const state = useSelector((state) => state);
  if (!state.searchResult) {
    return (
      <div>
        <h1>No User found</h1>
      </div>
    );
  }
  return (
    <div>
      <h3 className="bg-light p-3">Customer Details</h3>

      <div>
        <label>Mobile:</label>
        <label>{state.searchResult.mobileNumber}</label>
      </div>

      <div>
        <label>FirstName:</label>
        <label>{state.searchResult.firstName} </label>
      </div>
      <div>
        <label>MiddleName:</label>
        <label>{state.searchResult.middleName}</label>
      </div>
      <div>
        <label>LastName:</label>
        <label>{state.searchResult.lastName}</label>
      </div>

      {/* <div>
        <input
          type="submit"
          value="submit"
         // onClick={handleSubmit}
          className="btn btn-lg btn-secondary w-100"
        />
      </div> */}
    </div>
  );
};

export const findcustomer = () => {
  return (
    <div>
      <AppNav />
      <h3 className="bg-light p-3">Find Customer By Phone</h3>

      <Filter />
      <ViewCustomer />
    </div>
  );
};
