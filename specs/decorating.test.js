const Room = require('../room');
const Paint = require('../paint');
const Decorator = require('../decorator');

describe('paint job', () => {
  let livingRoom;
  let redPaint
  let bluePaint
  let brian

  beforeEach(() => {
    livingRoom = new Room (100);
    redPaint = new Paint ('red', 100);
    bluePaint = new Paint ('blue', 55);
    greenPaint = new Paint ('green', 60);
    brian = new Decorator ('Brian');
  });

  test('A room should start unpainted', () => {
    expect(livingRoom.painted).toBe(false);
  });

  test('A room should be able to be painted', () => {
    livingRoom.painted = true
    expect(livingRoom.painted).toBe(true);
  });

  test('A Paint should have a volume', () => {
    expect(redPaint.volume).toBe(100);
  });

  test('A Paint should be able to be emptied', () => {
    redPaint.volume -= 10;
    expect(redPaint.volume).toBe(90);
  });

  test('A Paint should be able to check if it is empty', () => {
    redPaint.volume -=100;
    expect(redPaint.isEmpty()).toBe(true);
  });

  test('A decorator should start with no paint', () => {
    expect(brian.paintStock).toEqual([]);
  });

  test('A decorator should be able to aquire paint', () => {
    brian.getPaint(redPaint);
    expect(brian.paintStock.length).toBe(1);
  });

  test('A decorator should be able calculate the total volume of paint', () => {
    brian.getPaint(redPaint);
    brian.getPaint(bluePaint);
    expect(brian.getTotalPaintVolume()).toBe(155);
  });

  test('A decorator should be able to tell if they do not have enough paint', () => {
    brian.getPaint(bluePaint);
    expect(brian.ableToPaintRoom(livingRoom)).toBe(false);
  });

  test('A decorator should be able to tell if they have enough paint paint for a room', () => {
    brian.getPaint(redPaint);
    expect(brian.ableToPaintRoom(livingRoom)).toBe(true);
  });

  test('A decorator should be able to paint a room if they have enough paint', () => {
    brian.getPaint(bluePaint);
    brian.getPaint(greenPaint);
    brian.paintRoom(livingRoom);
    expect(livingRoom.painted).toBe(true);
    expect(brian.getTotalPaintVolume()).toBe(15);
  });





});
