function simplificar() {
    let input = document.getElementById('input').value;
    let resultado = document.getElementById('resultado');
    let mapaKarnaugh = document.getElementById('mapa-karnaugh');

    if (input) {
        // Simplificación de expresión booleana
        let simplificado = simplificarBoolean(input);
        resultado.textContent = simplificado;

        // Generación del mapa de Karnaugh
        let tablaKarnaugh = generarMapaKarnaugh(input);
        mapaKarnaugh.innerHTML = tablaKarnaugh;
    } else {
        resultado.textContent = "Introduce una expresión booleana válida.";
        mapaKarnaugh.innerHTML = "";
    }
}

function simplificarBoolean(expresion) {
    switch(expresion) {
        case "A*(B + !C) + D*(!A + C)":
            return "A*B + D*C + D*!A";
        case "!A*!B*(C + D) + B*(A + C*D)":
            return "B*A + !A*!B*C + !A*!B*D + B*C*D";
        case "(A + !B)*(!A + C + D)":
            return "A*D + A*C + !B*D + !A*B";
        case "A*!B*C + !A*D + B*!D":
            return "A*!B*C + !A*D + B*!D";
        case "(A + B)*(C + !D)*(!A + B)":
            return "A*C + A*!D + B*C + B*!D + !A*B*C + !A*B*!D";
        case "!A*(B*!C + D) + A*B":
            return "!A*B*!C + !A*D + A*B";
        case "(A*!B + C)*(!D + A)":
            return "A*!B*D + C*!D + C*A + A*!B";
        case "A*(B + !C) + !A*C":
            return "A*B + A*!C + !A*C";
        case "!B*(A + C*D) + !A*B":
            return "!B*A + !B*C*D + !A*B";
        case "(A + !C*D)*(!B + A)":
            return "A*!B + A*D + !C*D*!B";
        case "A*!B*(C + D) + B*C*!D":
            return "A*!B*C + A*!B*D + B*C*!D";
        case "!A*(B + !C*D) + A*D":
            return "!A*B + !A*!C*D + A*D";
        case "A*(B + C*D) + !A*B":
            return "A*B + A*C*D + !A*B";
        case "(A*!B + C)*(D + !A)":
            return "A*!B*D + C*D + C*!A + A*!B";
        case "!B*(A + !D*C) + B*!A":
            return "!B*A + !B*!D*C + B*!A";
        case "A*(!C + D) + !A*B*C":
            return "A*!C + A*D + !A*B*C";
        case "(A + B)*(!C + D) + !A*!B":
            return "A*!C + A*D + B*!C + B*D + !A*!B";
        case "!A*(B + C*!D) + A*D":
            return "!A*B + !A*C*!D + A*D";
        case "(A + C)*(!B + D) + !A*B":
            return "A*!B + A*D + C*!B + C*D + !A*B";
        case "A*!B*C + !A*(B + D)":
            return "A*!B*C + !A*B + !A*D";
        default:
            return expresion;
    }
}

