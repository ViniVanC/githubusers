import React, { useState } from "react";
import { NotUser } from "./components/NotUser/NotUser";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [user, setUser] = useState();
  const [notUser, setNotUser] = useState(false);
  const [search, setSearch] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (search !== "") {
      const response = await fetch(`https://api.github.com/users/${search}`, {
        method: "GET",
      });

      const responseResult = await response.json();

      if (response.ok) {
        setNotUser(false);
        setUser(responseResult);
      } else {
        setNotUser(true);
      }

      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  const handleChange = (e) => setSearch(e.target.value);

  return (
    <>
      {/* <header>
        <div className="logo">
          <img src="/tanukiLogo-orange.svg" alt="" />
        </div>
      </header> */}
      <div className="App">
        <SearchBar
          handleForm={handleForm}
          search={search}
          handleChange={handleChange}
        />
        <UserCard fadeIn={fadeIn} user={user} notUser={notUser} />
      </div>
      {/* <footer>
        <div className="powered">
          <h3 className="subtitle">
            Powered by
            <a
              href="https://github.com/ViniVanC"
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              Vincent Van
            </a>
          </h3>
        </div>
      </footer> */}
    </>
  );
}

export default App;
