const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    backgroundColor: '#162436',
    parent: 'contenedor-juego',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Carga de imágenes más adelante
}

function create() {
    // Título e Interfaz
    this.add.text(180, 50, 'GUSANITO PREMIUM', { 
        fontSize: '24px', 
        fill: '#00ffff',
        fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(180, 90, 'TOP DIARIO: 1250 pts', { 
        fontSize: '16px', 
        fill: '#ffffff' 
    }).setOrigin(0.5);

    // Botón de WhatsApp
    const botonWA = this.add.text(180, 580, '📱 TU CUPO Y TICKETS AQUÍ', {
        fontSize: '16px',
        fill: '#000000',
        backgroundColor: '#25d366',
        padding: { x: 15, y: 10 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    botonWA.on('pointerdown', () => {
        abrirWhatsApp();
    });
}

function update() {
    // Lógica del movimiento
}

function abrirWhatsApp() {
    const telefono = "584120000000"; // Reemplaza por tu número
    const mensaje = encodeURIComponent("¡Hola! Quiero comprar un ticket para el ranking del Gusanito.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_system');
}
