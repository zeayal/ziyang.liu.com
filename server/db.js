import mongoose from "mongoose"
const {DB_Url, DB_Name } = process.env;
mongoose.connect(`${DB_Url}/${DB_Name}`).then(() => console.log('DB Connected!'))


export default mongoose;