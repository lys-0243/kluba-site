export const generateOtp = () => { 
    let generatedOtp = ''; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 

    for (let i = 0; i < 6; i++) { 
        generatedOtp += characters 
            .charAt(Math 
                .floor(Math.random() * characters.length)); 
    } 

    return generatedOtp;

};