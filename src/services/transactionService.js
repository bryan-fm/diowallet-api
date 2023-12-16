import transactionRepository from "../repositories/transactionRepository.js";


async function create(body, id) {
    if (!id) {
        throw new Error("User id is required");
    }

    return await transactionRepository.create({...body, userId: id});

}

async function findAllByUser(id) {
    return await transactionRepository.findAllByUser(id);
}

async function remove(userId, id) {

    if (!id) {
        throw new Error("Transaction id is required");
    }

    return await transactionRepository.remove(userId, id);
    
}

async function update(userId, id, body) {

    if (!id) {
        throw new Error("Transaction id is required");
    }

    return await transactionRepository.update(userId, id, body);
    
}

export default {create, findAllByUser, remove, update}