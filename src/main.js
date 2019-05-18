console.log('main is running')


document.addEventListener("DOMContentLoaded", () => {
    let worker
    let view = document.getElementById('data');
    let button = document.getElementById('btn');

    view.innerHTML = 'Press button to load the jocke';

    if (Worker) {
        worker = new Worker('./src/worker.js');
        worker.addEventListener('message', (res) => {
            view.innerHTML = res.data.value;
        });
        worker.addEventListener('error', (err) => {
            console.log('error', err)
        })
        
        button.addEventListener('click', () => {
            worker.postMessage('jocke');
        });
    }

    
});




