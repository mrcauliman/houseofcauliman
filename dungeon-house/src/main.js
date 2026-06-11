import Phaser from 'phaser'
new Phaser.Game({type:Phaser.AUTO,parent:'app',width:960,height:640,backgroundColor:'#071018',scene:{create(){this.add.text(120,120,'DUNGEON HOUSE',{fontSize:'42px',color:'#f3c86a'})}}})
