import React from 'react';
import './App.css';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

const query = graphql`
  query AppQuery {
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
  }
}
`;

function App(props) {
  const {data, error, retry, isLoading} = useQuery(query);

  return (
    <div className="App">
      Is loading: {isLoading ? 'true' : 'false'}
    </div>
  );
}

function AppRoot(props) {
  return (
    <App />
  );
}

export default AppRoot;
