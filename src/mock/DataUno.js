//**************base de datos***************** */

const alimentos = [
  {
    id: "01",
    name: "Arroz",
    description: "Arroz",
    calorias: "10",
    img: "https://i.postimg.cc/13hzL0vn/arroz.jpg",
  },
  {
    id: "02",
    name: "Pollo",
    description: "Pollo",
    calorias: "20",
    img: "https://via.placeholder.com/150/771796",
  },
  {
    id: "03",
    name: "Banana",
    description: "Banana",
    calorias: "30",
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    id: "04",
    name: "Avena",
    description: "Avena",
    calorias: "40",
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    id: "05",
    name: "Huevo",
    description: "Huevo",
    calorias: "50",
    img: "https://via.placeholder.com/150/f66b97",
  },
];

//***************PROMESA******** */

 export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(alimentos);
    } else {
      reject("No funciona");
    }
  }, 3000);
});
