export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([ coords.longitude, coords.latitude ])
            },
            ( err ) => {
                alert('No se pudo obtener la geolocaliación');
                console.log(err);
                reject();
            }
        )
    });
}