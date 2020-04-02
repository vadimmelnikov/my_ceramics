import React from 'react';

// import Consumer from './Consumer';

const Context = React.createContext({
  search: '',
  onChangeSearch: () => {},
  headerPosition: 0,
  changeHeaderPosition: (pos) => (this.headerPosition = pos),
});
// Context.Consumer, Context.Provider

export default Context;
