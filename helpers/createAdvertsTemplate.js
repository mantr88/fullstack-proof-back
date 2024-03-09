const formatDate = require("./formatDate");

const createAdvertsTemplate = async (adverts) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./images/favicon.ico" />
    <link rel="stylesheet" href='/styles.css'/>
    <title>Adverts</title>
    </head>
    <body>
      <header class="header">
      <nav>
        <ul class="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/adverts">Adverts</a></li>
          <li><a href="/avr-numbers">Average numbers</a></li>
        </ul>
      </nav>
    </header>
    <main>
    <h1 class='title'>Adverts</h1>
    <form id="adverts-form" method="post" class='form'>
      <label for="author" class="form-field">
        Author
        <input class='form-input' type="text" name="author" id="author" placeholder="Enter your name"/>
      </label>
      <label for="text" class="form-field">
        Text your adverts
        <textarea class='form-input' type="text" name="text" id="text" rows="5" placeholder="Enter text of ads"></textarea>
      </label>
      <button type="submit" class='submit-btn'>Add adverts</button>
    </form>
    <h3>Published adverts</h3>
    <ul class='adverts-list'>${
      adverts.length === 0
        ? `<li>
    <p>Same author</p>
    <p>Same text of advert<p/>
    </li>`
        : adverts
            .map((item, idx) => {
              return `<li>
    <p class="adverts-list-text"><span class="adverts-list-text">Date: </span>${formatDate(
      item.date
    )}</p>
    <p class="adverts-list-text"><span class="adverts-list-text">Author: </span>${
      item.author
    }</p>
    <p class="adverts-list-text"><span>Text: </span>${item.text}<p/>
		<button id="delete" class="del-btn" type="button" aria-label="Delete" data-idx=${idx}>
			<svg class="del-btn__icon" viewBox="0 0 48 48" width="48px" height="48px" aria-hidden="true">
				<clipPath id="can-clip">
					<rect class="del-btn__icon-can-fill" x="5" y="24" width="14" height="11" />
				</clipPath>
				<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(12,12)">
					<g class="del-btn__icon-lid">
						<polyline points="9,5 9,1 15,1 15,5" />
						<polyline points="4,5 20,5" />
					</g>
					<g class="del-btn__icon-can">
						<g stroke-width="0">
							<polyline id="can-fill" points="6,10 7,23 17,23 18,10" />
							<use clip-path="url(#can-clip)" href="#can-fill" fill="#fff" />
						</g>
						<polyline points="6,10 7,23 17,23 18,10" />
					</g>
				</g>
			</svg>
			<span class="del-btn__letters" aria-hidden="true" data-anim>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">D</span>
				</span>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">e</span>
				</span>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">l</span>
				</span>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">e</span>
				</span>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">t</span>
				</span>
				<span class="del-btn__letter-box">
					<span class="del-btn__letter">e</span>
				</span>
			</span>
		</button>
	</li>`;
            })
            .join("")
    }
    </ul>
    </main>
    <script>
		class DeleteButton {
			isRunning = false;

			constructor(el) {
				this.el = el;
				this.init();
			}
			init() {
				this.el?.addEventListener("click",this.delete.bind(this));
				
				const resetTrigger = this.el?.querySelector("[data-anim]");
				resetTrigger?.addEventListener("animationend",this.reset.bind(this));
			}
			delete() {
				this.isRunning = true;
				this.displayState();
			}
			displayState() {
				this.el.disabled = this.isRunning;
				this.el.setAttribute("data-running",this.isRunning);
			}
			reset() {
				this.isRunning = false;
				this.displayState();
			}
		}

const deleteButtons = document.querySelectorAll('button[data-idx]');

deleteButtons.forEach(function(button) {
		window.addEventListener("DOMContentLoaded",() => {
			const d = new DeleteButton(button);
		});

 button.addEventListener("click", function() {
	const index = button.getAttribute("data-idx").toString();
			setTimeout(() => {
				fetch('/adverts',{
					method:'DELETE',
					body: JSON.stringify(index),
				})
				.then(res=>location.reload())
				.catch((err)=> {
					console.log(err);
					location.reload();
				})
			}, 1250);
			
 });
});


	</script>
    </body>
    </html>`;
};

module.exports = createAdvertsTemplate;
