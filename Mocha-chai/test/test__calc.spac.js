import assert from 'assert'
import chai from 'chai'

const esperoque = chai.expect 
import Calculadora from '../src/Caculadora.js'

describe('Teste de soma',() => {
    
    it('deve somar 9 e 3 resultando em 12',() => {
        let resultado = Calculadora.soma(9,3)
       esperoque (resultado).to.be.eq(12) 
     
    })

    it('deve somar -8 e  3 resultando em 5',() => {
        let resultado = Calculadora.soma(-8,3)
       esperoque (resultado).to.be.eq(-5) 
     
    })
})
describe('Teste de subitração',() => {
    
    it('deve subitrair 6 e 3 resultando em 3',() => {
        let resultado = Calculadora.subitração(6,3)
       esperoque (resultado).to.be.eq(3) 
    })
       it('deve subitrair -5 e 2 resultando em -7',() => {
        let resultado = Calculadora.subitração(-5,2)
       esperoque (resultado).to.be.eq(-7) 
     
    })

   
    
    
})