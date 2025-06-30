const CACHE_NAME = 'audio-console-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'la-la-song.html',
  'colonne-sonore.html',
  'sfilata.html',
  'prova-coraggio.html',
  'gioco-finale.html',
  'style.css',
  'script.js',
  'manifest.json',
  'logo.png',
  'icon-192.png', // Aggiungi queste icone che creerai
  'icon-512.png', // Aggiungi queste icone che creerai
  // Inserisci qui tutti i percorsi dei tuoi file audio!
  'suoni/Sigla.m4a',
  'suoni/Sottofondo.mp3',
  'suoni/Ritornello.m4a',
  'suoni/Suspense.mp3',
  'suoni/La La La.mp3',
  'suoni/Applausi.m4a',
  'suoni/Risate.m4a',
  'suoni/Buuu.mp3',
  'suoni/Padre Natura.mp3',
  'suoni/Mappamondo.mp3',
  'suoni/FILO ROSSO.mp3',
  'suoni/DOVE SI BALLA.mp3',
  'suoni/APT.mp3',
  'suoni/BALORDA NOSTALGIA.mp3',
  'suoni/CUORICINI.mp3',
  'suoni/ROSSETTO E CAFFE.mp3',
  'suoni/CHIAMO IO CHIAMI TU.mp3',
  'suoni/BELLISSIMISSIMA - ALFA.mp3',
  'suoni/FRAGOLE.mp3',
  'suoni/I PE ME TU PE TE.mp3',
  'suoni/BOTTIGLIE VUOTE.mp3',
  'suoni/MA NON TUTTA LA VITA.mp3',
  'suoni/MON AMOUR.mp3',
  'suoni/BAMBOLA.mp3',
  'suoni/AMOR.mp3',
  'suoni/ANEMA E CORE.mp3',
  'suoni/MENO MALE CHE C\'è IL MARE.mp3',
  'suoni/ABBRACCIAME.mp3',
  'suoni/BELLISSIMA - ANNALISA.mp3',
  'suoni/LA CURA PER ME.mp3',
  'suoni/VOLEVO ESSERE UN DURO.mp3',
  'suoni/SUPEREROI.mp3',
  'suoni/TITANIC.mp3',
  'suoni/FOLLOWERS.mp3',
  'suoni/SUPERMERCATO.mp3',
  'suoni/TG.mp3',
  'suoni/UOMINI PRIMITIVI.mp3',
  'suoni/CENERENTOLA GF.mp3',
  'suoni/HARRY POTTER.mp3',
  'suoni/IL GLADIATORE.mp3',
  'suoni/FROZEN.mp3',
  'suoni/AVENGERS.mp3',
  'suoni/CASTING PAPA.mp3',
  'suoni/IL RE LEONE.mp3',
  'suoni/Sfilata 1.mp3',
  'suoni/Sfilata 2.mp3',
  'suoni/Sfilata 3.mp3',
  'suoni/Sfilata 4.mp3',
  'suoni/Sfilata 5.mp3',
  'suoni/Sfilata 6.mp3',
  'suoni/Sfilata 7.mp3',
  'suoni/Sfilata 8.mp3',
  'suoni/Sfilata 9.mp3',
  'suoni/Sfilata 10.mp3',
  'suoni/Sfilata 11.mp3',
  'suoni/Sfilata 12.mp3',
  'suoni/Pipistrello.mp3',
  'suoni/Serpente.mp3',
  'suoni/Vermi.mp3',
  'suoni/Cacca.mp3',
  'suoni/Topi.mp3',
  'suoni/Aglio.mp3',
  'suoni/Timer.mp3',
  'suoni/Timer Veloce.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
