import * as  React from 'react';

export const SearchError = ({ error }) => {
  console.error("Search Error", { error });

  return (
    <div className="error">
      <div className="message">We have encountered an error!</div>
      <div className="sub-message">
        I hope this does not blemish our reputation
      </div>
    </div>
  );
}