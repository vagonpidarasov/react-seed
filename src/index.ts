import './index.scss';
import {bootstrap} from 'src/app';
bootstrap();

window.addEventListener('load', function() {
    if ('serviceWorker' in navigator) {
        if (process.env.NODE_ENV === 'production') {
            navigator.serviceWorker.register('/service-worker.js');
        } else {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister();
            });
        }
    }
});
