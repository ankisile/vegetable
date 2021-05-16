<<<<<<< HEAD
//포인트 상점이 리덕스를 굳이 사용해야 하는지 아직은 모르겠음. props로 가져와야 하는게 있으면 가져오지뭐
// import { GOODS_CHANGE } from '../constants/index'
// import firebase from 'firebase'
// require('firebase/firestore')

// export function fetchGoods(brand) {
//     return ((dispatch) => {
//         firebase.firestore()
//             .collection("pointMarket")
//             .doc(brand)
//             .then((snapshot) => {
//                 if(snapshot.exists) {
//                     let goods = snapshot.data();

//                     dispatch({ type : GOODS_CHANGE, goods })
//                 }
//             })
//     })
// }
=======
import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, USERS_DATA_STATE_CHANGE,USERS_POSTS_STATE_CHANGE, USERS_LIKES_STATE_CHANGE, CLEAR_DATA} from '../constants/index'

import firebase from 'firebase'
require('firebase/firestore')


export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('does not exist')
                }
            })
    })
}
>>>>>>> bd37fad47b30de489c7762c7d4a6d4eefbc61b59
