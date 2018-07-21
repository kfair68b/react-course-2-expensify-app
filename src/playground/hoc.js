// Higher order component - a component (hoc) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin ? <p>Please log in.</p> : <WrappedComponent {...props} />}
      
    </div>
  );
};

const requireAuthenication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props }  />
      ) : (
        <p>Please log in to view info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// Require authentication
const AuthInfo = requireAuthenication(AdminInfo);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />,document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />,document.getElementById('app'));