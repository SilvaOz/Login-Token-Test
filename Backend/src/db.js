import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://oskur:OIVp6MVF8qX2qiFZ@cluster0.4pwrcqp.mongodb.net/authtoken?retryWrites=true&w=majority');
    console.log('>>> DB is connected')
  } catch (error) {
    console.log(error);
  }
};
