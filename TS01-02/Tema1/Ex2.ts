document.addEventListener('click', (e) => {

    const coords = [e.clientX, e.clientY];

    console.log(`Point is ${coords[0]}, ${coords[1]}`);

});