function main1() {
    var user;
    var password;
    var cPF;
    var recorrente;

    recorrente = true;
    do {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        window.alert("Digite seu CPF");
        cPF = Number(window.prompt('Enter a value for cPF'));
        if (user == "Andrey") {
            if (password == "dreydrey") {
                if (cPF == "123") {
                    window.alert("Você será redirecionado ao seu perfil.");
                    recorrente = false;
                } else {
                    window.alert("Usuário ou senha inválido");
                }
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("Usuário ou senha inválido.");
        }
    } while (recorrente == true);
}

function main2() {
    var user;
    var password;
    var cPF;
    var recorrente;
    
    recorrente = true;
    do {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        window.alert("Digite seu CPF");
        cPF = Number(window.prompt('Enter a value for cPF'));
        if (user == "Andrey") {
            if (password == "dreydrey") {
                if (cPF == "123") {
                    window.alert("Você será redirecionado ao seu perfil.");
                    recorrente = false;
                } else {
                    window.alert("Usuário ou senha inválido");
                }
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("Usuário ou senha inválido.");
        }
    } while (recorrente == true);
}

