class Terran {
    constructor(nombre, vida, ataque, rifle) {
        this.nombre = nombre,
            this.vida = vida,
            this.ataque = ataque,
            this.arma = rifle
    };
};

let terran = new Terran('Jim Raynor', 100, 18, 15);
console.log(terran);


class Protoss {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre,
            this.vida = vida,
            this.ataque = ataque,
            this.escudo = 50
    };
};

let protoss = new Protoss('Zeratul', 95, 20);
console.log(protoss);


class Zerg {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre,
            this.vida = vida,
            this.ataque = ataque,
            this.aguijon = {
                puntos: 40,
                utilizado: 0
            }
    };
};

let zerg = new Zerg('Stranger', 80, 20);
console.log(zerg);



for (let i = 0; i < 10; i++) {
    function Ataque(personajeUno, personajeDos) {

        var ataqueUno = personajeUno.ataque;
        var ataqueDos = personajeDos.ataque;

        personajeUno.arma ?
            ataqueArmaUno = personajeUno.arma
            :
            ataqueArmaUno = 0;

        personajeDos.arma ?
            ataqueArmaDos = personajeDos.arma
            :
            ataqueArmaDos = 0;


        let existe;
        let existeDos;

        personajeUno.aguijon ?
            personajeUno.aguijon.utilizado <= 0 ?
                (existe = personajeUno.aguijon.utilizado,
                    aguijon = personajeUno.aguijon.puntos)
                :
                console.log('Ya se utilizo el aguijon')
            :
            (aguijon = 0,
                console.log('No tiene aguijon'));


        personajeDos.aguijon ?
            personajeDos.aguijon.utilizado <= 0 ?
                (existeDos = personajeDos.aguijon.utilizado,
                    aguijonDos = personajeDos.aguijon.puntos)
                :
                console.log('Ya se utilizo el aguijon')
            :
            (aguijonDos = 0,
                console.log('No tiene aguijon'));



        console.log(`Ataque ${i + 1}
        Atacante: ${personajeUno.nombre} con ${personajeUno.ataque} pts de ataque
        Defensor: ${personajeDos.nombre} con ${personajeDos.vida} pts de vida`);

        personajeDos.escudo ?
            (personajeDos.escudo > 0 ?
                (puntosRestantesUno = personajeDos.escudo - (ataqueUno + aguijon),
                    existe++,
                    console.log(`Puntos de ${personajeDos.nombre}: ${puntosRestantesUno} pts de escudo + ${personajeDos.vida} pts de vida`),
                    personajeDos.escudo = puntosRestantesUno)
                :
                (personajeDos.vida > 0 ?
                    (vidaRestanteUno = personajeDos.vida - (ataqueUno + ataqueArmaUno),
                        console.log(`Escudo de ${personajeDos.nombre} agotado. Vida restante: ${vidaRestanteUno} pts`),
                        personajeDos.vida = vidaRestanteUno)
                    :
                    console.log(`El jugador ${personajeDos.nombre} ha muerto`)
                )
            )
            :
            (personajeDos.vida > 0 ?
                (vidaRestanteUno = personajeDos.vida - (ataqueUno + ataqueArmaUno + aguijon),
                    existe++,
                    console.log(`Puntos de ${personajeDos.nombre}:  ${vidaRestanteUno} de vida`),
                    personajeDos.vida = vidaRestanteUno)
                :
                console.log(`El jugador ${personajeDos.nombre} ha muerto`)
            );

        console.log('------ ------ ------ ------ ------ ------ ------ ------ ------');


        console.log(`Atacante: ${personajeDos.nombre} con ${personajeDos.ataque} pts de ataque
                    Defensor: ${personajeUno.nombre} con ${personajeUno.vida} pts de vida
                    `);

        personajeUno.escudo ?
            (personajeUno.escudo > 0 ?
                (puntosRestantesDos = personajeUno.escudo - (ataqueDos + aguijonDos),
                    existeDos++,
                    console.log(`Puntos de ${personajeUno.nombre}: ${puntosRestantesDos} pts de escudo + ${personajeUno.vida} pts de vida`),
                    personajeUno.escudo = puntosRestantesDos)
                :
                (personajeUno.vida > 0 ?
                    (vidaRestanteDos = personajeUno.vida - (ataqueDos + ataqueArmaDos),
                        console.log(`Escudo de ${personajeUno.nombre} agotado. Vida restante: ${vidaRestanteDos} pts`),
                        personajeUno.vida = vidaRestanteDos)
                    :
                    console.log(`El jugador ${personajeUno.nombre} ha muerto`)
                )
            )
            :
            (personajeUno.vida > 0 ?
                (vidaRestanteDos = personajeUno.vida - (ataqueDos + ataqueArmaDos + aguijonDos),
                    existeDos++,
                    console.log(`Puntos de ${personajeUno.nombre}:  ${vidaRestanteDos} de vida`),
                    personajeUno.vida = vidaRestanteDos)
                :
                console.log(`El jugador ${personajeUno.nombre} ha muerto`)
            );

        console.log('**************************************************************');
    }
    Ataque(zerg, terran);
}




