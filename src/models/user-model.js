import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
  nome: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  tipo: {
    type: String,
    enum: ["ADM", "USU"],
    required: true,
    default: "USU",
  },
});

<<<<<<< HEAD
=======
// não precisa do next nas versões mais novas do mongoose
//é um middleware no Mongoose executa algo antes de alguma ação, nesse caso executa antes do save, e executa a criptografia da senha
>>>>>>> 5acc7dc84c7caf4490c6f0a7172e699214c33ee9
userSchema.pre("save", async function () {

  this.password = await bcrypt.hash(this.password, 10);
});

<<<<<<< HEAD
=======
// Define um método para a classe
//no mongoose permite adicionar métodos personalizados, nesse caso, é estou criando e usando função senhaCorreta no userSchema
>>>>>>> 5acc7dc84c7caf4490c6f0a7172e699214c33ee9
userSchema.methods.senhaCorreta = async function (senha) {
  return await bcrypt.compare(senha, this.password);
};

const User = db.model("User", userSchema);

export default User;