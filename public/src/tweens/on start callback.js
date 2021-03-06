var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block').setAlpha(0);

    var tween = this.tweens.add({
        targets: image,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        paused: true,
        onStart: onStartHandler,
        onStartParams: [ image ]
    });

    this.input.events.once('POINTER_DOWN_EVENT', function () {

        tween.play();

    });
}

//  The callback is always sent a reference to the Tween as the first argument,
//  then whatever you provided in the onStartParams array as the rest
function onStartHandler (tween, gameObject)
{
    gameObject.setAlpha(1);
}
