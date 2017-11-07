import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .champ-icon-button {
    outline: none;
  }

  .champ-icon-button:focus img {
    border: 3px solid #E59700;
  }

  .map-container, .map-filter{
    position: relative;
  }
  .map-image, .map-items {
    position: absolute;
  }

  .map-image {
    width: 100%;
  }

  .map-section-top-left {
    width: 5%;
    height: 5%;
    top: 10%;
    left: 10%;
  }
`;
