const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener("click", (event) => {
        const id = `${event.target.id}` || 'none';
        console.log(id);
    });
}