const scribble = require('scribbletune');

// const scribble = require('scribbletune');
// let clip = scribble.clip({
//     notes: ['c4']
// });
// scribble.midi(clip);

// let chords = scribble.clip({
// 	notes: ['F#min', 'C#min', 'Dmaj', 'Bmin', 'Emaj', 'Amaj', 'Dmaj', 'C#min', 'Amaj'],
// 	pattern: 'x_x_x_--'.repeat(32),
// 	sizzle: true
// });

// to play from command line (uses drum)
//   node index.js && timidity music.mid

let clip = scribble.clip({
	notes: ['c2'],
	pattern: 'x---'.repeat(32)
});
scribble.midi(clip);

// to play from command line (uses drum)
//   node index.js && timidity -D 0 -A,500 music.mid

