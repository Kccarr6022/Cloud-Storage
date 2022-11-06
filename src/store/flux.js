const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      login: async (email, password) => {
        const opts = {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch("http://localhost:5000/api/login", opts);
          if (resp.status !== 200) {
            alert("There has been an error");
            return false;
          }
          const data = await resp.json();
          console.log("This came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.log("There was an error", error);
        }
      },
    },
  };
};

export default getState;
