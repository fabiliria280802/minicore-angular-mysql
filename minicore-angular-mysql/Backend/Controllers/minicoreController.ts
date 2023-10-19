import { Request, Response } from "express";
import { Client } from "../Models/Client";
import { Contrat } from "../Models/Contrat";

const getAllClients = async (req: Request, res: Response) => {
    await Client.findAll({ raw: true }).then((clients: any) => {
        return res.status(200).json({
            ok: true,
            clients,
        });
    });
};

const getAllContrats = async (req: Request, res: Response) => {
    await Contrat.findAll({ raw: true }).then((contrats: any) => {
        return res.status(200).json({
            ok: true,
            contrats,
        });
    });
};

const getReport = async (req: Request, res: Response) => {
    const endDate = new Date(req.body.fecha2);
    const beginDate = new Date(req.body.fecha1);

    const report: { name: string; amount: number }[] = [];
    const clientsLista: any[] = await Client.findAll({ raw: true }).then();
    const contratsLista: any[] = (await Contrat.findAll({ raw: true }).then()).filter(
        (contrat: any) => {
            const fecha = new Date(contrat.date);
            return beginDate.valueOf() <= fecha.valueOf() && endDate.valueOf() >= fecha.valueOf();
        }
    );

    clientsLista.forEach((client: any) => {
        let amountTotal = 0;

        contratsLista.forEach((contrat: any) => {
            if (contrat.clientID === client.id) {
                amountTotal = amountTotal + contrat.amount;
            }
        });
        report.push({ name: client.name, amount: amountTotal });
    });

    return res.status(200).json({
        ok: true,
        report,
    });
};

export { getAllClients, getAllContrats, getReport };
