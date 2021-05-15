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