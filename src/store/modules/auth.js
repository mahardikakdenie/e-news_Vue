export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
}
