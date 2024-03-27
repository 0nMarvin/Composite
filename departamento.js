class departamento extends Component{
    constructor(salarioTotal, filiados){
        super();
        this.salarioTotal = salarioTotal;
        this.filiados = [];
    }

    salario() {
        this.salarioTotal = this.salarioTotal; 
        this.filiados.forEach(filial => {
            this.salarioTotal += filial.salario();
        });
    
        return this.salarioTotal;
    }
    
    contratar(funcionario){
        this.filiados.push(funcionario)
    }

    demitir(funcionario){
        const index = this.filiados.indexOf(funcionario)
        if(index !== -1){
            this.filiados.splice(index, 1)
        }
    }


}