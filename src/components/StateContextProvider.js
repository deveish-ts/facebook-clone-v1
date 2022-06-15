import React, { useReducer } from 'react';
import StateContext from './Context';
const defaultValues = {
  user: null,
  updateFeed: null,
};
const reducer = (state, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.user,
    };
  }
  if (action.type === 'SET_FEED') {
    return {
      ...state,
      user: action.user,
      updateFeed: action.feed(),
    };
  }

  return state;
};
const StateContextProvider = (props) => {
  const [state, dispatchAction] = useReducer(reducer, defaultValues);

  const setUserState = (user) => {
    dispatchAction({
      type: 'SET_USER',
      user: user,
    });
    console.log(user);
  };
  const updateFeed = (feed) => {
    dispatchAction({
      type: 'SET_FEED',
      updateFeed: feed(),
    });
  };
  const stateContext = {
    user: state.user,
    setUser: setUserState,
    updateFeed: updateFeed,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
