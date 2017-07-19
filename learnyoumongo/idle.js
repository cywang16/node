//
// docker run -it --rm --name learnyoumongo -v "$PWD":/usr/src/app -w /usr/src/app node idle.js
//
// mongo db: https://www.mongodb.org/downloads
//

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (;;) { sleep(10000) }
