import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;
