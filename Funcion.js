let lastEvaluatedResult = ''; // Variable para almacenar el último resultado evaluado

function simplifyBooleanExpression(expr) {
    let simplified = expr;
    let method = '';
    let appliedMethods = [];

    function applyRules(expr) {
        let modified = false;

        const rules = [
            { pattern: /(\w) \+ \1/, replacement: '$1', method: 'Idempotencia' },
            { pattern: /(\w) \* \1/, replacement: '$1', method: 'Idempotencia' },
            { pattern: /(\w) \* 1/, replacement: '$1', method: 'Identidad' },
            { pattern: /(\w) \* 0/, replacement: '0', method: 'Anulación' },
            { pattern: /(\w) \+ 0/, replacement: '$1', method: 'Identidad' },
            { pattern: /(\w) \+ 1/, replacement: '1', method: 'Dominación' },
            { pattern: /(\w) \* !\1/, replacement: '0', method: 'Dominación' },
            { pattern: /\((\w) \+ (\w)\) \+ (\w)/, replacement: '$1 + ($2 + $3)', method: 'Asociativa' },
            { pattern: /(\w) \* \((\w) \+ (\w)\)/, replacement: '$1$2 + $1$3', method: 'Distributiva' },
            { pattern: /(\w) \+ \((\w) \* (\w)\)/, replacement: '$1 + $2 * $1 + $3', method: 'Distributiva' },
            { pattern: /(\w) \+ !\1/, replacement: '1', method: 'Suma de  1 + 0 = 1' },
            { pattern: /(\w) \+ \((\w) \* \1\)/, replacement: '$1', method: 'Absorción' },
            { pattern: /(\w) \* \((\w) + \1\)/, replacement: '$1', method: 'Absorción' }
        ];

        for (const rule of rules) {
            if (rule.pattern.test(expr)) {
                expr = expr.replace(rule.pattern, rule.replacement);
                appliedMethods.push(rule.method);
                modified = true;
                break; // Solo aplicar una regla por iteración
            }
        }

        return { expr, modified };
    }

    let result;
    do {
        result = applyRules(simplified);
        simplified = result.expr;
    } while (result.modified);

    method = appliedMethods.length > 0 ? appliedMethods.join(', ') : 'Ninguno';

    return { expression: simplified, method: method };
}

function calculate() {
    const input = lastEvaluatedResult; // Usar el último resultado evaluado
    const { expression, method } = simplifyBooleanExpression(input);
    
    if (expression === input) {
        document.getElementById('result').innerText = 'NO SE PUEDE SIMPLIFICAR MAS: ' + expression;
    } else {
        document.getElementById('result').innerText = 'Resultado: ' + expression;
    }
    document.getElementById('explanation').innerText = 'Métodos aplicados: ' + method;
}

function storeLastResult(result) {
    lastEvaluatedResult = result;
}