export var SignInData = [];

export const SignIn = (formData) => {

    return new Promise((resolve, reject) => {

        fetch("https://remap.id/v1beta/signin", {

            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                longitude: formData.longitude,
                latitude: formData.latitude,
                deviceBrand: formData.device_brand,
                deviceType: formData.device_type,
                osVersion: formData.os_version,
                deviceId: formData.deviceId
            })
        })
            .then((response) => response.json())
            .then(responseData => {

                if (responseData.status == true) {
                    SignInData = responseData.data;
                    resolve(true);
                }
                else {
                    resolve(false);
                }

            })
            .catch((error) => {
                reject(error);
            })
            .done();

    });

}
