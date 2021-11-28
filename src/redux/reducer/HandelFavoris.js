film = [];
const handleFavoris = (state = film, action) => {
  const film = action.payload;
  switch (action.type) {
    case "addfilm":
      return [
        ...state,
        {
          ...film,
        },
      ];
    default:
      state;
  }
};

export default handleFavoris;
