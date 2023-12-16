import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
    return await TransactionSchema.create(data);
}

async function findAllByUser(id) {
    return await TransactionSchema.find({userId: id});
}

async function remove(userId,id) {
    const transaction = await TransactionSchema.findOne({userId, _id: id});

    if (!transaction) {
        throw new Error("Transaction not found");
    }

    return await transaction.deleteOne()
}

async function update(userId,id, body) {
    const transaction = await TransactionSchema.findOne({userId, _id: id});

    if (!transaction) {
        throw new Error("Transaction not found");
    }

    await transaction.updateOne({
        value: body.value || transaction.value,
        description: body.description || transaction.description,
        type: body.type || transaction.type,
    },);

    const updatedTransaction = await TransactionSchema.findOne({userId, _id: id});
    
    return updatedTransaction;
}

export default { create, findAllByUser, remove, update };