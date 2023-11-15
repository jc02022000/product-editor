export default async (email, password) =>{
    const {data, error} = await useFetch('http://127.0.0.1:3333/auth/login', {
        method: 'POST',
        body: {
          email: email,
          password: password,
        }
    });

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: 'cannot login account',
        });
    }

    return data;
}