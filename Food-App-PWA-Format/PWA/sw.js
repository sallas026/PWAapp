

//Install service worker
self.addEventListener('install', installEvent => {
    console.log('service worker has been installed')
});


//Activate service worker
self.addEventListener('activate', activateEvent => {
    console.log('service worker has been activated')
});

//Fetch event
self.addEventListener('fetch', fetchevent =>{
    console.log('fetch event', fetchevent);
});