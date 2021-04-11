const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 0', () => {
    console.log("Executando Tarefa 1!", new Date().getSeconds())
})

//console.log(tarefa1)

setTimeout(function() {
    tarefa1.cancel()
    console.log("Cancelando tarefa 1!")
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})




