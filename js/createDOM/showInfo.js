export default (userDOM) => {
    userDOM.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == userDOM) {
          userDOM.style.display = "none";
        }
    };
}
