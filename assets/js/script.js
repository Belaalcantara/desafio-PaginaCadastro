class User {
    constructor(name, email, birthdate, address, phone, cpf) {
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.address = address
        this.phone = phone
        this.cpf = cpf
        this.age = getAge()

    }
    getAge() {
            const today = new Date();
            const birthDate = new Date(this.age);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            return age;

    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

function createUser() {

    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userBirthdade = document.getElementById("birthdate").value;
    let userAdress = document.getElementById("birthdate").value;
    let userPhone = document.getElementById("phone").value;
    let userCPF = document.getElementById("cpf").value;

    const user = new user(userName, userEmail, userBirthdade, userAdress, userPhone, userCPF);
    ListUser.add(user)

    console.log(userName);
    console.log(userBirthdade);
    console.log(userAdress);
    console.log(userPhone);
    console.log(userPhone);
    console.log(userCPF);


}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function isUserAlreadyRegistered(cpf) {
    const users = ListUser.getAllUsers();

    users.forEach(user => {
        if (user.cpf == cpf) {
            return true;
        } else {
            return false;
        }
    });
}



function sendsuccessMsg(msg) {
    function sendErrorMsg(msg) {
        console.log("Passou pela funcao sendErrorMsg()");

        document.getElementById("success-msg").innerHTML = msg;
        document.getElementById("success-msg").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("success-msg").classList.add("hidden");
        }, 4000);
    }
}


function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}


function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}



function isAnyInputEmpty() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let birthdade = document.getElementById("birthdate").value
    let adress = document.getElementById("birthdate ").value
    let phone = document.getElementById("phone").value
    let CPF = document.getElementById("cpf").value

    if (name == "" && email == "" && birthdade == "" && adress == "" && phone == "" && CPF == " ") {
        document.getElementById("success-msg") == "erro ao enviar a msg"
    } else {
        document.getElementById("error-msg") == "parabens, cadastrado com sucesso"
    }

}

    function showUsers() {
        document.getElementById("title-page").classList.add("hidden")
        document.getElementById("main-div").classList.remove("hidden")
        document.getElementById("sub-div").classList.remove("hidden")

        let html = "";

        ListUser.user.forEach((user) => {
            html += `
        <div>
        <p><b>Nome:<b>${user.name}</p>
        <p><b>Email:<b>${user.email}</p>
        <p><b>data de nascimento:<b>${user.birthdate}</p>
        <p><b>idade:<b>${user.age}</p>
        <p><b>phone:<b>${formatedCellphone(user.phone)}</p>
        <p><b>enderesso:<b>${formatedCPF(user.address)}</p>
        <p><b>CPF:<b>${user.cpf}</p>
        </div>`
        })
    }
    function showRegister() {
        document.getElementById("sub-div").classList.add("hidden");
        document.getElementById("title-page").classList.remove("hidden");
        document.getElementById("main-div").classList.remove("hidden");
        console.log("Passou pela funcao showRegister()");

    }

    function renderContent() {
        document.getElementById("sub-div").classList.remove("hidden");
        document.getElementById("title-page").classList.add("hidden");
        document.getElementById("main-div").classList.add("hidden");
        console.log("Passou pela funcao showRegister()");

    }



    class ListUser {
        constructor() {
            this.users = []
        }
        add(user) {
            if (isAnyInputEmpty()) {
                sendErrorMsg("preencha todos os caampos")
            } else if (!valida_cpf(user.cpf)) {
                sendErrorMsg("preencha todos os caampos")
            } else if (isUserAlreadyRegistered(user.cpf)) {
                sendErrorMsg("esse cpf ja esta cadastrado")
            } else {
                clearInputs();
                showUsers();
                ListUser
                sendsuccessMsg("parabens voce foi cadastrado")
            }
        }

        getAllUsers() {
            return this.users;
        }
    }
    const listUser = new ListUser()

    function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = ""
        document.getElementById("birthdate").value = ""
        document.getElementById("birthdate").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("cpf").value = ""
    }
