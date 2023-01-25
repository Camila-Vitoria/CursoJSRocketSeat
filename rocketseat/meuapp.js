const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecida?',
    'O que poderia fazer para melhorar',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]
const ask = (index = 0) =>{
    process.stdout.write('\n\n' + questions[index]+'>')
}
ask()
const answers=[]
process.stdin.on("data", data=>{
    //process.stdout.write
    answers.push(data.toString().trim()+ '\n')
    if(answers.length<questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
   
})
process.on( 'exit',()=>{
    console.log(`Legal, sua anta!
O que você aprendeu hoje foi: ${answers[0]}

O que te aborreceu hohe foi: ${answers[1]}

que poderia fazer para melhorar: ${answers[2]}

o que te deixou feliz hoje foi: ${answers[3]}

Você ajudou ${answers[4]} pessoas hoje!!

Volte amanhã para mais reflexões`
    )
})