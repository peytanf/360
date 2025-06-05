import type { NextRequest } from 'next/server';

import { logger } from 'src/utils/logger';
import { STATUS, response, handleError } from 'src/utils/response';

import { _products } from 'src/_mock/_product';

// ----------------------------------------------------------------------

export const runtime = 'edge';

/** **************************************
 * GET - Search Products
 *************************************** */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const query = searchParams.get('query') || '';

    const products = _products();

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    logger('[Products] search', { query, results: filteredProducts.length });

    return response({ products: filteredProducts }, STATUS.OK);
  } catch (error) {
    return handleError('Products - Search', error);
  }
} 