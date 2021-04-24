import { firestore } from '../../Config/Firebase/util';

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
    console.log("Uid", uid);
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('orders').orderBy('orderCreatedDate');
        ref = ref.where('orderUserId', '==', uid.id);

        ref
            .get()
            .then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        console.log("Doc", doc);
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];
                console.log(data);
                resolve({ data });
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleGetOrder = orderID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('orders')
            .doc(orderID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: orderID
                    })
                }
            }).catch(error => reject(error));
    })
}