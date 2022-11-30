import axios from "axios";
import React, { useState } from "react";
import UserTable from "../components/UserTable";
import TableHead from "../components/TableHead";
import Nav from "../components/Nav";

function page({ userData }) {
  const [users, setUsers] = useState(userData);
  const [search, setSearch] = useState("");

  const filterPaid = () => {
    const filteredUsers = userData.filter((e) => e.paymentStatus === "paid");
    setUsers(filteredUsers);
  };

  const filterUnPaid = () => {
    const filteredUsers = userData.filter((e) => e.paymentStatus === "unpaid");
    setUsers(filteredUsers);
  };

  const filterOverDue = () => {
    const filteredUsers = userData.filter((e) => e.paymentStatus === "overdue");
    setUsers(filteredUsers);
  };

  const filterAll = () => {
    const filteredUsers = userData.filter(
      (e) => e.paymentStatus === "paid" || "unpaid" || "overdue"
    );
    setUsers(filteredUsers);
  };

  return (
    <>
      <div>
        <Nav
          users={users}
          search={search}
          setSearch={setSearch}
          filterPaid={filterPaid}
          filterAll={filterAll}
          filterUnPaid={filterUnPaid}
          filterOverDue={filterOverDue}
        />
        <TableHead />
        {users
          .filter((e) => {
            if (search == "") {
              return e;
            } else if (
              e.firstName.toLowerCase().includes(search.toLowerCase())
            ) {
              return e;
            }
          })
          .map((user) => (
            <UserTable user={user} />
          ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://cornie-assessment.herokuapp.com/users/6Y5r6h9Vi3Cq50b"
  );
  const userData = await res.data.data;

  return {
    props: {
      userData,
    },
  };
}

export default page;