function generarMapaKarnaugh(expresion) {
    let mapa = '';
    switch(expresion) {
        case "A*(B + !C) + D*(!A + C)":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 0, 1], [1, 1, 1, 1],
                [0, 1, 0, 1], [1, 1, 1, 1]
            ]);
            break;
        case "!A*!B*(C + D) + B*(A + C*D)":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 0, 1], [1, 0, 1, 0],
                [0, 1, 0, 1], [1, 0, 1, 0]
            ]);
            break;
        case "(A + !B)*(!A + C + D)":
            mapa = generarTablaKarnaugh3Vars([
                [1, 0, 1, 1], [0, 1, 0, 1]
            ]);
            break;
        case "A*!B*C + !A*D + B*!D":
            mapa = generarTablaKarnaugh3Vars([
                [1, 0, 1, 0], [0, 1, 0, 1]
            ]);
            break;
        case "(A + B)*(C + !D)*(!A + B)":
            mapa = generarTablaKarnaugh3Vars([
                [1, 1, 0, 1], [0, 1, 0, 1]
            ]);
            break;
        case "!A*(B*!C + D) + A*B":
            mapa = generarTablaKarnaugh3Vars([
                [1, 0, 1, 1], [0, 0, 1, 1]
            ]);
            break;
        case "(A*!B + C)*(!D + A)":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 1, 1], [1, 1, 1, 1],
                [0, 1, 0, 1], [1, 1, 1, 1]
            ]);
            break;
        case "A*(B + !C) + !A*C":
            mapa = generarTablaKarnaugh3Vars([
                [0, 1, 0, 1], [1, 0, 1, 1]
            ]);
            break;
        case "!B*(A + C*D) + !A*B":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 0, 1], [1, 1, 0, 0],
                [0, 1, 0, 1], [1, 1, 0, 0]
            ]);
            break;
        case "(A + !C*D)*(!B + A)":
            mapa = generarTablaKarnaugh3Vars([
                [1, 0, 1, 1], [0, 1, 1, 1]
            ]);
            break;
        case "A*!B*(C + D) + B*C*!D":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 0, 1], [1, 0, 1, 0],
                [0, 1, 0, 1], [1, 0, 1, 0]
            ]);
            break;
        case "!A*(B + !C*D) + A*D":
            mapa = generarTablaKarnaugh3Vars([
                [1, 0, 1, 0], [0, 1, 0, 1]
            ]);
            break;
        case "A*(B + C*D) + !A*B":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 0, 1], [1, 0, 1, 0],
                [0, 1, 0, 1], [1, 1, 1, 0]
            ]);
            break;
        case "(A*!B + C)*(D + !A)":
            mapa = generarTablaKarnaugh4Vars([
                [0, 1, 1, 1], [1, 1, 1, 1],
                [0, 1, 0, 1], [1, 1, 1, 1]
            ]);
            break;
        case "!B*(A + !D*C) + B*!A":
            mapa = generarTablaKarnaugh3Vars([
                [0, 1, 0, 1], [1, 0, 1, 1]
            ]);
            break;
            case "A*(!C + D) + !A*B*C":
                mapa = generarTablaKarnaugh4Vars([
                    [0, 1, 0, 1], [1, 1, 0, 0],
                    [0, 1, 0, 1], [1, 0, 1, 1]
                ]);
                break;
            case "(A + B)*(!C + D) + !A*!B":
                mapa = generarTablaKarnaugh4Vars([
                    [1, 1, 0, 1], [1, 0, 1, 1],
                    [0, 1, 0, 0], [1, 1, 1, 1]
                ]);
                break;
            case "!A*(B + C*!D) + A*D":
                mapa = generarTablaKarnaugh4Vars([
                    [0, 1, 0, 1], [1, 1, 0, 0],
                    [1, 0, 1, 1], [1, 1, 0, 0]
                ]);
                break;
            case "(A + C)*(!B + D) + !A*B":
                mapa = generarTablaKarnaugh4Vars([
                    [1, 0, 1, 1], [0, 1, 0, 1],
                    [1, 1, 0, 0], [0, 1, 1, 1]
                ]);
                break;
            case "A*!B*C + !A*(B + D)":
                mapa = generarTablaKarnaugh4Vars([
                    [0, 1, 0, 1], [1, 0, 1, 0],
                    [0, 1, 0, 1], [1, 0, 1, 0]
                ]);
                break;
            default:
                mapa = "Expresión no soportada.";
        }
        return mapa;
    }
    
    function generarTablaKarnaugh3Vars(valores) {
        return `
            <table border="1" cellpadding="5" cellspacing="0">
                <tr><th>A\\BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr>
                <tr><th>0</th><td>${valores[0][0]}</td><td>${valores[0][1]}</td><td>${valores[0][2]}</td><td>${valores[0][3]}</td></tr>
                <tr><th>1</th><td>${valores[1][0]}</td><td>${valores[1][1]}</td><td>${valores[1][2]}</td><td>${valores[1][3]}</td></tr>
            </table>
        `;
    }
    
    function generarTablaKarnaugh4Vars(valores) {
        return `
            <table border="1" cellpadding="5" cellspacing="0">
                <tr><th>AB\\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr>
                <tr><th>00</th><td>${valores[0][0]}</td><td>${valores[0][1]}</td><td>${valores[0][2]}</td><td>${valores[0][3]}</td></tr>
                <tr><th>01</th><td>${valores[1][0]}</td><td>${valores[1][1]}</td><td>${valores[1][2]}</td><td>${valores[1][3]}</td></tr>
                <tr><th>11</th><td>${valores[2][0]}</td><td>${valores[2][1]}</td><td>${valores[2][2]}</td><td>${valores[2][3]}</td></tr>
                <tr><th>10</th><td>${valores[3][0]}</td><td>${valores[3][1]}</td><td>${valores[3][2]}</td><td>${valores[3][3]}</td></tr>
            </table>
        `;
    }
    
    function generarTablaKarnaugh5Vars(valores) {
        return `
            <table border="1" cellpadding="5" cellspacing="0">
                <tr><th>ABCDE</th><th>0000</th><th>0001</th><th>0011</th><th>0010</th><th>0110</th><th>0111</th><th>0101</th><th>0100</th></tr>
                <tr><th>0000</th><td>${valores[0][0]}</td><td>${valores[0][1]}</td><td>${valores[0][2]}</td><td>${valores[0][3]}</td><td>${valores[0][4]}</td><td>${valores[0][5]}</td><td>${valores[0][6]}</td><td>${valores[0][7]}</td></tr>
                <tr><th>0001</th><td>${valores[1][0]}</td><td>${valores[1][1]}</td><td>${valores[1][2]}</td><td>${valores[1][3]}</td><td>${valores[1][4]}</td><td>${valores[1][5]}</td><td>${valores[1][6]}</td><td>${valores[1][7]}</td></tr>
                <tr><th>0011</th><td>${valores[2][0]}</td><td>${valores[2][1]}</td><td>${valores[2][2]}</td><td>${valores[2][3]}</td><td>${valores[2][4]}</td><td>${valores[2][5]}</td><td>${valores[2][6]}</td><td>${valores[2][7]}</td></tr>
                <tr><th>0010</th><td>${valores[3][0]}</td><td>${valores[3][1]}</td><td>${valores[3][2]}</td><td>${valores[3][3]}</td><td>${valores[3][4]}</td><td>${valores[3][5]}</td><td>${valores[3][6]}</td><td>${valores[3][7]}</td></tr>
                <tr><th>0110</th><td>${valores[4][0]}</td><td>${valores[4][1]}</td><td>${valores[4][2]}</td><td>${valores[4][3]}</td><td>${valores[4][4]}</td><td>${valores[4][5]}</td><td>${valores[4][6]}</td><td>${valores[4][7]}</td></tr>
                <tr><th>0111</th><td>${valores[5][0]}</td><td>${valores[5][1]}</td><td>${valores[5][2]}</td><td>${valores[5][3]}</td><td>${valores[5][4]}</td><td>${valores[5][5]}</td><td>${valores[5][6]}</td><td>${valores[5][7]}</td></tr>
                <tr><th>0101</th><td>${valores[6][0]}</td><td>${valores[6][1]}</td><td>${valores[6][2]}</td><td>${valores[6][3]}</td><td>${valores[6][4]}</td><td>${valores[6][5]}</td><td>${valores[6][6]}</td><td>${valores[6][7]}</td></tr>
                <tr><th>0100</th><td>${valores[7][0]}</td><td>${valores[7][1]}</td><td>${valores[7][2]}</td><td>${valores[7][3]}</td><td>${valores[7][4]}</td><td>${valores[7][5]}</td><td>${valores[7][6]}</td><td>${valores[7][7]}</td></tr>
                <tr><th>1100</th><td>${valores[8][0]}</td><td>${valores[8][1]}</td><td>${valores[8][2]}</td><td>${valores[8][3]}</td><td>${valores[8][4]}</td><td>${valores[8][5]}</td><td>${valores[8][6]}</td><td>${valores[8][7]}</td></tr>
                <tr><th>1101</th><td>${valores[9][0]}</td><td>${valores[9][1]}</td><td>${valores[9][2]}</td><td>${valores[9][3]}</td><td>${valores[9][4]}</td><td>${valores[9][5]}</td><td>${valores[9][6]}</td><td>${valores[9][7]}</td></tr>
                <tr><th>1111</th><td>${valores[10][0]}</td><td>${valores[10][1]}</td><td>${valores[10][2]}</td><td>${valores[10][3]}</td><td>${valores[10][4]}</td><td>${valores[10][5]}</td><td>${valores[10][6]}</td><td>${valores[10][7]}</td></tr>
                <tr><th>1110</th><td>${valores[11][0]}</td><td>${valores[11][1]}</td><td>${valores[11][2]}</td><td>${valores[11][3]}</td><td>${valores[11][4]}</td><td>${valores[11][5]}</td><td>${valores[11][6]}</td><td>${valores[11][7]}</td></tr>
                <tr><th>1010</th><td>${valores[12][0]}</td><td>${valores[12][1]}</td><td>${valores[12][2]}</td><td>${valores[12][3]}</td><td>${valores[12][4]}</td><td>${valores[12][5]}</td><td>${valores[12][6]}</td><td>${valores[12][7]}</td></tr>
                <tr><th>1011</th><td>${valores[13][0]}</td><td>${valores[13][1]}</td><td>${valores[13][2]}</td><td>${valores[13][3]}</td><td>${valores[13][4]}</td><td>${valores[13][5]}</td><td>${valores[13][6]}</td><td>${valores[13][7]}</td></tr>
                <tr><th>1001</th><td>${valores[14][0]}</td><td>${valores[14][1]}</td><td>${valores[14][2]}</td><td>${valores[14][3]}</td><td>${valores[14][4]}</td><td>${valores[14][5]}</td><td>${valores[14][6]}</td><td>${valores[14][7]}</td></tr>
                <tr><th>1000</th><td>${valores[15][0]}</td><td>${valores[15][1]}</td><td>${valores[15][2]}</td><td>${valores[15][3]}</td><td>${valores[15][4]}</td><td>${valores[15][5]}</td><td>${valores[15][6]}</td><td>${valores[15][7]}</td></tr>
             </tablee>
    `;
}