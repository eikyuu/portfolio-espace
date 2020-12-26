import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  	@font-face {}
    
	* {
	  box-sizing: border-box;
	  outline: 0;
	}
	
	html {
		scroll-behavior: smooth;
	}
	
	:after, :before {
	  box-sizing: inherit;
	}
	
	p {
	  vertical-align: middle;
	}
	
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  vertical-align: baseline;
	  font-family: "Avenir";
	  text-decoration: none;
	}
	
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section, img {
	  display: block;
	}
	
	button, input, optgroup, select, textarea {
	  font-family: "Avenir";
	  font-size: 100%;
	  line-height: 1.15;
	  margin: 0;
	}
	
/*	body {
	  line-height: 1;
	}*/
	
	ol, ul {
	  list-style: none;
	}
	
	blockquote, q {
	  quotes: none;
	}
	
	blockquote:before, blockquote:after,
	q:before, q:after {
	  content: '';
	  content: none;
	}
	
	table {
	  border-collapse: collapse;
	  border-spacing: 0;
	}
	
	main {
	  margin: 0 auto;
	  position: relative;
	}
	
	.info_top {
		position: relative;
		background-color: #000000;
		text-align: center;
		padding: 1rem 0;
		p {
			color: #FFFFFF;
		}
	}
`;

export default GlobalStyles;
