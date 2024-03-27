class funcionario extends component{
    constructor(salarioTotal){
        super();
        this.salarioTotal = salarioTotal;
    }

    salario(){
        return this.salarioTotal;
    }

}