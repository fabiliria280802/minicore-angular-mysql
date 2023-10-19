import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

interface ClientAttributes {
    id: number;
    nombre: string;
}

interface ClientInstance extends Model<ClientAttributes>, ClientAttributes {}

const Client = sequelize.define<ClientInstance>('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: DataTypes.STRING,
}, {
    tableName: 'Client',
    timestamps: false,
});

export { Client };
