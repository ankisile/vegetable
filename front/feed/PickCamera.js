<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as ImagePicker from 'expo-image-picker';
=======
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
 

export default function PickCamera({ navigation }) { 
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
<<<<<<< HEAD
}
//   useEffect(() => {
//     (async () => {
//       const cameraStatus = await Camera.requestPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === 'granted');

//       const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
//       setHasGalleryPermission(galleryStatus.status === 'granted');


//     })();
//   }, []);

//   const takePicture = async () => {
//     if (camera) {
//       const data = await camera.takePictureAsync(null);
//       setImage(data.uri);
//     }
//   }

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });
//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };


//   if (hasCameraPermission === null || hasGalleryPermission === false) {
//     return <View />;
//   }
//   if (hasCameraPermission === false || hasGalleryPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>
//           Camera
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cameraContainer: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   fixedRatio: {
//     flex: 1,
//     aspectRatio: 1
//   }

// })
=======

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');


    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>
          Camera
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  }

})
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
