import { Request, Response } from 'express';
import knex from '../database/connection';

export default function ItemsController() {
  async function index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        ...item,
        image_url: `http://localhost:3001/uploads/${item.image}`,
      };
    });

    return res.json({ serializedItems });
  }

  return {
    index,
  };
}
