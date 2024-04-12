class Alunos {
    constructor (nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Alunos ("Bruno", 10);
const aluno2 = new Alunos ("Paula", 7);
const aluno3 = new Alunos ("Léo", 5);
const aluno4= new Alunos ("Marcos", 3);

var todosAlunos = [aluno1,aluno2,aluno3,aluno4]

const alunosAprovados = todosAlunos.filter(function(item) {
    return item.nota >= 6
})

console.log(alunosAprovados)
