import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`    
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
	
	body {
	  line-height: 1;
	}
	
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

	.m-0 {
		margin : 0 auto;
	}
	.m-1 {
		margin : 10px;
	}
	.m-2 {
		margin : 20px;
	}
	.m-3 {
		margin : 30px;
	}
	.m-4 {
		margin : 40px;
	}
	.m-5 {
		margin : 50px;
	}
	.mt-0 {
		margin-top : 0 auto;
	}
	.mt-1 {
		margin-top : 10px;
	}
	.mt-2 {
		margin-top : 20px;
	}
	.mt-3 {
		margin-top : 30px;
	}
	.mt-4 {
		margin-top : 40px;
	}
	.mt-5 {
		margin-top : 50px;
	}
	.mb-0 {
		margin-bottom : 0 auto;
	}
	.mb-1 {
		margin-bottom : 10px;
	}
	.mb-2 {
		margin-bottom : 20px;
	}
	.mb-3 {
		margin-bottom : 30px;
	}
	.mb-4 {
		margin-bottom : 40px;
	}
	.mb-5 {
		margin-bottom : 50px;
	}
	.ml-0 {
		margin-left : 0 auto;
	}
	.ml-1 {
		margin-left : 10px;
	}
	.ml-2 {
		margin-left : 20px;
	}
	.ml-3 {
		margin-left : 30px;
	}
	.ml-4 {
		margin-left : 40px;
	}
	.ml-5 {
		margin-left : 50px;
	}
	.mr-0 {
		margin-right : 0 auto;
	}
	.mr-1 {
		margin-right : 10px;
	}
	.mr-2 {
		margin-right : 20px;
	}
	.mr-3 {
		margin-right : 30px;
	}
	.mr-4 {
		margin-right : 40px;
	}
	.mr-5 {
		margin-right : 50px;
	}

	.mx-auto {
		margin-right: auto !important;
		margin-left: auto !important;
	}
`;

export default GlobalStyles;
