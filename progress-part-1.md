# Progress

<style>
    @font-face {
      font-family: "DejaVuSerif";
      src: url("./fonts/DejaVuSerif.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }

	html {
		position: static;
	}
	body {
		max-width: 1024px;
		font-size:  24px;
	}
	    @media only screen and (max-width: 479px) {
	    	body {
	    		padding: 12px;
	    	}
	    }

	#about {
		display: none;
	}

	p {
		margin-bottom: 8px;
	}
	.bloop {
		font-family: "DejaVuSerif";
	}
	.later {
		opacity: 0.5;
	}

	table {
	    max-width: 100%;
	}

	.summary table {
		width: 400px;
	}

	.updates {
		max-height: 100px;
	    overflow-y: scroll;
	    margin-top: 12px;
	    margin-bottom: 32px;
	    font-size: smaller;
	    font-family: monospace;
	}
		.updates table td,
		.updates table tr {
			padding: 0;
			height: 20px;
		    line-height: 0;
		}
	    @media only screen and (max-width: 479px) {
			.updates table th:nth-child(5),
			.updates table td:nth-child(5) {
				display: none;
			}
	    }

	.progress-wrap, .legend {
		display: flex;
	    max-width: 100%;
	}
	.progress-wrap {
		margin: 32px 0;
	}
	    @media only screen and (max-width: 1023px) {
	    	.progress-wrap, .legend {
		    	display: block;
	    	}
	    }

	.updates table,
	.progress-wrap table {
		width: 400px;
	}
	    @media only screen and (max-width: 479px) {
			.updates table,
			.progress-wrap table {
				width: calc(100vw - 32px);
			}
			.progress-wrap table:first-child {
				width: 380px;
			}
	    }
		.progress-wrap div + div table {
			width: 250px;
		}
		/* writing CSS for markdown-generated HTML sucks*/
		.progress-wrap div + div + div table {
			width: 275px;
		}
		    @media only screen and (max-width: 479px) {
				.progress-wrap div + div table {
					width: 100% !important;
				}
			}
		table td,
		table tr {
			padding: 0;
			height: 32px;
		    line-height: 0;
		}
		.progress-wrap table td:nth-child(2n+1) {
			padding-right: 10px;
		}
		.progress-wrap table td:nth-child(2n) {
			padding-right: 20px;
		}
		    @media only screen and (max-width: 1023px) {
					table td:last-child {
						padding-right: 0;
					}
		    }
		    @media only screen and (max-width: 479px) {
					.progress-wrap table td {
						padding-right: 5px !important;
					}
					.laminae-wrap table {
						font-size:  20px;
					}
		    }

.legend table {
	margin-bottom: 24px;
}
	.legend table:first-child {
		margin-right: 32px;
	}
	.legend table td:first-child {
		font-family: "DejaVuSerif";
	}
	.legend table td:nth-child(2) {
		position: relative;
	    top: 3px;
	}
	.legend table tr,
	.legend table td {
		padding: 0 8px 0 0;
		height: auto;
	    line-height: unset;
	}
</style>

It's not done, but it's ready enough: <a href="https://thereitwas.com/laminae/">Observations on the Twenty-Seven Laminae</a>

Details of major updates can be found in the <a href="https://thereitwas.com/laminae/d-translation-log.html">Translation Log</a>.

<br />

<div><p><b>Log</b></p></div>

<div class="updates">

|Date      |Hours|Words|<span title="lines of code">LOC</span>|Ready|Done|
| :-- | :-- | :-- | :-- | :-: | :-: |
