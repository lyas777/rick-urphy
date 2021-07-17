const initialState = () => {
  return {
    isAuthenticated: !!localStorage.getItem('IS_AUTHENTICATED'),
    alertMessage: {
      visibility: false,
      message: '',
    },
    modal: {
      visibility: false,
      callback: () => {},
      title: '',
      subTitle: '',
    },
  };
};

export default initialState;
