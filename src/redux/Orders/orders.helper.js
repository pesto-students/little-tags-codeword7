import { firestore } from '../../config/Firebase/util';

export const handleSaveOrder = (order) => {
    console.log("In Save Order", order);
    return new Promise((resolve, reject) => {
        firestore
            .collection('orders')
            .doc()
            .set(order)
            .then(() =>
                resolve())
            .catch(err => {
                reject(err);
            })
    })
}

export const handleGetOrderHistory = uid => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('orders').orderBy('orderCreatedDate');
        ref = ref.where('orderUserId', '==', uid);

        ref
            .get()
            .then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];

                resolve({ data });
            })
            .catch(err => {
                reject(err);
            })
    })
}