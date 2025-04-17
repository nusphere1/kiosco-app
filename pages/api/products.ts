import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const { name, stock, price } = req.body;
    const product = await prisma.product.create({ data: { name, stock, price } });
    return res.status(201).json(product);
  }

  res.status(405).end();
}