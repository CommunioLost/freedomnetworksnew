const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');
const splash = document.getElementById('splash');

const splashes = ["no corners allowed.", "stay hidden.", "free the web.", "devil bear is watching.", "glitch in the system."];
splash.innerText = splashes[Math.floor(Math.random() * splashes.length)];

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = search(address.value, 'https://www.google.com/search?q=%s');
    const encodedUrl = __uv$config.encodeUrl(url);
    
    sessionStorage.setItem("encodedUrl", encodedUrl);
    window.location.href = "embed.html";
});

function tabCloak() {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.google.com/favicon.ico';
    document.title = 'Google';
    document.getElementsByTagName('head')[0].appendChild(link);
    alert("Tab Cloaked! The tab now looks like Google.");
}
