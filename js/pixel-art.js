var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

/*GUÍA PARTE 1 - PASO 1
SE GUARDAN EN VARIABLES GLOBALES LOS SIGUIENTES ELEMENTOS DEL DOM:
id paleta, id grilla-pixeles, botones borrar y guardar,
id indicador-de-color-mensaje, clase custom, id indicador-de-color.*/
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var borrar = $("#borrar");
var guardarObraDeArte = $("#guardar");
var indicadorDeColorMensaje = $("#indicador-de-color-mensaje");
var indicadorRuedaDeColores = $(".custom");
var indicadorDeColor = document.getElementById('indicador-de-color');
//Se inicializa vacía la variable global $colorElegido.
var $colorElegido = "";
//Se inicializa con estado falso la variable global mousePresionado.
var mousePresionado = false;

/*Variable para guardar el elemento 'color-personalizado'.
Es decir, el que se elige con la rueda de color.*/
var colorPersonalizado = document.getElementById('color-personalizado');
/*GUÍA PARTE 2 - PASO 3
SE COMPLETA LA FUNCIONALIDAD DE RUEDA DE COLORES*/
colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        $colorElegido = colorActual;
        $(indicadorDeColor).css("background-color", $colorElegido);
        $(indicadorRuedaDeColores).html("<span>Rueda :" + $colorElegido + "</span>");
        $(indicadorDeColorMensaje).html("<span>Pincel :" + $colorElegido + "</span>");
    })
);

/*GUÍA PARTE 1 - PASO 2
SE GENERA LA PALETA DE COLORES EN PANTALLA.*/
$(document).ready(function() {
    for (var i = 0; i < nombreColores.length; i++) {
        $color = nombreColores[i];
        $(paleta).append("<div></div>");
        $(paleta).children().addClass("color-paleta");
        $(paleta).children().eq(i).css("background-color", nombreColores[i]);
    }
});

/*GUÍA PARTE 1 - PASO 3
SE CREA LA GRILLA DE PIXELES.*/
$(document).ready(function() {
    for (var i = 0; i < 1750; i++) {
        $(grillaPixeles).append("<div class=grilla-pixeles></div>");
    }
});

/*GUÍA PARTE 2 - PASO 1
SE MUESTRA EN EL INDICADOR DE COLOR EL COLOR SELECCIONADO EN LA PALETA*/
$(document).ready(function() {
    $(".color-paleta").click(function() {
            $colorElegido = $(this).css("background-color");
            $(indicadorDeColor).css("background-color", $colorElegido);
            $(indicadorDeColorMensaje).html("<span>Pincel :" + $colorElegido + "</span>");
            $(indicadorRuedaDeColores).html("<span>Rueda :" + $colorElegido + "</span>");
            $("input").attr(value, "ff00ff");
        })
        /*GUÍA PARTE 2 - PASO 2
        SE PINTA UN PIXEL EN LA GRILLA CON EL COLOR SELECCIONADO*/
    $(".grilla-pixeles").click(function() {
        $(this).css("background-color", $colorElegido);
    })
});

/*GUÍA PARTE 2 - PASO 3
SE DETECTA SI EL MOUSE ESTÁ APRETADO O NO*/
/*GUÍA PARTE 2 - PASO 4
SE IMPLEMENTA LA FUNCIÓN DE PINTAR EN MOVIMIENTO*/
$(document).ready(function(event) {
    $(document).mousedown(function() {
        mousePresionado = true;
    });
    $(document).mouseup(function() {
        mousePresionado = false;
    });
    $(".grilla-pixeles").hover(function(event) {
        if (mousePresionado) {
            $(event.target).css("background-color", $colorElegido);
        }
    })
});

/*GUÍA PARTE 3 - PASO 1
SE PERMITE BORRAR LA PANTALLA MEDIANTE EL BOTÓN BORRAR TODO*/
function borraPantalla() {
    $(".grilla-pixeles").each(function() {
        $(this).animate({
            "background-color": "white"
        }, 2000)
    });
};
$(document).ready(function() {
    borrar.click(borraPantalla);
});

/*GUÍA PARTE 3 - PASO 2
SE CARGA A LOS SUPERHÉROES EN FORMA DE PIXELES*/
$(document).ready(function() {
    $(".imgs li").click(function(event) {
        var $superheroeClickeado = $(event.target).attr("alt");
        if ($superheroeClickeado === "batman") {
            var $superheroe = batman;
        } else if ($superheroeClickeado === "wonder woman") {
            var $superheroe = wonder;
        } else if ($superheroeClickeado === "flash") {
            var $superheroe = flash;
        } else if ($superheroeClickeado === "invisible") {
            var $superheroe = invisible;
        }
        cargarSuperheroe($superheroe);
    })
});

/*GUÍA PARTE 3 - PASO 3
SE PERMITE DESCARGAR LA IMAGEN CREADA EN LA GRILLA*/
$(document).ready(function() {
    $(guardarObraDeArte).click(guardarPixelArt);
});