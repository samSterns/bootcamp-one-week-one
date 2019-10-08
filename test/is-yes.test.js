import { isYes } from '../../functions.js';
const test = QUnit.test; 

test('should return true if the user says yes', function(assert) {
    const userAnswer = 'yes';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

test('should return false if user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});