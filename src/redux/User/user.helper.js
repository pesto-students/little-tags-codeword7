import { firestore } from "../../Config/Firebase/util";
// import admin from 'firebase-admin';

export const addUserAddress = (addressDetails, userAuth) => {
    console.log(addressDetails);
    console.log(userAuth);

    const { uid } = userAuth;
    return new Promise((resolve, reject) => {
        const userRef = firestore.doc(`users/${uid}`);
        userRef.get().then(snapshot => {
            let userAddressArray = snapshot.data().userAddress;
            userAddressArray.push(addressDetails);
            console.log(userAddressArray);
            return {
                ...snapshot.data(),
                userAddress: userAddressArray
            }
        })
            .then((updateDoc) => {
                console.log(updateDoc);
                userRef.set(updateDoc);
                resolve(updateDoc);
            })
            .catch(err => {
                reject(err);
            })
        // const snapshot = await userRef.get();
        // console.log(snapshot.data());
        // return userRef.update({
        //     userAddress: admin.firestore.FieldValue.arrayUnion(addressDetails)
        // });
        // console.log(arrUnion);
    })
}