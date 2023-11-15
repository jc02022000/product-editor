export default async (email, password) => {
  const { data, error } = await useFetch(
    "http://127.0.0.1:3333/auth/register",
    {
      method: "POST",
      body: {
        first_name: "Jecelito",
        middle_name: "Valencia",
        last_name: "Batac",
        username: "jclito",
        email: "jecelito.batac@cambridge.org",
        password: "123456",
      },
    }
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "cannot register user",
    });
  }

  return data;
};
