import { data } from 'autoprefixer'

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      videos: null,
    },
    actions: {
      login: async (email, password) => {
        const opts = {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }

        try {
          const resp = await fetch('http://localhost:5000/api/login', opts)
          if (resp.status !== 200) {
            alert('There has been an error')
            return false
          }
          const data = await resp.json()
          console.log('This came from the backend', data)
          sessionStorage.setItem('token', data.access_token)
          setStore({ token: data.access_token })
          return true
        } catch (error) {
          console.log('There was an error', error)
        }
      },
      logout: () => {
        sessionStorage.removeItem('token')
        setStore({ token: null })
      },
      register: async (firstname, lastname, email, password) => {
        const opts = {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          }),
        }

        try {
          const resp = await fetch('http://localhost:5000/api/register', opts)
          if (resp.status !== 200) {
            alert('There has been an error')
            return false
          }
          const data = await resp.json()
          console.log('This came from the backend', data)
          sessionStorage.setItem('token', data.access_token)
          setStore({ token: data.access_token })
          return true
        } catch (error) {
          console.log('There was an error', error)
        }
      },
      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem('token')
        if (token && token != '' && token != undefined) setStore({ token: token })
      },
      getVideos: () => {
        const store = getStore()
        const opts = {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + store.token,
          },
          body: JSON.stringify({
            id: store.token,
          }),
        }
        fetch('http://localhost:5000/api/videos', opts)
          .then(resp => resp.json())
          .then(data => setStore({ videos: data }))
          .catch(error => {
            console.log('An error occured', error)
          })
      },
    },
  }
}

export default getState
