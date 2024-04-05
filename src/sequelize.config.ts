import { Dialect } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';


export const config: SequelizeOptions = {
  dialect: 'mysql' as Dialect, // Replace with your dialect if needed
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [__dirname + 'C:/Users/tanya/Onedrive/Documents/javascript_practice/IIT/api/src/user/user.model.ts'], // Path to model files
  define: {
    timestamps: false, // Disable automatic timestamps if needed
  },
  logging: false, // Set to true for development logging
};

export default config;
