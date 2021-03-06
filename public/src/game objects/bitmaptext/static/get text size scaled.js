var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var text;
var bounds;
var graphics;
var string = 'Phaser 3\nBitmapText\nScaling\nwith bounds';

var game = new Phaser.Game(config);

function preload ()
{
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
}

function create ()
{
    text = this.add.bitmapText(0, 0, 'atari', string).setFontSize(32);

    graphics = this.add.graphics({ x: 0, y: 0, lineStyle: { thickness: 1, color: 0xffff00, alpha: 1 } });

    TweenMax.to(text, 4, {
        scaleX: 2,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });

    TweenMax.to(text, 2, {
        scaleY: 4,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function update ()
{
    text.setText(string + '\nScale X: ' + text.scaleX.toFixed(4));

    bounds = text.getTextBounds();

    graphics.clear();
    graphics.strokeRect(bounds.global.x, bounds.global.y, bounds.global.width, bounds.global.height);
}
