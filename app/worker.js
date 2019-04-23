import BloomFilter from 'bloomfilter.js';

function work(data) {
    let pwArray = [];
    pwArray = data.passwords.split('\n');

    const bloom = new BloomFilter(
        999999 // number of elements in this filter
    );
    pwArray.forEach((pw) => {
        if(pw.length >= 8) {
            bloom.add(pw);
        }
    });
    return self.postMessage(bloom.serialize());
}

self.addEventListener('message', (event) => work(event.data));
