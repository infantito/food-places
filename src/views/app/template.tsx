import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.background};
    box-sizing: border-box;
  }

	html,
	body,
	main {
    height: 100%;

		@media only screen and (max-width: 960px) {
			height: auto;
		}
  }
  
	*, *:before, *:after {
    box-sizing: inherit;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: initial;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.green};
  }

	h3,
	h4,
	label,
	p,
	span {
		color: ${props => props.theme.colors.green};
		line-height: normal;
  }
  
	ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
  }
  
	button {
		appearance: none;
		outline: none;
  }
  
	main {
		align-items: center;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		max-width: 100%;
		padding: 0;
  }
  
	::selection {
		background-color: ${props => props.theme.colors.highlight};
		color: ${props => props.theme.colors.dark};
		text-shadow: none;
  }
  
  ::-webkit-scrollbar {
    background-color: ${props => props.theme.colors.dark};
    border-left: 1px solid ${props => props.theme.colors.highlight};
    width: 12.5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.highlight};
    outline: 10px solid transparent;
  }
`

const Template: React.ComponentType = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  )
}

export default Template
