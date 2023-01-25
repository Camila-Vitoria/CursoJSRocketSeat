function getFlag(SeiLáMane){
   const index= process.argv.indexOf(SeiLáMane)+1
    return process.argv[index]
   }
modulo.exports= getFlag;
