test('error', (done) => {
    setTimeout(() => {
        expect(1).toEqual(2);

        done();
    }, 1000);
});
