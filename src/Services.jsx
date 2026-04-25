export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Sesuaikan dengan teks di foto
    const street = "Jl Kebon Jeruk";
    const city = "Jakarta";
    
    return users.map((user, index) => {
      // Baris pertama ada info tambahan sesuai materi Rest Parameter
      if (index === 0) {
        return {
          name: user.name,
          email: user.email,
          street,
          city,
          age: 25,
          job: "Web Developer"
        };
      }
      
      return {
        name: user.name,
        email: user.email,
        street,
        city,
      };
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};