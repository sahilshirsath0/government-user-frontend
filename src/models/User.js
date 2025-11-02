import bcrypt from 'bcryptjs';

export class User {
  constructor(data) {
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.role = data.role || 'admin';
    this.isActive = data.isActive !== undefined ? data.isActive : true;
    this.createdAt = new Date();
    this.lastLogin = null;
  }

  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  }

  async comparePassword(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  }

  toJSON() {
    const { password, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}
