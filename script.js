var frases = [
'Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida. - Arthur Schnitzler', 
'La vida es la constante sorpresa de saber que existo. - R. Tagore',
'La vida es simple, pero insistimos en hacerla complicada. - Confucio',
'No lastimes a los demás con lo que te causa dolor a ti mismo. -  Buda',
'Recuerda que la felicidad no depende en quién eres o qué tienes; depende únicamente en lo que piensas. - Dale Carnegie',
'Vivir es nacer a cada instante. - Erich Fromm',
'La vida no se ha hecho para comprenderla, sino para vivirla. - George Santayana',
'La vida debe ser comprendida hacia atrás. Pero debe ser vivida hacia delante. - Kierkegaard',
'La vida es como el jazz… es mucho mejor si es improvisada. - George Gershwin',
'La vida consiste no en tener buenas cartas, sino en jugar bien las que uno tiene. - Josh Billings',
'La vida es muy peligrosa. No por las personas que hacen el mal, sino por las que se sientan a ver lo que pasa. - Albert Einstein',
'A veces podemos pasarnos años sin vivir en absoluto, y de pronto toda nuestra vida se concentra en un solo instante. - Oscar Wilde',
'La mayor rémora de la vida es la espera del mañana y la pérdida del día de hoy. - Séneca',
'La vida es un viaje de autodescubrimiento, atrévete a explorar. - Anaïs Nin',
'¡Qué pequeñas son mis manos en relación con todo lo que la vida ha querido darme! - Ramón J. Sénder',
'Lo menos frecuente en este mundo es vivir. La mayoría de la gente existe, eso es todo. - Oscar Wilde'
]

function newfrase() {
var randomNumber = Math.floor(Math.random() * (frases.length));
document.getElementById('frasesDisplay').innerHTML = frases[randomNumber];
}
