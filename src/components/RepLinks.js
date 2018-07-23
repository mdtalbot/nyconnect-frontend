import React from 'react';

export default function RepLinks(props) {
  if (props.type === "Facebook") {
    return (
      <a className="ui facebook button" role="button" href={`http://www.facebook.com/${props.id}`} target="_blank">
        <i aria-hidden="true" className="facebook icon"></i> Facebook</a>
    );
  }
  if (props.type === "Twitter") {
    return (
      <a className="ui twitter button" role="button" href={`http://www.twitter.com/${props.id}`} target="_blank">
        <i aria-hidden="true" className="twitter icon"></i> Twitter</a>
    )
  }
  if (props.type === "YouTube") {
    return (
      <a className="ui youtube button" role="button" href={`http://www.youtube.com/${props.id}`} target="_blank">
        <i aria-hidden="true" className="youtube icon"></i> YouTube</a>
    )
  }
  if (props.type === "GooglePlus") {
    return (
      <a className="ui google plus button" role="button" href={`http://plus.google.com/${props.id}`} target="_blank">
        <i aria-hidden="true" className="google plus icon"></i> Google Plus</a>
    )
  }
}

// Look into creating new tabs for these links
