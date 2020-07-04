This is a decoder for a rail-fence cipher that I've been working on at my own pace over the course of June 2020. It has most of the same features as other decoders available online, but it's also able to use an "ordered key" that shifts the positions of each rail in the cipher, for advanced encryption.

You can access it at http://Cryothermus.github.io/rail-decoder. 

## Features

- Encryption and decryption of ciphertext and plaintext.

- Support for both standard rail-fence cipher keys (consisting of a single integer) and "ordered keys", consisting of a re-arranged sequence of ordered integers (starting at 0).

- Options to ignore symbols, casing, and spaces during operations.

- Error messages and input protection on key inputs, to avoid non-functional keys.

## FAQ

- **What is a "rail-fence cipher"?**

It's a bit convoluted to explain here, so here's a [Wikipedia article](https://en.wikipedia.org/wiki/Rail_fence_cipher).

Basically, it re-arranged the characters so they zig-zag across a set of rails, and then reads the rails in order. The "ordered key" functionality here alos re-arranges these rails for more effective obfuscation.

- **Why did you make this? It's a bit niche...**

Basically, back in Spring 2020, I had to do an (admittedly very fun) CTF challenge for my Information Assurance class. One of the challenges involved required us to decode a rail-fence cipher, with an ordered key, and there wasn't any software online that allowed us to do that already- they all exclusively supported standard keys. So, 4-5 months after the fact, I decided to make this.

I mostly just made it to learn React and keep myself sharp over the summer, though.

## Credits

Made using [ReactJS 16.13.1](https://reactjs.org/) and [MaterialUI 4.10.1](https://material-ui.com/).

Special thanks to:

- [Ananay Arora](https://ananayarora.com/), for showing me MaterialUI, giving critique, and being a great friend and roommate

- [Prof. Adam Doupe](https://adamdoupe.com/), for inspiration
