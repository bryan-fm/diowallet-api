import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
    return await TransactionSchema.create(data);
}

export default { create };