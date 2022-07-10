import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: var(--colorBlue);
  text-decoration: none;
}
a:active,
a:hover {
  outline-width: 0;
  color: var(--colorBlueDark);
  text-decoration: underline;
}
a svg > * {
  fill: var(--colorBlue);
}
a:active svg > *,
a:hover svg > * {
  fill: var(--colorBlueDark);
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
html {
  font: 112.5%/1.45em georgia, serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
body {
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
hgroup {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
dl {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
dd {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
blockquote{
  margin:50px auto;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid var(--colorBlue);
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: &#8220;
  color: var(--colorBlue);
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

blockquote::after{
  content: '';
}

blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
noscript {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
iframe {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
hr {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}
address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
b {
  font-weight: bold;
}
strong {
  font-weight: bold;
}
dt {
  font-weight: bold;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
blockquote *:last-child {
  margin-bottom: 0;
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
kbd {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
samp {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

:root {
  --colorBlue: #517EA6;
  --colorBlueDark: #3B5E8C;
  --colorWhite: #FFFFFF;
  --colorLightGrey: #F2F2F2;
  --colorGrey: #A6A6A6;
  --colorDarkGrey: #595959;
  --colorBlack: #000000;

  --gutter: 20px;
  --gridGap: 20px;

  --tileImgMinHeight: 300px;
  --gridWrapperWidth: 940px;
  --articleContentWidth: 640px;
}

html, body {
  font-family: 'Overpass', sans-serif;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Chivo', sans-serif;
}

/*****************************************************************
* UTILITY ********************************************************
*****************************************************************/

/* TYPOGRAPHY ***************************************/
.f-1 { font-size: 3rem; }
.f-2 { font-size: 2.25rem; }
.f-3 { font-size: 1.5rem; }
.f-4 { font-size: 1.25rem; }
.f-5 { font-size: 1rem; }

.f-thin { font-weight: 200; }

/* PADDING ******************************************/
.p-0 { padding: 0; }
.p-1 { padding: .125rem; }
.p-2 { padding: .25rem; }
.p-3 { padding: .5rem; }
.p-4 { padding: 1rem; }
.p-5 { padding: 2rem; }

.px-0 { padding-left: 0; padding-right: 0; }
.px-1 { padding-left: .125rem; padding-right: .125rem; }
.px-2 { padding-left: .25rem; padding-right: .25rem; }
.px-3 { padding-left: .5rem; padding-right: .5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-5 { padding-left: 2rem; padding-right: 2rem; }
.px-5 { padding-left: 4rem; padding-right: 4rem; }

.py-0 { padding-top: 0; padding-bottom: 0; }
.py-1 { padding-top: .125rem; padding-bottom: .125rem; }
.py-2 { padding-top: .25rem; padding-bottom: .25rem; }
.py-3 { padding-top: .5rem; padding-bottom: .5rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-5 { padding-top: 2rem; padding-bottom: 2rem; }
.py-6 { padding-top: 4rem; padding-bottom: 4rem; }

.pt-0 { padding-top: 0; }
.pt-1 { padding-top: .125rem; }
.pt-2 { padding-top: .25rem; }
.pt-3 { padding-top: .5rem; }
.pt-4 { padding-top: 1rem; }
.pt-5 { padding-top: 2rem; }
.pt-6 { padding-top: 4rem; }

.pb-0 { padding-bottom: 0; }
.pb-1 { padding-bottom: .125rem; }
.pb-2 { padding-bottom: .25rem; }
.pb-3 { padding-bottom: .5rem; }
.pb-4 { padding-bottom: 1rem; }
.pb-5 { padding-bottom: 2rem; }

.pl-0 { padding-left: 0; }
.pl-1 { padding-left: .125rem; }
.pl-2 { padding-left: .25rem; }
.pl-3 { padding-left: .5rem; }
.pl-4 { padding-left: 1rem; }
.pl-5 { padding-left: 2rem; }

.pr-0 { padding-right: 0; }
.pr-1 { padding-right: .125rem; }
.pr-2 { padding-right: .25rem; }
.pr-3 { padding-right: .5rem; }
.pr-4 { padding-right: 1rem; }
.pr-5 { padding-right: 2rem; }

/* MARGIN *******************************************/
.m-0 { margin: 0; }
.m-1 { margin: .125rem; }
.m-2 { margin: .25rem; }
.m-3 { margin: .5rem; }
.m-4 { margin: 1rem; }
.m-5 { margin: 2rem; }

.mx-0 { margin-left: 0; margin-right: 0; }
.mx-1 { margin-left: .125rem; margin-right: .125rem; }
.mx-2 { margin-left: .25rem; margin-right: .25rem; }
.mx-3 { margin-left: .5rem; margin-right: .5rem; }
.mx-4 { margin-left: 1rem; margin-right: 1rem; }
.mx-5 { margin-left: 2rem; margin-right: 2rem; }

.my-0 { margin-top: 0; margin-bottom: 0; }
.my-1 { margin-top: .125rem; margin-bottom: .125rem; }
.my-2 { margin-top: .25rem; margin-bottom: .25rem; }
.my-3 { margin-top: .5rem; margin-bottom: .5rem; }
.my-4 { margin-top: 1rem; margin-bottom: 1rem; }
.my-5 { margin-top: 2rem; margin-bottom: 2rem; }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: .125rem; }
.mt-2 { margin-top: .25rem; }
.mt-3 { margin-top: .5rem; }
.mt-4 { margin-top: 1rem; }
.mt-5 { margin-top: 2rem; }
.mt-6 { margin-top: 4rem; }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: .125rem; }
.mb-2 { margin-bottom: .25rem; }
.mb-3 { margin-bottom: .5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 2rem; }

.ml-0 { margin-left: 0; }
.ml-1 { margin-left: .125rem; }
.ml-2 { margin-left: .25rem; }
.ml-3 { margin-left: .5rem; }
.ml-4 { margin-left: 1rem; }
.ml-5 { margin-left: 2rem; }

.mr-0 { margin-right: 0; }
.mr-1 { margin-right: .125rem; }
.mr-2 { margin-right: .25rem; }
.mr-3 { margin-right: .5rem; }
.mr-4 { margin-right: 1rem; }
.mr-5 { margin-right: 2rem; }

/* DISPLAY ******************************************/
.block { display: block; }
.flex { display: flex; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex-v-middle { align-items: center; }

/* BLOCKS *******************************************/
.block-center { margin-left: auto; margin-right: auto; }
.not-full-width { max-width: var(--gridWrapperWidth); }
.reading-content { max-width: var(--articleContentWidth); }

/* TEXT *********************************************/
.capitalize { text-transform: capitalize; }
.uppercase { text-transform: uppercase; }
.text-center { text-align: center; }

/* BACKGROUND COLOURS *******************************/
.bg-white { background-color: var(--colorWhite); }
.bg-light-grey { background-color: var(--colorLightGrey); }

/* COLOURS ******************************************/
.color-white { color: var(--colorWhite) }
.color-grey { color: var(--colorGrey); }
.color-dark-grey { color: var(--colorDarkGrey); }
.color-black { color: var(--colorBlack) }

/* ICONS ********************************************/
.icon-tiny { width: 13px; }
.icon-smaller { width: 20px; }
.icon-small { width: 75px; }

/*****************************************************************
* ARTICLE - CONTENT *********************************************
*****************************************************************/
article.highlight {
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 3px 15px rgba(0,0,0,0.2);;
  padding: 20px;
}

ul.dates li:after,
ul.category li:after,
ul.tags li:after {
  content: ', ';
}

ul.dates li:last-child:after,
ul.category li:last-child:after,
ul.tags li:last-child:after {
  content: '';
}

ul.author li img {
  border-radius: 100%;
  border: 3px solid var(--colorDarkGrey);
}

ul.author li a img {
  border: 3px solid var(--colorBlue);
}

article.post img.featured-image {
  max-height: 500px;
}

article.post .content h2,
article.post .content h3,
article.post .content h4,
article.post .content h5,
article.post .content h6,
article.post .content p,
article.post .content ul,
article.post .content ol,
article.post .content hr,
article.post .content blockquote {
  max-width: var(--articleContentWidth);
  margin-left: auto; margin-right: auto;
}
 
article.post .content p,
article.post .content figure {
  margin-top: 2rem; margin-bottom: 2rem;
}

article.post .content ul {
  padding-left: 20px;
}

article.post .content figure figcaption {
  font-style: italic;
  font-weight: 200;
  color: var(--colorDarkGrey);
  max-width: var(--articleContentWidth);
  margin-left: auto;
  margin-right: auto;
}

article.post .content figure img {
  display: block;
  margin: 10px auto;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 3px 15px rgba(0,0,0,0.2);
}
`