class Customer{
    constructor (nome, telefone, email, dataNascimento, cidade, phone, cpf ){
          this.nome = nome
          this.telefone = telefone
          this.email = email
          this.dataNascimento = getAge()
          this.cidade = cidade
          this.phone= phone
          this.cpf= cpf
          
    }
}

class ListCustomer{
    constructor()
     customers=[]

     addCustumer(){
        this.customers.push(Customer)
    }
    
}







