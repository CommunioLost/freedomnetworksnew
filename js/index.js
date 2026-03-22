const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');
const splash = document.getElementById('splash');

const splashes = ["no corners allowed.", "stay hidden.", "free the web.", "devil bear is watching."];
splash.innerText = splashes[Math.floor(Math.random() * splashes.length)];

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = search(address.value, 'https://www.google.com/search?q=%s');
    const encodedUrl = __uv$config.encodeUrl(url);
    
    sessionStorage.setItem("encodedUrl", encodedUrl);
    window.location.href = "embed.html";
});

function clockIn() {
    const win = window.open();
    if (!win) return alert("Pop-up blocked!");
    const iframe = win.document.createElement('iframe');
    iframe.style = "margin:0;padding:0;border:none;width:100%;height:100%;";
    iframe.src = window.location.href;
    win.document.body.style.margin = "0";
    win.document.body.appendChild(iframe);
    window.location.replace("https://google.com");
}
