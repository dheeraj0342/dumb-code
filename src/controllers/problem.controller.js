const {StatusCodes} = require('http-status-codes')

function pingProblemController(req,res){
    return res.status(StatusCodes.OK).json({
        message: 'Pong'
    })
}

function addProblem(req,res){
    

}

function getProblems(req,res){

}

function getProblem(req,res){

}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}


module.exports = {
    addProblem,
    getProblems,
    getProblem,
    updateProblem,
    deleteProblem,
    pingProblemController
}