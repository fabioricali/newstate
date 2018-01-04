const newstate = require('..');
const be = require('bejs');

describe('newstate', function () {
    this.timeout(200);

    it('should be different', function () {
        const myState = [
            {
                name: 'bar',
                state: true
            },
            {
                name: 'foo',
                state: true
            }
        ];
        let result = newstate(myState, (draft) => {
            draft.push({name: 'another', state: false});
            console.log(myState.length, draft.length);
            be.err.equal(myState.length, 2);
            be.err.equal(draft.length, 3);
        });
    });
});