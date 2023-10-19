import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../config/db';
import { Client } from './Client';

interface ContratAttributes {
    id: number;
    name: string;
    amount: number;
    date: Date;
    clientID: number;
}

interface ContratCreationAttributes extends Optional<ContratAttributes, 'id'> {}

interface ContratInstance
    extends Model<ContratAttributes, ContratCreationAttributes>,
        ContratAttributes {}

const Contrat = sequelize.define<ContratInstance>('contrats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    date: DataTypes.DATE,
    clientID: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id',
        },
    },
}, {
    tableName: 'Contrat',
    timestamps: false,
});

export { Contrat };
