const defaultState = {counter: 1};

const content = document.getElementById('content');

const render = () => {
    content.innerHTML = defaultState.counter;
}

render();