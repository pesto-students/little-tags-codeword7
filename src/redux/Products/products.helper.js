import { firestore } from '../../config/Firebase/util';

export const handleFetchProducts = ({ filterType }) => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('products');
        console.log("In Fikter Type", filterType);
        if (filterType) {

            ref = ref.where('category', '==', filterType)
        };

        ref
            .get()
            .then(snapshot => {
                const data = [...snapshot.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                })]
                resolve(data);
            })
            .catch((error) => {
                console.log(error);
            })
    })
}