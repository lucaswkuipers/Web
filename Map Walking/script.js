var empty = "   ";
var player = " X ";

var map = [
  [empty, empty, empty],
  [empty, player, empty],
  [empty, empty, empty],
];

msg = "Can't go any further than this";

var table = {
  posX: 1,
  posY: 1,

  down() {
    if (this.posY < map.length - 1) {
      this.posY = this.posY + 1;
    } else {
      console.warn(msg);
    }
    table.render();
  },

  up() {
    if (this.posY > 0) {
      this.posY = this.posY - 1;
    } else {
      console.warn(msg);
    }
    table.render();
  },

  left() {
    if (this.posX > 0) {
      this.posX = this.posX - 1;
    } else {
      console.warn(msg);
    }
    table.render();
  },

  right() {
    if (this.posX < map[0].length - 1) {
      this.posX = this.posX + 1;
    } else {
      console.warn(msg);
    }
    table.render();
  },

  render() {
    map = [
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty],
    ];
    map[this.posY][this.posX] = player;

    for (line of map) {
      line = "|" + line.join("||") + "|";
      console.log(line);
    }
  },
};
