window.onload = () => {
    console.log("Hallo")
    const switchViewAction = document.getElementsByTagName('header')[0];
    console.log(switchViewAction);
    const switchViewTarget = document.body;

    switchViewAction.onclick = function () {
        console.log("geklickt")
        switchViewTarget.classList.toggle('myapp-tiles');
    }


}

